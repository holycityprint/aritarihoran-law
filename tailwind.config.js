/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#0F1115",   // hitam kebiruan lembut
        dark2:  "#181B20",   // abu gelap untuk kontras section
        accent: "#00B3FF",   // biru neon (opsional)
        softwhite: "#E2E5EA",// teks terang lembut

        // ✨ palet emas mengkilap
        goldLight: "#F6E27A", // sisi terang
        goldDeep:  "#C5A572", // sisi gelap
        gold: "#D4AF37",      // emas murni (untuk teks umum)
      },
    },
  },
  plugins: [],
};