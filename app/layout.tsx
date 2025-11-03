import type { Metadata } from "next";
import { Montserrat, Great_Vibes } from "next/font/google";
import Header from "./components/Header"; // ✅ gunakan path relatif
import "./globals.css";

/* -------------------------------------------------------------
   🅵🅾🅽🆃  Kombinasi Modern & Classy
------------------------------------------------------------- */
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: ["400"],
  display: "swap",
});

/* -------------------------------------------------------------
   SEO Information
------------------------------------------------------------- */
export const metadata: Metadata = {
  title: "Law Office of Ari Tarihoran",
  description:
    "Professional legal services with integrity, insight, and innovation.",
};

/* -------------------------------------------------------------
   Root Layout
------------------------------------------------------------- */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${greatVibes.variable} antialiased bg-darkbg text-softwhite`}
      >
        {/* ===== HEADER GLOBAL ===== */}
        <Header /> {/* tampil di semua halaman */}

        {/* ===== KONTEN HALAMAN ===== */}
        {children}
      </body>
    </html>
  );
}