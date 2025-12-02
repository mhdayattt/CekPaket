// Homepage - REVISED: CekPaket Rebrand, Consistent BG, Auto-Scroll Carousel
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrackingForm from '@/components/TrackingForm';
import TrackingResult from '@/components/TrackingResult';
import ReviewForm from '@/components/ReviewForm';
import ReviewSlider from '@/components/ReviewSlider';
import type { TrackingData } from '@/lib/types';

export default function Home() {
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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

  // Courier logos - DUPLICATED for infinite scroll
  const courierLogosBase = [
    { code: 'jne', name: 'JNE', logo: '/jne.png' },
    { code: 'jnt', name: 'J&T Express', logo: '/jnt.png' },
    { code: 'sicepat', name: 'SiCepat', logo: '/sicepat.png' },
    { code: 'tiki', name: 'TIKI', logo: '/tiki.png' },
    { code: 'pos', name: 'POS Indonesia', logo: '/pos%20indonesia.png' },
    { code: 'anteraja', name: 'AnterAja', logo: '/anteraja.png' },
    { code: 'lion', name: 'Lion Parcel', logo: '/lion%20parcel.png' },
    { code: 'ninja', name: 'Ninja Express', logo: '/ninja%20express.png' },
    { code: 'wahana', name: 'Wahana', logo: '/wahana.jpg' },
    { code: 'shopee', name: 'Shopee Express', logo: '/Shopee%20Express.png' },
    { code: 'lazada', name: 'Lazada Express', logo: '/Lazada%20Express.png' },
    { code: 'jntcargo', name: 'J&T Cargo', logo: '/jnt%20cargo.png' },
    { code: 'rpx', name: 'RPX', logo: '/RPX.png' },
    { code: 'sap', name: 'SAP Express', logo: '/SAP%20Express.jpg' },
    { code: 'rex', name: 'REX Express', logo: '/REX%20express.png' },
    { code: 'first', name: 'First Logistics', logo: '/First%20Logistics.webp' },
    { code: 'id', name: 'ID Express', logo: '/ID%20Express.png' },
    { code: 'kgx', name: 'KGXpress', logo: '/KGXpress.jpg' },
    { code: 'jx', name: 'JX Express', logo: '/JX%20Express.webp' },
    { code: 'indah', name: 'Indah Cargo', logo: '/Indah%20Cargo.png' },
    { code: 'ant', name: 'ANT Cargo', logo: '/ANT%20Cargo.png' },
    { code: 'next', name: 'Next Logistik', logo: '/Next%20Logistik.webp' },
    { code: 'rekomendasi', name: 'Kurir Rekomendasi', logo: '/Kurir%20Rekomendasi.svg' },
  ];

  // Double the array for seamless loop
  const courierLogos = [...courierLogosBase, ...courierLogosBase];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      {/* HERO SECTION - CONSISTENT BACKGROUND */}
      <section className="pt-24 pb-16 bg-slate-900 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-float"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm animate-slide-in-up hover:bg-white/10 transition-all">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-slate-300">23+ Jasa Kurir Terpercaya</span>
              </div>

              {/* Hero Title */}
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight animate-fade-in">
                Lacak Paket
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary-light">Tanpa Ribet</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-slate-300 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                Satu platform untuk semua kebutuhan tracking paket Anda. Cepat, akurat, dan desain yang memanjakan mata. Lacak pengiriman dari berbagai ekspedisi dalam satu tempat dengan tampilan yang modern dan mudah digunakan.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
                <a href="#tracking-form" className="px-8 py-4 bg-gradient-to-r from-primary via-purple-600 to-primary-dark text-white rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all">
                  Mulai Lacak
                </a>
                <a href="/couriers" className="px-8 py-4 bg-white/5 text-white border border-white/10 hover:bg-white/10 rounded-xl font-semibold transition-all hover:scale-105">
                  Lihat Kurir
                </a>
              </div>

              {/* Stats */}
              <div className="flex justify-center lg:justify-start gap-12 pt-8 border-t border-white/5 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div>
                  <p className="text-3xl font-bold text-white">23+</p>
                  <p className="text-sm text-slate-500">Ekspedisi</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">10k+</p>
                  <p className="text-sm text-slate-500">Pengguna</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">24/7</p>
                  <p className="text-sm text-slate-500">Support</p>
                </div>
              </div>
            </div>

            {/* RIGHT: Mockup */}
            <div className="relative hidden lg:flex justify-end animate-scale-in" style={{ animationDelay: '0.5s' }}>
              <div className="relative z-10 group">
                <div className="relative w-[380px] h-[760px] transition-all duration-700 group-hover:scale-105 group-hover:rotate-2">
                  <Image
                    src="/mockup.png"
                    alt="App Mockup"
                    fill
                    className="object-contain drop-shadow-2xl group-hover:drop-shadow-[0_35px_60px_rgba(99,102,241,0.4)] transition-all duration-700"
                    priority
                    quality={100}
                    sizes="(max-width: 868px) 100vw, 400px"
                  />
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKING FORM SECTION - CONSISTENT BG */}
      <section id="tracking-form" className="py-20 bg-slate-900">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Lacak Paket <span className="text-gradient">Sekarang</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Masukkan nomor resi dan kurir untuk melacak paket Anda
            </p>
          </div>

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

      {/* Tracking Result */}
      {trackingData && (
        <section id="tracking-result" className="py-12 bg-slate-900">
          <div className="container-custom">
            <TrackingResult data={trackingData} />
          </div>
        </section>
      )}

      {/* COURIER CAROUSEL - AUTO SCROLL HORIZONTAL */}
      <section className="py-20 bg-slate-900 border-t border-white/5 overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Didukung <span className="text-gradient">23+ Kurir Terpercaya</span>
            </h2>
            <p className="text-slate-400 text-lg">Terintegrasi langsung dengan sistem ekspedisi seluruh Indonesia</p>
          </div>

          {/* INFINITE SCROLL CAROUSEL */}
          <div className="relative">
            <div className="flex gap-8 animate-scroll">
              {courierLogos.map((courier, index) => (
                <div
                  key={`${courier.code}-${index}`}
                  className="group flex-shrink-0"
                >
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center p-4 shadow-xl group-hover:scale-110 transition-all duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={courier.logo}
                        alt={`${courier.name} Logo`}
                        fill
                        className="object-contain"
                        sizes="96px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEW SECTION - CONSISTENT BG */}
      < section className="py-20 bg-slate-900 border-t border-white/5" >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kata <span className="text-gradient">Pengguna</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Testimoni dari pengguna yang sudah merasakan kemudahan CekPaket
            </p>
          </div>

          <ReviewSlider />

          <div className="mt-16 max-w-4xl mx-auto">
            <ReviewForm />
          </div>
        </div>
      </section >

      <Footer />
    </div >
  );
}
