'use client';

import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabase';

interface Review {
    id: number;
    name: string;
    origin: string;
    review: string;
    rating: number;
}

export default function ReviewSlider() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const { data, error } = await supabase
                .from('reviews')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(10);

            if (error) throw error;
            if (data) setReviews(data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="text-center text-slate-400">Memuat ulasan...</div>;
    }

    return (
        <div className="relative max-w-6xl mx-auto">
            {/* Slider Container */}
            <div
                ref={scrollContainerRef}
                className="w-full overflow-x-auto pb-8 hide-scrollbar scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <div className="flex gap-6 w-max px-4">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="card-modern p-6 bg-slate-800/80 backdrop-blur-sm border-slate-700 w-[300px] md:w-[350px] flex-shrink-0 hover:scale-105 hover:z-10 transition-all duration-300 relative"
                        >
                            <div className="flex space-x-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-slate-600'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-slate-300 mb-6 leading-relaxed italic line-clamp-4">&quot;{review.review}&quot;</p>
                            <div className="flex items-center gap-3 mt-auto">
                                <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/30">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-white text-sm">{review.name}</p>
                                    <p className="text-xs text-slate-400">{review.origin}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
