import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Jika di-deploy ke GitHub Pages di sub-folder (mis. /Portfolio/),
// ubah base menjadi "/Portfolio/". Untuk Vercel/Netlify biarkan "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
