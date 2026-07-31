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
      phone: '+62 856-9566-0902',
      phoneRaw: '6285695660902',
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
    ]
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
          artisansPoints: this.artisansPoints
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
