// API Route untuk tracking paket dengan sistem rotasi API key
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { apiKeyManager } from '@/lib/apiKeyManager';
import { BINDERBYTE_BASE_URL, ENDPOINTS, MAX_RETRY_ATTEMPTS } from '@/lib/config';
import type { TrackingRequest, TrackingResponse } from '@/lib/types';

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const body: TrackingRequest = await request.json();
        const { courier, awb } = body;

        // Validasi input
        if (!courier || !awb) {
            return NextResponse.json(
                {
                    status: 400,
                    error: 'Parameter courier dan awb harus diisi',
                } as TrackingResponse,
                { status: 400 }
            );
        }

        // Coba tracking dengan retry mechanism
        let lastError: Error | null = null;
        let attempts = 0;

        while (attempts < MAX_RETRY_ATTEMPTS && apiKeyManager.hasAvailableKeys()) {
            attempts++;

            // Dapatkan API key secara random untuk load balancing
            const apiKey = apiKeyManager.getRandomKey();

            // Build URL untuk tracking
            const url = `${BINDERBYTE_BASE_URL}${ENDPOINTS.TRACK}?api_key=${apiKey}&courier=${courier}&awb=${awb}`;

            console.log(`Attempt ${attempts}: Tracking paket ${awb} via ${courier}...`);

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                // Jika response OK, parse dan return data
                if (response.ok) {
                    const data = await response.json();

                    // Save to Supabase Tracking History (Fire and Forget)
                    supabase.from('tracking_history').insert([{ courier, awb }]).then(({ error }) => {
                        if (error) console.error('Error saving tracking history:', error);
                    });

                    // Return success response
                    const result: TrackingResponse = {
                        status: 200,
                        message: 'Berhasil tracking paket',
                        data: data.data,
                    };

                    console.log(`✅ Tracking berhasil untuk ${awb}`);
                    return NextResponse.json(result);
                }

                // Jika rate limit atau error lain, tandai key sebagai failed
                if (response.status === 429 || response.status === 403) {
                    console.log(`⚠️ Rate limit terdeteksi, mencoba API key lain...`);
                    apiKeyManager.markKeyAsFailed(apiKey);
                    continue;
                }

                // Jika error 4xx selain rate limit, kembalikan error
                if (response.status >= 400 && response.status < 500) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Data tracking tidak ditemukan');
                }

                // Jika 5xx, retry dengan key lain
                throw new Error(`API Error: ${response.status}`);

            } catch (error) {
                lastError = error as Error;
                console.error(`Attempt ${attempts} gagal:`, error);

                // Jika masih ada attempts tersisa, coba lagi
                if (attempts < MAX_RETRY_ATTEMPTS) {
                    continue;
                }
            }
        }

        // Jika semua attempts gagal
        throw lastError || new Error('Gagal tracking paket setelah beberapa percobaan');

    } catch (error) {
        console.error('Error tracking package:', error);

        // Return error response
        const errorResponse: TrackingResponse = {
            status: 500,
            message: 'Gagal tracking paket',
            error: error instanceof Error ? error.message : 'Unknown error',
        };

        return NextResponse.json(errorResponse, { status: 500 });
    }
}

// Handler untuk GET request (opsional, untuk testing)
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const courier = searchParams.get('courier');
    const awb = searchParams.get('awb');

    if (!courier || !awb) {
        return NextResponse.json(
            {
                status: 400,
                error: 'Parameter courier dan awb harus diisi',
            } as TrackingResponse,
            { status: 400 }
        );
    }

    // Convert ke POST request
    return POST(
        new NextRequest(request.url, {
            method: 'POST',
            body: JSON.stringify({ courier, awb }),
        })
    );
}
