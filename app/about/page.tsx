"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-darkbg text-softwhite flex flex-col items-center overflow-hidden pt-24">
      {/* =========================================================
         HEADER
      ========================================================= */}
      <section
        className="relative flex flex-col justify-center items-center text-center px-6 py-28 
                   bg-cover bg-center bg-no-repeat overflow-hidden w-full"
        style={{
          backgroundImage: "url('/bg-lawoffice.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(100%) brightness(0.8) contrast(1.05)",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

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

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative font-montserrat text-4xl sm:text-5xl font-extrabold uppercase 
                     bg-gradient-to-r from-goldLight via-goldDeep to-goldLight bg-clip-text text-transparent 
                     drop-shadow-[0_0_20px_rgba(245,218,140,0.5)]"
        >
          ABOUT US
        </motion.h1>
      </section>

      {/* =========================================================
         CONTENT
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
                     max-w-5xl w-full mx-auto p-8 md:p-12 text-gray-200 leading-relaxed space-y-6"
        >
          <p className="text-justify">
            <span className="text-gold font-semibold">
              LAW OFFICE OF ARI TARIHORAN & ANDY LAXANA
            </span>{" "}
            yang beranggotakan para Advokat berpengalaman dalam bidang hukum
            yang berdedikasi tinggi, menekankan penggunaan sistem team work
            dalam menangani kepentingan hukum subjek hukum baik dalam seluruh
            bidang hukum yang ada di Indonesia. Latar belakang keahlian yang
            berbeda‑beda membuat Kami dapat memberikan solusi dan jalan keluar
            yang tepat bagi keberhasilan dan kelancaran kepentingan hukum
            Subjek Hukum yang menjadi Klien Kami. Berkat team work tersebut, Kami dapat 
            melaksanakan tugas sebaik mungkin guna menghasilkan pelayanan hukum terbaik.
          </p>

          <p className="text-justify">
            Kesuksesan melaksanakan tugas tersebut merupakan hasil dari motivasi
            kerja para Advokat yang selalu berkeinginan untuk memberikan hasil
            kerja berkualitas tinggi, nilai tambah, dan sistem pembiayaan jasa hukum yang
            efisien serta efektif dalam memenuhi kebutuhan Subjek Hukum yang menjadi
            Klien Kami.
          </p>

          <p className="text-justify">
            <span className="text-gold font-semibold">
              LAW OFFICE OF ARI TARIHORAN & ANDY LAXANA
            </span>{" "}
            beranggotakan Advokat dan/atau tenaga ahli serta penasihat
            yang berlatar belakang lulusan perguruan tinggi negeri dan swasta terkemuka di Indonesia 
            (Universitas Padjadjaran dan Universitas Indonesia), sebagai berikut:
          </p>

          {/* ===== OUR LAWYERS ===== */}
          <h2 className="mt-10 text-goldLight font-semibold text-xl text-center">
            OUR LAWYERS
          </h2>
          <p className="text-center text-gray-300 mb-8">
            Para Advokat kami memiliki lisensi nasional sesuai dengan
            ketentuan dalam Undang‑undang Advokat.
          </p>

          {/* ===== FOTO PARA ADVOKAT ===== */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-52 h-52 overflow-hidden rounded-xl border border-goldDeep/40">
                <Image
                  src="/ari-tarihoran.jpg"
                  alt="Ari Saputera Tarihoran"
                  fill
                  className="object-cover grayscale-0 brightness-95 contrast-105 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-goldLight">
                Ari Saputera Tarihoran, S.H., M.M.
              </p>
              <p className="text-sm text-gray-400">Advocate / Founder</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-52 h-52 overflow-hidden rounded-xl border border-goldDeep/40">
                <Image
                  src="/andy-laxana.jpg"
                  alt="Andy Laxana"
                  fill
                  className="object-cover grayscale-0 brightness-95 contrast-105 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-goldLight">
                Andy Laxana, S.H.
              </p>
              <p className="text-sm text-gray-400">Advocate / Co‑Founder</p>
            </div>
          </div>

          {/* ===== VISI & MISI ===== */}
          <div className="mt-12 space-y-4">
            <h2 className="text-goldLight font-semibold text-xl">
              Vision
            </h2>
            <p>
              Menjadikan{" "}
              <span className="text-gold font-semibold">
                LAW OFFICE OF ARI TARIHORAN & ANDY LAXANA
              </span>{" "}
              terdepan dalam bidang hukum guna memiliki daya saing global 
              dalam memberikan pelayanan hukum kepada Subjek Hukum yang menjadi Klien 
              dan mendukung penegakan hukum di Indonesia.
            </p>

            <h2 className="text-goldLight font-semibold text-xl pt-4">
              Mission
            </h2>
            <p>
              <span className="text-gold font-semibold">
                LAW OFFICE OF ARI TARIHORAN & ANDY LAXANA
              </span>{" "}
              memberikan pelayanan jasa hukum yang terbaik kepada Klien guna memenuhi 
              kepentingan hukum Klien dan menegakkan profesionalitas serta integritas dalam praktik hukum.
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