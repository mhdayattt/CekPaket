// Halaman Features - REDESIGNED to Match New Design
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FeaturesPage() {
    const features = [
        {
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            ),
            color: 'text-purple-400',
            bg: 'from-purple-600 to-purple-700',
            title: 'Super Cepat',
            description: 'Dapatkan informasi tracking dalam hitungan detik dengan sistem yang telah dioptimalkan.',
            benefits: ['Response < 1 detik', 'Server Indonesia', 'Real-time data']
        },
        {
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            ),
            color: 'text-blue-400',
            bg: 'from-blue-600 to-blue-700',
            title: 'Multi Ekspedisi',
            description: 'Lacak paket dari JNE, J&T, SiCepat, dan 20+ kurir lainnya dalam satu tempat.',
            benefits: ['23+ Kurir', 'Auto-detect', 'Satu platform']
        },
        {
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            ),
            color: 'text-green-400',
            bg: 'from-green-600 to-green-700',
            title: 'Aman & Privasi',
            description: 'Kami tidak menyimpan data pribadi Anda. Tracking aman tanpa rasa khawatir.',
            benefits: ['Enkripsi SSL', 'No logs', 'Privacy first']
        },
        {
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            ),
            color: 'text-orange-400',
            bg: 'from-orange-600 to-orange-700',
            title: 'Real-time Update',
            description: 'Status paket langsung dari server ekspedisi tanpa delay.',
            benefits: ['Akurat', 'Langsung', 'Tanpa cache lama']
        }
    ];

    return (
        <div className="min-h-screen bg-slate-900">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="container-custom text-center relative z-10">
                    <div className="inline-block mb-6">
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                            Fitur Kami
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                        Fitur <span className="text-gradient">Unggulan</span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto animate-slide-in-up">
                        Kenapa ribuan orang memilih TrackingPaket untuk melacak kiriman mereka?
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-slate-900">
                <div className="container-custom max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-primary/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex gap-6 items-start">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {feature.icon}
                                        </svg>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-white/70 mb-4 leading-relaxed text-lg">
                                            {feature.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {feature.benefits.map((benefit, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs font-medium px-3 py-1.5 bg-slate-700/50 text-white/80 rounded-full border border-slate-600 hover:border-primary/50 hover:bg-slate-700 transition-all"
                                                >
                                                    {benefit}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 text-center">
                        <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Siap Mencoba?
                            </h2>
                            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
                                Mulai lacak paket Anda sekarang dan rasakan kemudahan tracking yang sesungguhnya
                            </p>
                            <a
                                href="/track"
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                            >
                                Lacak Paket Sekarang
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
