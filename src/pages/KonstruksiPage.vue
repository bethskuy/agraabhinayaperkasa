<template>
  <q-page class="bg-white min-h-screen text-white overflow-x-hidden">
    <!-- 1. Hero Video Carousel Section -->
    <section class="relative h-[85vh] sm:h-screen w-full overflow-hidden bg-[#070F19]">
      <q-carousel
        v-model="currentSlide"
        swipeable
        animated
        infinite
        :autoplay="8000"
        transition-prev="fade"
        transition-next="fade"
        class="absolute inset-0 z-0 w-full h-full bg-[#070F19]"
        style="height: 100%"
      >
        <!-- Dynamic Slides -->
        <q-carousel-slide
          v-for="slide in slides"
          :key="slide.name"
          :name="slide.name"
          class="p-0 overflow-hidden relative"
        >
          <!-- Background Video -->
          <video
            v-if="slide.src"
            :src="slide.src"
            autoplay
            loop
            muted
            playsinline
            class="absolute inset-0 w-full h-full object-cover"
          ></video>

          <!-- Overlay Dark Gradients for Readability -->
          <div class="absolute inset-0 z-10 pointer-events-none">
            <div class="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-black/35 to-black/60"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
          </div>

          <!-- Hero Text Overlay (Centered within slide) -->
          <div class="absolute inset-0 z-20 flex items-center justify-center">
            <div class="max-w-4xl mx-auto px-6 text-center mt-12">
              <h1 class="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6">
                {{ slide.title }}
              </h1>
              <p class="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
                {{ slide.desc }}
              </p>
              <div class="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <a
                  href="https://api.whatsapp.com/send/?phone=6285695660902&text=Halo%20Agra%20Abhinaya%20Perkasa%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20konstruksi."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-full text-center shadow-lg transition-all duration-300 hover:scale-105 no-underline flex items-center justify-center space-x-2"
                >
                  <!-- WhatsApp SVG Icon -->
                  <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.022-.015-.044-.029-.065-.044-.226-.145-1.328-.655-1.534-.73-.205-.075-.354-.112-.504.112-.15.224-.58.73-.711.88-.13.15-.262.169-.487.056-.225-.113-.95-.35-1.81-1.118-.67-.597-1.121-1.335-1.253-1.56-.13-.225-.014-.347.1-.46.1-.1.224-.262.336-.393.112-.13.15-.224.224-.374.075-.15.038-.281-.019-.393-.056-.113-.505-1.217-.69-1.66-.183-.44-.368-.38-.505-.387-.13-.006-.28-.008-.43-.008-.15 0-.395.056-.602.28-.206.225-.79.77-.79 1.882 0 1.111.808 2.185.918 2.336.112.15 1.58 2.41 3.83 3.38.536.23 1.053.37 1.413.485.54.17 1.03.14 1.42.085.437-.06 1.328-.54 1.514-1.06.188-.52.188-1.012.13-1.11-.057-.1-.205-.15-.43-.263zM12 2C6.477 2 2 6.477 2 12c0 2.01.597 3.88 1.63 5.45L2 22l4.72-1.55C8.21 21.43 10.03 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.84 0-3.55-.53-5-1.43l-.36-.21-2.98.98.99-2.9-.24-.38C3.48 15.02 3 13.56 3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9z" />
                  </svg>
                  <span>Konsultasi Proyek Gratis</span>
                </a>
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>

      <!-- Navigation Controls (Left/Right Arrows) matching the mockup -->
      <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex justify-between px-4 sm:px-8 pointer-events-none">
        <button
          @click="prevSlide"
          class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-300 pointer-events-auto backdrop-blur-sm border border-white/10 hover:scale-105 active:scale-95"
        >
          <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          @click="nextSlide"
          class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-300 pointer-events-auto backdrop-blur-sm border border-white/10 hover:scale-105 active:scale-95"
        >
          <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Carousel Custom Dot Indicators on top of the slide -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2.5">
        <button
          v-for="slide in slides"
          :key="slide.name"
          @click="currentSlide = slide.name"
          class="h-2 rounded-full transition-all duration-300"
          :class="currentSlide === slide.name ? 'w-8 bg-red-600' : 'w-2 bg-white/40 hover:bg-white/60'"
        ></button>
      </div>
    </section>

    <!-- 1.5. Dynamic Solution Section (As a Floating Card) -->
    <section class="relative bg-white py-12">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12">
        <div class="relative bg-gradient-to-r from-[#F0F4F9] via-[#F8FAFC] to-[#F0F4F9] rounded-3xl overflow-hidden text-slate-800 border border-white/10 shadow-2xl p-8 sm:p-12">
          <!-- Decorative Background shapes (Violet/Blue) -->
          <div class="absolute left-0 bottom-0 w-64 h-64 bg-[#7C3AED]/10 rounded-tr-[120px] filter blur-3xl pointer-events-none"></div>
          <div class="absolute right-0 top-0 w-64 h-64 bg-[#3B82F6]/10 rounded-bl-[120px] filter blur-3xl pointer-events-none"></div>

          <!-- Decorative Red Curved Shape (Leaf shape pointing left) -->
          <div class="absolute right-0 top-1/2 -translate-y-1/2 w-16 sm:w-24 h-32 sm:h-48 pointer-events-none z-0 opacity-90">
            <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="redCurveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#EF4444" />
                  <stop offset="100%" stop-color="#B91C1C" />
                </linearGradient>
              </defs>
              <path d="M 100 0 C 0 30, 0 70, 100 100 Z" fill="url(#redCurveGrad)" />
            </svg>
          </div>

          <div class="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <!-- Left side: Illustration (jalan.png) -->
            <div class="col-span-1 md:col-span-4 flex justify-center">
              <img
                src="images/jalan.png"
                alt="Ilustrasi Layanan Agra"
                class="w-full max-w-[320px] h-auto block"
              />
            </div>

            <!-- Right side: Text and Button -->
            <div class="col-span-1 md:col-span-8 text-left space-y-6">
              <h2 class="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-[#0B192C] leading-tight">
                Layanan jasa yang <span class="text-red-600 font-black">selalu tersedia dan transparan</span> untuk aset bangunan yang butuh pemeliharaan berkala
              </h2>
              <div class="pt-2">
                <a
                  href="https://api.whatsapp.com/send/?phone=6285695660902&text=Halo%20Agra%20Abhinaya%20Perkasa%2C%20saya%20ingin%20konsultasi%20mengenai%20pemeliharaan%20aset%20bangunan."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-extrabold px-8 py-3.5 rounded-full text-center shadow-lg hover:shadow-red-600/30 transition-all duration-300 hover:scale-105 no-underline"
                >
                  <span>Hubungi Kami</span>
                  <q-icon name="arrow_forward" size="20px" class="ml-2 text-white" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- 1.6. Layanan Jagoan (Tukang Jagoan Konstruksi) -->
    <section class="relative overflow-hidden py-24 bg-white fade-in-section">
      <!-- Looping dotted background line -->
      <div class="absolute inset-y-0 left-8 right-8 sm:left-24 sm:right-24 pointer-events-none overflow-hidden select-none z-0">
        <svg class="w-full h-full min-w-[1000px]" viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,280 C220,320 310,550 500,420 C700,290 900,100 1150,150 C1280,170 1350,280 1220,340 C1100,400 950,200 1100,80" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="6 6" fill="none"/>
        </svg>
      </div>

      <!-- Left red side decoration (near Jagoan Cut and Fill - Row 1) -->
      <div class="absolute left-8 sm:left-24 top-[20%] pointer-events-none select-none z-20 max-md:hidden">
        <svg class="w-8 h-24 sm:w-16 sm:h-48" viewBox="0 0 60 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C40,30 60,67 60,90 C60,113 40,150 0,180 Z" fill="url(#red-grad-side-1)"/>
          <defs>
            <linearGradient id="red-grad-side-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#dc2626" />
              <stop offset="100%" stop-color="#991b1b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!-- Right red side decoration (near Jagoan Stamp Concrete - Row 2) -->
      <div class="absolute right-8 sm:right-24 top-[60%] pointer-events-none select-none z-20 max-md:hidden">
        <svg class="w-8 h-24 sm:w-16 sm:h-48" viewBox="0 0 60 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60,0 C20,30 0,67 0,90 C0,113 20,150 60,180 Z" fill="url(#red-grad-side-2)"/>
          <defs>
            <linearGradient id="red-grad-side-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#dc2626" />
              <stop offset="100%" stop-color="#991b1b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto px-6 space-y-24">
        <!-- Section Title -->
        <div class="text-center">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading scroll-animate anim-up">
            Layanan <span class="text-red-600">Jagoan</span>
          </h2>
        </div>

        <!-- Jagoan Cut and Fill (Image Left, Text Right) -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center max-w-5xl mx-auto">
          <div class="md:col-span-6 flex justify-center scroll-animate anim-left">
            <div class="relative w-full max-w-[480px] aspect-[16/10] rounded-[40px] overflow-hidden shadow-lg border border-slate-100/80 bg-white p-2">
              <div class="w-full h-full rounded-[32px] overflow-hidden">
                <img src="images/kontruksi.png" alt="Jagoan Cut and Fill" class="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
          <div class="md:col-span-6 space-y-4 scroll-animate anim-right delay-150">
            <h3 class="text-2xl font-extrabold text-[#0B192C] font-heading">Jagoan Cut and Fill</h3>
            <p class="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Layanan jasa cut and fill kami didukung oleh alat berat modern dan operator berpengalaman untuk meratakan, menguruk, serta memadatkan lahan proyek konstruksi Anda secara presisi. Kami memastikan elevasi tanah yang stabil dan siap bangun.
            </p>
          </div>
        </div>

        <!-- Jagoan Stamp Concrete (Text Left, Image Right) -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center max-w-5xl mx-auto">
          <div class="md:col-span-6 md:order-2 flex justify-center scroll-animate anim-right">
            <div class="relative w-full max-w-[480px] aspect-[16/10] rounded-[40px] overflow-hidden shadow-lg border border-slate-100/80 bg-white p-2">
              <div class="w-full h-full rounded-[32px] overflow-hidden">
                <img src="images/stamp_concrete_hero.png" alt="Jagoan Stamp Concrete" class="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
          <div class="md:col-span-6 md:order-1 space-y-4 scroll-animate anim-left delay-150">
            <h3 class="text-2xl font-extrabold text-[#0B192C] font-heading">Jagoan Stamp Concrete</h3>
            <p class="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Layanan lantai stamp concrete (beton dekoratif bergaya batu alam) dengan cetakan presisi, warna tahan cuaca, serta ketahanan beban tinggi. Sangat cocok untuk area luar ruang seperti jalan perumahan, halaman, maupun carport Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Carousel state
const currentSlide = ref('video1')

// Slides data with Mixkit construction video links
const slides = ref([
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
])

const prevSlide = () => {
  if (currentSlide.value === 'video1') currentSlide.value = 'video3'
  else if (currentSlide.value === 'video2') currentSlide.value = 'video1'
  else if (currentSlide.value === 'video3') currentSlide.value = 'video2'
}

const nextSlide = () => {
  if (currentSlide.value === 'video1') currentSlide.value = 'video2'
  else if (currentSlide.value === 'video2') currentSlide.value = 'video3'
  else if (currentSlide.value === 'video3') currentSlide.value = 'video1'
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    },
  )

  const animElements = document.querySelectorAll('.fade-in-section')
  animElements.forEach((el) => observer.observe(el))
})
</script>

<style scoped>
@keyframes pulse-subtle {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.02);
  }
}

.animate-pulse-subtle {
  animation: pulse-subtle 2s infinite ease-in-out;
}

/* Scroll-triggered page entrance animation */
.fade-in-section {
  opacity: 0;
  transform: translateY(50px);
  transition:
    opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1),
    transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}

.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-animate {
  opacity: 0;
  will-change: transform, opacity;
}

.anim-up {
  transform: translateY(60px);
  transition: opacity 2.2s cubic-bezier(0.16, 1, 0.3, 1), transform 2.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.anim-left {
  transform: translateX(-60px);
  transition: opacity 2.2s cubic-bezier(0.16, 1, 0.3, 1), transform 2.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.anim-right {
  transform: translateX(60px);
  transition: opacity 2.2s cubic-bezier(0.16, 1, 0.3, 1), transform 2.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.is-visible .scroll-animate,
.scroll-animate.is-visible {
  opacity: 1;
  transform: translate(0) scale(1);
}

.delay-150 { transition-delay: 300ms; }
</style>
