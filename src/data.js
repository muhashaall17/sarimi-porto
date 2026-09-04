import foto from "./assets/dummy.jpg";
import fotoAgi from "./assets/pp-agi.jpg";
import fotoIsal from "./assets/pp-isal.jpg";
import fotoZai from "./assets/pp-zai.jpg";

export const teamData = [
  {
    id: "agi",
    name: "Dwi Putra Juniargi",
    ig: "agii_____",
    linkedin: "https://www.linkedin.com/in/dwi-putra-juniargi-a67bba402/",
    github: "https://github.com/AgiJuniargi",
    email: "juniargid@gmail.com",
    role: "Full Stack Developer",
    about:
      "Mahasiswa Teknik Informatika Universitas Komputer Indonesia (UNIKOM) yang memiliki minat di bidang pengembangan web. Saat ini saya sedang menikmati proses belajar membuat desain UI/UX yang menarik, sekaligus terus mengeksplorasi teknologi untuk membangun website secara full-stack.",
    photo: fotoAgi,
    edu: [
      "Rekayasa Perangkat Lunak, SMK Merdeka Bandung",
      "Teknik Informatika, Universitas Komputer Indonesia",
    ],
    edu_period: ["2020-2023", "2023-Sekarang"],
    org: [
      "Anggota Divisi Kesejahteraan Mahasiswa HMIF UNIKOM",
      "Kepala Divisi Kesejahteraan Mahasiswa HMIF UNIKOM",
    ],
    org_period: ["2024-2025", "2025-Sekarang"],
    exp: [
      "PT. Zabran Internasional Grup",
      "PT. Ideotekno Digital System",
    ],
    exp_period: ["2021", "2022"],
    exp_desc: [
      "Magang di bawah PT. Zabran Internasional Grup dengan penempatan bergantian di Importir Laptop dan Republic Laptop. Fokus utama saya adalah memastikan kualitas laptop (QC) sudah siap jual. Di luar itu, saya juga ditugaskan membantu tim kreatif dengan mendesain konten Instagram dan membuat artikel agar toko lebih dikenal.",
      "Merombak template web yang tadinya statis menjadi dinamis menggunakan CodeIgniter, sehingga kodenya jauh lebih ringkas dan rapi. Serta bekerja dalam tim sebagai Full Stack Developer untuk mengembangkan sebuah project berbasis Laravel. Menggunakan Bootstrap untuk tampilannya, serta memakai Postman untuk keperluan testing API.",
    ],
    exp_tech: [
      "Hardware QC, Canva, Copywriting",
      "MySQL, CodeIgniter, Laravel, Bootstrap, Postman",
    ],
    proj: [
      "KARAT - Kasir Akurat",
    ],
    proj_desc: [
      "Membangun aplikasi Point of Sales (POS) dari tahap awal hingga akhir. Mulai dari merancang UI/UX menggunakan Figma, hingga tahap implementasi dan pengelolaan database menggunakan PHP Native, MySQL, dan Bootstrap. Aplikasi ini dirancang untuk memudahkan pengelolaan transaksi penjualan, inventaris, dan laporan keuangan secara efisien.",
    ],
    proj_tech: [
      "Figma, PHP, MySQL, Bootstrap",
    ],
    skill: [
      // Bahasa Pemrograman
      "PHP",
      "JavaScript",
      "Python",

      // Frontend & UI
      "React",
      "Vite",
      "Tailwind CSS",

      // Backend & Database
      "Laravel",
      "CodeIgniter",
      "MySQL",

      // Tools
      "Git",
      "GitHub",
      "Figma",
    ],
  },
  {
    id: "faishal",
    name: "Muhammad Faishal Rahmani",
    ig: "muhashaall17_",
    linkedin: "https://www.linkedin.com/in/muhammad-faishal-rahmani-64469522b",
    github: "https://github.com/muhashaall17",
    email: "muhashaall17@gmail.com",
    role: "Full Stack Developer",
    about:
      "Mahasiswa Teknik Informatika UNIKOM dengan rekam jejak dalam pengembangan Fullstack Web (Laravel, React, Vite) dan aplikasi mobile Android native (Java). Aktif sebagai pengurus HMIF dan terbiasa merancang arsitektur sistem secara menyeluruh. Saya antusias mengeksplorasi teknologi baru dan memecahkan tantangan logika untuk menciptakan solusi perangkat lunak yang efisien.",
    photo: fotoIsal,
    edu: [
      "Rekayasa Perangkat Lunak, SMKN 2 Cimahi",
      "Teknik Informatika, Universitas Komputer Indonesia",
    ],
    edu_period: ["2019-2022", "2023-Sekarang"],
    org: [
      "Anggota Divisi Pengembangan Aparatur Organisasi HMIF UNIKOM",
      "Kepala Divisi Pengembangan Aparatur Organisasi HMIF UNIKOM",
    ],
    org_period: ["2024-2025", "2025-Sekarang"],
    exp: [
      "PT.Bara Prima Multi Teknovasi",
      "PT. Neraca Inti Bisnis",
      "GENZ Management",
    ],
    exp_period: ["2021", "2022-2023", "2026"],
    exp_desc: [
      "Membangun sistem pemesanan tiket bioskop berbasis web dari tahap inisiasi dengan alur kerja iteratif, melibatkan pelaporan dan evaluasi progres (sprint review) setiap dua minggu.",
      "Merancang fitur end-to-end aplikasi web akuntansi dan manajemen arus kas, serta berperan ganda sebagai Junior QA untuk melakukan pengujian fungsionalitas sistem sebelum perilisan.",
      "Mengembangkan antarmuka pengguna dan logika transaksi pada aplikasi Point of Sale (POS) berbasis web yang dirancang khusus untuk efisiensi operasional restoran.",
    ],
    exp_tech: [
      "Laravel, MySQL, Bootstrap",
      "CodeIgniter, Ajax, MySQL, Metronic UI",
      "Laravel, Tailwind CSS, Vite, MySQL",
    ],
    proj: [
      "MyCashflow - Personal Finance Tracker",
      "Car Rental Management System",
      "Cinema17 - Ticket Booking System",
    ],
    proj_desc: [
      "Mengembangkan aplikasi pencatatan keuangan fullstack yang terintegrasi untuk melacak arus kas (pemasukan dan pengeluaran) harian. Dilengkapi dengan dasbor analitik interaktif untuk pemantauan data keuangan secara real-time. Aplikasi ini beroperasi dengan stabil dan digunakan secara aktif untuk manajemen aset pribadi.",
      "Merancang sistem manajemen penyewaan kendaraan dengan fokus pada validasi ketersediaan inventaris. Mengimplementasikan logika booking (pemesanan) ketat yang otomatis mengunci data untuk mencegah pemesanan ganda (double-booking) saat kendaraan berstatus sedang disewa. Proyek ini dieksplorasi secara iteratif menggunakan berbagai tech stack untuk menguji fleksibilitas dan skalabilitas sistem.",
      "Membangun dan memelihara aplikasi pemesanan tiket bioskop secara berkelanjutan. Bermula dari proyek magang, sistem ini secara rutin dilakukan refactoring (pengoptimalan kode) pada logika backend dan pembaruan desain antarmuka (UI/UX) agar selaras dengan standar pengembangan web yang lebih modern.",
    ],
    proj_tech: [
      "Laravel, React, Vite, Tailwind.",
      "Laravel, React, Vite, Tailwind.",
      "Laravel, React, Vite, Tailwind.",
    ],
    skill: [
      // Bahasa Pemrograman
      "PHP",
      "JavaScript",
      "Java",

      // Frontend & UI
      "React",
      "Vite",
      "Tailwind CSS",
      "Metronic UI",

      // Backend & Database
      "Laravel",
      "Ajax",
      "CodeIgniter",
      "MySQL",
      "RESTful API Integration",

      // Tools
      "Git",
      "GitHub",
      "Figma",

      // Arsitektur & Analisis Sistem
      "System Architecture & UML",
      "Software Quality Assurance (QA) Testing",
    ],
  },
  {
    id: "zaidan", 
    name: "Muhammad Zaidan Azhari",
    ig: "mzaidanazharii",
    linkedin: "https://www.linkedin.com/in/muhammad-zaidan-azhari-42b812380?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/mzaidanazhari",
    email: "mzaidanazhari@gmail.com",
    role: "Frontend Developer", 
    about: "Mahasiswa Teknik Informatika di Universitas Komputer Indonesia (UNIKOM) dengan minat besar pada pengembangan perangkat lunak dan teknologi digital. Memiliki rasa ingin tahu yang tinggi, saya selalu terdorong untuk mengeksplorasi hal-hal baru, mendalami teknologi terkini, dan terus mengasah keterampilan teknis maupun nonteknis melalui berbagai proyek praktis. Bagi saya, proses belajar yang konsisten dan kemampuan beradaptasi adalah kunci utama untuk menciptakan solusi teknologi yang bermanfaat dan relevan dengan kebutuhan industri.",
    photo: fotoZai, 
    
    // Riwayat Pendidikan
    edu: [
      "Teknik Informatika, Universitas Komputer Indonesia",
    ],
    edu_period: ["2023-Sekarang"],
    
    // Organisasi
    org: [
      "Anggota Divisi Sosial dan Keagamaan HMIF UNIKOM",
      "Anggota Divisi Sosial dan Keagamaan HMIF UNIKOM",
    ],
    org_period: ["2024-2025", "2025-Sekarang"],
    
    // Pengalaman Pelatihan & Studi Independen
    exp: [
      "CodingCamp Powered by DBS Foundation (Studi Independen)",
    ],
    exp_period: ["2026"],
    exp_desc: [
      "Mengikuti program beasiswa intensif pada alur belajar Full-Stack Web Developer. Mempelajari arsitektur web modern dari sisi frontend hingga backend, integrasi API, basis data, serta pembekalan soft skills dan literasi finansial. Program diakhiri dengan pengerjaan Capstone Project berupa pengembangan aplikasi web end-to-end secara kolaboratif sesuai standar kesiapan kerja industri.",
    ],
    exp_tech: [
      "React + Vite Web App, Tailwind css, React Router, Chart JS",
      "Node JS, Express JS, MySQL, Prisma ORM",
    ],
    
    // Proyek Portofolio
    proj: [
      "AMATI",
    ],
    proj_desc: [
      "AMATI, singkatan dari Adaptive Mathematics Analysis & Teaching Interactive, adalah sebuah platform pembelajaran adaptif berbasis web yang dirancang khusus untuk mata pelajaran Matematika siswa kelas 7 SMP. Berbeda dengan platform biasa yang bersifat statis, AMATI memanfaatkan AI untuk mengevaluasi riwayat belajar siswa secara longitudinal untuk mendeteksi kelemahan spesifik mereka. Dari data tersebut, sistem akan menyusun peta jalan belajar prasyarat yang sepenuhnya personal bagi masing-masing siswa.",
    ],
    proj_tech: [
      "Front End : React + Vite Web App, Tailwind css, React Router, Chart JS",
      "Back End : Node JS, Express JS, MySQL, Prisma ORM",
    ],
    
    // Keahlian / Skill
    skill: [
      "JavaScript",
      "React",
      "Tailwind CSS",
    ],
  }
];
