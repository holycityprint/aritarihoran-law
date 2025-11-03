"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-darkbg text-softwhite flex flex-col items-center overflow-hidden pt-24">
      {/* =========================================================
         HEADER
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

        {/* LOGO */}
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

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative font-montserrat text-4xl sm:text-5xl font-extrabold uppercase 
                     bg-gradient-to-r from-goldLight via-goldDeep to-goldLight bg-clip-text text-transparent 
                     drop-shadow-[0_0_20px_rgba(245,218,140,0.5)]"
        >
          CONTACT US
        </motion.h1>
      </section>

      {/* =========================================================
         CONTACT INFORMATION
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
                     max-w-4xl w-full mx-auto p-8 md:p-12 text-left text-gray-200 leading-relaxed space-y-8"
        >
          <div>
            <h2 className="text-goldLight font-semibold text-xl mb-2">
              Our Head Office Address:
            </h2>
            <p>
              Gedung MD PLAZA Lt 1 Blok B‑336‑337,<br />
              Jl. Dalem Kaum No. 48 – 52, Bandung – Jawa Barat.
            </p>
          </div>

          <div>
            <h2 className="text-goldLight font-semibold text-xl mb-2">
              Call for Help:
            </h2>
            <p>Phone : +62 821‑2212‑2161</p>
          </div>

          <div>
            <h2 className="text-goldLight font-semibold text-xl mb-2">
              Mail Us for Information:
            </h2>
            <p>aritarihoran.lawoffice@gmail.com</p>
          </div>

          {/* GOOGLE MAPS */}
          <div className="mt-10">
            <h2 className="text-goldLight font-semibold text-xl mb-3">Find Us on Map:</h2>
            <div className="rounded-lg overflow-hidden border border-goldDeep/40 shadow-[0_0_15px_rgba(245,218,140,0.2)]">
              <iframe
                title="Law Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.918951013799!2d107.61263587481243!3d-6.921696767850878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e865690cb959%3A0xb9ce2aacfab2cddd!2sMD%20Plaza%20Bandung!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="350"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.section>

      {/* =========================================================
         FOOTER
      ========================================================= */}
      <footer className="py-10 bg-black text-center text-gray-500 text-sm border-t border-gray-800 w-full">
        © 2025 Law Office of Ari Tarihoran & Andy Laxana. All rights reserved.
      </footer>

      {/* =========================================================
         FLOATING WHATSAPP BUTTON (versi elegan premium)
      ========================================================= */}
      <Link
        href="https://wa.me/6282122122161?text=Halo%20Law%20Office%20of%20Ari%20Tarihoran%20%26%20Andy%20Laxana,%20saya%20ingin%20konsultasi%20hukum."
        target="_blank"
        className="fixed bottom-6 right-6 flex items-center gap-3 px-5 py-3 rounded-full 
                   bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold 
                   shadow-lg shadow-[#25D366]/40 backdrop-blur-sm border border-white/20 
                   hover:scale-[1.03] transition-transform duration-300 z-50"
      >
        <Image
          src="/whatsapp-elegant.svg"
          alt="WhatsApp Konsultasi"
          width={28}
          height={28}
          className="drop-shadow-[0_0_4px_rgba(0,0,0,0.4)]"
        />
        Konsultasi
      </Link>
    </main>
  );
}