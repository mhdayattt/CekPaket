'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ReviewForm() {
    const [formData, setFormData] = useState({
        name: '',
        origin: '',
        review: '',
        rating: 5
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage({ type: '', text: '' });

        try {
            // Add quotes to review text as requested
            const formattedReview = `"${formData.review}"`;

            const { error } = await supabase
                .from('reviews')
                .insert([
                    {
                        name: formData.name,
                        origin: formData.origin,
                        review: formattedReview,
                        rating: formData.rating
                    }
                ]);

            if (error) throw error;

            setMessage({ type: 'success', text: 'Terima kasih atas ulasan Anda!' });
            setFormData({ name: '', origin: '', review: '', rating: 5 });
        } catch (error) {
            console.error('Error submitting review:', error);
            setMessage({ type: 'error', text: 'Gagal mengirim ulasan. Silakan coba lagi.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="card-modern p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Tulis Ulasan</h3>

            {message.text && (
                <div className={`p-4 rounded-lg mb-6 ${message.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'
                    }`}>
                    {message.text}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Nama Lengkap</label>
                        <input
                            type="text"
                            required
                            className="input bg-slate-900 border-slate-700 text-white focus:border-primary"
                            placeholder="Contoh: Budi Santoso"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Asal Kota</label>
                        <input
                            type="text"
                            required
                            className="input bg-slate-900 border-slate-700 text-white focus:border-primary"
                            placeholder="Contoh: Jakarta"
                            value={formData.origin}
                            onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Rating</label>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                type="button"
                                key={star}
                                onClick={() => setFormData({ ...formData, rating: star })}
                                className="focus:outline-none transition-transform hover:scale-110"
                            >
                                <svg
                                    className={`w-8 h-8 ${star <= formData.rating ? 'text-yellow-400' : 'text-slate-600'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Ulasan Anda</label>
                    <textarea
                        required
                        rows={4}
                        className="input bg-slate-900 border-slate-700 text-white focus:border-primary resize-none"
                        placeholder="Ceritakan pengalaman Anda..."
                        value={formData.review}
                        onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full md:w-auto"
                >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Ulasan'}
                </button>
            </form>
        </div>
    );
}
