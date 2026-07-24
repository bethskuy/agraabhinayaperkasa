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

export const useWebsiteStore = defineStore('websiteStore', {
  state: () => ({
    initialized: false,
    heroSlides: [
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
    ],
    visiMisi: {
      visi: 'Menjadi perusahaan General Contractor dan General Supplier yang profesional, terpercaya, dan berdaya saing, serta berkontribusi dalam pembangunan berkelanjutan di Indonesia',
      misi: [
        'Memberikan layanan berkualitas dan tepat waktu',
        'Mengutamakan keselamatan kerja dan mutu',
        'Meningkatkan kompetensi SDM',
        'Menjaga kepercayaan dan kepuasan klien'
      ]
    },
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
    aboutTitle: 'General Contractor & Supplier PT Agra Abhinaya Perkasa',
    aboutText: 'PT AGRA ABHINAYA PERKASA adalah perusahaan yang bergerak di bidang General Contractor dan General Supplier, didirikan pada tahun 2022.\n\nKami menyediakan layanan pelaksanaan konstruksi serta pengadaan barang dan material pendukung proyek dengan mengutamakan kualitas, ketepatan waktu, dan keselamatan kerja.\n\nDengan dukungan sumber daya manusia yang kompeten dan manajemen yang profesional, PT AGRA ABHINAYA PERKASA berkomitmen menjadi mitra terpercaya bagi klien dari sektor swasta maupun pemerintah.',
    companyStats: [
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
    ],
    officeSlides: [
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
    ],
    advantagesBubble: 'Halo! Saya siap membantu mewujudkan proyek impian Anda dengan kualitas terbaik. Yuk, lihat keunggulan kami di samping!',
    advantagesMascot: 'images/mascot_illustration.jpg',
    advantagesList: [
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
    ],
    servicesTitle: 'Solusi Konstruksi Terbaik Untuk Kebutuhan Anda',
    servicesList: [
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
    ],
    contactInfo: {
      phone: '+62 856-9566-0902',
      phoneRaw: '6285695660902',
      email: 'agraabhinayaadm@gmail.com',
      hours: 'Senin-Sabtu (08:00-17:00)',
      mapsUrl: 'https://maps.google.com/maps?q=AGRA%20ABHINAYA%20PERKASA%2C%20Jl.%20Tegal%20Danas%20No.18a%2C%20Sertajaya%2C%20Cikarang%20Timur&t=&z=17&ie=UTF8&iwloc=&output=embed'
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/profile.php?id=61590675123305',
      instagram: 'https://www.instagram.com/',
      tiktok: 'https://www.tiktok.com/',
      youtube: 'https://www.youtube.com/'
    }
  }),
  actions: {
    async initializeStore() {
      const stored = localStorage.getItem('website-agraabhinayaperkasa-store-data')
      let localClients = []
      if (stored) {
        try {
          const parsed = JSON.parse(stored)
          if (parsed && parsed.clients && parsed.clients.length) {
            localClients = parsed.clients
          }
          this.heroSlides = parsed.heroSlides || this.heroSlides
          this.visiMisi = parsed.visiMisi || this.visiMisi
          this.portfolioItems = parsed.portfolioItems || this.portfolioItems
          this.clients = parsed.clients || this.clients
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

      this.initialized = true
      this.saveStore()
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
          socialLinks: this.socialLinks
        })
      )
    },

    // Hero actions
    updateHeroSlide(index, slideData) {
      if (this.heroSlides[index]) {
        this.heroSlides[index] = { ...this.heroSlides[index], ...slideData }
        this.saveStore()
      }
    },

    // Visi Misi actions
    updateVisiMisi(data) {
      this.visiMisi = { ...this.visiMisi, ...data }
      this.saveStore()
    },

    // Portfolio actions
    addPortfolioItem(item) {
      const newId = this.portfolioItems.length
        ? Math.max(...this.portfolioItems.map(p => p.id)) + 1
        : 0
      this.portfolioItems.unshift({
        id: newId,
        ...item
      })
      this.saveStore()
      return newId
    },

    updatePortfolioItem(id, updatedItem) {
      const idx = this.portfolioItems.findIndex(p => p.id === id)
      if (idx !== -1) {
        this.portfolioItems[idx] = { ...this.portfolioItems[idx], ...updatedItem }
        this.saveStore()
      }
    },

    deletePortfolioItem(id) {
      this.portfolioItems = this.portfolioItems.filter(p => p.id !== id)
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
    }
  }
})
