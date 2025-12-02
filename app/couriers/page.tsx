// Halaman daftar semua kurir - REDESIGNED with Real Logos
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Courier } from '@/lib/types';

export default function CouriersPage() {
    const [couriers, setCouriers] = useState<Courier[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCouriers();
    }, []);

    const fetchCouriers = async () => {
        try {
            const response = await fetch('/api/couriers');
            const data = await response.json();

            if (data.status === 200 && data.data) {
                setCouriers(data.data);
            }
        } catch (error) {
            console.error('Error fetching couriers:', error);
        } finally {
            setLoading(false);
        }
    };

    // Mapping courier codes to logo paths
    const courierLogos: Record<string, string> = {
        'jne': '/jne.png',
        'jnt': '/jnt.png',
        'sicepat': '/sicepat.png',
        'tiki': '/tiki.png',
        'pos': '/pos%20indonesia.png',
        'anteraja': '/anteraja.png',
        'lion': '/lion%20parcel.png',
        'ninja': '/ninja%20express.png',
        'wahana': '/wahana.jpg',
        'shopee': '/Shopee%20Express.png',
        'spx': '/Shopee%20Express.png',
        'lazada': '/Lazada%20Express.png',
        'lex': '/Lazada%20Express.png',
        'jntcargo': '/jnt%20cargo.png',
        'jnt_cargo': '/jnt%20cargo.png',
        'rpx': '/RPX.png',
        'sap': '/SAP%20Express.jpg',
        'rex': '/REX%20express.png',
        'first': '/First%20Logistics.webp',
        'id': '/ID%20Express.png',
        'kgx': '/KGXpress.jpg',
        'pcp': '/PCP%20express.png',
        'jet': '/JET%20express.jpeg',
        'jx': '/JX%20Express.webp',
        'ant': '/ANT%20Cargo.png',
        'indah': '/Indah%20Cargo.png',
        'next': '/Next%20Logistik.webp',
        'rekomendasi': '/Kurir%20Rekomendasi.svg',
        'kurir_rekomendasi': '/Kurir%20Rekomendasi.svg',
        'ID': '/ID%20Express.png',
        'KGX': '/KGXpress.jpg',
        'JX': '/JX%20Express.webp',
        'INDAH': '/Indah%20Cargo.png',
        'ANT': '/ANT%20Cargo.png',
        'NEXT': '/Next%20Logistik.webp',
        'REKOMENDASI': '/Kurir%20Rekomendasi.svg',
        'KURIR_REKOMENDASI': '/Kurir%20Rekomendasi.svg',
    };

    return (
        <div className="min-h-screen bg-slate-900">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="container-custom text-center relative z-10">
                    <div className="inline-block mb-6">
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                            Jasa Pengiriman
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                        Daftar <span className="text-gradient">Ekspedisi</span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto animate-slide-in-up">
                        Kami mendukung <span className="text-primary font-bold">{couriers.length}+</span> jasa pengiriman terpercaya di Indonesia
                    </p>
                </div>
            </section>

            {/* Couriers Grid */}
            <section className="py-20 bg-slate-900">
                <div className="container-custom">
                    {loading ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {[...Array(15)].map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 animate-pulse"
                                >
                                    <div className="space-y-4">
                                        <div className="w-20 h-20 bg-slate-700 rounded-xl mx-auto"></div>
                                        <div className="h-4 bg-slate-700 rounded w-3/4 mx-auto"></div>
                                        <div className="h-3 bg-slate-700 rounded w-1/2 mx-auto"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {couriers.map((courier, index) => (
                                <div
                                    key={courier.code}
                                    className="group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-primary/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in"
                                    style={{ animationDelay: `${index * 0.03}s` }}
                                >
                                    <div className="flex flex-col items-center gap-4 text-center">
                                        {/* Logo Image */}
                                        <div className="relative w-20 h-20 flex items-center justify-center">
                                            {courierLogos[courier.code] ? (
                                                <Image
                                                    src={courierLogos[courier.code]}
                                                    alt={`${courier.description} Logo`}
                                                    fill
                                                    className="object-contain filter brightness-90 group-hover:brightness-110 transition-all group-hover:scale-110"
                                                    sizes="80px"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                                                    <span className="text-3xl font-bold text-white/80">
                                                        {courier.description.charAt(0)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Courier Name */}
                                        <div className="space-y-2">
                                            <h3 className="font-bold text-white group-hover:text-primary transition-colors">
                                                {courier.description}
                                            </h3>
                                            <p className="text-xs font-mono text-slate-500 uppercase bg-slate-700/50 inline-block px-3 py-1 rounded-full border border-slate-600">
                                                {courier.code}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Info Section */}
                    <div className="mt-20 max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Tidak Menemukan Kurir Anda?
                            </h2>
                            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
                                Kami terus menambahkan dukungan untuk lebih banyak jasa pengiriman.
                                Hubungi kami jika ada kurir yang ingin Anda tambahkan!
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                            >
                                Hubungi Kami
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
