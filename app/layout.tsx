import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrackingPaket - Lacak Paket Anda dengan Mudah",
  description: "Platform tracking paket terlengkap di Indonesia dengan dukungan 23+ jasa kurir. Lacak paket Anda secara real-time dengan antarmuka yang modern dan mudah digunakan.",
  keywords: "tracking paket, lacak paket, cek resi, JNE, JNT, SiCepat, POS Indonesia, tracking Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
