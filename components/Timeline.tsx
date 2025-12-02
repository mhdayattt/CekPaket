// Timeline Component - FIXED for Dark Theme
'use client';

import type { TrackingHistory } from '@/lib/types';

interface TimelineProps {
    history: TrackingHistory[];
}

export default function Timeline({ history }: TimelineProps) {
    const formatDate = (dateString: string) => {
        try {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            }).format(date);
        } catch {
            return dateString;
        }
    };

    const formatTime = (dateString: string) => {
        try {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('id-ID', {
                hour: '2-digit',
                minute: '2-digit',
            }).format(date);
        } catch {
            return '';
        }
    };

    return (
        <div className="relative pl-4 md:pl-8 py-4">
            {/* Vertical Line - DARK THEME - SOLID LINE */}
            <div className="absolute left-[27px] md:left-[43px] top-6 bottom-6 w-[2px] bg-slate-700"></div>

            <div className="space-y-8">
                {history.map((item, index) => {
                    const isLatest = index === 0;

                    return (
                        <div key={index} className={`relative flex gap-6 md:gap-8 group ${isLatest ? 'animate-slide-in-up' : ''}`}>
                            {/* Dot Indicator - MATCH DESIGN */}
                            <div className={`relative z-10 flex-shrink-0 w-6 h-6 rounded-full 
                                ${isLatest
                                    ? 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]'
                                    : 'bg-transparent border-2 border-slate-600'
                                } mt-1.5`}
                            ></div>

                            {/* Content - DARK THEME */}
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
                                    <h3 className={`text-lg font-semibold ${isLatest ? 'text-primary' : 'text-white'}`}>
                                        {item.desc}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-slate-400 whitespace-nowrap">
                                        <span>{formatDate(item.date)}</span>
                                        <span>•</span>
                                        <span>{formatTime(item.date)}</span>
                                    </div>
                                </div>

                                {item.location && (
                                    <div className="flex items-center gap-1.5 text-slate-300 mt-1">
                                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-sm font-medium">{item.location}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
