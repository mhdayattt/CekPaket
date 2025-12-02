// API Route untuk mendapatkan daftar kurir yang didukung
import { NextResponse } from 'next/server';
import { apiKeyManager } from '@/lib/apiKeyManager';
import { BINDERBYTE_BASE_URL, ENDPOINTS } from '@/lib/config';
import type { Courier, CourierListResponse } from '@/lib/types';

export async function GET() {
    try {
        // Dapatkan API key secara random
        const apiKey = apiKeyManager.getRandomKey();

        // Build URL untuk list courier
        const url = `${BINDERBYTE_BASE_URL}${ENDPOINTS.LIST_COURIER}?api_key=${apiKey}`;

        console.log('Mengambil daftar kurir...');

        // Fetch data dari Binderbyte API
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const couriers: Courier[] = await response.json();

        // Return response sukses
        const result: CourierListResponse = {
            status: 200,
            data: couriers,
        };

        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching couriers:', error);

        // Return error response
        const errorResponse: CourierListResponse = {
            status: 500,
            error: error instanceof Error ? error.message : 'Gagal mengambil daftar kurir',
        };

        return NextResponse.json(errorResponse, { status: 500 });
    }
}
