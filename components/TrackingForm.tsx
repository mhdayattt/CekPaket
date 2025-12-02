// Tracking Form Component - MODERN DROPDOWN REDESIGN
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { Courier } from '@/lib/types';

interface TrackingFormProps {
    onSubmit: (courier: string, awb: string) => void;
    isLoading?: boolean;
}

export default function TrackingForm({ onSubmit, isLoading = false }: TrackingFormProps) {
    const [couriers, setCouriers] = useState<Courier[]>([]);
    const [selectedCourier, setSelectedCourier] = useState('');
    const [awbNumber, setAwbNumber] = useState('');
    const [error, setError] = useState('');
    const [loadingCouriers, setLoadingCouriers] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Courier logo mapping
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
        'jx': '/JX%20Express.webp',
        'indah': '/Indah%20Cargo.png',
        'ant': '/ANT%20Cargo.png',
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

    useEffect(() => {
        fetchCouriers();
    }, []);

    const fetchCouriers = async () => {
        try {
            const response = await fetch('/api/couriers');
            const data = await response.json();

            if (data.status === 200 && data.data) {
                setCouriers(data.data);
            } else {
                setError('Gagal memuat daftar kurir');
            }
        } catch (err) {
            console.error('Error fetching couriers:', err);
            setError('Gagal memuat daftar kurir');
        } finally {
            setLoadingCouriers(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!selectedCourier) {
            setError('Silakan pilih jasa kurir');
            return;
        }

        if (!awbNumber.trim()) {
            setError('Silakan masukkan nomor resi');
            return;
        }

        onSubmit(selectedCourier, awbNumber.trim());
    };

    const selectedCourierData = couriers.find(c => c.code === selectedCourier);

    return (
        <div className="w-full max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* CUSTOM DROPDOWN - MODERN UI */}
                    <div className="space-y-3">
                        <label htmlFor="courier" className="block text-sm font-semibold text-white">
                            Pilih Jasa Kurir
                        </label>
                        <div className="relative z-50">
                            <button
                                type="button"
                                onClick={() => !loadingCouriers && !isLoading && setIsDropdownOpen(!isDropdownOpen)}
                                disabled={loadingCouriers || isLoading}
                                className="w-full flex items-center justify-between px-5 py-4 bg-slate-900/80 border border-white/10 rounded-xl text-left hover:bg-slate-900 hover:border-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                <div className="flex items-center gap-3">
                                    {selectedCourierData && courierLogos[selectedCourierData.code] ? (
                                        <>
                                            <div className="relative w-8 h-8 flex-shrink-0">
                                                <Image
                                                    src={courierLogos[selectedCourierData.code]}
                                                    alt={selectedCourierData.description}
                                                    fill
                                                    className="object-contain"
                                                    sizes="32px"
                                                />
                                            </div>
                                            <span className="font-medium text-white">{selectedCourierData.description}</span>
                                        </>
                                    ) : (
                                        <span className="text-slate-400">
                                            {loadingCouriers ? 'Memuat...' : 'Pilih Kurir'}
                                        </span>
                                    )}
                                </div>
                                <svg className={`w-5 h-5 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute z-50 w-full mt-2 bg-slate-900 border border-white/10 rounded-xl shadow-2xl max-h-80 overflow-y-auto animate-scale-in">
                                    {couriers.map((courier) => (
                                        <button
                                            key={courier.code}
                                            type="button"
                                            onClick={() => {
                                                setSelectedCourier(courier.code);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-3 px-5 py-4 hover:bg-white/5 transition-all ${selectedCourier === courier.code ? 'bg-primary/10 border-l-4 border-primary' : ''
                                                }`}
                                        >
                                            {courierLogos[courier.code] ? (
                                                <div className="relative w-8 h-8 flex-shrink-0">
                                                    <Image
                                                        src={courierLogos[courier.code]}
                                                        alt={courier.description}
                                                        fill
                                                        className="object-contain"
                                                        sizes="32px"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-8 h-8 flex-shrink-0 bg-white/5 rounded-full flex items-center justify-center text-xs text-slate-500">
                                                    {courier.code.substring(0, 2).toUpperCase()}
                                                </div>
                                            )}
                                            <div className="text-left flex-1">
                                                <p className="font-medium text-white">{courier.description}</p>
                                                <p className="text-xs text-slate-500 uppercase">{courier.code}</p>
                                            </div>
                                            {selectedCourier === courier.code && (
                                                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* NOMOR RESI INPUT */}
                    <div className="space-y-3">
                        <label htmlFor="awb" className="block text-sm font-semibold text-white">
                            Nomor Resi / AWB
                        </label>
                        <input
                            type="text"
                            id="awb"
                            value={awbNumber}
                            onChange={(e) => setAwbNumber(e.target.value)}
                            disabled={isLoading}
                            className="w-full px-5 py-4 bg-slate-900/80 border border-white/10 rounded-xl text-white placeholder-slate-500 hover:bg-slate-900 hover:border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                            placeholder="Masukkan nomor resi"
                        />
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-xl p-4 animate-scale-in">
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-sm text-red-200 font-medium">{error}</p>
                        </div>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="mt-8 w-full px-8 py-4 bg-gradient-to-r from-primary via-purple-600 to-primary-dark text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center gap-3">
                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Melacak...</span>
                        </div>
                    ) : (
                        'Lacak Paket'
                    )}
                    <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </button>
            </form>
        </div>
    );
}
