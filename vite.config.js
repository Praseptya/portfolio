import fs from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
 
// Plugin kecil: "import x from './file.pdf?base64'" menghasilkan isi file sebagai teks base64.
// Dipakai agar pratinjau CV tidak perlu mengunduh PDF lewat jaringan (tidak dicegat IDM).
function pdfBase64() {
  return {
    name: "pdf-base64",
    enforce: "pre",
    load(id) {
      if (!id.endsWith(".pdf?base64")) return null;
      const file = id.slice(0, -"?base64".length);
      this.addWatchFile(file); // CV diganti -> otomatis dimuat ulang saat npm run dev
      return `export default "${fs.readFileSync(file).toString("base64")}";`;
    },
  };
}
 
// Jika di-deploy ke GitHub Pages di sub-folder (mis. /Portfolio/),
// ubah base menjadi "/Portfolio/". Untuk Vercel/Netlify biarkan "/".
export default defineConfig({
  plugins: [pdfBase64(), react()],
  base: "/",
});