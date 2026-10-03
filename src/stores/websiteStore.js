import { defineStore } from 'pinia'
import { portfolioItems as defaultPortfolioItems } from 'src/data/portfolio.js'
import { supabase } from 'src/supabase.js'

const defaultClients = [
  { id: 1, name: 'PT Brantas Abipraya', image: 'images/abipraya.png' },
  { id: 2, name: 'APG', image: 'images/apg.png' },
  { id: 3, name: 'Lippo Group', image: 'images/lippo.png' },
  { id: 4, name: 'AGC Group', image: 'images/agc.png' },
  { id: 5, name: 'KAI Properti', image: 'images/kaiproperti.png' },
  { id: 6, name: 'Meiji', image: 'images/meiji.png' },
  { id: 7, name: 'NIE', image: 'images/nie.png' },
  { id: 8, name: 'PT Mastertama Adhi Propertindo', image: 'images/mastertama.png' },
  { id: 9, name: 'Seishin', image: 'images/seishin.png' }
]

const defaultSolutions = [
  { id: 1, name: 'Kebocoran', description: 'Jaga Rumah Bebas Bocor', icon: 'plumbing', color: 'blue' },
  { id: 2, name: 'Cat', description: 'Warnai Rumahmu', icon: 'format_paint', color: 'red' },
  { id: 3, name: 'Keramik', description: 'Percantik Lantai dan Dindingmu', icon: 'grid_view', color: 'orange' },
  { id: 4, name: 'Listrik', description: 'Rumah Terang, Hati Senang', icon: 'electrical_services', color: 'green' },
  { id: 5, name: 'Pipa', description: 'Air Mengalir Lancar', icon: 'water', color: 'cyan' },
  { id: 6, name: 'Toilet', description: 'Kamar Mandi Bersih dan Nyaman', icon: 'bathroom', color: 'teal' },
  { id: 7, name: 'Konsultan', description: 'Bantu Rencanakan Proyekmu', icon: 'support_agent', color: 'amber' },
  { id: 8, name: 'Plafon', description: 'Atap Indah, Ruangan Megah', icon: 'roofing', color: 'indigo' }
]

const defaultHeroSlides = [
  {
    name: 'konstruksi',
    title: 'Pembangunan Gedung & <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">Rumah Berkualitas</span>',
    subtitle: 'Mulai dari pondasi hingga finishing akhir, kami membangun dengan struktur kokoh, material terbaik, dan pengawasan profesional dari tim ahli kami.',
    image: 'images/construction_hero.png'
  },
  {
    name: 'renovasi',
    title: 'Renovasi Rumah & Ruko <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">Secara Transparan</span>',
    subtitle: 'Perbaikan kebocoran, pengecatan ulang, perluasan lantai, hingga sekat interior ruang dengan rincian Rencana Anggaran Biaya (RAB) yang transparan dan jujur.',
    image: 'images/renovation_hero.png'
  },
  {
    name: 'concrete',
    title: 'Lantai Beton Dekoratif <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">Motif Batu</span>',
    subtitle: 'Solusi lantai carport, teras, halaman, dan pedestrian yang indah bermotif batu alam dengan daya tahan beton cor yang kokoh.',
    image: 'images/stamp_concrete_hero.png'
  }
]

const defaultVisiMisi = {
  visi: 'Menjadi perusahaan General Contractor dan General Supplier yang profesional, terpercaya, dan berdaya saing, serta berkontribusi dalam pembangunan berkelanjutan di Indonesia',
  misi: [
    'Memberikan layanan berkualitas dan tepat waktu',
    'Mengutamakan keselamatan kerja dan mutu',
    'Meningkatkan kompetensi SDM',
    'Menjaga kepercayaan dan kepuasan klien'
  ]
}

const defaultAboutTitle = 'General Contractor & Supplier PT Agra Abhinaya Perkasa'
const defaultAboutText = 'PT AGRA ABHINAYA PERKASA adalah perusahaan yang bergerak di bidang General Contractor dan General Supplier, didirikan pada tahun 2022.\n\nKami menyediakan layanan pelaksanaan konstruksi serta pengadaan barang dan material pendukung proyek dengan mengutamakan kualitas, ketepatan waktu, dan keselamatan kerja.\n\nDengan dukungan sumber daya manusia yang kompeten dan manajemen yang profesional, PT AGRA ABHINAYA PERKASA berkomitmen menjadi mitra terpercaya bagi klien dari sektor swasta maupun pemerintah.'

const defaultCompanyStats = [
  {
    icon: 'map',
    title: 'Proyek Selesai',
    desc: 'Berbagai proyek konstruksi rumah mewah, ruko, gedung, dan perkerasan jalan di area Jabodetabek.'
  },
  {
    icon: 'assignment_turned_in',
    title: 'Kepuasan Klien',
    desc: 'Mengutamakan kualitas material terbaik, pengawasan ketat, serta rencana anggaran biaya yang transparan.'
  },
  {
    icon: 'gradient',
    title: 'Stamp Concrete',
    desc: 'Pakar pengerjaan lantai beton dekoratif bermotif batu alam dan kayu yang kokoh, berestetika tinggi, dan awet.'
  }
]

const defaultOfficeSlides = [
  {
    image: 'images/halamandepan.jpeg',
    title: 'Halaman Depan Kantor',
    desc: 'Area halaman dan akses masuk utama kantor pusat PT Agra Abhinaya Perkasa yang bersih, rapi, dan berlokasi strategis di Cikarang Timur.'
  },
  {
    image: 'images/ruang meeting.jpeg',
    title: 'Ruang Rapat & Kolaborasi',
    desc: 'Ruang meeting yang representatif untuk berdiskusi dengan klien, membahas detail teknis gambar kerja, serta visualisasi rencana pembangunan.'
  },
  {
    image: 'images/ruangadmin.jpeg',
    title: 'Ruang Admin & Operasional',
    desc: 'Area operasional administrasi untuk pengelolaan dokumen proyek, estimasi anggaran biaya (RAB), dan layanan pelanggan.'
  },
  {
    image: 'images/ruangkoridor.jpeg',
    title: 'Ruang Koridor Kantor',
    desc: 'Koridor penghubung antar ruangan kerja di dalam kantor pusat kami yang bersih dan tertata rapi demi kenyamanan aktivitas harian.'
  }
]

const defaultAdvantagesBubble = 'Halo! Saya siap membantu mewujudkan proyek impian Anda dengan kualitas terbaik. Yuk, lihat keunggulan kami di samping!'
const defaultAdvantagesMascot = 'images/mascot_illustration.jpg'
const defaultAdvantagesList = [
  {
    icon: 'verified_user',
    title: 'Profesional & Berpengalaman',
    desc: 'Didukung tim ahli teknik sipil dan arsitek profesional yang berdedikasi tinggi.'
  },
  {
    icon: 'schedule',
    title: 'Kualitas & Ketepatan Waktu',
    desc: 'Menjamin mutu material konstruksi standar SNI dengan jadwal pengerjaan yang terencana rapi.'
  },
  {
    icon: 'health_and_safety',
    title: 'Komitmen Keselamatan Kerja (K3)',
    desc: 'Keselamatan dan kesehatan kerja menjadi prioritas utama dalam seluruh aktivitas proyek.'
  },
  {
    icon: 'task_alt',
    title: 'Manajemen Proyek yang Terstruktur',
    desc: 'Perencanaan, pelaksanaan, dan pengawasan proyek dilakukan secara sistematis dan terkontrol.'
  },
  {
    icon: 'handshake',
    title: 'Mitra yang Dapat Dipercaya',
    desc: 'Kami membangun hubungan kerja jangka panjang berdasarkan kepercayaan dan komunikasi yang baik dengan klien.'
  }
]

const defaultServicesTitle = 'Solusi Konstruksi Terbaik Untuk Kebutuhan Anda'
const defaultServicesList = [
  {
    title: 'Konstruksi',
    desc: 'Agra melayani pembangunan baru rumah, ruko, gedung, dan gudang dengan struktur kokoh, material teruji, serta pengawasan mandor berpengalaman.',
    image: 'images/kontruksi.png',
    detailTitle: 'Konstruksi',
    detailDesc: 'Melayani pembangunan baru dari nol untuk rumah tinggal, ruko komersial, gedung perkantoran, dan gudang industri dengan standar mutu tinggi.',
    bulletsText: 'Struktur SNI Kokoh\nRAB Transparan\nArsitek & Sipil Profesional',
    link: '/konstruksi',
    badge: '',
    activeBg: 'bg-[#0B192C]'
  },
  {
    title: 'Borongan',
    desc: 'Agra menyediakan solusi layanan borongan menyeluruh untuk kelancaran pembangunan dan renovasi besar agar prosesnya jadi mudah.',
    image: 'images/borongan.png',
    detailTitle: 'Borongan',
    detailDesc: 'Mengerjakan perbaikan bangunan secara borongan untuk rumah, kantor, ruko, apartemen dan lainnya. Termasuk survey + jasa + material + pengawasan.',
    bulletsText: 'Harga Transparan\nBertanggung jawab\nBergaransi',
    link: '/borongan',
    badge: 'Full Service',
    activeBg: 'bg-[#4E201B]'
  },
  {
    title: 'Tukang Harian',
    desc: 'Agra menyediakan solusi perbaikan rumah terencana oleh tenaga tukang berpengalaman agar kamu dan keluarga dapat hidup nyaman.',
    image: 'images/harian.png',
    detailTitle: 'Tukang Harian',
    detailDesc: 'Penyediaan tenaga tukang terampil harian untuk perbaikan kecil/besar, perapihan dinding, kusen pintu, pipa bocor, instalasi listrik, dan lainnya.',
    bulletsText: 'Tenaga Tukang Profesional\nHarga Flat Transparan\nTanpa Minimum Order',
    link: '/tukang-harian',
    badge: '',
    activeBg: 'bg-[#6B1D1D]'
  }
]

const defaultTukangHarianSlides = [
  'images/tukang_harian_hero.png',
  'images/tukang_harian_hero2.png',
  'images/tukang_harian_hero3.png'
]

const defaultTukangHarianExtra = [
  { title: 'Pipa', desc: 'Air Mengalir Lancar', icon: 'water', color: 'bg-gradient-to-br from-cyan-400 to-cyan-600' },
  { title: 'Toilet', desc: 'Kamar Mandi Bersih dan Nyaman', icon: 'bathroom', color: 'bg-gradient-to-br from-teal-400 to-teal-600' },
  { title: 'Konsultan', desc: 'Bantu Rencanakan Proyekmu', icon: 'engineering', color: 'bg-gradient-to-br from-amber-400 to-amber-600' },
  { title: 'Plafon', desc: 'Kebutuhan Langit-langit Rumahmu', icon: 'roofing', color: 'bg-gradient-to-br from-indigo-400 to-indigo-600' },
  { title: 'Dinding/Tembok', desc: 'Dinding Kokoh dan Terjaga', icon: 'foundation', color: 'bg-gradient-to-br from-red-400 to-red-600' },
  { title: 'Pintu/Jendela', desc: 'Kreasi Pintu dan Jendela Rumahmu', icon: 'door_front', color: 'bg-gradient-to-br from-purple-400 to-purple-600' },
  { title: 'Atap/Dak Beton', desc: 'Atap Pelindung Rumahmu', icon: 'roofing', color: 'bg-gradient-to-br from-sky-400 to-sky-600' },
  { title: 'Dapur', desc: 'Biar Lebih Semangat Memasak', icon: 'kitchen', color: 'bg-gradient-to-br from-violet-400 to-violet-600' },
  { title: 'Jasa Angkat', desc: 'Bantu Pindahkan Barang-barangmu', icon: 'move_to_inbox', color: 'bg-gradient-to-br from-orange-400 to-orange-600' },
  { title: 'Conblock', desc: 'Agar Pekarangan Rumahmu Indah', icon: 'grid_on', color: 'bg-gradient-to-br from-yellow-500 to-orange-500' },
  { title: 'Aluminium Aksesoris', desc: 'Percantik Interior Rumahmu', icon: 'window', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
  { title: 'Exhaust Fan', desc: 'Udara Ruangan Segar dan Bersih', icon: 'air', color: 'bg-gradient-to-br from-emerald-400 to-green-600' },
  { title: 'Kipas Angin', desc: 'Biar Rumahmu Lebih Adem', icon: 'air', color: 'bg-gradient-to-br from-green-400 to-teal-500' },
  { title: 'Batu Alam', desc: 'Sentuhan Alam di Rumahmu', icon: 'landscape', color: 'bg-gradient-to-br from-stone-400 to-red-700' },
  { title: 'Lemari', desc: 'Jaga Barang-barang Pentingmu', icon: 'inventory_2', color: 'bg-gradient-to-br from-violet-500 to-purple-700' },
  { title: 'Tangki Air Toren', desc: 'Pasang Tangki Air di Rumahmu', icon: 'water_drop', color: 'bg-gradient-to-br from-blue-400 to-blue-600' },
  { title: 'Tangki Bawah Tanah', desc: 'Solusi Penampungan Air Bawah Tanah', icon: 'storage', color: 'bg-gradient-to-br from-sky-500 to-blue-700' },
  { title: 'Water Heater', desc: 'Air Mandi Hangat dan Nyaman', icon: 'local_fire_department', color: 'bg-gradient-to-br from-blue-400 to-cyan-500' },
  { title: 'Kanopi', desc: 'Lindungi Bagian Luar Rumahmu', icon: 'deck', color: 'bg-gradient-to-br from-sky-400 to-indigo-500' },
  { title: 'Lantai', desc: 'Agar Lantai Rumah Mulus', icon: 'square_foot', color: 'bg-gradient-to-br from-amber-500 to-orange-600' },
  { title: 'Cuci Toren', desc: 'Toren Kotor Jadi Bersih', icon: 'cleaning_services', color: 'bg-gradient-to-br from-orange-400 to-red-500' },
  { title: 'Kenek', desc: 'Bantu Pekerjaan Cepat Selesai', icon: 'handyman', color: 'bg-gradient-to-br from-yellow-500 to-amber-600' }
]

const defaultTukangHarianMaterial = {
  title: 'Titip Beli Material Bangunan',
  subtitle: 'Gak perlu repot cari material sendiri! Titip langsung ke Tukang Agra lewat kami.',
  features: [
    { title: 'Mudah', desc: 'Jenis barang akan direkomendasikan langsung oleh Tukang Agra', image: 'images/ikon.png' },
    { title: 'Transparan', desc: 'Jumlah dan harga material diketahui sebelum dibeli', image: 'images/ikon2.png' },
    { title: 'Aman', desc: 'Tidak beresiko karena pembayaran melalui konfirmasi Anda', image: 'images/ikon3.png' },
    { title: 'Nyaman', desc: 'Tidak perlu cari toko dan beli material sendiri', image: 'images/ikon4.png' }
  ]
}

const defaultTukangHarianJagoan = {
  title: 'Tukang <span class="text-red-600">Jagoan</span>',
  list: [
    { title: 'Jagoan Cat', desc: 'Cat rumah sudah kusam or terkelupas? Layanan tukang cat kami bantu membuang cat lama, melakukan cat dasar, finishing dan segala permasalahan cat lainnya. Melayani cat di dinding, plafon, pintu dan jendela kayu.', image: 'images/cat.png' },
    { title: 'Jagoan Keramik', desc: 'Keramik rumah rusak ingin diganti? Layanan tukang keramik kami ahli dalam bongkar pasang keramik/porselen untuk lantai maupun dinding secara presisi.', image: 'images/keramik.png' },
    { title: 'Jagoan Listrik', desc: 'Listrik rumah bermasalah? Layanan tukang listrik kami siap melayani segala kebutuhan listrik seperti memasang stop kontak, fitting lampu, mengatasi konslet and permasalahan listrik lainnya.', image: 'images/listrik.png' }
  ]
}

const defaultTukangHarianJagoanLainnya = [
  { title: 'Jagoan Cat' },
  { title: 'Jagoan Keramik' },
  { title: 'Jagoan Listrik' },
  { title: 'Kenek' },
  { title: 'Jagoan Aluminium' },
  { title: 'Jagoan Batu' },
  { title: 'Jagoan Pipa' },
  { title: 'Jagoan Waterproofing' },
  { title: 'Jagoan Gali' },
  { title: 'Jagoan Besi (Las)' },
  { title: 'Jagoan Genteng' },
  { title: 'Jagoan Plafon' },
  { title: 'Konsultan' },
  { title: 'Jagoan Sanitair' },
  { title: 'Jagoan Angkat' },
  { title: 'Jagoan Listrik Perapihan' },
  { title: 'Jagoan Pipa Perapihan' }
]

const defaultTukangHarianSupport = {
  title: 'Butuh Bantuan?<br/>Tanya <span class="text-red-600">Agra</span>',
  subtitle: 'Punya pertanyaan atau ingin konsultasi, kami siap membantu',
  whatsapp: '+62 821-1307-9456',
  email: 'agraabhinayaadm@gmail.com',
  waMessage: 'Halo Agra Abhinaya Perkasa, saya butuh bantuan mengenai layanan tukang harian.',
  image: 'images/customer_support.png'
}

const defaultKonstruksiHeroSlides = [
  {
    name: 'video1',
    src: 'images/video-slide1.MP4',
    title: 'Konstruksi Pembangunan Baru',
    desc: 'Layanan bangun rumah, ruko, gedung, hingga gudang dari nol dengan konstruksi kokoh, presisi, dan diawasi tim ahli.'
  },
  {
    name: 'video2',
    src: 'images/video-slide2.mp4',
    title: 'Perencanaan Detail & RAB Transparan',
    desc: 'Desain arsitektur modern terintegrasi dengan Rencana Anggaran Biaya terinci, menjamin kepastian budget pembangunan Anda.'
  },
  {
    name: 'video3',
    src: 'images/video-slide3.mp4',
    title: 'Tenaga Kerja Ahli & Bergaransi',
    desc: 'Pekerjaan di lapangan ditangani oleh tukang terlatih di bawah pengawasan ketat untuk memastikan struktur bangunan yang kokoh.'
  }
]

const defaultKonstruksiSolutionTitle = 'Layanan jasa yang <span class="text-red-600 font-black">selalu tersedia dan transparan</span> untuk aset bangunan yang butuh pemeliharaan berkala'

const defaultKonstruksiServicesTitle = 'Jagoan Konstruksi'

const defaultKonstruksiServices = [
  {
    title: 'Jagoan Cut and Fill',
    desc: 'Layanan jasa cut and fill kami didukung oleh alat berat modern dan operator berpengalaman untuk meratakan, menguruk, serta memadatkan lahan proyek konstruksi Anda secara presisi. Kami memastikan elevasi tanah yang stabil dan siap bangun.',
    image: 'images/cut fil.jpg'
  },
  {
    title: 'Jagoan Stamp Concrete',
    desc: 'Layanan lantai stamp concrete (beton dekoratif bergaya batu alam) dengan cetakan presisi, warna tahan cuaca, serta ketahanan beban tinggi. Sangat cocok untuk area luar ruang seperti jalan perumahan, halaman, maupun carport Anda.',
    image: 'images/stamp_concrete_hero.png'
  }
]

const defaultKonstruksiStandardsHeader = 'Standar Kerja Kami'
const defaultKonstruksiStandardsTitle = 'Keamanan & Mutu Sipil <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-700">Teruji Secara Ilmiah</span>'
const defaultKonstruksiStandardsDesc = 'PT Agra Abhinaya Perkasa tidak berkompromi dalam aspek keselamatan kerja dan hasil akhir pengujian kepadatan struktur proyek Anda.'
const defaultKonstruksiStandardsCards = [
  {
    icon: 'grid_goldenratio',
    tag: 'Mutu Sipil',
    title: 'Uji Kepadatan Tanah (Sand Cone)',
    desc: 'Pengujian laboratorium langsung di lapangan untuk menjamin setiap lapis pemadatan timbunan tanah urug mencapai densitas 95%+ aman dari resiko penurunan lahan.'
  },
  {
    icon: 'biotech',
    tag: 'Daya Dukung',
    title: 'Uji Sondir & Lab Tanah',
    desc: 'Pengukuran ilmiah kapasitas beban dukung tanah keras di lab geoteknik untuk menentukan spesifikasi kedalaman pondasi cakar ayam atau tiang pancang yang kokoh.'
  },
  {
    icon: 'health_and_safety',
    tag: 'Protokol K3',
    title: 'Keselamatan Kerja Kerja (K3)',
    desc: 'Penerapan Alat Pelindung Diri (APD) lengkap dan manajemen resiko proyek secara profesional guna memastikan kelancaran pembangunan tanpa kendala kecelakaan kerja.'
  }
]

const defaultKonstruksiStepsHeader = 'Langkah Eksekusi'
const defaultKonstruksiStepsTitle = 'Alur Kerja Pengerjaan Konstruksi'
const defaultKonstruksiStepsDesc = 'Transparansi penuh di setiap tahapan proyek konstruksi sipil untuk hasil yang presisi dan tepat waktu.'
const defaultKonstruksiSteps = [
  {
    number: 1,
    title: 'Konsultasi Proyek',
    desc: 'Diskusikan rencana pengerjaan, spesifikasi teknis, dan luasan lahan proyek Anda bersama konsultan kami.',
    image: 'images/callcenter.png'
  },
  {
    number: 2,
    title: 'Survei & Analisis',
    desc: 'Tim sipil Agra melakukan survei topografi lahan, elevasi tanah, serta uji sondir tanah di lokasi.',
    image: 'images/survei.png'
  },
  {
    number: 3,
    title: 'RAB & Kontrak Kerja',
    desc: 'Penyusunan penawaran rencana anggaran biaya yang detail, mengikat, dan transparan beserta timeline kerja.',
    image: 'images/penawaran.png'
  },
  {
    number: 4,
    title: 'Eksekusi & Handover',
    desc: 'Mobilisasi alat berat and pengerjaan konstruksi secara presisi hingga serah terima lahan siap bangun.',
    image: 'images/beres.png'
  }
]

const defaultKonstruksiVideosHeader = 'Dokumentasi Lapangan'
const defaultKonstruksiVideosTitle = 'Proyek Sekolah Rakyat Indramayu'
const defaultKonstruksiVideosSubtitle = 'Proyek Yang Sedang Berjalan'
const defaultKonstruksiVideosDesc = 'Tonton langsung cuplikan singkat pengerjaan tim sipil PT Agra Abhinaya Perkasa di lapangan secara transparan.'
const defaultKonstruksiVideos = [
  {
    titleHeader: 'Pekerjaan',
    titleHighlight: 'Cut & Fill',
    desc: 'Proses land clearing, perataan tanah, dan pengurukan timbunan menggunakan excavator sipil profesional.',
    tag: 'Jagoan Cut & Fill',
    thumbnail: 'images/cutandfill.jpg',
    src: 'images/video-cutandfil.mp4',
    icon: 'terrain'
  },
  {
    titleHeader: 'Pengerjaan',
    titleHighlight: 'Stamp Concrete',
    desc: 'Cetak lantai beton bermotif batu alam yang kokoh, rapi, dan tahan cuaca ekstrim untuk jalan perumahan.',
    tag: 'Jagoan Stamp Concrete',
    thumbnail: 'images/stamp_concrete_hero.png',
    src: 'images/stampconcrete.mp4',
    icon: 'texture'
  },
  {
    titleHeader: 'Pemasangan',
    titleHighlight: 'U-Ditch Beton',
    desc: 'Instalasi precast u-ditch beton pracetak saluran air pembuangan pemukiman anti-amblas dan rapi.',
    tag: 'Jagoan U-Ditch',
    thumbnail: 'images/kontruksi.png',
    src: 'images/video-masangudtich.mp4',
    icon: 'waves'
  },
  {
    titleHeader: 'Perapihan',
    titleHighlight: 'Disposal',
    desc: 'Proses pembuangan, penataan, dan perapihan tanah sisa galian (disposal) menggunakan alat berat secara efisien.',
    tag: 'Perapihan Disposal',
    thumbnail: 'images/construction_hero.png',
    src: 'images/video-disposal.mp4',
    icon: 'agriculture'
  },
  {
    titleHeader: 'Hasil Akhir',
    titleHighlight: 'Stamp Concrete',
    desc: 'Hasil cetak lantai beton motif batu alam yang kokoh, rapi, estetik, dan siap digunakan.',
    tag: 'Hasil Kerja',
    thumbnail: 'images/jalan.png',
    src: 'images/hasil-concrete.mp4',
    icon: 'verified'
  }
]

const defaultKonstruksiSupport = {
  title: 'Butuh Bantuan? Tanya Agra',
  subtitle: 'LAYANAN CUSTOMER',
  bubbleText: 'Punya pertanyaan atau ingin konsultasi, kami siap membantu',
  phone: '+62 821-1307-9456',
  phoneRaw: '6282113079456',
  whatsapp: '+62 821-1307-9456',
  whatsappRaw: '6282113079456',
  waMessage: 'Halo Agra Abhinaya Perkasa, saya butuh bantuan mengenai layanan konstruksi.',
  email: 'agraabhinayaadm@gmail.com',
  image: 'images/customer_support.png'
}

const defaultBoronganSupport = {
  title: 'Butuh Bantuan? Hubungi Kami Sekarang!',
  subtitle: 'LAYANAN CUSTOMER',
  bubbleText: '"Halo! Ada yang bisa saya bantu? Yuk, hubungi layanan customer support kami di samping!"',
  phone: '+62 821-1307-9456',
  phoneRaw: '6282113079456',
  whatsapp: '+62 821-1307-9456',
  whatsappRaw: '6282113079456',
  waMessage: 'Halo Agra Abhinaya Perkasa, saya butuh bantuan mengenai layanan borongan.',
  email: 'agraabhinayaadm@gmail.com',
  image: 'images/mascot_illustration.jpg'
}

const defaultBoronganHeroTitle = 'Layanan Konstruksi <br class="sm:hidden" />\n<span class="text-red-500">Borongan Agra</span>'
const defaultBoronganHeroDesc = 'Solusi terintegrasi pembangunan dan renovasi menyeluruh dari PT Agra Abhinaya Perkasa. Kami menangani seluruh siklus proyek mulai dari perancangan, pembelian material, pengerjaan tukang, hingga pengawasan ketat dengan garansi resmi.'
const defaultBoronganHeroSlides = [
  'images/boronganproyek.png',
  'images/boronganproyek2.png'
]
const defaultBoronganHeroWaMsg = 'Halo Agra Abhinaya Perkasa, saya ingin konsultasi mengenai layanan borongan.'

const defaultBoronganBenefitsHeader = 'Keuntungan Borongan Dari Agra'
const defaultBoronganBenefitsDesc = 'Sistem borongan kami dirancang untuk menghilangkan kecemasan Anda selama pengerjaan konstruksi. Nikmati keunggulan layanan profesional terpadu dari kami.'
const defaultBoronganBenefits = [
  {
    title: 'Harga Transparan',
    desc: 'Transparansi harga yang menyeluruh dan terbuka sesuai kebutuhan proyekmu, termasuk survei lokasi, pembelian material, hingga pengerjaan.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    image: 'images/harga_transparan_benefit.jpg'
  },
  {
    title: 'Lebih Mudah',
    desc: 'Semua proses pembangunan dan renovasi kami koordinasikan secara langsung, bebas ribet mengurus tukang dan pembelian material.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    image: 'images/lebih_mudah_benefit.jpg'
  },
  {
    title: 'Bertanggung Jawab',
    desc: 'Setiap tahapan dikerjakan penuh komitmen, dipantau berkala oleh mandor profesional agar pengerjaan selesai tepat waktu.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    image: 'images/kalender.png'
  },
  {
    title: 'Bergaransi',
    desc: 'Jaminan pemeliharaan gratis pasca proyek selesai demi memastikan kualitas hasil konstruksi yang tahan lama.',
    icon: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 019 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
    image: 'images/garansi.png'
  },
  {
    title: 'Tukang Terkualifikasi',
    desc: 'Dikerjakan oleh mitra tukang berpengalaman yang memiliki sertifikasi spesialisasi keahlian di bidangnya masing-masing.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    image: 'images/sertifikat.png'
  }
]

const defaultBoronganStepsHeader = 'Tahap Pelayanan Tukang Borongan'
const defaultBoronganStepsDesc = 'Kami menjaga transparansi dan kualitas di setiap tahap pengerjaan untuk kenyamanan maksimal Anda.'
const defaultBoronganSteps = [
  {
    number: 1,
    title: 'Konsultasi',
    desc: 'Diskusikan masalah bangunan kamu dengan kami',
    image: 'images/callcenter.png'
  },
  {
    number: 2,
    title: 'Survei Lokasi',
    desc: 'Tim konsultan Agra melakukan survei ke lokasi untuk mengecek kondisi dan menentukan solusi terbaik',
    image: 'images/survei.png'
  },
  {
    number: 3,
    title: 'Penawaran Harga',
    desc: 'Setelah survei, kamu akan menerima penawaran harga yang jelas dan transparan',
    image: 'images/penawaran.png'
  },
  {
    number: 4,
    title: 'Tinggal Tunggu Beres',
    desc: 'Pekerjaan dilakukan oleh tukang profesional dengan pengawasan hingga proyek selesai',
    image: 'images/beres.png'
  }
]

const defaultBoronganSpecialtiesHeader = 'Layanan Borongan Agra'
const defaultBoronganSpecialtiesDesc = 'Kami menangani berbagai kebutuhan konstruksi dengan sistem borongan penuh yang tepercaya.'
const defaultBoronganSpecialties = [
  {
    title: 'Bangun Rumah & Ruko Baru',
    desc: 'Layanan konstruksi komprehensif mulai dari nol (fondasi) hingga siap huni (finishing kunci) untuk rumah pribadi maupun ruko komersial.'
  },
  {
    title: 'Renovasi Besar & Ekspansi Ruang',
    desc: 'Menambah lantai rumah (tingkat), merombak tata letak ruangan, perbaikan struktur dak beton bocor, hingga penyegaran fasad bangunan.'
  },
  {
    title: 'Instalasi Atap & Baja Ringan',
    desc: 'Pemasangan atap baja ringan, kanopi besi, struktur kolom baja, dan pekerjaan las struktural berkualitas tinggi untuk menjamin kekokohan.'
  },
  {
    title: 'Pekerjaan Finishing & Interior',
    desc: 'Pemasangan keramik/granit lantai presisi, pengecatan dinding luar/dalam premium, pengerjaan plafon gipsum, dan instalasi kelistrikan gedung.'
  }
]

const defaultBoronganAreasHeader = 'Layanan Borongan untuk Berbagai Kebutuhan Rumah'
const defaultBoronganAreas = [
  {
    title: 'Area Atap & Plafon',
    desc: 'Mengerjakan perbaikan untuk segala masalah area atap & plafon.',
    bullets: ['Kebocoran', 'Plafon retak', 'Genteng rusak', 'Water proofing', 'Cat', 'dan lainnya'],
    image: 'images/plafon.png'
  },
  {
    title: 'Area Luar Rumah',
    desc: 'Perbaikan dan keindahan eksterior rumah untuk ketahanan jangka panjang.',
    bullets: ['Pengecatan dinding luar', 'Pagar & Kanopi', 'Taman & Carport', 'Dinding retak luar', 'Saluran air luar', 'dan lainnya'],
    image: 'images/area luar.png'
  },
  {
    title: 'Area Kamar Mandi',
    desc: 'Renovasi dan perbaikan kamar mandi agar higienis dan bebas bocor.',
    bullets: ['Kebocoran pipa air', 'Pasang keramik lantai/dinding', 'Sanitair (Toilet, Shower)', 'Bocor rembes lantai atas', 'dan lainnya'],
    image: 'images/pipa bocor.png'
  },
  {
    title: 'Area Dapur',
    desc: 'Penataan ulang dan perbaikan dapur demi kenyamanan memasak keluarga.',
    bullets: ['Kitchen cabinet / Kitchen set', 'Sink & Wastafel', 'Instalasi pipa pembuangan', 'Keramik dinding dapur', 'dan lainnya'],
    image: 'images/dapur.png'
  }
]

const defaultBoronganOrderHeader = 'Proses Pemesanan <span class="text-red-600">Borongan</span>'
const defaultBoronganOrderSteps = [
  {
    title: 'Pemesanan',
    desc: 'Isi formulir pemesanan sesuai kebutuhan perbaikan rumahmu dengan mudah dan cepat.'
  },
  {
    title: 'Survey',
    desc: 'Tim Agra melakukan survei ke lokasi untuk mengecek kondisi dan menentukan solusi terbaik.'
  },
  {
    title: 'Penawaran (RAB)',
    desc: 'Setelah survei, kamu akan menerima penawaran harga yang jelas dan transparan.'
  },
  {
    title: 'Projek',
    desc: 'Pekerjaan dilakukan oleh tukang profesional dengan pengawasan hingga proyek selesai.'
  }
]

const autoAssignIconAndColor = (name) => {
  const cleanName = (name || '').toLowerCase()
  if (cleanName.includes('bocor') || cleanName.includes('kebocoran') || cleanName.includes('leak')) {
    return { icon: 'plumbing', color: 'blue' }
  }
  if (cleanName.includes('cat') || cleanName.includes('paint') || cleanName.includes('warna')) {
    return { icon: 'format_paint', color: 'red' }
  }
  if (cleanName.includes('keramik') || cleanName.includes('lantai') || cleanName.includes('ubin') || cleanName.includes('dinding') || cleanName.includes('granit')) {
    return { icon: 'grid_view', color: 'orange' }
  }
  if (cleanName.includes('listrik') || cleanName.includes('kabel') || cleanName.includes('lampu') || cleanName.includes('saklar')) {
    return { icon: 'electrical_services', color: 'green' }
  }
  if (cleanName.includes('pipa') || cleanName.includes('air') || cleanName.includes('saluran') || cleanName.includes('keran')) {
    return { icon: 'water', color: 'cyan' }
  }
  if (cleanName.includes('toilet') || cleanName.includes('mandi') || cleanName.includes('closet') || cleanName.includes('wc')) {
    return { icon: 'bathroom', color: 'teal' }
  }
  if (cleanName.includes('konsul') || cleanName.includes('tanya') || cleanName.includes('desain') || cleanName.includes('perencana') || cleanName.includes('arsite')) {
    return { icon: 'support_agent', color: 'amber' }
  }
  if (cleanName.includes('plafon') || cleanName.includes('atap') || cleanName.includes('roof') || cleanName.includes('genteng') || cleanName.includes('baja') || cleanName.includes('kanopi')) {
    return { icon: 'roofing', color: 'indigo' }
  }
  return { icon: 'build', color: 'blue' }
}

export const useWebsiteStore = defineStore('websiteStore', {
  state: () => ({
    initialized: false,
    heroSlides: [...defaultHeroSlides],
    visiMisi: { ...defaultVisiMisi },
    portfolioItems: [],
    clients: [...defaultClients],
    reviews: [
      {
        id: 1,
        name: 'Budi Santoso',
        rating: 5,
        comment: 'Pekerjaan rapi, finishing ACP dan partisi sangat presisi. Sangat direkomendasikan!',
        date: '10 Juli 2026'
      },
      {
        id: 2,
        name: 'Kenji Sato',
        rating: 5,
        comment: 'Akurasi cut & fill luar biasa di GTN JKT 02. Kerja sama tim yang sangat profesional.',
        date: '15 Juni 2026'
      },
      {
        id: 3,
        name: 'Dewi Lestari',
        rating: 5,
        comment: 'Struktur bangunan sangat kokoh dan pengerjaan tepat waktu. Terima kasih team Agra!',
        date: '28 Mei 2026'
      },
      {
        id: 4,
        name: 'Hendra Wijaya',
        rating: 4,
        comment: 'Responsif dan komunikatif selama proyek. Hasil paving & stamp concrete rapi.',
        date: '12 April 2026'
      }
    ],
    solutions: [...defaultSolutions],
    aboutTitle: defaultAboutTitle,
    aboutText: defaultAboutText,
    companyStats: [...defaultCompanyStats],
    officeSlides: [...defaultOfficeSlides],
    advantagesBubble: defaultAdvantagesBubble,
    advantagesMascot: defaultAdvantagesMascot,
    advantagesList: [...defaultAdvantagesList],
    servicesTitle: defaultServicesTitle,
    servicesList: [...defaultServicesList],
    contactInfo: {
      phone: '+62 821-1307-9456',
      phoneRaw: '6282113079456',
      email: 'agraabhinayaadm@gmail.com',
      hours: 'Senin-Sabtu (08:00-17:00)',
      mapsUrl: 'https://maps.google.com/maps?q=AGRA%20ABHINAYA%20PERKASA%2C%20Jl.%20Tegal%20Danas%20No.18a%2C%20Sertajaya%2C%20Cikarang%20Timur&t=&z=17&ie=UTF8&iwloc=&output=embed'
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/profile.php?id=61590675123305',
      instagram: 'https://www.instagram.com/ptagraabhinayaperkasa/',
      tiktok: 'https://www.tiktok.com/@agraabhinayaperkasa'
    },
    visitorCount: 2678,
    artisansSubHeader: 'Tenaga Ahli Mitra Agra',
    artisansTitle: 'Tukang Terkualifikasi & Berpengalaman',
    artisansDesc: 'Semua proyek pembangunan, renovasi, hingga perbaikan kecil harian dikerjakan oleh mitra tukang terlatih PT Agra Abhinaya Perkasa yang memiliki keahlian tersertifikasi di bidangnya masing-masing.',
    artisansSlides: [
      'images/proses-ketat.png',
      'images/hasil-rapih.png',
      'images/tukang-sertifikat.png'
    ],
    artisansPoints: [
      {
        title: 'Proses Seleksi Ketat',
        desc: 'Tukang disaring ketat berdasarkan kualitas pengerjaan, kejujuran, dan komitmen waktu.'
      },
      {
        title: 'Sertifikasi & Keahlian Khusus',
        desc: 'Memiliki tukang spesialis untuk pengerjaan finishing, batu alam, konstruksi beton, pipa, dan listrik.'
      },
      {
        title: 'Hasil Kerja Rapi & Bergaransi',
        desc: 'Jaminan perbaikan ulang gratis apabila terjadi kendala pengerjaan yang kurang memuaskan.'
      }
    ],
    tukangHarianTitle: 'Semua Perbaikan Rumah Beres Bersama <span class="text-red-500">Agra</span>',
    tukangHarianSlides: [...defaultTukangHarianSlides],
    tukangHarianExtra: [...defaultTukangHarianExtra],
    tukangHarianMaterial: JSON.parse(JSON.stringify(defaultTukangHarianMaterial)),
    tukangHarianJagoan: JSON.parse(JSON.stringify(defaultTukangHarianJagoan)),
    tukangHarianJagoanLainnya: [...defaultTukangHarianJagoanLainnya],
    tukangHarianSupport: JSON.parse(JSON.stringify(defaultTukangHarianSupport)),
    boronganHeroTitle: defaultBoronganHeroTitle,
    boronganHeroDesc: defaultBoronganHeroDesc,
    boronganHeroSlides: [...defaultBoronganHeroSlides],
    boronganHeroWaMsg: defaultBoronganHeroWaMsg,
    boronganSolutionBanner: 'images/solusi_banner.jpg',
    boronganBenefitsHeader: defaultBoronganBenefitsHeader,
    boronganBenefitsDesc: defaultBoronganBenefitsDesc,
    boronganBenefits: JSON.parse(JSON.stringify(defaultBoronganBenefits)),
    boronganStepsHeader: defaultBoronganStepsHeader,
    boronganStepsDesc: defaultBoronganStepsDesc,
    boronganSteps: JSON.parse(JSON.stringify(defaultBoronganSteps)),
    boronganSpecialtiesHeader: defaultBoronganSpecialtiesHeader,
    boronganSpecialtiesDesc: defaultBoronganSpecialtiesDesc,
    boronganSpecialties: JSON.parse(JSON.stringify(defaultBoronganSpecialties)),
    boronganAreasHeader: defaultBoronganAreasHeader,
    boronganAreas: JSON.parse(JSON.stringify(defaultBoronganAreas)),
    boronganOrderHeader: defaultBoronganOrderHeader,
    boronganOrderSteps: JSON.parse(JSON.stringify(defaultBoronganOrderSteps)),
    boronganSupport: JSON.parse(JSON.stringify(defaultBoronganSupport)),

    // Tukang Konstruksi
    konstruksiHeroSlides: JSON.parse(JSON.stringify(defaultKonstruksiHeroSlides)),
    konstruksiSolutionTitle: defaultKonstruksiSolutionTitle,
    konstruksiServicesTitle: defaultKonstruksiServicesTitle,
    konstruksiServices: JSON.parse(JSON.stringify(defaultKonstruksiServices)),
    konstruksiStandardsHeader: defaultKonstruksiStandardsHeader,
    konstruksiStandardsTitle: defaultKonstruksiStandardsTitle,
    konstruksiStandardsDesc: defaultKonstruksiStandardsDesc,
    konstruksiStandardsCards: JSON.parse(JSON.stringify(defaultKonstruksiStandardsCards)),
    konstruksiStepsHeader: defaultKonstruksiStepsHeader,
    konstruksiStepsTitle: defaultKonstruksiStepsTitle,
    konstruksiStepsDesc: defaultKonstruksiStepsDesc,
    konstruksiSteps: JSON.parse(JSON.stringify(defaultKonstruksiSteps)),
    konstruksiVideosHeader: defaultKonstruksiVideosHeader,
    konstruksiVideosTitle: defaultKonstruksiVideosTitle,
    konstruksiVideosSubtitle: defaultKonstruksiVideosSubtitle,
    konstruksiVideosDesc: defaultKonstruksiVideosDesc,
    konstruksiVideos: JSON.parse(JSON.stringify(defaultKonstruksiVideos)),
    konstruksiSupport: JSON.parse(JSON.stringify(defaultKonstruksiSupport))
  }),
  actions: {
    async initializeStore() {
      const stored = localStorage.getItem('website-agraabhinayaperkasa-store-data')
      let localClients = []
      let localSolutions = []
      let localPortfolio = []
      if (stored) {
        try {
          const parsed = JSON.parse(stored)
          if (parsed && parsed.clients && parsed.clients.length) {
            localClients = parsed.clients
          }
          if (parsed && parsed.solutions && parsed.solutions.length) {
            localSolutions = parsed.solutions
            this.solutions = parsed.solutions
          } else {
            this.solutions = [...defaultSolutions]
          }
          this.heroSlides = parsed.heroSlides || this.heroSlides
          this.visiMisi = parsed.visiMisi || this.visiMisi
          this.portfolioItems = parsed.portfolioItems || this.portfolioItems
          this.clients = parsed.clients || this.clients
          if (parsed && parsed.portfolioItems && parsed.portfolioItems.length) {
            localPortfolio = parsed.portfolioItems
          }
          this.reviews = parsed.reviews || this.reviews

          this.aboutTitle = parsed.aboutTitle && parsed.aboutTitle.trim() !== '' ? parsed.aboutTitle : this.aboutTitle
          this.aboutText = parsed.aboutText && parsed.aboutText.trim() !== '' ? parsed.aboutText : this.aboutText
          this.companyStats = parsed.companyStats && parsed.companyStats.length ? parsed.companyStats : this.companyStats
          this.officeSlides = parsed.officeSlides && parsed.officeSlides.length ? parsed.officeSlides : this.officeSlides
          this.advantagesBubble = parsed.advantagesBubble && parsed.advantagesBubble.trim() !== '' ? parsed.advantagesBubble : this.advantagesBubble
          this.advantagesMascot = parsed.advantagesMascot && parsed.advantagesMascot.trim() !== '' ? parsed.advantagesMascot : this.advantagesMascot
          this.advantagesList = parsed.advantagesList && parsed.advantagesList.length ? parsed.advantagesList : this.advantagesList
          this.servicesTitle = parsed.servicesTitle && parsed.servicesTitle.trim() !== '' ? parsed.servicesTitle : this.servicesTitle
          this.servicesList = parsed.servicesList && parsed.servicesList.length ? parsed.servicesList : this.servicesList
          this.contactInfo = parsed.contactInfo && parsed.contactInfo.phone ? parsed.contactInfo : this.contactInfo
          this.socialLinks = parsed.socialLinks && parsed.socialLinks.facebook ? parsed.socialLinks : this.socialLinks
          if (!this.socialLinks.instagram || this.socialLinks.instagram === 'https://www.instagram.com/' || this.socialLinks.instagram === 'https://www.instagram.com') {
            this.socialLinks.instagram = 'https://www.instagram.com/ptagraabhinayaperkasa/'
          }
          if (!this.socialLinks.tiktok || this.socialLinks.tiktok === 'https://www.tiktok.com/' || this.socialLinks.tiktok === 'https://www.tiktok.com') {
            this.socialLinks.tiktok = 'https://www.tiktok.com/@agraabhinayaperkasa'
          }
          this.visitorCount = typeof parsed.visitorCount === 'number' ? parsed.visitorCount : this.visitorCount

          this.artisansSubHeader = parsed.artisansSubHeader && parsed.artisansSubHeader.trim() !== '' ? parsed.artisansSubHeader : this.artisansSubHeader
          this.artisansTitle = parsed.artisansTitle && parsed.artisansTitle.trim() !== '' ? parsed.artisansTitle : this.artisansTitle
          this.artisansDesc = parsed.artisansDesc && parsed.artisansDesc.trim() !== '' ? parsed.artisansDesc : this.artisansDesc
          this.artisansSlides = parsed.artisansSlides && parsed.artisansSlides.length ? parsed.artisansSlides : this.artisansSlides
          this.artisansPoints = parsed.artisansPoints && parsed.artisansPoints.length ? parsed.artisansPoints : this.artisansPoints

          this.tukangHarianTitle = parsed.tukangHarianTitle && parsed.tukangHarianTitle.trim() !== '' ? parsed.tukangHarianTitle : this.tukangHarianTitle
          this.tukangHarianSlides = parsed.tukangHarianSlides && parsed.tukangHarianSlides.length ? parsed.tukangHarianSlides : this.tukangHarianSlides
          this.tukangHarianExtra = parsed.tukangHarianExtra && parsed.tukangHarianExtra.length ? parsed.tukangHarianExtra : this.tukangHarianExtra
          this.tukangHarianMaterial = parsed.tukangHarianMaterial && parsed.tukangHarianMaterial.title ? parsed.tukangHarianMaterial : this.tukangHarianMaterial
          this.tukangHarianJagoan = parsed.tukangHarianJagoan && parsed.tukangHarianJagoan.title ? parsed.tukangHarianJagoan : this.tukangHarianJagoan
          this.tukangHarianJagoanLainnya = parsed.tukangHarianJagoanLainnya && parsed.tukangHarianJagoanLainnya.length ? parsed.tukangHarianJagoanLainnya : this.tukangHarianJagoanLainnya
          this.tukangHarianSupport = parsed.tukangHarianSupport && parsed.tukangHarianSupport.whatsapp ? parsed.tukangHarianSupport : this.tukangHarianSupport
          this.boronganHeroTitle = parsed.boronganHeroTitle && parsed.boronganHeroTitle.trim() !== '' ? parsed.boronganHeroTitle : this.boronganHeroTitle
          this.boronganHeroDesc = parsed.boronganHeroDesc && parsed.boronganHeroDesc.trim() !== '' ? parsed.boronganHeroDesc : this.boronganHeroDesc
          this.boronganHeroSlides = parsed.boronganHeroSlides && parsed.boronganHeroSlides.length ? parsed.boronganHeroSlides : this.boronganHeroSlides
          this.boronganHeroWaMsg = parsed.boronganHeroWaMsg && parsed.boronganHeroWaMsg.trim() !== '' ? parsed.boronganHeroWaMsg : this.boronganHeroWaMsg
          this.boronganSolutionBanner = parsed.boronganSolutionBanner && parsed.boronganSolutionBanner.trim() !== '' ? parsed.boronganSolutionBanner : this.boronganSolutionBanner
          this.boronganBenefitsHeader = parsed.boronganBenefitsHeader && parsed.boronganBenefitsHeader.trim() !== '' ? parsed.boronganBenefitsHeader : this.boronganBenefitsHeader
          this.boronganBenefitsDesc = parsed.boronganBenefitsDesc && parsed.boronganBenefitsDesc.trim() !== '' ? parsed.boronganBenefitsDesc : this.boronganBenefitsDesc
          this.boronganBenefits = parsed.boronganBenefits && parsed.boronganBenefits.length ? parsed.boronganBenefits : this.boronganBenefits
          this.boronganStepsHeader = parsed.boronganStepsHeader && parsed.boronganStepsHeader.trim() !== '' ? parsed.boronganStepsHeader : this.boronganStepsHeader
          this.boronganStepsDesc = parsed.boronganStepsDesc && parsed.boronganStepsDesc.trim() !== '' ? parsed.boronganStepsDesc : this.boronganStepsDesc
          this.boronganSteps = parsed.boronganSteps && parsed.boronganSteps.length ? parsed.boronganSteps : this.boronganSteps
          this.boronganSpecialtiesHeader = parsed.boronganSpecialtiesHeader && parsed.boronganSpecialtiesHeader.trim() !== '' ? parsed.boronganSpecialtiesHeader : this.boronganSpecialtiesHeader
          this.boronganSpecialtiesDesc = parsed.boronganSpecialtiesDesc && parsed.boronganSpecialtiesDesc.trim() !== '' ? parsed.boronganSpecialtiesDesc : this.boronganSpecialtiesDesc
          this.boronganSpecialties = parsed.boronganSpecialties && parsed.boronganSpecialties.length ? parsed.boronganSpecialties : this.boronganSpecialties
          this.boronganAreasHeader = parsed.boronganAreasHeader && parsed.boronganAreasHeader.trim() !== '' ? parsed.boronganAreasHeader : this.boronganAreasHeader
          this.boronganAreas = parsed.boronganAreas && parsed.boronganAreas.length ? parsed.boronganAreas : this.boronganAreas
          this.boronganOrderHeader = parsed.boronganOrderHeader && parsed.boronganOrderHeader.trim() !== '' ? parsed.boronganOrderHeader : this.boronganOrderHeader
          this.boronganOrderSteps = parsed.boronganOrderSteps && parsed.boronganOrderSteps.length ? parsed.boronganOrderSteps : this.boronganOrderSteps
          this.boronganSupport = parsed.boronganSupport && parsed.boronganSupport.whatsapp ? parsed.boronganSupport : this.boronganSupport

          // Tukang Konstruksi
          this.konstruksiHeroSlides = parsed.konstruksiHeroSlides && parsed.konstruksiHeroSlides.length ? parsed.konstruksiHeroSlides : this.konstruksiHeroSlides
          this.konstruksiSolutionTitle = parsed.konstruksiSolutionTitle && parsed.konstruksiSolutionTitle.trim() !== '' ? parsed.konstruksiSolutionTitle : this.konstruksiSolutionTitle
          this.konstruksiServicesTitle = parsed.konstruksiServicesTitle && parsed.konstruksiServicesTitle.trim() !== '' ? parsed.konstruksiServicesTitle : this.konstruksiServicesTitle
          this.konstruksiServices = parsed.konstruksiServices && parsed.konstruksiServices.length ? parsed.konstruksiServices : this.konstruksiServices
          this.konstruksiStandardsHeader = parsed.konstruksiStandardsHeader && parsed.konstruksiStandardsHeader.trim() !== '' ? parsed.konstruksiStandardsHeader : this.konstruksiStandardsHeader
          this.konstruksiStandardsTitle = parsed.konstruksiStandardsTitle && parsed.konstruksiStandardsTitle.trim() !== '' ? parsed.konstruksiStandardsTitle : this.konstruksiStandardsTitle
          this.konstruksiStandardsDesc = parsed.konstruksiStandardsDesc && parsed.konstruksiStandardsDesc.trim() !== '' ? parsed.konstruksiStandardsDesc : this.konstruksiStandardsDesc
          this.konstruksiStandardsCards = parsed.konstruksiStandardsCards && parsed.konstruksiStandardsCards.length ? parsed.konstruksiStandardsCards : this.konstruksiStandardsCards
          this.konstruksiStepsHeader = parsed.konstruksiStepsHeader && parsed.konstruksiStepsHeader.trim() !== '' ? parsed.konstruksiStepsHeader : this.konstruksiStepsHeader
          this.konstruksiStepsTitle = parsed.konstruksiStepsTitle && parsed.konstruksiStepsTitle.trim() !== '' ? parsed.konstruksiStepsTitle : this.konstruksiStepsTitle
          this.konstruksiStepsDesc = parsed.konstruksiStepsDesc && parsed.konstruksiStepsDesc.trim() !== '' ? parsed.konstruksiStepsDesc : this.konstruksiStepsDesc
          this.konstruksiSteps = parsed.konstruksiSteps && parsed.konstruksiSteps.length ? parsed.konstruksiSteps : this.konstruksiSteps
          this.konstruksiVideosHeader = parsed.konstruksiVideosHeader && parsed.konstruksiVideosHeader.trim() !== '' ? parsed.konstruksiVideosHeader : this.konstruksiVideosHeader
          this.konstruksiVideosTitle = parsed.konstruksiVideosTitle && parsed.konstruksiVideosTitle.trim() !== '' ? parsed.konstruksiVideosTitle : this.konstruksiVideosTitle
          this.konstruksiVideosSubtitle = parsed.konstruksiVideosSubtitle && parsed.konstruksiVideosSubtitle.trim() !== '' ? parsed.konstruksiVideosSubtitle : this.konstruksiVideosSubtitle
          this.konstruksiVideosDesc = parsed.konstruksiVideosDesc && parsed.konstruksiVideosDesc.trim() !== '' ? parsed.konstruksiVideosDesc : this.konstruksiVideosDesc
          this.konstruksiVideos = parsed.konstruksiVideos && parsed.konstruksiVideos.length ? parsed.konstruksiVideos : this.konstruksiVideos
          this.konstruksiSupport = parsed.konstruksiSupport && parsed.konstruksiSupport.whatsapp ? parsed.konstruksiSupport : this.konstruksiSupport

          if (!this.companyStats || !this.companyStats.length) {
            this.companyStats = [
              {
                icon: 'map',
                title: 'Proyek Selesai',
                desc: 'Berbagai proyek konstruksi rumah mewah, ruko, gedung, dan perkerasan jalan di area Jabodetabek.'
              },
              {
                icon: 'assignment_turned_in',
                title: 'Kepuasan Klien',
                desc: 'Mengutamakan kualitas material terbaik, pengawasan ketat, serta rencana anggaran biaya yang transparan.'
              },
              {
                icon: 'gradient',
                title: 'Stamp Concrete',
                desc: 'Pakar pengerjaan lantai beton dekoratif bermotif batu alam dan kayu yang kokoh, berestetika tinggi, dan awet.'
              }
            ]
          }

          if (!this.officeSlides || !this.officeSlides.length) {
            this.officeSlides = [
              {
                image: 'images/halamandepan.jpeg',
                title: 'Halaman Depan Kantor',
                desc: 'Area halaman dan akses masuk utama kantor pusat PT Agra Abhinaya Perkasa yang bersih, rapi, dan berlokasi strategis di Cikarang Timur.'
              },
              {
                image: 'images/ruang meeting.jpeg',
                title: 'Ruang Rapat & Kolaborasi',
                desc: 'Ruang meeting yang representatif untuk berdiskusi dengan klien, membahas detail teknis gambar kerja, serta visualisasi rencana pembangunan.'
              },
              {
                image: 'images/ruangadmin.jpeg',
                title: 'Ruang Admin & Operasional',
                desc: 'Area operasional administrasi untuk pengelolaan dokumen proyek, estimasi anggaran biaya (RAB), dan layanan pelanggan.'
              },
              {
                image: 'images/ruangkoridor.jpeg',
                title: 'Ruang Koridor Kantor',
                desc: 'Koridor penghubung antar ruangan kerja di dalam kantor pusat kami yang bersih dan tertata rapi demi kenyamanan aktivitas harian.'
              }
            ]
          }

          if (!this.servicesList || !this.servicesList.length) {
            this.servicesList = [
              {
                title: 'Konstruksi',
                desc: 'Agra melayani pembangunan baru rumah, ruko, gedung, dan gudang dengan struktur kokoh, material teruji, serta pengawasan mandor berpengalaman.',
                image: 'images/kontruksi.png',
                detailTitle: 'Konstruksi',
                detailDesc: 'Melayani pembangunan baru dari nol untuk rumah tinggal, ruko komersial, gedung perkantoran, dan gudang industri dengan standar mutu tinggi.',
                bulletsText: 'Struktur SNI Kokoh\nRAB Transparan\nArsitek & Sipil Profesional',
                link: '/konstruksi',
                badge: '',
                activeBg: 'bg-[#0B192C]'
              },
              {
                title: 'Borongan',
                desc: 'Layanan terima beres (RAB, material, tukang, pengawasan) untuk renovasi maupun bangun baru bergaransi resmi dari PT Agra.',
                image: 'images/borongan.png',
                detailTitle: 'Borongan',
                detailDesc: 'Solusi terintegrasi pembangunan dan renovasi menyeluruh dari PT Agra. Kami menangani seluruh siklus proyek mulai dari perancangan, pembelian material, pengerjaan tukang, hingga pengawasan ketat dengan garansi resmi.',
                bulletsText: 'Sistem Borongan Penuh\nGaransi Konstruksi\nBahan Material Berkualitas',
                link: '/borongan',
                badge: '',
                activeBg: 'bg-[#1E3E62]'
              },
              {
                title: 'Tukang Harian',
                desc: 'Butuh perbaikan kecil cepat? Sewa tenaga tukang terampil harian (bocor, cat, keramik, listrik) flat rate transparan.',
                image: 'images/harian.png',
                detailTitle: 'Tukang Harian',
                detailDesc: 'Penyediaan tenaga tukang terampil harian untuk perbaikan kecil/besar, perapihan dinding, kusen pintu, pipa bocor, instalasi listrik, dan lainnya.',
                bulletsText: 'Tenaga Tukang Profesional\nHarga Flat Transparan\nTanpa Minimum Order',
                link: '/tukang-harian',
                badge: '',
                activeBg: 'bg-[#6B1D1D]'
              }
            ]
          }

          // Fetch reviews from Supabase
          try {
            const { data, error } = await supabase
              .from('reviews')
              .select('*')
              .order('created_at', { ascending: false })
            if (error) {
              console.error('Error fetching reviews from Supabase:', error)
            } else if (data && data.length) {
              this.reviews = data
            }
          } catch (err) {
            console.error('Failed to load reviews from Supabase:', err)
          }

          // Fetch and migrate clients from Supabase
          try {
            const { data, error } = await supabase
              .from('clients')
              .select('*')
              .order('created_at', { ascending: true })
            if (error) {
              console.error('Error fetching clients from Supabase:', error)
            } else {
              const wrongNames = ['PT Waskita Karya', 'PT Wijaya Karya', 'PT Adhi Karya']
              const rawDbClients = data || []

              // Filter out wrong names and any default client names
              const dbClients = rawDbClients.filter(c => {
                const isWrong = wrongNames.includes(c.name)
                const isDefault = defaultClients.some(d => d.name.toLowerCase() === c.name.toLowerCase())
                return !isWrong && !isDefault
              })

              // Trigger background delete for any wrong or duplicate default clients in Supabase
              const toDelete = rawDbClients.filter(c => {
                return wrongNames.includes(c.name) || defaultClients.some(d => d.name.toLowerCase() === c.name.toLowerCase())
              })
              if (toDelete.length > 0) {
                const deleteIds = toDelete.map(c => c.id)
                supabase.from('clients').delete().in('id', deleteIds).then(() => {})
              }

              // Filter out default clients from local storage list
              const userAddedLocal = localClients.filter(c => {
                const isDefaultId = Number(c.id) >= 1 && Number(c.id) <= 9
                const isDefaultName = defaultClients.some(d => d.name.toLowerCase() === c.name.toLowerCase())
                const isUuid = typeof c.id === 'string' && c.id.includes('-')
                const isWrongName = wrongNames.includes(c.name)
                return !isDefaultId && !isDefaultName && !isUuid && !isWrongName
              })

              // Find local clients not yet in Supabase database
              const pendingUploads = userAddedLocal.filter(localC => {
                return !dbClients.some(dbC => dbC.name.toLowerCase() === localC.name.toLowerCase())
              })

              if (pendingUploads.length > 0) {
                console.log('Migrating local clients to Supabase:', pendingUploads)
                for (const client of pendingUploads) {
                  try {
                    await supabase
                      .from('clients')
                      .insert([{ name: client.name, image: client.image }])
                  } catch (uploadErr) {
                    console.error('Failed to auto-migrate client:', client.name, uploadErr)
                  }
                }
                const { data: refreshedData } = await supabase
                  .from('clients')
                  .select('*')
                  .order('created_at', { ascending: true })
                if (refreshedData) {
                  const cleanRefreshed = refreshedData.filter(c => {
                    const isWrong = wrongNames.includes(c.name)
                    const isDefault = defaultClients.some(d => d.name.toLowerCase() === c.name.toLowerCase())
                    return !isWrong && !isDefault
                  })
                  this.clients = [...defaultClients, ...cleanRefreshed]
                } else {
                  this.clients = [...defaultClients, ...dbClients, ...pendingUploads]
                }
              } else {
                this.clients = [...defaultClients, ...dbClients]
              }
            }
          } catch (err) {
            console.error('Failed to load clients from Supabase:', err)
          }

          // Fetch and migrate solutions from Supabase
          try {
            const { data, error } = await supabase
              .from('solutions')
              .select('*')
              .order('id', { ascending: true })
            if (error) {
              console.error('Error fetching solutions from Supabase:', error)
              if (!this.solutions || this.solutions.length === 0) {
                this.solutions = [...defaultSolutions]
              }
            } else if (data && data.length) {
              const dbSolutions = data || []
              const userAddedLocal = localSolutions.filter(s => {
                const isDefaultId = Number(s.id) >= 1 && Number(s.id) <= 8
                const isUuid = typeof s.id === 'string' && s.id.includes('-')
                return !isDefaultId && !isUuid
              })
              const pendingUploads = userAddedLocal.filter(localS => {
                return !dbSolutions.some(dbS => dbS.name.toLowerCase() === localS.name.toLowerCase())
              })
              if (pendingUploads.length > 0) {
                console.log('Migrating local solutions to Supabase:', pendingUploads)
                for (const sol of pendingUploads) {
                  try {
                    await supabase
                      .from('solutions')
                      .insert([{ name: sol.name, description: sol.description, icon: sol.icon, color: sol.color }])
                  } catch (uploadErr) {
                    console.error('Failed to auto-migrate solution:', sol.name, uploadErr)
                  }
                }
                const { data: refreshedData } = await supabase
                  .from('solutions')
                  .select('*')
                  .order('id', { ascending: true })
                if (refreshedData && refreshedData.length) {
                  this.solutions = refreshedData
                } else {
                  this.solutions = dbSolutions
                }
              } else {
                this.solutions = dbSolutions
              }
            } else {
              // Table is empty! Let's auto-seed the defaultSolutions into Supabase
              console.log('Seeding default solutions to Supabase...')
              const seedData = defaultSolutions.map(s => ({
                name: s.name,
                description: s.description,
                icon: s.icon,
                color: s.color
              }))
              await supabase.from('solutions').insert(seedData)

              // Refetch
              const { data: seededData } = await supabase
                .from('solutions')
                .select('*')
                .order('id', { ascending: true })
              if (seededData && seededData.length) {
                this.solutions = seededData
              } else {
                this.solutions = [...defaultSolutions]
              }
            }
          } catch (err) {
            console.error('Failed to load solutions from Supabase:', err)
          }

          // Fetch and migrate portfolio items from Supabase
          await this.fetchAndMigratePortfolio(localPortfolio)

          // Fetch and migrate banners from Supabase
          await this.fetchAndMigrateBanners()

          // Fetch and migrate company profile from Supabase
          await this.fetchAndMigrateCompanyProfile()

          // Fetch and migrate visi_misi from Supabase
          await this.fetchAndMigrateVisiMisi()

          // Fetch and migrate office slides from Supabase
          await this.fetchAndMigrateOfficeSlides()

          // Fetch and migrate advantages from Supabase
          await this.fetchAndMigrateAdvantages()

          // Fetch and migrate services from Supabase
          await this.fetchAndMigrateServices()

          // Fetch and migrate artisans from Supabase
          await this.fetchAndMigrateArtisans()

          // Fetch and migrate Tukang Harian from Supabase
          await this.fetchAndMigrateTukangHarian()
          
          // Fetch and migrate Borongan from Supabase
          await this.fetchAndMigrateBorongan()

          // Fetch and migrate Konstruksi from Supabase
          await this.fetchAndMigrateKonstruksi()
          
          this.saveStore()
          this.initialized = true
          return
        } catch {
          // Clear if parsing failed
        }
      }

      // Fallback first seed
      this.portfolioItems = JSON.parse(JSON.stringify(defaultPortfolioItems))

      // Merging user reviews if any exist in previous key
      const prevReviews = localStorage.getItem('website-agraabhinayaperkasa-reviews')
      if (prevReviews) {
        try {
          const parsedReviews = JSON.parse(prevReviews)
          if (parsedReviews && parsedReviews.length) {
            this.reviews = [...parsedReviews, ...this.reviews]
          }
        } catch {
          // Ignore
        }
      }

      // Fetch reviews from Supabase
      try {
        const { data, error } = await supabase
          .from('reviews')
          .select('*')
          .order('created_at', { ascending: false })
        if (error) {
          console.error('Error fetching reviews from Supabase:', error)
        } else if (data && data.length) {
          this.reviews = data
        }
      } catch (err) {
        console.error('Failed to load reviews from Supabase:', err)
      }

      // Fetch and migrate clients from Supabase
      try {
        const { data, error } = await supabase
          .from('clients')
          .select('*')
          .order('created_at', { ascending: true })
        if (error) {
          console.error('Error fetching clients from Supabase:', error)
        } else {
          const wrongNames = ['PT Waskita Karya', 'PT Wijaya Karya', 'PT Adhi Karya']
          const rawDbClients = data || []

          // Filter out wrong names and any default client names
          const dbClients = rawDbClients.filter(c => {
            const isWrong = wrongNames.includes(c.name)
            const isDefault = defaultClients.some(d => d.name.toLowerCase() === c.name.toLowerCase())
            return !isWrong && !isDefault
          })

          // Trigger background delete for any wrong or duplicate default clients in Supabase
          const toDelete = rawDbClients.filter(c => {
            return wrongNames.includes(c.name) || defaultClients.some(d => d.name.toLowerCase() === c.name.toLowerCase())
          })
          if (toDelete.length > 0) {
            const deleteIds = toDelete.map(c => c.id)
            supabase.from('clients').delete().in('id', deleteIds).then(() => {})
          }

          // Filter out default clients from local storage list
          const userAddedLocal = localClients.filter(c => {
            const isDefaultId = Number(c.id) >= 1 && Number(c.id) <= 9
            const isDefaultName = defaultClients.some(d => d.name.toLowerCase() === c.name.toLowerCase())
            const isUuid = typeof c.id === 'string' && c.id.includes('-')
            const isWrongName = wrongNames.includes(c.name)
            return !isDefaultId && !isDefaultName && !isUuid && !isWrongName
          })

          // Find local clients not yet in Supabase database
          const pendingUploads = userAddedLocal.filter(localC => {
            return !dbClients.some(dbC => dbC.name.toLowerCase() === localC.name.toLowerCase())
          })

          if (pendingUploads.length > 0) {
            console.log('Migrating local clients to Supabase:', pendingUploads)
            for (const client of pendingUploads) {
              try {
                await supabase
                  .from('clients')
                  .insert([{ name: client.name, image: client.image }])
              } catch (uploadErr) {
                console.error('Failed to auto-migrate client:', client.name, uploadErr)
              }
            }
            const { data: refreshedData } = await supabase
              .from('clients')
              .select('*')
              .order('created_at', { ascending: true })
            if (refreshedData) {
              const cleanRefreshed = refreshedData.filter(c => {
                const isWrong = wrongNames.includes(c.name)
                const isDefault = defaultClients.some(d => d.name.toLowerCase() === c.name.toLowerCase())
                return !isWrong && !isDefault
              })
              this.clients = [...defaultClients, ...cleanRefreshed]
            } else {
              this.clients = [...defaultClients, ...dbClients, ...pendingUploads]
            }
          } else {
            this.clients = [...defaultClients, ...dbClients]
          }
        }
      } catch (err) {
        console.error('Failed to load clients from Supabase:', err)
      }

      // Fetch and migrate solutions from Supabase
      try {
        const { data, error } = await supabase
          .from('solutions')
          .select('*')
          .order('id', { ascending: true })
        if (error) {
          console.error('Error fetching solutions from Supabase:', error)
          if (!this.solutions || this.solutions.length === 0) {
            this.solutions = [...defaultSolutions]
          }
        } else if (data && data.length) {
          const dbSolutions = data || []
          const userAddedLocal = localSolutions.filter(s => {
            const isDefaultId = Number(s.id) >= 1 && Number(s.id) <= 8
            const isUuid = typeof s.id === 'string' && s.id.includes('-')
            return !isDefaultId && !isUuid
          })
          const pendingUploads = userAddedLocal.filter(localS => {
            return !dbSolutions.some(dbS => dbS.name.toLowerCase() === localS.name.toLowerCase())
          })
          if (pendingUploads.length > 0) {
            console.log('Migrating local solutions to Supabase:', pendingUploads)
            for (const sol of pendingUploads) {
              try {
                await supabase
                  .from('solutions')
                  .insert([{ name: sol.name, description: sol.description, icon: sol.icon, color: sol.color }])
              } catch (uploadErr) {
                console.error('Failed to auto-migrate solution:', sol.name, uploadErr)
              }
            }
            const { data: refreshedData } = await supabase
              .from('solutions')
              .select('*')
              .order('id', { ascending: true })
            if (refreshedData && refreshedData.length) {
              this.solutions = refreshedData
            } else {
              this.solutions = dbSolutions
            }
          } else {
            this.solutions = dbSolutions
          }
        } else {
          // Table is empty! Let's auto-seed the defaultSolutions into Supabase
          console.log('Seeding default solutions to Supabase...')
          const seedData = defaultSolutions.map(s => ({
            name: s.name,
            description: s.description,
            icon: s.icon,
            color: s.color
          }))
          await supabase.from('solutions').insert(seedData)

          // Refetch
          const { data: seededData } = await supabase
            .from('solutions')
            .select('*')
            .order('id', { ascending: true })
          if (seededData && seededData.length) {
            this.solutions = seededData
          } else {
            this.solutions = [...defaultSolutions]
          }
        }
      } catch (err) {
        console.error('Failed to load solutions from Supabase:', err)
      }

      // Fetch and migrate portfolio items from Supabase
      await this.fetchAndMigratePortfolio(localPortfolio)

      // Fetch and migrate banners from Supabase
      await this.fetchAndMigrateBanners()

      // Fetch and migrate company profile from Supabase
      await this.fetchAndMigrateCompanyProfile()

      // Fetch and migrate visi_misi from Supabase
      await this.fetchAndMigrateVisiMisi()

      // Fetch and migrate office slides from Supabase
      await this.fetchAndMigrateOfficeSlides()

      // Fetch and migrate advantages from Supabase
      await this.fetchAndMigrateAdvantages()

      // Fetch and migrate services from Supabase
      await this.fetchAndMigrateServices()

      // Fetch and migrate artisans from Supabase
      await this.fetchAndMigrateArtisans()

      // Fetch and migrate Tukang Harian from Supabase
      await this.fetchAndMigrateTukangHarian()

      // Fetch and migrate Borongan from Supabase
      await this.fetchAndMigrateBorongan()

      // Fetch and migrate Konstruksi from Supabase
      await this.fetchAndMigrateKonstruksi()
 
      this.initialized = true
      this.saveStore()
    },

    incrementVisitorCount() {
      if (!sessionStorage.getItem('ptagra-visitor-counted')) {
        this.visitorCount += 1
        sessionStorage.setItem('ptagra-visitor-counted', 'true')
        this.saveStore()
      }
    },

    saveStore() {
      localStorage.setItem(
        'website-agraabhinayaperkasa-store-data',
        JSON.stringify({
          heroSlides: this.heroSlides,
          visiMisi: this.visiMisi,
          portfolioItems: this.portfolioItems,
          clients: this.clients,
          reviews: this.reviews,
          solutions: this.solutions,
          aboutTitle: this.aboutTitle,
          aboutText: this.aboutText,
          companyStats: this.companyStats,
          officeSlides: this.officeSlides,
          advantagesBubble: this.advantagesBubble,
          advantagesMascot: this.advantagesMascot,
          advantagesList: this.advantagesList,
          servicesTitle: this.servicesTitle,
          servicesList: this.servicesList,
          contactInfo: this.contactInfo,
          socialLinks: this.socialLinks,
          visitorCount: this.visitorCount,
          artisansSubHeader: this.artisansSubHeader,
          artisansTitle: this.artisansTitle,
          artisansDesc: this.artisansDesc,
          artisansSlides: this.artisansSlides,
          artisansPoints: this.artisansPoints,
          tukangHarianTitle: this.tukangHarianTitle,
          tukangHarianSlides: this.tukangHarianSlides,
          tukangHarianExtra: this.tukangHarianExtra,
          tukangHarianMaterial: this.tukangHarianMaterial,
          tukangHarianJagoan: this.tukangHarianJagoan,
          tukangHarianJagoanLainnya: this.tukangHarianJagoanLainnya,
          tukangHarianSupport: this.tukangHarianSupport,
          boronganHeroTitle: this.boronganHeroTitle,
          boronganHeroDesc: this.boronganHeroDesc,
          boronganHeroSlides: this.boronganHeroSlides,
          boronganHeroWaMsg: this.boronganHeroWaMsg,
          boronganSolutionBanner: this.boronganSolutionBanner,
          boronganBenefitsHeader: this.boronganBenefitsHeader,
          boronganBenefitsDesc: this.boronganBenefitsDesc,
          boronganBenefits: this.boronganBenefits,
          boronganStepsHeader: this.boronganStepsHeader,
          boronganStepsDesc: this.boronganStepsDesc,
          boronganSteps: this.boronganSteps,
          boronganSpecialtiesHeader: this.boronganSpecialtiesHeader,
          boronganSpecialtiesDesc: this.boronganSpecialtiesDesc,
          boronganSpecialties: this.boronganSpecialties,
          boronganAreasHeader: this.boronganAreasHeader,
          boronganAreas: this.boronganAreas,
          boronganOrderHeader: this.boronganOrderHeader,
          boronganOrderSteps: this.boronganOrderSteps,
          boronganSupport: this.boronganSupport,
          konstruksiHeroSlides: this.konstruksiHeroSlides,
          konstruksiSolutionTitle: this.konstruksiSolutionTitle,
          konstruksiServicesTitle: this.konstruksiServicesTitle,
          konstruksiServices: this.konstruksiServices,
          konstruksiStandardsHeader: this.konstruksiStandardsHeader,
          konstruksiStandardsTitle: this.konstruksiStandardsTitle,
          konstruksiStandardsDesc: this.konstruksiStandardsDesc,
          konstruksiStandardsCards: this.konstruksiStandardsCards,
          konstruksiStepsHeader: this.konstruksiStepsHeader,
          konstruksiStepsTitle: this.konstruksiStepsTitle,
          konstruksiStepsDesc: this.konstruksiStepsDesc,
          konstruksiSteps: this.konstruksiSteps,
          konstruksiVideosHeader: this.konstruksiVideosHeader,
          konstruksiVideosTitle: this.konstruksiVideosTitle,
          konstruksiVideosSubtitle: this.konstruksiVideosSubtitle,
          konstruksiVideosDesc: this.konstruksiVideosDesc,
          konstruksiVideos: this.konstruksiVideos,
          konstruksiSupport: this.konstruksiSupport
        })
      )
    },

    // Hero actions
    async fetchAndMigrateBanners() {
      try {
        const { data, error } = await supabase
          .from('banners')
          .select('*')
          .order('id', { ascending: true })
        if (error) {
          console.error('Error fetching banners from Supabase:', error)
        } else if (data && data.length) {
          this.heroSlides = data.map(b => ({
            id: b.id,
            name: b.name,
            title: b.title,
            subtitle: b.subtitle,
            image: b.image
          }))
        } else {
          console.log('Seeding default banners to Supabase...')
          const seedData = defaultHeroSlides.map(s => ({
            name: s.name,
            title: s.title,
            subtitle: s.subtitle,
            image: s.image
          }))
          await supabase.from('banners').insert(seedData)

          const { data: seededData } = await supabase
            .from('banners')
            .select('*')
            .order('id', { ascending: true })
          if (seededData && seededData.length) {
            this.heroSlides = seededData.map(b => ({
              id: b.id,
              name: b.name,
              title: b.title,
              subtitle: b.subtitle,
              image: b.image
            }))
          }
        }
      } catch (err) {
        console.error('Failed to load banners from Supabase:', err)
      }
    },

    async updateHeroSlides() {
      try {
        // Delete all rows in banners table using the guaranteed 'name' column
        const { error: deleteError } = await supabase
          .from('banners')
          .delete()
          .neq('name', 'dummy_value_to_delete_all')
        if (deleteError) {
          console.error('Error deleting banners in Supabase:', deleteError)
        }

        // Re-insert all current slides
        if (this.heroSlides.length) {
          const insertData = this.heroSlides.map(s => ({
            name: s.name,
            title: s.title,
            subtitle: s.subtitle,
            image: s.image
          }))
          const { error: insertError } = await supabase
            .from('banners')
            .insert(insertData)
          if (insertError) {
            console.error('Error inserting banners in Supabase:', insertError)
          }
        }

        // Refetch to sync state
        const { data } = await supabase
          .from('banners')
          .select('*')
          .order('id', { ascending: true })
        if (data) {
          this.heroSlides = data.map(b => ({
            id: b.id,
            name: b.name,
            title: b.title,
            subtitle: b.subtitle,
            image: b.image
          }))
        }
      } catch (err) {
        console.error('Failed to update hero slides in Supabase:', err)
      }
      this.saveStore()
    },

    async fetchAndMigrateCompanyProfile() {
      try {
        const { data, error } = await supabase
          .from('company_profile')
          .select('*')
        if (error) {
          console.error('Error fetching company profile from Supabase:', error)
        } else if (data && data.length) {
          const titleRow = data.find(r => r.key === 'about_title')
          const textRow = data.find(r => r.key === 'about_text')
          const statsRow = data.find(r => r.key === 'company_stats')

          if (titleRow) this.aboutTitle = titleRow.value
          if (textRow) this.aboutText = textRow.value
          if (statsRow) this.companyStats = statsRow.value
        } else {
          console.log('Seeding default company profile to Supabase...')
          const seedData = [
            { key: 'about_title', value: this.aboutTitle },
            { key: 'about_text', value: this.aboutText },
            { key: 'company_stats', value: this.companyStats }
          ]
          await supabase.from('company_profile').insert(seedData)
        }
      } catch (err) {
        console.error('Failed to load company profile from Supabase:', err)
      }
    },

    async updateCompanyProfile() {
      try {
        const { error } = await supabase
          .from('company_profile')
          .upsert([
            { key: 'about_title', value: this.aboutTitle },
            { key: 'about_text', value: this.aboutText },
            { key: 'company_stats', value: this.companyStats }
          ])
        if (error) {
          console.error('Error updating company profile in Supabase:', error)
        }
      } catch (err) {
        console.error('Failed to update company profile in Supabase:', err)
      }
      this.saveStore()
    },

    async fetchAndMigrateAdvantages() {
      try {
        const { data, error } = await supabase
          .from('advantages')
          .select('*')
        if (error) {
          console.error('Error fetching advantages from Supabase:', error)
        } else if (data && data.length) {
          const bubbleRow = data.find(r => r.key === 'bubble')
          const mascotRow = data.find(r => r.key === 'mascot')
          const listRow = data.find(r => r.key === 'list')

          if (bubbleRow) this.advantagesBubble = bubbleRow.value
          if (mascotRow) this.advantagesMascot = mascotRow.value
          if (listRow) this.advantagesList = listRow.value
        } else {
          console.log('Seeding default advantages to Supabase...')
          const seedData = [
            { key: 'bubble', value: this.advantagesBubble },
            { key: 'mascot', value: this.advantagesMascot },
            { key: 'list', value: this.advantagesList }
          ]
          await supabase.from('advantages').insert(seedData)
        }
      } catch (err) {
        console.error('Failed to load advantages from Supabase:', err)
      }
    },

    async updateAdvantagesDB() {
      try {
        const { error } = await supabase
          .from('advantages')
          .upsert([
            { key: 'bubble', value: this.advantagesBubble },
            { key: 'mascot', value: this.advantagesMascot },
            { key: 'list', value: this.advantagesList }
          ])
        if (error) {
          console.error('Error updating advantages in Supabase:', error)
        }
      } catch (err) {
        console.error('Failed to update advantages in Supabase:', err)
      }
      this.saveStore()
    },

    async fetchAndMigrateServices() {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .order('id', { ascending: true })
        if (error) {
          console.error('Error fetching services from Supabase:', error)
        } else if (data && data.length) {
          // Set section title from the first row
          if (data[0].section_title) {
            this.servicesTitle = data[0].section_title
          }
          this.servicesList = data.map(s => ({
            id: s.id,
            title: s.title,
            desc: s.desc,
            image: s.image,
            detailTitle: s.detail_title,
            detailDesc: s.detail_desc,
            bulletsText: s.bullets_text,
            link: s.link,
            badge: s.badge,
            activeBg: s.active_bg
          }))
        } else {
          console.log('Seeding default services to Supabase...')
          const seedData = defaultServicesList.map(s => ({
            title: s.title,
            desc: s.desc,
            image: s.image,
            detail_title: s.detailTitle,
            detail_desc: s.detailDesc,
            bullets_text: s.bulletsText,
            link: s.link,
            badge: s.badge,
            active_bg: s.activeBg,
            section_title: this.servicesTitle
          }))
          await supabase.from('services').insert(seedData)

          const { data: seededData } = await supabase
            .from('services')
            .select('*')
            .order('id', { ascending: true })
          if (seededData && seededData.length) {
            this.servicesList = seededData.map(s => ({
              id: s.id,
              title: s.title,
              desc: s.desc,
              image: s.image,
              detailTitle: s.detail_title,
              detailDesc: s.detail_desc,
              bulletsText: s.bullets_text,
              link: s.link,
              badge: s.badge,
              activeBg: s.active_bg
            }))
          }
        }
      } catch (err) {
        console.error('Failed to load services from Supabase:', err)
      }
    },

    async updateServicesDB() {
      try {
        // Delete all rows in services table
        const { error: deleteError } = await supabase
          .from('services')
          .delete()
          .neq('id', 0)
        if (deleteError) {
          console.error('Error deleting services in Supabase:', deleteError)
        }

        // Re-insert all current services, adding section_title to all rows
        if (this.servicesList.length) {
          const insertData = this.servicesList.map(s => ({
            title: s.title,
            desc: s.desc,
            image: s.image,
            detail_title: s.detailTitle,
            detail_desc: s.detailDesc,
            bullets_text: s.bulletsText,
            link: s.link,
            badge: s.badge,
            active_bg: s.activeBg,
            section_title: this.servicesTitle
          }))
          const { error: insertError } = await supabase
            .from('services')
            .insert(insertData)
          if (insertError) {
            console.error('Error inserting services in Supabase:', insertError)
          }
        }

        // Refetch to sync state
        const { data } = await supabase
          .from('services')
          .select('*')
          .order('id', { ascending: true })
        if (data) {
          this.servicesList = data.map(s => ({
            id: s.id,
            title: s.title,
            desc: s.desc,
            image: s.image,
            detailTitle: s.detail_title,
            detailDesc: s.detail_desc,
            bulletsText: s.bullets_text,
            link: s.link,
            badge: s.badge,
            activeBg: s.active_bg
          }))
        }
      } catch (err) {
        console.error('Failed to update services in Supabase:', err)
      }
      this.saveStore()
    },

    async fetchAndMigrateArtisans() {
      try {
        const { data, error } = await supabase
          .from('artisans')
          .select('*')
        if (error) {
          console.error('Error fetching artisans from Supabase:', error)
        } else if (data && data.length) {
          const subHeaderRow = data.find(r => r.key === 'sub_header')
          const titleRow = data.find(r => r.key === 'title')
          const descRow = data.find(r => r.key === 'desc')
          const slidesRow = data.find(r => r.key === 'slides')
          const pointsRow = data.find(r => r.key === 'points')

          if (subHeaderRow) this.artisansSubHeader = subHeaderRow.value
          if (titleRow) this.artisansTitle = titleRow.value
          if (descRow) this.artisansDesc = descRow.value
          if (slidesRow) this.artisansSlides = slidesRow.value
          if (pointsRow) this.artisansPoints = pointsRow.value
        } else {
          console.log('Seeding default artisans to Supabase...')
          const seedData = [
            { key: 'sub_header', value: this.artisansSubHeader },
            { key: 'title', value: this.artisansTitle },
            { key: 'desc', value: this.artisansDesc },
            { key: 'slides', value: this.artisansSlides },
            { key: 'points', value: this.artisansPoints }
          ]
          await supabase.from('artisans').insert(seedData)
        }
      } catch (err) {
        console.error('Failed to load artisans from Supabase:', err)
      }
    },

    async updateArtisansDB() {
      try {
        const { error } = await supabase
          .from('artisans')
          .upsert([
            { key: 'sub_header', value: this.artisansSubHeader },
            { key: 'title', value: this.artisansTitle },
            { key: 'desc', value: this.artisansDesc },
            { key: 'slides', value: this.artisansSlides },
            { key: 'points', value: this.artisansPoints }
          ])
        if (error) {
          console.error('Error updating artisans in Supabase:', error)
        }
      } catch (err) {
        console.error('Failed to update artisans in Supabase:', err)
      }
      this.saveStore()
    },

    async fetchAndMigrateTukangHarian() {
      try {
        const { data, error } = await supabase
          .from('tukang_harian')
          .select('*')
        if (error) {
          console.error('Error fetching Tukang Harian from Supabase:', error)
        } else if (data && data.length) {
          const titleRow = data.find(r => r.key === 'title')
          const slidesRow = data.find(r => r.key === 'slides')
          const extraRow = data.find(r => r.key === 'extra')
          const materialRow = data.find(r => r.key === 'material')
          const jagoanRow = data.find(r => r.key === 'jagoan')
          const jagoanLainnyaRow = data.find(r => r.key === 'jagoan_lainnya')
          const supportRow = data.find(r => r.key === 'support')
          
          if (titleRow && titleRow.value) this.tukangHarianTitle = titleRow.value
          if (slidesRow && slidesRow.value && slidesRow.value.length) this.tukangHarianSlides = slidesRow.value
          if (extraRow && extraRow.value && extraRow.value.length) {
            this.tukangHarianExtra = extraRow.value
          } else {
            this.tukangHarianExtra = [...defaultTukangHarianExtra]
          }
          if (materialRow && materialRow.value) {
            this.tukangHarianMaterial = materialRow.value
          } else {
            this.tukangHarianMaterial = JSON.parse(JSON.stringify(defaultTukangHarianMaterial))
          }
          if (jagoanRow && jagoanRow.value) {
            this.tukangHarianJagoan = jagoanRow.value
          } else {
            this.tukangHarianJagoan = JSON.parse(JSON.stringify(defaultTukangHarianJagoan))
          }
          if (jagoanLainnyaRow && jagoanLainnyaRow.value) {
            this.tukangHarianJagoanLainnya = jagoanLainnyaRow.value
          } else {
            this.tukangHarianJagoanLainnya = [...defaultTukangHarianJagoanLainnya]
          }
          if (supportRow && supportRow.value) {
            this.tukangHarianSupport = supportRow.value
          } else {
            this.tukangHarianSupport = JSON.parse(JSON.stringify(defaultTukangHarianSupport))
          }
        } else {
          console.log('Seeding default Tukang Harian to Supabase...')
          const seedData = [
            { key: 'title', value: this.tukangHarianTitle },
            { key: 'slides', value: this.tukangHarianSlides },
            { key: 'extra', value: this.tukangHarianExtra },
            { key: 'material', value: this.tukangHarianMaterial },
            { key: 'jagoan', value: this.tukangHarianJagoan },
            { key: 'jagoan_lainnya', value: this.tukangHarianJagoanLainnya },
            { key: 'support', value: this.tukangHarianSupport }
          ]
          await supabase.from('tukang_harian').insert(seedData)
        }
      } catch (err) {
        console.error('Failed to load Tukang Harian from Supabase:', err)
      }
    },

    async updateTukangHarianDB() {
      try {
        const { error } = await supabase
          .from('tukang_harian')
          .upsert([
            { key: 'title', value: this.tukangHarianTitle },
            { key: 'slides', value: this.tukangHarianSlides },
            { key: 'extra', value: this.tukangHarianExtra },
            { key: 'material', value: this.tukangHarianMaterial },
            { key: 'jagoan', value: this.tukangHarianJagoan },
            { key: 'jagoan_lainnya', value: this.tukangHarianJagoanLainnya },
            { key: 'support', value: this.tukangHarianSupport }
          ])
        if (error) {
          console.error('Error updating Tukang Harian in Supabase:', error)
        }
      } catch (err) {
        console.error('Failed to update Tukang Harian in Supabase:', err)
      }
      this.saveStore()
    },

    async fetchAndMigrateBorongan() {
      try {
        const { data, error } = await supabase
          .from('borongan')
          .select('*')
        if (error) {
          console.error('Error fetching Borongan from Supabase:', error)
        } else if (data && data.length) {
          const titleRow = data.find(r => r.key === 'title')
          const descRow = data.find(r => r.key === 'desc')
          const slidesRow = data.find(r => r.key === 'slides')
          const waMsgRow = data.find(r => r.key === 'wa_msg')
          const bannerRow = data.find(r => r.key === 'solution_banner')
          const benefitsHeaderRow = data.find(r => r.key === 'benefits_header')
          const benefitsDescRow = data.find(r => r.key === 'benefits_desc')
          const benefitsRow = data.find(r => r.key === 'benefits')
          const stepsHeaderRow = data.find(r => r.key === 'steps_header')
          const stepsDescRow = data.find(r => r.key === 'steps_desc')
          const stepsRow = data.find(r => r.key === 'steps')
          const specialtiesHeaderRow = data.find(r => r.key === 'specialties_header')
          const specialtiesDescRow = data.find(r => r.key === 'specialties_desc')
          const specialtiesRow = data.find(r => r.key === 'specialties')
          const areasHeaderRow = data.find(r => r.key === 'areas_header')
          const areasRow = data.find(r => r.key === 'areas')
          const orderHeaderRow = data.find(r => r.key === 'order_header')
          const orderStepsRow = data.find(r => r.key === 'order_steps')
          const supportRow = data.find(r => r.key === 'support')
          
          if (titleRow && titleRow.value) this.boronganHeroTitle = titleRow.value
          if (descRow && descRow.value) this.boronganHeroDesc = descRow.value
          if (slidesRow && slidesRow.value && slidesRow.value.length) this.boronganHeroSlides = slidesRow.value
          if (waMsgRow && waMsgRow.value) this.boronganHeroWaMsg = waMsgRow.value
          if (bannerRow && bannerRow.value) this.boronganSolutionBanner = bannerRow.value
          if (benefitsHeaderRow && benefitsHeaderRow.value) this.boronganBenefitsHeader = benefitsHeaderRow.value
          if (benefitsDescRow && benefitsDescRow.value) this.boronganBenefitsDesc = benefitsDescRow.value
          if (benefitsRow && benefitsRow.value && benefitsRow.value.length) this.boronganBenefits = benefitsRow.value
          if (stepsHeaderRow && stepsHeaderRow.value) this.boronganStepsHeader = stepsHeaderRow.value
          if (stepsDescRow && stepsDescRow.value) this.boronganStepsDesc = stepsDescRow.value
          if (stepsRow && stepsRow.value && stepsRow.value.length) this.boronganSteps = stepsRow.value
          if (specialtiesHeaderRow && specialtiesHeaderRow.value) this.boronganSpecialtiesHeader = specialtiesHeaderRow.value
          if (specialtiesDescRow && specialtiesDescRow.value) this.boronganSpecialtiesDesc = specialtiesDescRow.value
          if (specialtiesRow && specialtiesRow.value && specialtiesRow.value.length) this.boronganSpecialties = specialtiesRow.value
          if (areasHeaderRow && areasHeaderRow.value) this.boronganAreasHeader = areasHeaderRow.value
          if (areasRow && areasRow.value && areasRow.value.length) this.boronganAreas = areasRow.value
          if (orderHeaderRow && orderHeaderRow.value) this.boronganOrderHeader = orderHeaderRow.value
          if (orderStepsRow && orderStepsRow.value && orderStepsRow.value.length) this.boronganOrderSteps = orderStepsRow.value
          if (supportRow && supportRow.value) {
            this.boronganSupport = supportRow.value
          } else {
            this.boronganSupport = JSON.parse(JSON.stringify(defaultBoronganSupport))
          }

          // Seeding missing keys dynamically if they don't exist yet
          const missingKeys = []
          if (!benefitsHeaderRow) missingKeys.push({ key: 'benefits_header', value: this.boronganBenefitsHeader })
          if (!benefitsDescRow) missingKeys.push({ key: 'benefits_desc', value: this.boronganBenefitsDesc })
          if (!benefitsRow) missingKeys.push({ key: 'benefits', value: this.boronganBenefits })
          if (!stepsHeaderRow) missingKeys.push({ key: 'steps_header', value: this.boronganStepsHeader })
          if (!stepsDescRow) missingKeys.push({ key: 'steps_desc', value: this.boronganStepsDesc })
          if (!stepsRow) missingKeys.push({ key: 'steps', value: this.boronganSteps })
          if (!specialtiesHeaderRow) missingKeys.push({ key: 'specialties_header', value: this.boronganSpecialtiesHeader })
          if (!specialtiesDescRow) missingKeys.push({ key: 'specialties_desc', value: this.boronganSpecialtiesDesc })
          if (!specialtiesRow) missingKeys.push({ key: 'specialties', value: this.boronganSpecialties })
          if (!areasHeaderRow) missingKeys.push({ key: 'areas_header', value: this.boronganAreasHeader })
          if (!areasRow) missingKeys.push({ key: 'areas', value: this.boronganAreas })
          if (!orderHeaderRow) missingKeys.push({ key: 'order_header', value: this.boronganOrderHeader })
          if (!orderStepsRow) missingKeys.push({ key: 'order_steps', value: this.boronganOrderSteps })
          if (!supportRow) missingKeys.push({ key: 'support', value: this.boronganSupport })

          if (missingKeys.length > 0) {
            console.log('Seeding missing keys to Borongan Supabase table:', missingKeys.map(k => k.key))
            await supabase.from('borongan').insert(missingKeys)
          }
        } else {
          console.log('Seeding default Borongan to Supabase...')
          const seedData = [
            { key: 'title', value: this.boronganHeroTitle },
            { key: 'desc', value: this.boronganHeroDesc },
            { key: 'slides', value: this.boronganHeroSlides },
            { key: 'wa_msg', value: this.boronganHeroWaMsg },
            { key: 'solution_banner', value: this.boronganSolutionBanner },
            { key: 'benefits_header', value: this.boronganBenefitsHeader },
            { key: 'benefits_desc', value: this.boronganBenefitsDesc },
            { key: 'benefits', value: this.boronganBenefits },
            { key: 'steps_header', value: this.boronganStepsHeader },
            { key: 'steps_desc', value: this.boronganStepsDesc },
            { key: 'steps', value: this.boronganSteps },
            { key: 'specialties_header', value: this.boronganSpecialtiesHeader },
            { key: 'specialties_desc', value: this.boronganSpecialtiesDesc },
            { key: 'specialties', value: this.boronganSpecialties },
            { key: 'areas_header', value: this.boronganAreasHeader },
            { key: 'areas', value: this.boronganAreas },
            { key: 'order_header', value: this.boronganOrderHeader },
            { key: 'order_steps', value: this.boronganOrderSteps },
            { key: 'support', value: this.boronganSupport }
          ]
          await supabase.from('borongan').insert(seedData)
        }
      } catch (err) {
        console.error('Failed to load Borongan from Supabase:', err)
      }
    },

    async updateBoronganDB() {
      try {
        const { error } = await supabase
          .from('borongan')
          .upsert([
            { key: 'title', value: this.boronganHeroTitle },
            { key: 'desc', value: this.boronganHeroDesc },
            { key: 'slides', value: this.boronganHeroSlides },
            { key: 'wa_msg', value: this.boronganHeroWaMsg },
            { key: 'solution_banner', value: this.boronganSolutionBanner },
            { key: 'benefits_header', value: this.boronganBenefitsHeader },
            { key: 'benefits_desc', value: this.boronganBenefitsDesc },
            { key: 'benefits', value: this.boronganBenefits },
            { key: 'steps_header', value: this.boronganStepsHeader },
            { key: 'steps_desc', value: this.boronganStepsDesc },
            { key: 'steps', value: this.boronganSteps },
            { key: 'specialties_header', value: this.boronganSpecialtiesHeader },
            { key: 'specialties_desc', value: this.boronganSpecialtiesDesc },
            { key: 'specialties', value: this.boronganSpecialties },
            { key: 'areas_header', value: this.boronganAreasHeader },
            { key: 'areas', value: this.boronganAreas },
            { key: 'order_header', value: this.boronganOrderHeader },
            { key: 'order_steps', value: this.boronganOrderSteps },
            { key: 'support', value: this.boronganSupport }
          ])
        if (error) {
          console.error('Error updating Borongan in Supabase:', error)
        }
      } catch (err) {
        console.error('Failed to update Borongan in Supabase:', err)
      }
      this.saveStore()
    },

    async fetchAndMigrateKonstruksi() {
      try {
        const { data, error } = await supabase
          .from('konstruksi')
          .select('*')
        if (error) {
          console.error('Error fetching Konstruksi from Supabase:', error)
        } else if (data && data.length) {
          const heroSlidesRow = data.find(r => r.key === 'hero_slides')
          const solutionTitleRow = data.find(r => r.key === 'solution_title')
          const servicesTitleRow = data.find(r => r.key === 'services_title')
          const servicesRow = data.find(r => r.key === 'services_list')
          const standardsHeaderRow = data.find(r => r.key === 'standards_header')
          const standardsTitleRow = data.find(r => r.key === 'standards_title')
          const standardsDescRow = data.find(r => r.key === 'standards_desc')
          const standardsCardsRow = data.find(r => r.key === 'standards_cards')
          const stepsHeaderRow = data.find(r => r.key === 'steps_header')
          const stepsTitleRow = data.find(r => r.key === 'steps_title')
          const stepsDescRow = data.find(r => r.key === 'steps_desc')
          const stepsRow = data.find(r => r.key === 'steps_list')
          const videosHeaderRow = data.find(r => r.key === 'videos_header')
          const videosTitleRow = data.find(r => r.key === 'videos_title')
          const videosSubtitleRow = data.find(r => r.key === 'videos_subtitle')
          const videosDescRow = data.find(r => r.key === 'videos_desc')
          const videosRow = data.find(r => r.key === 'videos_list')
          const supportRow = data.find(r => r.key === 'support')

          if (heroSlidesRow && heroSlidesRow.value && heroSlidesRow.value.length) this.konstruksiHeroSlides = heroSlidesRow.value
          if (solutionTitleRow && solutionTitleRow.value) this.konstruksiSolutionTitle = solutionTitleRow.value
          if (servicesTitleRow && servicesTitleRow.value) this.konstruksiServicesTitle = servicesTitleRow.value
          if (servicesRow && servicesRow.value && servicesRow.value.length) this.konstruksiServices = servicesRow.value
          if (standardsHeaderRow && standardsHeaderRow.value) this.konstruksiStandardsHeader = standardsHeaderRow.value
          if (standardsTitleRow && standardsTitleRow.value) this.konstruksiStandardsTitle = standardsTitleRow.value
          if (standardsDescRow && standardsDescRow.value) this.konstruksiStandardsDesc = standardsDescRow.value
          if (standardsCardsRow && standardsCardsRow.value && standardsCardsRow.value.length) this.konstruksiStandardsCards = standardsCardsRow.value
          if (stepsHeaderRow && stepsHeaderRow.value) this.konstruksiStepsHeader = stepsHeaderRow.value
          if (stepsTitleRow && stepsTitleRow.value) this.konstruksiStepsTitle = stepsTitleRow.value
          if (stepsDescRow && stepsDescRow.value) this.konstruksiStepsDesc = stepsDescRow.value
          if (stepsRow && stepsRow.value && stepsRow.value.length) this.konstruksiSteps = stepsRow.value
          if (videosHeaderRow && videosHeaderRow.value) this.konstruksiVideosHeader = videosHeaderRow.value
          if (videosTitleRow && videosTitleRow.value) this.konstruksiVideosTitle = videosTitleRow.value
          if (videosSubtitleRow && videosSubtitleRow.value) this.konstruksiVideosSubtitle = videosSubtitleRow.value
          if (videosDescRow && videosDescRow.value) this.konstruksiVideosDesc = videosDescRow.value
          if (videosRow && videosRow.value && videosRow.value.length) this.konstruksiVideos = videosRow.value
          if (supportRow && supportRow.value) {
            this.konstruksiSupport = supportRow.value
          } else {
            this.konstruksiSupport = JSON.parse(JSON.stringify(defaultKonstruksiSupport))
          }

          // Seed missing keys dynamically if they don't exist yet
          const missingKeys = []
          if (!heroSlidesRow) missingKeys.push({ key: 'hero_slides', value: this.konstruksiHeroSlides })
          if (!solutionTitleRow) missingKeys.push({ key: 'solution_title', value: this.konstruksiSolutionTitle })
          if (!servicesTitleRow) missingKeys.push({ key: 'services_title', value: this.konstruksiServicesTitle })
          if (!servicesRow) missingKeys.push({ key: 'services_list', value: this.konstruksiServices })
          if (!standardsHeaderRow) missingKeys.push({ key: 'standards_header', value: this.konstruksiStandardsHeader })
          if (!standardsTitleRow) missingKeys.push({ key: 'standards_title', value: this.konstruksiStandardsTitle })
          if (!standardsDescRow) missingKeys.push({ key: 'standards_desc', value: this.konstruksiStandardsDesc })
          if (!standardsCardsRow) missingKeys.push({ key: 'standards_cards', value: this.konstruksiStandardsCards })
          if (!stepsHeaderRow) missingKeys.push({ key: 'steps_header', value: this.konstruksiStepsHeader })
          if (!stepsTitleRow) missingKeys.push({ key: 'steps_title', value: this.konstruksiStepsTitle })
          if (!stepsDescRow) missingKeys.push({ key: 'steps_desc', value: this.konstruksiStepsDesc })
          if (!stepsRow) missingKeys.push({ key: 'steps_list', value: this.konstruksiSteps })
          if (!videosHeaderRow) missingKeys.push({ key: 'videos_header', value: this.konstruksiVideosHeader })
          if (!videosTitleRow) missingKeys.push({ key: 'videos_title', value: this.konstruksiVideosTitle })
          if (!videosSubtitleRow) missingKeys.push({ key: 'videos_subtitle', value: this.konstruksiVideosSubtitle })
          if (!videosDescRow) missingKeys.push({ key: 'videos_desc', value: this.konstruksiVideosDesc })
          if (!videosRow) missingKeys.push({ key: 'videos_list', value: this.konstruksiVideos })
          if (!supportRow) missingKeys.push({ key: 'support', value: this.konstruksiSupport })

          if (missingKeys.length > 0) {
            console.log('Seeding missing keys to Konstruksi Supabase table:', missingKeys.map(k => k.key))
            await supabase.from('konstruksi').insert(missingKeys)
          }
        } else {
          console.log('Seeding default Konstruksi to Supabase...')
          const seedData = [
            { key: 'hero_slides', value: this.konstruksiHeroSlides },
            { key: 'solution_title', value: this.konstruksiSolutionTitle },
            { key: 'services_title', value: this.konstruksiServicesTitle },
            { key: 'services_list', value: this.konstruksiServices },
            { key: 'standards_header', value: this.konstruksiStandardsHeader },
            { key: 'standards_title', value: this.konstruksiStandardsTitle },
            { key: 'standards_desc', value: this.konstruksiStandardsDesc },
            { key: 'standards_cards', value: this.konstruksiStandardsCards },
            { key: 'steps_header', value: this.konstruksiStepsHeader },
            { key: 'steps_title', value: this.konstruksiStepsTitle },
            { key: 'steps_desc', value: this.konstruksiStepsDesc },
            { key: 'steps_list', value: this.konstruksiSteps },
            { key: 'videos_header', value: this.konstruksiVideosHeader },
            { key: 'videos_title', value: this.konstruksiVideosTitle },
            { key: 'videos_subtitle', value: this.konstruksiVideosSubtitle },
            { key: 'videos_desc', value: this.konstruksiVideosDesc },
            { key: 'videos_list', value: this.konstruksiVideos },
            { key: 'support', value: this.konstruksiSupport }
          ]
          await supabase.from('konstruksi').insert(seedData)
        }
      } catch (err) {
        console.error('Failed to load Konstruksi from Supabase:', err)
      }
    },

    async updateKonstruksiDB() {
      try {
        const { error } = await supabase
          .from('konstruksi')
          .upsert([
            { key: 'hero_slides', value: this.konstruksiHeroSlides },
            { key: 'solution_title', value: this.konstruksiSolutionTitle },
            { key: 'services_title', value: this.konstruksiServicesTitle },
            { key: 'services_list', value: this.konstruksiServices },
            { key: 'standards_header', value: this.konstruksiStandardsHeader },
            { key: 'standards_title', value: this.konstruksiStandardsTitle },
            { key: 'standards_desc', value: this.konstruksiStandardsDesc },
            { key: 'standards_cards', value: this.konstruksiStandardsCards },
            { key: 'steps_header', value: this.konstruksiStepsHeader },
            { key: 'steps_title', value: this.konstruksiStepsTitle },
            { key: 'steps_desc', value: this.konstruksiStepsDesc },
            { key: 'steps_list', value: this.konstruksiSteps },
            { key: 'videos_header', value: this.konstruksiVideosHeader },
            { key: 'videos_title', value: this.konstruksiVideosTitle },
            { key: 'videos_subtitle', value: this.konstruksiVideosSubtitle },
            { key: 'videos_desc', value: this.konstruksiVideosDesc },
            { key: 'videos_list', value: this.konstruksiVideos },
            { key: 'support', value: this.konstruksiSupport }
          ])
        if (error) {
          console.error('Error updating Konstruksi in Supabase:', error)
        }
      } catch (err) {
        console.error('Failed to update Konstruksi in Supabase:', err)
      }
      this.saveStore()
    },


    updateHeroSlide(index, slideData) {
      if (this.heroSlides[index]) {
        this.heroSlides[index] = { ...this.heroSlides[index], ...slideData }
        this.saveStore()
      }
    },

    // Visi Misi actions
    async fetchAndMigrateVisiMisi() {
      try {
        const { data, error } = await supabase
          .from('visi_misi')
          .select('*')
          .eq('id', 1)
          .single()
        if (error && error.code !== 'PGRST116') {
          console.error('Error fetching visi_misi from Supabase:', error)
        } else if (data) {
          this.visiMisi = {
            visi: data.visi,
            misi: data.misi
          }
        } else {
          console.log('Seeding default visi_misi to Supabase...')
          await supabase.from('visi_misi').insert({
            id: 1,
            visi: this.visiMisi.visi,
            misi: this.visiMisi.misi
          })
        }
      } catch (err) {
        console.error('Failed to load visi_misi from Supabase:', err)
      }
    },

    async updateVisiMisiDB() {
      try {
        const { error } = await supabase
          .from('visi_misi')
          .upsert({
            id: 1,
            visi: this.visiMisi.visi,
            misi: this.visiMisi.misi
          })
        if (error) {
          console.error('Error updating visi_misi in Supabase:', error)
        }
      } catch (err) {
        console.error('Failed to update visi_misi in Supabase:', err)
      }
      this.saveStore()
    },

    updateVisiMisi(data) {
      this.visiMisi = { ...this.visiMisi, ...data }
      this.saveStore()
    },

    async fetchAndMigrateOfficeSlides() {
      try {
        const { data, error } = await supabase
          .from('office_slides')
          .select('*')
          .order('id', { ascending: true })
        if (error) {
          console.error('Error fetching office slides from Supabase:', error)
        } else if (data && data.length) {
          this.officeSlides = data.map(o => ({
            id: o.id,
            image: o.image,
            title: o.title,
            desc: o.desc
          }))
        } else {
          console.log('Seeding default office slides to Supabase...')
          const seedData = defaultOfficeSlides.map(o => ({
            image: o.image,
            title: o.title,
            desc: o.desc
          }))
          await supabase.from('office_slides').insert(seedData)

          const { data: seededData } = await supabase
            .from('office_slides')
            .select('*')
            .order('id', { ascending: true })
          if (seededData && seededData.length) {
            this.officeSlides = seededData.map(o => ({
              id: o.id,
              image: o.image,
              title: o.title,
              desc: o.desc
            }))
          }
        }
      } catch (err) {
        console.error('Failed to load office slides from Supabase:', err)
      }
    },

    async updateOfficeSlidesDB() {
      try {
        // Delete all rows in office_slides
        const { error: deleteError } = await supabase
          .from('office_slides')
          .delete()
          .neq('id', 0)
        if (deleteError) {
          console.error('Error deleting office slides in Supabase:', deleteError)
        }

        // Re-insert all current office slides
        if (this.officeSlides.length) {
          const insertData = this.officeSlides.map(o => ({
            image: o.image,
            title: o.title,
            desc: o.desc
          }))
          const { error: insertError } = await supabase
            .from('office_slides')
            .insert(insertData)
          if (insertError) {
            console.error('Error inserting office slides in Supabase:', insertError)
          }
        }

        // Refetch to populate IDs
        const { data } = await supabase
          .from('office_slides')
          .select('*')
          .order('id', { ascending: true })
        if (data) {
          this.officeSlides = data.map(o => ({
            id: o.id,
            image: o.image,
            title: o.title,
            desc: o.desc
          }))
        }
      } catch (err) {
        console.error('Failed to update office slides in Supabase:', err)
      }
      this.saveStore()
    },

    // Portfolio actions
    async fetchAndMigratePortfolio(localPortfolio = []) {
      try {
        const { data, error } = await supabase
          .from('portfolio')
          .select('*')
          .order('id', { ascending: false })
        if (error) {
          console.error('Error fetching portfolio from Supabase:', error)
          if (!this.portfolioItems || this.portfolioItems.length === 0) {
            this.portfolioItems = JSON.parse(JSON.stringify(defaultPortfolioItems))
          }
        } else if (data && data.length) {
          const dbPortfolio = (data || []).map(p => ({
            id: p.id,
            title: p.title,
            category: p.category,
            categoryLabel: p.categorylabel, // Map database lowercase to JS camelCase
            location: p.location,
            image: p.image,
            desc: p.desc,
            fullDesc: p.fulldesc, // Map database lowercase to JS camelCase
            specifications: p.specifications,
            gallery: p.gallery
          }))
          const userAddedLocal = localPortfolio.filter(p => {
            const isDefaultId = Number(p.id) >= 0 && Number(p.id) <= 9
            const isUuid = typeof p.id === 'string' && p.id.includes('-')
            return !isDefaultId && !isUuid
          })
          const pendingUploads = userAddedLocal.filter(localP => {
            return !dbPortfolio.some(dbP => dbP.title.toLowerCase() === localP.title.toLowerCase())
          })
          if (pendingUploads.length > 0) {
            console.log('Migrating local portfolio items to Supabase:', pendingUploads)
            for (const item of pendingUploads) {
              try {
                await supabase
                  .from('portfolio')
                  .insert([{
                    title: item.title,
                    category: item.category,
                    categorylabel: item.categoryLabel, // Map JS camelCase to database lowercase
                    location: item.location,
                    image: item.image,
                    desc: item.desc,
                    fulldesc: item.fullDesc, // Map JS camelCase to database lowercase
                    specifications: item.specifications,
                    gallery: item.gallery
                  }])
              } catch (uploadErr) {
                console.error('Failed to auto-migrate portfolio item:', item.title, uploadErr)
              }
            }
            const { data: refreshedData } = await supabase
              .from('portfolio')
              .select('*')
              .order('id', { ascending: false })
            if (refreshedData && refreshedData.length) {
              this.portfolioItems = refreshedData.map(p => ({
                id: p.id,
                title: p.title,
                category: p.category,
                categoryLabel: p.categorylabel,
                location: p.location,
                image: p.image,
                desc: p.desc,
                fullDesc: p.fulldesc,
                specifications: p.specifications,
                gallery: p.gallery
              }))
            } else {
              this.portfolioItems = dbPortfolio
            }
          } else {
            this.portfolioItems = dbPortfolio
          }
        } else {
          console.log('Seeding default portfolio items to Supabase...')
          const seedData = defaultPortfolioItems.map(p => ({
            id: p.id,
            title: p.title,
            category: p.category,
            categorylabel: p.categoryLabel, // Map JS camelCase to database lowercase
            location: p.location,
            image: p.image,
            desc: p.desc,
            fulldesc: p.fullDesc, // Map JS camelCase to database lowercase
            specifications: p.specifications,
            gallery: p.gallery
          }))
          await supabase.from('portfolio').insert(seedData)

          const { data: seededData } = await supabase
            .from('portfolio')
            .select('*')
            .order('id', { ascending: false })
          if (seededData && seededData.length) {
            this.portfolioItems = seededData.map(p => ({
              id: p.id,
              title: p.title,
              category: p.category,
              categoryLabel: p.categorylabel,
              location: p.location,
              image: p.image,
              desc: p.desc,
              fullDesc: p.fulldesc,
              specifications: p.specifications,
              gallery: p.gallery
            }))
          } else {
            this.portfolioItems = JSON.parse(JSON.stringify(defaultPortfolioItems))
          }
        }
      } catch (err) {
        console.error('Failed to load portfolio from Supabase:', err)
      }
    },

    async addPortfolioItem(item) {
      try {
        const { error } = await supabase
          .from('portfolio')
          .insert([
            {
              title: item.title,
              category: item.category,
              categorylabel: item.categoryLabel, // Map JS camelCase to database lowercase
              location: item.location,
              image: item.image,
              desc: item.desc,
              fulldesc: item.fullDesc, // Map JS camelCase to database lowercase
              specifications: item.specifications,
              gallery: item.gallery
            }
          ])

        if (error) {
          console.error('Error inserting portfolio item into Supabase:', error)
        } else {
          const { data } = await supabase
            .from('portfolio')
            .select('*')
            .order('id', { ascending: false })
          if (data && data.length) {
            this.portfolioItems = data.map(p => ({
              id: p.id,
              title: p.title,
              category: p.category,
              categoryLabel: p.categorylabel,
              location: p.location,
              image: p.image,
              desc: p.desc,
              fullDesc: p.fulldesc,
              specifications: p.specifications,
              gallery: p.gallery
            }))
          }
        }
      } catch (err) {
        console.error('Failed to add portfolio item to Supabase:', err)
      }
      this.saveStore()
    },

    async updatePortfolioItem(id, updatedItem) {
      try {
        const { error } = await supabase
          .from('portfolio')
          .update({
            title: updatedItem.title,
            category: updatedItem.category,
            categorylabel: updatedItem.categoryLabel, // Map JS camelCase to database lowercase
            location: updatedItem.location,
            image: updatedItem.image,
            desc: updatedItem.desc,
            fulldesc: updatedItem.fullDesc, // Map JS camelCase to database lowercase
            specifications: updatedItem.specifications,
            gallery: updatedItem.gallery
          })
          .eq('id', id)

        if (error) {
          console.error('Error updating portfolio item in Supabase:', error)
        } else {
          const { data } = await supabase
            .from('portfolio')
            .select('*')
            .order('id', { ascending: false })
          if (data && data.length) {
            this.portfolioItems = data.map(p => ({
              id: p.id,
              title: p.title,
              category: p.category,
              categoryLabel: p.categorylabel,
              location: p.location,
              image: p.image,
              desc: p.desc,
              fullDesc: p.fulldesc,
              specifications: p.specifications,
              gallery: p.gallery
            }))
          }
        }
      } catch (err) {
        console.error('Failed to update portfolio item in Supabase:', err)
      }
      this.saveStore()
    },

    async deletePortfolioItem(id) {
      try {
        const { error } = await supabase
          .from('portfolio')
          .delete()
          .eq('id', id)

        if (error) {
          console.error('Error deleting portfolio item from Supabase:', error)
        } else {
          this.portfolioItems = this.portfolioItems.filter(p => p.id !== id)
        }
      } catch (err) {
        console.error('Failed to delete portfolio item from Supabase:', err)
      }
      this.saveStore()
    },

    // Client actions
    async addClient(client) {
      try {
        const { error } = await supabase
          .from('clients')
          .insert([
            {
              name: client.name,
              image: client.image
            }
          ])

        if (error) {
          console.error('Error inserting client into Supabase:', error)
        } else {
          const { data } = await supabase
            .from('clients')
            .select('*')
            .order('created_at', { ascending: true })
          if (data && data.length) {
            this.clients = [...defaultClients, ...data]
          }
        }
      } catch (err) {
        console.error('Failed to add client to Supabase:', err)
      }
      this.saveStore()
    },

    async deleteClient(id) {
      if (typeof id === 'string' && id.includes('-')) {
        try {
          const { error } = await supabase
            .from('clients')
            .delete()
            .eq('id', id)
          if (error) {
            console.error('Error deleting client from Supabase:', error)
          }
        } catch (err) {
          console.error('Failed to delete client from Supabase:', err)
        }
      }
      this.clients = this.clients.filter(c => c.id !== id)
      this.saveStore()
    },

    // Review actions
    async addReview(review) {
      try {
        const { error } = await supabase
          .from('reviews')
          .insert([
            {
              name: review.name,
              rating: review.rating,
              comment: review.comment,
              date: review.date
            }
          ])

        if (error) {
          console.error('Error inserting review into Supabase:', error)
        } else {
          const { data } = await supabase
            .from('reviews')
            .select('*')
            .order('created_at', { ascending: false })
          if (data && data.length) {
            this.reviews = data
          }
        }
      } catch (err) {
        console.error('Failed to add review to Supabase:', err)
      }
      this.saveStore()
    },

    async deleteReview(id) {
      if (typeof id === 'string' && id.includes('-')) {
        try {
          const { error } = await supabase
            .from('reviews')
            .delete()
            .eq('id', id)
          if (error) {
            console.error('Error deleting review from Supabase:', error)
          }
        } catch (err) {
          console.error('Failed to delete review from Supabase:', err)
        }
      }
      this.reviews = this.reviews.filter(r => r.id !== id)
      this.saveStore()
    },

    async addSolution(solution) {
      const autoAssigned = autoAssignIconAndColor(solution.name)
      solution.icon = autoAssigned.icon
      solution.color = autoAssigned.color

      const isEdit = !!solution.id
      if (isEdit) {
        // Edit Solution
        const target = this.solutions.find(s => s.id === solution.id)
        const targetName = target ? target.name : ''

        try {
          const { error } = await supabase
            .from('solutions')
            .update({
              name: solution.name,
              description: solution.description,
              icon: solution.icon,
              color: solution.color
            })
            .or(`id.eq.${solution.id},name.eq.${targetName}`)
          if (error) {
            console.error('Error updating solution in Supabase:', error)
          }
        } catch (err) {
          console.error('Failed to update solution in Supabase:', err)
        }
        this.solutions = this.solutions.map(s => s.id === solution.id ? { ...s, ...solution } : s)
      } else {
        // Add Solution
        const tempId = crypto.randomUUID()
        const newSol = {
          id: tempId,
          name: solution.name,
          description: solution.description,
          icon: solution.icon,
          color: solution.color
        }

        try {
          const { error } = await supabase
            .from('solutions')
            .insert([{
              name: solution.name,
              description: solution.description,
              icon: solution.icon,
              color: solution.color
            }])
          if (error) {
            console.error('Error inserting solution into Supabase:', error)
          } else {
            const { data } = await supabase
              .from('solutions')
              .select('*')
              .order('id', { ascending: true })
            if (data && data.length) {
              this.solutions = data
              this.saveStore()
              return
            }
          }
        } catch (err) {
          console.error('Failed to insert solution into Supabase:', err)
        }

        this.solutions.push(newSol)
      }
      this.saveStore()
    },

    async deleteSolution(id) {
      try {
        const target = this.solutions.find(s => s.id === id)
        if (target) {
          const { error } = await supabase
            .from('solutions')
            .delete()
            .or(`id.eq.${id},name.eq.${target.name}`)
          if (error) {
            console.error('Error deleting solution from Supabase:', error)
          }
        }
      } catch (err) {
        console.error('Failed to delete solution from Supabase:', err)
      }
      this.solutions = this.solutions.filter(s => s.id !== id)
      this.saveStore()
    }
  }
})
