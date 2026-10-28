/* =====================================================================
   PORTFOLIO DATA  -  SATU-SATUNYA FILE YANG PERLU ANDA EDIT
   =====================================================================
   Semua teks, skill, proyek, dan pengalaman di website dibaca dari file ini.
   Anda TIDAK perlu menyentuh file di folder src/components.

   CARA CEPAT:
   - Tambah item   : salin satu blok { ... } yang ada, tempel di bawahnya
                     (jangan lupa koma di antara blok), lalu ubah isinya.
   - Hapus item    : hapus satu blok { ... } beserta komanya.
   - Ubah urutan   : pindahkan blok ke atas/bawah. Urutan di sini = urutan di web.
   - Teks kosong   : isi dengan "" jika tidak ingin ditampilkan
                     (contoh: proyek tanpa demo -> live: "").

   Panduan lengkap ada di README.md.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. PROFIL UTAMA (dipakai di Hero, Navbar, Footer, About)
   --------------------------------------------------------------------- */
export const profile = {
  name: "Muhamad Arya Praseptya",
  brand: "ARYA",                       // logo teks di Navbar
  greeting: "Halo, saya",              // teks kecil di atas nama
  // Teks yang diketik bergantian di Hero. Tambah/hapus baris sesuka Anda.
  roles: [
    "Web Developer",
    "Mobile App Developer (Flutter)",
    "Machine Learning Enthusiast",
    "UI/UX Designer",
  ],
  // SLOGAN di bawah nama. Ganti teks ini sesuka Anda.
  tagline:
    "Dirancang dengan teliti, dibangun dengan presisi.",
  // Ikon teknologi yang melayang di sekitar foto (pakai kunci ikon, maks. 4).
  floatingIcons: ["flutter", "python", "laravel", "react"],
  photo: "/images/profile.jpg",        // file ada di public/images/
  cv: "/cv.pdf",                       // file ada di public/ (ganti file untuk update CV)
  location: "Bogor, Jawa Barat, Indonesia",
};


/* ---------------------------------------------------------------------
   2. TEKS JUDUL SECTION & NAVIGASI
   id harus sama persis dengan id section di komponen (jangan diubah).
   Anda bebas mengubah label & judulnya.
   --------------------------------------------------------------------- */
export const navLinks = [
  { id: "about", label: "Tentang" },
  { id: "experience", label: "Pengalaman" },
  { id: "skills", label: "Keahlian" },
  { id: "projects", label: "Proyek" },
  { id: "contact", label: "Kontak" },
];

export const sectionText = {
  about: { title: "Tentang saya" },
  experience: {
    title: "Pengalaman",
    subtitle: "Magang, penelitian, dan kegiatan yang membentuk cara saya bekerja.",
  },
  skills: {
    title: "Keahlian",
    subtitle: "Teknologi dan alat yang saya gunakan sehari-hari.",
  },
  projects: {
    title: "Proyek",
    subtitle: "Beberapa karya yang pernah saya bangun.",
  },
  contact: {
    title: "Mari berdiskusi",
    subtitle:
      "Tertarik berkolaborasi atau punya peluang kerja? Kirim pesan, saya akan membalas secepatnya.",
  },
};

// Teks tombol di Hero
export const heroButtons = {
  primary: { label: "Lihat proyek", target: "projects" },
  secondary: { label: "Lihat CV" }, // otomatis memakai profile.cv
  scrollHint: "Gulir",              // teks kecil di dasar Hero
};


/* ---------------------------------------------------------------------
   3. TENTANG SAYA
   --------------------------------------------------------------------- */
export const about = {
  // Paragraf ringkasan (diambil dari CV). Tiap string = satu paragraf.
  paragraphs: [
    "Lulusan S1 Ilmu Komputer Universitas Pakuan dengan minat pada pengembangan perangkat lunak, analisis data, dan machine learning.",
    "Berpengalaman mengembangkan aplikasi web dan mobile, mengolah serta menganalisis data menggunakan Python, dan membuat desain grafis dasar. Saya mampu bekerja mandiri maupun dalam tim, mudah beradaptasi, dan terus belajar untuk mengembangkan kemampuan teknis.",
  ],
  // Soft skill ditampilkan sebagai chip kecil
  softSkills: [
    "Problem Solving",
    "Time Management",
    "Teamwork",
    "Communication",
    "Adaptability",
    "Willingness to Learn",
  ],
};

// Riwayat pendidikan (tampil di kartu samping About)
export const education = [
  {
    degree: "S1 Ilmu Komputer",
    school: "Universitas Pakuan",
    period: "September 2022 - Juli 2026",
    detail: "IPK 3.46",
  },
];


/* ---------------------------------------------------------------------
   4. PENGALAMAN (EXPERIENCES)
   Tampil sebagai timeline, dari atas ke bawah.

   Field:
   - type         : jenis ikon -> "work" | "research" | "volunteer"
                    (daftar lengkap kunci ikon ada di src/utils/iconMap.jsx)
   - title        : judul peran/kegiatan
   - organization : nama perusahaan / institusi
   - period       : tulis bebas, mis. "Agustus - Oktober 2025"
   - description  : penjelasan singkat
   - tags         : daftar teknologi (boleh dikosongkan: [])
   --------------------------------------------------------------------- */
export const experiences = [
  {
    type: "research",
    title: "Proyek Skripsi: Speech Recognition untuk Pembelajaran Pronunciation",
    organization: "Universitas Pakuan",
    period: "Maret - Juli 2026",
    description:
      "Penelitian berjudul \"Model Speech Recognition Menggunakan Google ASR dan Autoregressive Predictive Coding - Long Short-Term Memory untuk Pembelajaran Pronunciation\". Mengolah data suara, menerapkan speech recognition, mengembangkan dan menguji model, lalu mengimplementasikan hasilnya pada aplikasi pembelajaran mobile dengan Flutter.",
    tags: ["Python", "Google ASR", "APC", "LSTM", "Flutter", "SQLite"],
  },
  {
    type: "work",
    title: "Praktik Kerja Lapangan, Full-Stack Web Developer",
    organization: "PT Media Televisi Indonesia (Metro TV)",
    period: "Agustus - Oktober 2025",
    description:
      "Mengembangkan aplikasi Program Budgeting berbasis web. Mengerjakan frontend dan backend: perancangan antarmuka, logika aplikasi, pengelolaan database, hingga integrasi antarfitur sesuai kebutuhan sistem.",
    tags: ["PHP", "Laravel", "MySQL"],
  },
  {
    type: "volunteer",
    title: "Volunteer, Divisi Keamanan",
    organization: "Festival MIPA",
    period: "25 - 28 November 2024",
    description:
      "Membantu menjaga ketertiban dan keamanan selama acara berlangsung serta bekerja sama dengan anggota panitia lainnya.",
    tags: [],
  },
];


/* ---------------------------------------------------------------------
   5. KEAHLIAN (SKILLS)
   Dikelompokkan per kategori. Tiap kategori tampil sebagai satu panel.

   Field skill:
   - name : nama yang tampil
   - icon : kunci ikon (huruf kecil). Lihat daftar di src/utils/iconMap.jsx
            atau tabel di README.md. Jika kunci tidak ditemukan,
            otomatis memakai ikon "code" bawaan.

   Menambah skill  : tambah { name: "...", icon: "..." } ke daftar "items".
   Menghapus skill : hapus barisnya.
   Kategori baru   : salin satu blok kategori utuh.
   --------------------------------------------------------------------- */
export const skillCategories = [
  {
    category: "Web & Backend",
    items: [
      { name: "PHP", icon: "php" },
      { name: "Laravel", icon: "laravel" },
      { name: "MySQL", icon: "mysql" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: "flutter" },
      { name: "Dart", icon: "dart" },
      { name: "Firebase", icon: "firebase" },
      { name: "SQLite", icon: "sqlite" },
    ],
  },
  {
    category: "Data & AI",
    items: [
      { name: "Python", icon: "python" },
      { name: "Machine Learning", icon: "ml" },
      { name: "Prompting", icon: "prompting" },
      { name: "Data Analysis", icon: "analysis" },
      { name: "Data Visualization", icon: "chart" },
      { name: "Web Scraping", icon: "scraping" },
    ],
  },
  {
    category: "Design & Tools",
    items: [
      { name: "UI/UX Design", icon: "shape" },
      { name: "Graphic Design", icon: "palette" },
      { name: "Figma", icon: "figma" },
      { name: "Canva", icon: "pen" },
      { name: "Git", icon: "git" },
      { name: "Microsoft Office", icon: "office" },
    ],
  },
];


/* ---------------------------------------------------------------------
   6. PROYEK (PROJECTS)
   Tampil sebagai kartu. Urutan di sini = urutan di web.

   Field:
   - title       : judul proyek
   - shortDesc   : satu baris subjudul
   - role        : peran Anda
   - year        : tahun (teks)
   - description : penjelasan (kartu bisa dibuka "Selengkapnya")
   - techStack   : daftar teknologi (teks bebas)
   - image       : path gambar thumbnail. Simpan file di folder public/projects/
                   lalu tulis "/projects/nama-file.jpg".
                   Jika kosong "" atau file tidak ada, tampil sampul otomatis
                   berisi inisial judul.
   - live        : tautan demo/website. Isi "" jika tidak ada (tombol disembunyikan).
   - github      : tautan repository. Isi "" jika tidak ada (tombol disembunyikan).
   --------------------------------------------------------------------- */
export const projects = [
  {
    title: "LingoJoy",
    shortDesc: "Aplikasi latihan pelafalan berbasis speech recognition",
    role: "UI/UX & Machine Learning Developer",
    year: "2026",
    description:
      "Aplikasi mobile offline-first untuk melatih pelafalan bahasa Inggris. Menggabungkan Google ASR saat online dan model APC-LSTM on-device sebagai cadangan saat offline. Skor kemiripan dihitung dengan Levenshtein Distance sehingga umpan balik muncul seketika, lengkap dengan modul latihan terstruktur dan penyimpanan lokal SQLite.",
    techStack: ["Flutter", "Dart", "Python", "APC-LSTM", "Google ASR", "SQLite"],
    image: "/projects/lingojoy.jpg",
    live: "",
    github: "https://github.com/Praseptya",
  },
  {
    title: "Program Budgeting System",
    shortDesc: "Manajemen anggaran produksi televisi",
    role: "Full-Stack Developer",
    year: "2025",
    description:
      "Aplikasi web internal PT Media Televisi Indonesia untuk menggantikan pengajuan anggaran produksi yang sebelumnya manual. Menyediakan entri data terstruktur, pelacakan biaya, dan alur persetujuan bertingkat, dengan dashboard dan rincian pengeluaran yang bisa dipantau tiap tim produksi.",
    techStack: ["PHP", "Laravel", "MySQL", "Figma"],
    image: "/projects/budgeting.jpg",
    live: "",
    github: "https://github.com/Praseptya",
  },
  {
    title: "KasirWarteg",
    shortDesc: "Aplikasi sistem kasir dan manajemen warung makan",
    role: "Front-End Developer",
    year: "2021",
    description:
      "Aplikasi sistem point-of-sale (POS) dan manajemen pencatatan transaksi untuk warung makan. Dirancang untuk mempermudah perhitungan pesanan menu, pengelolaan stok bahan makanan secara real-time, serta pencatatan laporan pendapatan harian dan bulanan dengan antarmuka yang ramah pengguna.",
    techStack: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
    image: "/projects/kasirwarteg.jpg",
    live: "",
    github: "https://github.com/Praseptya",
  },
  {
    title: "Discorso",
    shortDesc: "Aplikasi media sosial mobile",
    role: "Mobile Developer & UI/UX Designer",
    year: "2025",
    description:
      "Aplikasi media sosial minimalis dengan feed real-time, autentikasi, dan interaksi pengguna. Dibangun dengan Flutter dan Firebase untuk manajemen data awan secara real-time, dilengkapi dark mode dan moderasi konten.",
    techStack: ["Flutter", "Dart", "Firebase", "UI/UX"],
    image: "/projects/discorso.jpg",
    live: "",
    github: "https://github.com/Praseptya",
  },
];


/* ---------------------------------------------------------------------
   7. KONTAK & MEDIA SOSIAL
   Field:
   - label : nama yang tampil
   - icon  : "mail" | "linkedin" | "github" | "whatsapp" | "phone" | "instagram"
   - value : teks yang tampil di kartu
   - href  : tautan tujuan (mailto:, https://, tel:)
   Hapus blok yang tidak ingin ditampilkan.
   --------------------------------------------------------------------- */
export const contact = {
  email: "m.arya.praseptya@gmail.com", // dipakai juga untuk tombol "Kirim email"
  emailButton: "Kirim email",
  links: [
    {
      label: "Email",
      icon: "mail",
      value: "m.arya.praseptya@gmail.com",
      href: "mailto:m.arya.praseptya@gmail.com",
    },
    {
      label: "WhatsApp",
      icon: "whatsapp",
      value: "+62 877-8883-2002",
      href: "https://wa.me/6287788832002", // format: wa.me/62 + nomor tanpa angka 0 di depan
    },
    {
      label: "LinkedIn",
      icon: "linkedin",
      value: "Muhamad Arya Praseptya",
      href: "https://linkedin.com/in/praseptyaa", // dari website lama; pastikan masih benar
    },
    {
      label: "GitHub",
      icon: "github",
      value: "Praseptya",
      href: "https://github.com/Praseptya",
    },
  ],
};

/* ---------------------------------------------------------------------
   8. ANGKA STATISTIK (tampil di section Tentang)
   Angka animasi yang menghitung naik saat di-scroll.
   - value yang memakai .length dihitung OTOMATIS dari data di atas,
     jadi bertambah sendiri saat Anda menambah proyek/pengalaman/skill.
   - decimals : jumlah angka di belakang koma (IPK = 2).
   --------------------------------------------------------------------- */
export const stats = [
  { label: "IPK", value: 3.46, decimals: 2 },
  { label: "Proyek", value: projects.length },
  { label: "Pengalaman", value: experiences.length },
  {
    label: "Keahlian",
    value: skillCategories.reduce((n, c) => n + c.items.length, 0),
  },
];

// Teks footer. Tahun diisi otomatis.
export const footerText = "Alumni Universitas Pakuan.";
