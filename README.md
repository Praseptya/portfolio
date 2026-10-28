# Portofolio Muhamad Arya Praseptya

Website portofolio dengan **React (Vite)**, **Tailwind CSS**, dan **Framer Motion**.
Gaya glassmorphism, aksen Navy Blue dan Gold, Dark Mode sebagai default dengan sakelar Light Mode.

---

## 1. Menjalankan proyek

Butuh Node.js versi 18 atau lebih baru.

```bash
npm install        # sekali saja, mengunduh dependensi
npm run dev        # mode pengembangan, buka http://localhost:5173
npm run build      # membuat versi produksi di folder dist/
npm run preview    # mencoba hasil build secara lokal
```

---

## 2. Aturan emas

> **Semua konten diedit di satu file: `src/data/portfolioData.js`.**
> Anda tidak perlu membuka folder `src/components`.

Setelah menyimpan file, `npm run dev` otomatis memuat ulang halaman.
Pelajari dulu komentar di dalam `portfolioData.js`; setiap bagian dijelaskan di sana.

---

## 3. Menambah proyek baru

1. **Siapkan gambar** (opsional). Simpan di `public/projects/`, misalnya `public/projects/toko-online.jpg`.
   Rasio 16:9 (mis. 1280x720) paling pas.
2. Buka `src/data/portfolioData.js`, cari bagian `export const projects = [ ... ]`.
3. **Salin satu blok proyek** dan tempel di bawahnya (pastikan ada koma `,` di antara blok):

```js
{
  title: "Toko Online",
  shortDesc: "Platform jual beli untuk UMKM",
  role: "Full-Stack Developer",
  year: "2026",
  description: "Penjelasan proyek, 2 sampai 4 kalimat.",
  techStack: ["Laravel", "MySQL", "Tailwind CSS"],
  image: "/projects/toko-online.jpg",
  live: "https://toko-online.example.com",
  github: "https://github.com/Praseptya/toko-online",
},
```

4. Simpan. Proyek langsung muncul.

**Catatan:**
- Tidak punya demo atau repository? Isi `live: ""` atau `github: ""`. Tombolnya otomatis disembunyikan.
- Belum punya gambar, atau nama file salah? Kartu menampilkan sampul berisi huruf pertama judul.
- Path gambar selalu diawali `/projects/` (bukan `public/projects/`).

## 4. Mengedit proyek

Ubah nilai di dalam blok proyek yang bersangkutan, lalu simpan. Urutan kartu di web sama dengan urutan blok di file.

## 5. Menghapus proyek

Hapus satu blok `{ ... },` utuh dari array `projects`. Hapus juga file gambarnya di `public/projects/` jika tidak dipakai lagi.

---

## 6. Menambah, mengedit, dan menghapus keahlian (skills)

Buka `skillCategories` di `portfolioData.js`.

**Tambah skill ke kategori yang ada:**

```js
{ name: "TypeScript", icon: "typescript" },
```

**Hapus skill:** hapus barisnya.

**Tambah kategori baru:** salin satu blok kategori utuh:

```js
{
  category: "Cloud",
  items: [
    { name: "Firebase", icon: "firebase" },
  ],
},
```

### Daftar kunci ikon yang tersedia

| Kunci | Ikon | Kunci | Ikon |
|---|---|---|---|
| `php` | PHP | `python` | Python |
| `laravel` | Laravel | `pandas` | Pandas |
| `mysql` | MySQL | `numpy` | NumPy |
| `javascript` | JavaScript | `figma` | Figma |
| `typescript` | TypeScript | `git` | Git |
| `html` | HTML5 | `github` | GitHub |
| `nodejs` | Node.js | `office` | Microsoft Office |
| `react` | React | `ml` | Machine Learning |
| `vite` | Vite | `analysis` | Data Analysis |
| `tailwind` | Tailwind CSS | `chart` | Data Visualization |
| `flutter` | Flutter | `scraping` | Web Scraping |
| `dart` | Dart | `mic` | Speech / audio |
| `firebase` | Firebase | `uiux` | UI/UX Design |
| `sqlite` | SQLite | `palette` | Graphic Design |
| `code` | Ikon umum (default) | | |

Kunci yang tidak dikenal otomatis memakai ikon `code`, jadi website tidak akan error.

### Memakai ikon yang belum ada di daftar

Buka `src/utils/iconMap.jsx` (satu-satunya file di luar data yang perlu disentuh untuk kasus ini):

1. Cari nama ikon di https://react-icons.github.io/react-icons/ (untuk logo teknologi, gunakan set **Simple Icons / Si**).
2. Tambahkan di bagian `import`, mis. `SiDocker`.
3. Tambahkan satu baris di objek `iconMap`: `docker: SiDocker,`
4. Di `portfolioData.js`, tulis `{ name: "Docker", icon: "docker" }`.

---

## 7. Pengalaman (experiences)

Bagian `experiences` di `portfolioData.js`. Salin satu blok untuk menambah, hapus untuk menghapus.
Nilai `type` menentukan ikon: `"work"`, `"research"`, atau `"volunteer"`.
Urutan blok = urutan timeline dari atas ke bawah (letakkan yang terbaru paling atas).

---

## 8. Mengubah hal lain

| Yang ingin diubah | Di mana |
|---|---|
| Nama, teks yang diketik di Hero, **slogan** (`tagline`), ikon melayang (`floatingIcons`) | `profile` |
| Angka statistik animasi (IPK, jumlah proyek, dll.) | `stats` (sebagian dihitung otomatis) |
| Ringkasan "Tentang saya" dan soft skill | `about` |
| Pendidikan | `education` |
| Judul dan subjudul tiap section, menu navigasi | `sectionText`, `navLinks` |
| Email, LinkedIn, GitHub, WhatsApp | `contact` |
| Teks footer | `footerText` |
| **Foto profil** | Ganti file `public/images/profile.jpg` (nama sama), atau ubah `profile.photo` |
| **CV** | Ganti file `public/cv.pdf` (nama sama) |
| Favicon | Ganti file `public/favicon.png` |

---

## 8b. Efek visual yang ada

| Efek | File |
|---|---|
| Nama muncul huruf per huruf, parallax foto, ikon melayang | `components/Hero.jsx` |
| Pita teknologi bergulir (otomatis dari data skills) | `components/Marquee.jsx` |
| Kartu miring 3D + kilau mengikuti kursor | `components/TiltCard.jsx` |
| Tombol "magnet" | `components/Magnetic.jsx` |
| Cahaya mengikuti kursor (hanya perangkat dengan mouse) | `components/CursorGlow.jsx` |
| Garis progres scroll di atas layar | `components/ScrollProgress.jsx` |
| Latar: grid, blob cahaya, partikel emas | `components/Background.jsx` |

Untuk mematikan satu efek, hapus barisnya di `src/App.jsx` (mis. `<CursorGlow />`).

---

## 9. Mengubah warna tema

Buka `src/index.css`, bagian paling atas. Warna ditulis sebagai tiga angka `R G B`:

- `:root { ... }` adalah **Light mode**
- `.dark { ... }` adalah **Dark mode**
- `--gold` dan `--navy` adalah dua warna aksen utama

Ubah di sini dan seluruh komponen ikut berubah.

---

## 10. Struktur folder

```
arya-portfolio/
├── public/
│   ├── cv.pdf
│   ├── favicon.png
│   ├── images/profile.jpg
│   └── projects/              <- taruh thumbnail proyek di sini
├── src/
│   ├── data/portfolioData.js  <- SATU-SATUNYA FILE YANG ANDA EDIT
│   ├── components/            <- tampilan (tidak perlu disentuh)
│   ├── hooks/                 <- useTheme, useTypewriter
│   ├── utils/iconMap.jsx      <- kunci ikon -> komponen ikon
│   ├── index.css              <- warna tema & gaya kaca
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 11. Deploy

- **Vercel / Netlify:** hubungkan repository GitHub. Build command `npm run build`, output directory `dist`.
- **GitHub Pages di sub-folder** (mis. `username.github.io/Portfolio/`): ubah `base` di `vite.config.js` menjadi `"/Portfolio/"`, lalu build dan unggah isi `dist/`.

---

## 12. Pemecahan masalah

| Gejala | Penyebab umum |
|---|---|
| Layar putih setelah edit data | Kurang koma `,` antar blok, atau tanda kutip/kurung tidak tertutup. Cek pesan error di terminal. |
| Gambar proyek tidak tampil | Nama file salah, atau path tidak diawali `/projects/`. Huruf besar/kecil berpengaruh. |
| Ikon skill berbentuk `</>` | Kunci `icon` belum ada di `iconMap.jsx`. Lihat tabel di bagian 6. |
| Tema kembali ke gelap | Disimpan di browser pengunjung; default memang Dark. |
