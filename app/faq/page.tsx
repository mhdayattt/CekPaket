// Halaman FAQ (Frequently Asked Questions)
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: 'Apa itu TrackingPaket?',
            answer: 'TrackingPaket adalah platform tracking paket terpadu yang memungkinkan Anda melacak paket dari berbagai jasa kurir di Indonesia dalam satu tempat. Kami mendukung 23+ jasa kurir populer dengan informasi real-time.'
        },
        {
            question: 'Apakah TrackingPaket gratis?',
            answer: 'Ya, TrackingPaket sepenuhnya gratis untuk digunakan. Anda dapat melacak paket sebanyak yang Anda mau tanpa biaya apapun.'
        },
        {
            question: 'Jasa kurir apa saja yang didukung?',
            answer: 'Kami mendukung 23+ jasa kurir termasuk JNE Express, J&T Express, SiCepat, POS Indonesia, TIKI, AnterAja, Wahana, Ninja Express, Lion Parcel, Shopee Express, Lazada Express, dan masih banyak lagi. Lihat daftar lengkap di halaman Kurir.'
        },
        {
            question: 'Bagaimana cara melacak paket?',
            answer: 'Sangat mudah! Cukup pilih jasa kurir yang mengirimkan paket Anda, masukkan nomor resi, dan klik tombol "Lacak Paket". Informasi tracking akan muncul dalam hitungan detik.'
        },
        {
            question: 'Di mana saya bisa menemukan nomor resi?',
            answer: 'Nomor resi biasanya dapat ditemukan di email konfirmasi pengiriman, SMS dari penjual, atau halaman detail pesanan di marketplace tempat Anda berbelanja. Nomor resi berbeda-beda untuk setiap kurir.'
        },
        {
            question: 'Apakah data saya aman?',
            answer: 'Ya, sangat aman. Kami TIDAK menyimpan nomor resi atau data tracking Anda di server kami. Semua pencarian bersifat real-time dan tidak disimpan. Privasi Anda adalah prioritas kami.'
        },
        {
            question: 'Mengapa tracking saya tidak ditemukan?',
            answer: 'Beberapa kemungkinan: 1) Nomor resi salah atau belum terdaftar di sistem kurir, 2) Paket baru dikirim dan belum ter-update, 3) Salah memilih jasa kurir. Pastikan nomor resi dan kurir sudah benar, lalu coba lagi.'
        },
        {
            question: 'Seberapa sering data tracking diperbarui?',
            answer: 'Data tracking diambil secara real-time langsung dari API resmi kurir setiap kali Anda melakukan pencarian. Jadi informasi yang ditampilkan selalu up-to-date.'
        },
        {
            question: 'Bisakah saya melacak beberapa paket sekaligus?',
            answer: 'Saat ini Anda bisa melacak satu paket per pencarian. Namun Anda bisa melakukan pencarian berkali-kali tanpa batasan. Kami sedang mengembangkan fitur multi-tracking untuk versi mendatang.'
        },
        {
            question: 'Apakah bisa diakses dari HP?',
            answer: 'Tentu saja! TrackingPaket didesain responsive dan mobile-first. Tampilan akan menyesuaikan dengan sempurna di smartphone, tablet, maupun desktop.'
        },
        {
            question: 'Bagaimana cara menyimpan hasil tracking?',
            answer: 'Anda bisa menggunakan fitur "Cetak" untuk menyimpan hasil tracking sebagai PDF, atau gunakan fitur "Salin Link" untuk menyimpan URL tracking yang bisa diakses kapan saja.'
        },
        {
            question: 'Apakah ada aplikasi mobile?',
            answer: 'Saat ini kami hanya tersedia dalam bentuk web. Namun website kami sudah PWA-ready yang berarti bisa di-install seperti aplikasi native di smartphone Anda untuk akses yang lebih cepat.'
        },
        {
            question: 'Bagaimana cara menghubungi tim TrackingPaket?',
            answer: 'Anda dapat menghubungi kami melalui halaman Kontak atau kirim email ke support@trackingpaket.com. Kami akan merespons dalam 1x24 jam.'
        },
        {
            question: 'Apakah ada notifikasi update status paket?',
            answer: 'Fitur notifikasi sedang dalam pengembangan. Saat ini Anda perlu manual refresh untuk melihat update terbaru. Follow social media kami untuk update tentang fitur baru!'
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-slate-900">
            <Header />

            <section className="pt-32 pb-20 bg-slate-900">
                <div className="container-custom">
                    {/* Header */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Pertanyaan <span className="text-gradient">Umum</span>
                        </h1>
                        <p className="text-white/70 text-lg max-w-3xl mx-auto">
                            Temukan jawaban untuk pertanyaan yang sering diajukan tentang TrackingPaket
                        </p>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="glass-strong rounded-xl overflow-hidden transition-all duration-300 animate-scale-in"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                                    <svg
                                        className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="p-6 pt-0">
                                        <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Still Have Questions */}
                    <div className="mt-16 glass rounded-2xl p-12 text-center max-w-3xl mx-auto animate-fade-in">
                        <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-3">
                            Masih Ada Pertanyaan?
                        </h2>
                        <p className="text-white/70 mb-6">
                            Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi kami
                        </p>
                        <a href="/contact" className="btn btn-primary inline-block">
                            Hubungi Kami
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
