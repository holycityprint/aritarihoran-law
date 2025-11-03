"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-darkbg flex flex-col items-center text-softwhite overflow-hidden pt-24">
      {/* =========================================================
         HERO SECTION — sisi kiri & kanan samar, warna natural
      ========================================================= */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 py-32 bg-gradient-to-b from-[#0f0f0f] to-dark2 overflow-hidden">

        {/* ===== Background kiri & kanan ===== */}
        <div
          className="absolute top-0 left-0 h-full w-1/3 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('/bg-lawoffice.jpg')",
            backgroundPosition: "left center",
            filter: "saturate(100%) brightness(0.8) contrast(1)",
          }}
        />
        <div
          className="absolute top-0 right-0 h-full w-1/3 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('/bg-lawoffice.jpg')",
            backgroundPosition: "right center",
            filter: "saturate(100%) brightness(0.8) contrast(1)",
          }}
        />

        {/* Overlay lembut agar menyatu tapi tidak gelap */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/30 via-dark2/50 to-dark2/70" />

        {/* ===== Logo ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center mb-8"
        >
          {/* Aura bercahaya di belakang logo */}
          <div className="absolute inset-0 blur-xl bg-gradient-to-r 
                          from-goldLight/40 via-goldDeep/70 to-goldLight/40 
                          rounded-full opacity-70 animate-pulse" />

          <Image
            src="/logo.png"
            alt="Law Office of Ari Tarihoran & Andy Laxana Logo"
            width={110}
            height={110}
            priority
            className="relative z-10 drop-shadow-[0_0_25px_rgba(245,218,140,0.7)]"
          />
        </motion.div>

        {/* ===== Title (versi dibenahi agar pas di semua tampilan) ===== */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="font-montserrat font-extrabold tracking-wide leading-tight uppercase 
                     bg-gradient-to-r from-goldLight via-goldDeep to-goldLight bg-clip-text text-transparent 
                     drop-shadow-[0_0_20px_rgba(245,218,140,0.5)] relative
                     text-4xl sm:text-5xl md:text-6xl space-y-1"
        >
          <span className="block">Law Office of</span>
          <span className="block">Ari Tarihoran &</span>
          <span className="block">Andy Laxana</span>
        </motion.h1>

        {/* ===== Subtext ===== */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="relative mt-6 text-xl sm:text-2xl text-center"
        >
          <span className="font-script text-goldLight text-4xl align-middle 
                           drop-shadow-[0_0_8px_rgba(245,218,140,0.5)]">
            is your
          </span>{" "}
          <span className="font-montserrat font-semibold bg-gradient-to-r from-goldLight to-goldDeep 
                           bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(245,218,140,0.5)]">
            Work Trust
          </span>
        </motion.p>

        {/* ===== Description ===== */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="relative mt-6 max-w-2xl text-gray-400 text-sm sm:text-base leading-relaxed"
        >
          We place at the centre of international networks to advance your strategic interests 
          with precision and integrity.
        </motion.p>

        {/* ===== Button ===== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="relative mt-10"
        >
          <Link
            href="/profile"
            className="btn-gold px-8 py-3 rounded-md shadow-md font-semibold text-sm sm:text-base"
          >
            Read Firm Profile
          </Link>
        </motion.div>

        {/* ===== Garis Emas ===== */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 2.3, duration: 0.8, ease: "easeInOut" }}
          className="relative mt-8 h-[2px] w-48 mx-auto bg-gradient-to-r 
                     from-goldLight via-goldDeep to-goldLight 
                     shadow-[0_0_15px_rgba(245,218,140,0.5)] rounded-full origin-center"
        />

        {/* ===== Shape Trapesium ===== */}
        <div
          className="absolute bottom-0 left-0 w-full h-24 bg-dark2"
          style={{
            clipPath: "polygon(0 40%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </section>

      {/* =========================================================
         PRACTICE AREAS — + Kepailitan & Arbitrase
      ========================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="bg-dark2 text-softwhite py-20 w-full text-center"
      >
        <h2
          className="font-montserrat text-3xl font-semibold mb-12 tracking-wide 
                     bg-gradient-to-r from-goldLight to-goldDeep bg-clip-text text-transparent 
                     drop-shadow-[0_0_8px_rgba(245,218,140,0.4)]"
        >
          Practice Areas
        </h2>

        <div className="flex flex-wrap justify-center gap-8 px-4">
          {[
            "Hukum Perdata",
            "Hukum Pidana (Umum ataupun Khusus)",
            "Hukum Tata Usaha Negara / Konstitusi",
            "Hukum Pertanahan",
            "Hukum Perseroan Terbatas",
            "Hukum Perkawinan",
            "Hukum Perbankan",
            "Hukum Perburuhan",
            "Hukum Perikatan",
            "Hukum Hak Milik Intelektual",
            "Hukum Kepailitan",      
            "Hukum Arbitrase",       
            "Hukum Pertambangan",
            "Hukum Keluarga",
            "Hukum Kewarganegaraan dan Keimigrasian",
            "Hukum Perpajakan",
            "Hukum Perlindungan Konsumen",
            "Hukum Yayasan",
            "Hukum Ketenagakerjaan",
            "Jasa Kenotariatan",
          ].map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-darkbg border border-gray-700 rounded-lg p-8 w-64 text-sm sm:text-base 
                          hover:border-goldLight hover:shadow-[0_0_20px_rgba(245,218,140,0.5)] 
                          transition duration-300`}
            >
              {area}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* =========================================================
         FOOTER
      ========================================================= */}
      <footer className="py-10 bg-black w-full text-center text-gray-500 text-sm border-t border-gray-800">
        © 2025 Law Office of Ari Tarihoran & Andy Laxana. All rights reserved.
      </footer>
    </main>
  );
}