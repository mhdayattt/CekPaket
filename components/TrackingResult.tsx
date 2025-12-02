// Tracking Result Component - FIXED for Dark Theme
'use client';

import type { TrackingData } from '@/lib/types';
import Timeline from './Timeline';

interface TrackingResultProps {
    data: TrackingData;
}

export default function TrackingResult({ data }: TrackingResultProps) {
    const { summary, detail, history } = data;

    // Status colors - DARK THEME
    const getStatusColor = (status: string) => {
        const statusLower = status.toLowerCase();

        if (statusLower.includes('delivered')) {
            return 'bg-green-500/20 text-green-400 border-green-500/30';
        }
        if (statusLower.includes('delivery') || statusLower.includes('antar')) {
            return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
        }
        if (statusLower.includes('transit') || statusLower.includes('process')) {
            return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
        }
        if (statusLower.includes('returned') || statusLower.includes('cancel')) {
            return 'bg-red-500/20 text-red-400 border-red-500/30';
        }

        return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    };

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8 animate-slide-in-up">
            {/* Status Card - DARK THEME */}
            <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8 shadow-2xl border-l-4 border-l-primary">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                    {/* AWB & Courier Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-2">
                            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Nomor Resi</span>
                        </div>
                        <div className="flex flex-wrap items-baseline gap-3">
                            <h2 className="text-3xl font-bold text-white tracking-tight">{summary.awb}</h2>
                            <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium border border-white/10">
                                {summary.courier}
                            </span>
                        </div>
                        {summary.service && (
                            <p className="text-slate-400 mt-2">Layanan: {summary.service}</p>
                        )}
                    </div>

                    {/* Status Badge */}
                    <div className={`px-6 py-3 rounded-full border-2 ${getStatusColor(summary.status)} font-bold text-lg whitespace-nowrap shadow-lg`}>
                        {summary.status}
                    </div>
                </div>

                {/* Additional Info Grid */}
                {(summary.weight || summary.amount) && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10">
                        {summary.weight && (
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Berat</p>
                                <p className="text-white font-semibold">{summary.weight}</p>
                            </div>
                        )}
                        {summary.amount && (
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Biaya</p>
                                <p className="text-white font-semibold">Rp {summary.amount}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Shipment Details - DARK THEME */}
            {(detail.origin || detail.destination || detail.shipper || detail.receiver) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Origin Card */}
                    <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Pengirim</p>
                                {detail.shipper && (
                                    <p className="text-white font-semibold text-lg mb-1">{detail.shipper}</p>
                                )}
                                {detail.origin && (
                                    <p className="text-slate-400 text-sm">{detail.origin}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Destination Card */}
                    <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 text-orange-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Penerima</p>
                                {detail.receiver && (
                                    <p className="text-white font-semibold text-lg mb-1">{detail.receiver}</p>
                                )}
                                {detail.destination && (
                                    <p className="text-slate-400 text-sm">{detail.destination}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Tracking History - DARK THEME */}
            <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8">
                <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Riwayat Perjalanan</h2>
                </div>

                <Timeline history={history} />
            </div>
        </div>
    );
}
