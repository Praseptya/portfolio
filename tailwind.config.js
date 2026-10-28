/** @type {import('tailwindcss').Config} */

// Warna dibaca dari CSS variable (lihat src/index.css) supaya
// Dark/Light mode cukup mengganti nilai variable, bukan class per elemen.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: v("bg"),
        fg: v("fg"),
        muted: v("muted"),
        navy: v("navy"),
        gold: v("gold"),
        "gold-text": v("gold-text"),
        line: v("line"),
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        rise: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "12%": { opacity: "0.9" },
          "100%": { transform: "translateY(-115vh)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        rise: "rise 20s linear infinite",
      },
    },
  },
  plugins: [],
};
