"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-darkbg text-softwhite flex flex-col items-center overflow-hidden">
      {/* =========================================================
         HEADER – gaya sama seperti di page.tsx, logo agak turun
      ========================================================= */}
      <section
        className="relative flex flex-col justify-center items-center text-center px-6 py-28 pt-36
                   bg-cover bg-center bg-no-repeat overflow-hidden w-full"
        style={{
          backgroundImage: "url('/bg-lawoffice.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(100%) brightness(0.8) contrast(1.05)",
        }}
      >
        {/* Lapisan lembut agar teks tetap jelas */}
        <div className="absolute inset-0 bg-black/60" />

        {/* ===== Logo ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center mb-6"
        >
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

        {/* ===== Title ===== */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative font-montserrat text-4xl sm:text-5xl font-extrabold uppercase 
                     bg-gradient-to-r from-goldLight via-goldDeep to-goldLight bg-clip-text text-transparent 
                     drop-shadow-[0_0_20px_rgba(245,218,140,0.5)]"
        >
          FIRM PROFILE
        </motion.h1>

        {/* ===== Quote ===== */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative mt-10 text-goldLight max-w-2xl mx-auto font-montserrat text-base sm:text-lg leading-relaxed"
        >
          <p className="italic">
            “Paling utama dalam menangani perkara Klien adalah
            <br />
            menempatkan kepentingan hukum Klien, sesuai aturan hukum”
          </p>
          <p className="mt-2 text-gray-400 text-sm not-italic">
            (Ari Saputera Tarihoran)
          </p>
        </motion.blockquote>
      </section>

      {/* =========================================================
         BLOK PROFIL – tetap sama
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
          <p>
            Perkembangan Hukum saat ini terus berkembang untuk mengawal peradaban sosial Subjek Hukum di Indonesia. 
            Terbitnya aturan‑aturan hukum membuat Subjek Hukum Indonesia membutuhkan Jasa Kantor Hukum agar 
            kepentingan Subjek Hukum di Indonesia dapat terlindungi dengan baik dan hal tersebut akan bertujuan 
            menciptakan Ketertiban hukum serta kemanfaatan hukum atas dasar hal tersebut. 
            <span className="text-gold font-semibold"> LAW OFFICE OF ARI TARIHORAN </span>
            hadir untuk memberikan pelayanan atau jasa hukum kepada Subjek Hukum yang ada di Indonesia.
          </p>

          <p>
            <span className="text-gold font-semibold">LAW OFFICE OF ARI TARIHORAN</span> adalah kantor hukum yang bergerak 
            di bidang pelayanan Jasa Hukum bagi seluruh Subjek Hukum Indonesia. Terdiri dari para Advokat yang memiliki 
            berbagai pengalaman dalam bidang hukum baik dalam bidang Litigasi maupun Non Litigasi yang menangani 
            Subjek Hukum Perorangan maupun Perusahaan yang ada di Indonesia, sehingga para Advokat bekerja secara 
            Profesional dan mandiri.
          </p>

          <p>
            <span className="text-gold font-semibold">LAW OFFICE OF ARI TARIHORAN</span> terus berkembang menjadi sebuah 
            kantor hukum multi‑disiplin yang didirikan dengan mengakomodir seluruh aspek hukum yang ada di Indonesia. 
            Advokat dan seluruh Rekan mengadopsi sebuah pendekatan hukum yang progresif dan proaktif, sehingga 
            kepentingan Subjek Hukum yang menjadi Klien kami dapat terpenuhi baik sesuai dengan perkembangan 
            hukum di Indonesia.
          </p>
        </div>
      </motion.section>

      {/* =========================================================
         FOOTER – tidak diubah
      ========================================================= */}
      <footer className="py-10 bg-black text-center text-gray-500 text-sm border-t border-gray-800 w-full">
        © 2025 Law Office of Ari Tarihoran & Andy Laxana. All rights reserved.
      </footer>
    </main>
  );
}