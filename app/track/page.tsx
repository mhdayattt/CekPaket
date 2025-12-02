// Halaman khusus tracking - REDESIGNED
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrackingForm from '@/components/TrackingForm';
import TrackingResult from '@/components/TrackingResult';
import type { TrackingData } from '@/lib/types';

function TrackContent() {
    const searchParams = useSearchParams();
    const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Auto-track from URL params
    useEffect(() => {
        const courier = searchParams.get('courier');
        const awb = searchParams.get('awb');

        if (courier && awb) {
            handleTrack(courier, awb);
        }
    }, [searchParams]);


    const handleTrack = async (courier: string, awb: string) => {
        setIsLoading(true);
        setError('');
        setTrackingData(null);

        try {
            const response = await fetch('/api/track', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ courier, awb }),
            });

            const data = await response.json();

            if (data.status === 200 && data.data) {
                setTrackingData(data.data);
                setTimeout(() => {
                    document.getElementById('tracking-result')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            } else {
                setError(data.error || 'Gagal melacak paket. Silakan coba lagi.');
            }
        } catch (err) {
            console.error('Error tracking:', err);
            setError('Terjadi kesalahan. Silakan coba lagi.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="container-custom max-w-4xl text-center relative z-10">
                    <div className="inline-block mb-6">
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                            Tracking Paket
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                        Lacak <span className="text-gradient">Paket Anda</span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto animate-slide-in-up mb-12">
                        Masukkan nomor resi dan pilih jasa kurir untuk melacak paket Anda secara real-time
                    </p>

                    <TrackingForm onSubmit={handleTrack} isLoading={isLoading} />

                    {error && (
                        <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-xl p-4 animate-scale-in">
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-sm text-red-200 font-medium">{error}</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {trackingData && (
                <section id="tracking-result" className="py-20 bg-slate-900">
                    <div className="container-custom">
                        <TrackingResult data={trackingData} />
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
}

export default function TrackPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Loading...</div>}>
            <TrackContent />
        </Suspense>
    );
}
