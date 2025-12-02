// Halaman Tentang Kami - IMPROVED DESIGN
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
    const techStack = [
        { 
            name: 'Next.js', 
            description: 'React Framework',
            logo: '/nextjs.webp',
            color: 'from-black to-gray-800'
        },
        { 
            name: 'TypeScript', 
            description: 'Type Safety',
            logo: '/typescript.svg',
            color: 'from-blue-600 to-blue-700'
        },
        { 
            name: 'Tailwind CSS', 
            description: 'Styling',
            logo: '/tailwind.svg',
            color: 'from-cyan-500 to-cyan-600'
        },
        { 
            name: 'Binderbyte', 
            description: 'Courier API',
            logo: '/binderbyte.svg',
            color: 'from-purple-600 to-purple-700'
        },
    ];

    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Real-time Tracking',
            description: 'Lacak paket secara real-time dengan update otomatis dari 23+ kurir'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Aman & Terpercaya',
            description: 'Data Anda aman dengan enkripsi dan tidak disimpan di server kami'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Cepat & Efisien',
            description: 'Interface yang simpel dan responsif untuk pengalaman tracking terbaik'
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
                            Tentang Kami
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                        Melacak Paket,
                        <br />
                        <span className="text-gradient">Jadi Lebih Mudah</span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-slide-in-up">
                        Platform tracking paket modern yang menggabungkan 23+ jasa kurir Indonesia 
                        dalam satu tempat. Cepat, simpel, dan tanpa ribet.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-slate-800">
                <div className="container-custom max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Kenapa Kami Membuat <span className="text-gradient">TrackingPaket?</span>
                            </h2>
                            <div className="space-y-4 text-white/70 leading-relaxed text-lg">
                                <p>
                                    Dimulai dari pengalaman pribadi yang menjengkelkan: harus membuka puluhan website berbeda, mengingat banyak nomor resi, dan menghadapi interface yang membingungkan penuh iklan.
                                </p>
                                <p>
                                    Kami percaya tracking paket seharusnya sesederhana memasukkan nomor resi dan langsung tahu di mana paket Anda. Tidak lebih, tidak kurang.
                                </p>
                                <p className="text-primary font-medium">
                                    Maka lahirlah TrackingPaket - solusi all-in-one untuk semua kebutuhan tracking Anda.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { number: '23+', label: 'Jasa Kurir' },
                                { number: '100%', label: 'Gratis' },
                                { number: '<1s', label: 'Response Time' },
                                { number: '24/7', label: 'Available' }
                            ].map((stat, index) => (
                                <div 
                                    key={index}
                                    className="bg-slate-900/80 backdrop-blur border border-slate-700 rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                                    <div className="text-white/60 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-slate-900">
                <div className="container-custom max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Fitur <span className="text-gradient">Unggulan</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Dirancang untuk memberikan pengalaman tracking terbaik
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-white/60 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-20 bg-slate-800">
                <div className="container-custom max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Dibangun dengan <span className="text-gradient">Teknologi Modern</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Menggunakan tech stack terkini untuk performa dan keamanan maksimal
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="group bg-slate-900/80 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="relative w-20 h-20 flex items-center justify-center">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                                        <Image 
                                            src={tech.logo} 
                                            alt={tech.name}
                                            width={64}
                                            height={64}
                                            className="relative z-10 filter brightness-90 group-hover:brightness-110 transition-all group-hover:scale-110"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-lg mb-1">{tech.name}</p>
                                        <p className="text-white/50 text-sm">{tech.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-transparent">
                <div className="container-custom max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Siap Lacak Paket Anda?
                    </h2>
                    <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
                        Mulai tracking paket Anda sekarang dengan platform yang mudah dan cepat
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
            </section>

            <Footer />
        </div>
    );
}