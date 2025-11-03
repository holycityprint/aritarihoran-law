"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-darkbg text-softwhite flex flex-col items-center overflow-hidden pt-24">
      {/* =========================================================
         HERO / HEADER SECTION — gambar lebar penuh
      ========================================================= */}
      <section
        className="relative flex flex-col justify-center items-center text-center px-6 py-24 
                   bg-cover bg-center bg-no-repeat overflow-hidden w-full"
        style={{
          backgroundImage: "url('/bg-lawoffice.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(100%) brightness(0.8) contrast(1.05)",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        {/* ===== Logo ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center mb-8"
        >
          <div className="absolute inset-0 blur-xl bg-gradient-to-r 
                          from-goldLight/40 via-goldDeep/70 to-goldLight/40 
                          rounded-full opacity-70 animate-pulse" />
          <Image
            src="/logo.png"
            alt="Law Office of Ari Tarihoran & Andy Laxana Logo"
            width={100}
            height={100}
            priority
            className="relative z-10 drop-shadow-[0_0_25px_rgba(245,218,140,0.7)]"
          />
        </motion.div>

        {/* ===== Title ===== */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative font-montserrat text-4xl sm:text-5xl font-extrabold uppercase 
                     bg-gradient-to-r from-goldLight via-goldDeep to-goldLight bg-clip-text text-transparent 
                     drop-shadow-[0_0_20px_rgba(245,218,140,0.5)]"
        >
          OUR CLIENTS
        </motion.h1>
      </section>

      {/* =========================================================
         CLIENT LIST
      ========================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-dark2 w-full flex justify-center py-16 px-4"
      >
        <div
          className="bg-neutral-900/70 rounded-xl border border-goldDeep/40
                     shadow-[0_0_25px_rgba(245,218,140,0.25)]
                     max-w-3xl w-full mx-auto p-8 md:p-12 text-left text-gray-200 leading-relaxed space-y-6"
        >
          <p className="text-lg font-semibold text-goldLight">
            Klien yang pernah dan sedang ditangani oleh para Advokat Law Office of Ari Tarihoran & Andy Laxana, antara lain:
          </p>

          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>PT. Barisan Integra</li>
            <li>PT. Digital Solusindo Bestama</li> {/* ✅ tambahan baru */}
            <li>Cinnamon Hotel</li>
            <li>PT. Fairways Property Perkasa</li>
            <li>PT. Bank Harda Internasional</li>
            <li>PT. Saung Angklung Udjo</li>
            <li>PT. Sumatera Olah Gas Industri</li>
            <li>PT. Benua Cipta Niagatama</li>
            <li>PT. Benteng Negara Mandiri</li>
            <li>PT. Formasi Inti Tama</li>
            <li>Yayasan Nadzir Wakaf Pangeran Sumedang</li>
            <li>Bupati Sumedang</li>
            <li>Djadjang Nurdjaman (Pelatih Sepakbola)</li>
            <li className="font-semibold text-goldLight">… dan lainnya</li>
          </ul>

          {/* ===== CONTACT INFO ===== */}
          <div className="mt-10">
            <p className="text-lg font-semibold text-goldLight mb-2">Kontak :</p>
            <p>
              Untuk permasalahan hukum yang membutuhkan lawyer dalam menyelesaikan permasalahan  
              hukum yang sedang dihadapi, dapat menghubungi:
            </p>
            <p className="mt-2 text-gray-300">
              <span className="font-semibold text-goldLight">
                Law Office of Ari Tarihoran & Andy Laxana
              </span>
              <br />
              Gedung MD PLAZA Lt. 3 Blok B‑336‑337, Jl. Dalem Kaum No. 48‑52, Bandung, Jawa Barat.
              <br />
              <span className="block mt-2">
                Phone : +62 821‑2212‑2161  |  Email : law@lawofficeofaritarihoran.com
              </span>
              <span className="block">
                Instagram : lawofficeofaritarihoran  |  Website : www.aritarihoran‑lawoffice.com
              </span>
            </p>
          </div>
        </div>
      </motion.section>

      {/* =========================================================
         FOOTER
      ========================================================= */}
      <footer className="py-10 bg-black text-center text-gray-500 text-sm border-t border-gray-800 w-full">
        © 2025 Law Office of Ari Tarihoran & Andy Laxana. All rights reserved.
      </footer>
    </main>
  );
}