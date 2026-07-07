<template>
  <q-page class="bg-slate-50 overflow-x-hidden">
    <!-- 1. Hero Banner (Carousel) -->
    <section class="relative h-screen flex items-center justify-center bg-[#0B192C] text-white overflow-hidden">
      <!-- Background Carousel -->
      <q-carousel
        v-model="heroSlide"
        transition-prev="fade"
        transition-next="fade"
        swipeable
        animated
        infinite
        :autoplay="5000"
        class="absolute inset-0 z-0 w-full h-full"
        style="height: 100%"
      >
        <!-- Slide 1 -->
        <q-carousel-slide name="slide1" class="p-0 overflow-hidden">
          <img
            src="images/tukang_harian_hero.png"
            alt="Layanan Tukang Harian Agra"
            class="w-full h-full object-cover"
          />
        </q-carousel-slide>

        <!-- Slide 2 -->
        <q-carousel-slide name="slide2" class="p-0 overflow-hidden">
          <img
            src="images/tukang_harian_hero2.png"
            alt="Tukang Harian Agra - Profesional"
            class="w-full h-full object-cover"
          />
        </q-carousel-slide>

        <!-- Slide 3 -->
        <q-carousel-slide name="slide3" class="p-0 overflow-hidden">
          <img
            src="images/tukang_harian_hero3.png"
            alt="Tukang Harian Agra - Berpengalaman"
            class="w-full h-full object-cover"
          />
        </q-carousel-slide>
      </q-carousel>

      <!-- Overlay Gradient -->
      <div class="absolute inset-0 z-10 pointer-events-none">
        <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
      </div>

      <!-- Hero Content -->
      <div class="max-w-5xl mx-auto px-6 relative z-20 text-center mt-8 fade-in-section">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none mb-6 font-heading scroll-animate anim-up"
        >
          Semua Perbaikan Rumah Beres Bersama <span class="text-red-500">Agra</span>
        </h1>
        <div class="flex flex-col sm:flex-row items-center gap-4 justify-center scroll-animate anim-up delay-200">
          <a
            href="https://api.whatsapp.com/send/?phone=6285695660902&text=Halo%20Agra%20Abhinaya%20Perkasa%2C%20saya%20ingin%20tanya%20mengenai%20jasa%20tukang%20harian."
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-full text-center shadow-lg transition-all duration-300 hover:scale-105 no-underline flex items-center justify-center space-x-2"
          >
            <span>Hubungi Kami</span>
          </a>
        </div>
      </div>

      <!-- Slide Dot Indicators -->
      <div class="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2.5">
        <button
          v-for="slide in ['slide1','slide2','slide3']"
          :key="slide"
          @click="heroSlide = slide"
          :class="[
            'w-2.5 h-2.5 rounded-full transition-all duration-300 border-0 p-0 cursor-pointer',
            heroSlide === slide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
          ]"
        ></button>
      </div>

      <!-- Prev / Next Arrow Buttons -->
      <button
        @click="prevHeroSlide"
        class="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 hover:border-white/60 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
        aria-label="Slide sebelumnya"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        @click="nextHeroSlide"
        class="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 hover:border-white/60 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
        aria-label="Slide berikutnya"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>

    <!-- 1.2. Layanan Highlight Section -->
    <section class="relative overflow-hidden bg-gradient-to-b from-red-50 via-rose-50/60 to-white py-16 mx-8 sm:mx-24 rounded-3xl fade-in-section">
      <!-- Subtle radial glow -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(254,205,211,0.5),transparent_70%)] pointer-events-none"></div>

      <!-- Wave top -->
      <div class="absolute top-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-[40px] sm:h-[55px]">
          <path fill="rgba(254,205,211,0.5)" d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,0 L0,0 Z"/>
          <path fill="rgba(254,226,226,0.3)" d="M0,40 C150,10 350,55 600,35 C850,15 1050,50 1200,25 L1200,0 L0,0 Z"/>
        </svg>
      </div>

      <!-- Wave bottom -->
      <div class="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-[40px] sm:h-[55px]">
          <path fill="rgba(255,255,255,0.7)" d="M0,30 C200,0 400,60 600,30 C800,0 1000,60 1200,30 L1200,60 L0,60 Z"/>
          <path fill="rgba(255,255,255,0.5)" d="M0,20 C150,50 350,5 600,25 C850,45 1050,10 1200,35 L1200,60 L0,60 Z"/>
        </svg>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto px-6">
        <!-- Service Cards Grid (Always visible: 4 cards) -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-4">

          <!-- Card: Kebocoran -->
          <div class="relative bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group overflow-hidden scroll-animate anim-up">
            <!-- Blob top-right -->
            <div class="absolute -top-6 -right-6 w-20 h-20 bg-red-100 rounded-full opacity-60 pointer-events-none"></div>
            <!-- Dots bottom-left -->
            <svg class="absolute bottom-3 left-3 opacity-30 pointer-events-none" width="60" height="44" viewBox="0 0 60 44" fill="none">
              <circle v-for="(_, i) in Array(15)" :key="i" :cx="(i%5)*12+6" :cy="Math.floor(i/5)*14+7" r="2.5" fill="#f87171"/>
            </svg>
            <div class="relative z-10">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <q-icon name="plumbing" size="20px" class="text-white" />
              </div>
              <h3 class="text-sm font-extrabold text-slate-800 mb-1">Kebocoran</h3>
              <p class="text-xs text-slate-500 leading-relaxed">Jaga Rumah Bebas Bocor</p>
            </div>
          </div>

          <!-- Card: Cat -->
          <div class="relative bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group overflow-hidden scroll-animate anim-up delay-100">
            <div class="absolute -top-6 -right-6 w-20 h-20 bg-red-100 rounded-full opacity-60 pointer-events-none"></div>
            <svg class="absolute bottom-3 left-3 opacity-30 pointer-events-none" width="60" height="44" viewBox="0 0 60 44" fill="none">
              <circle v-for="(_, i) in Array(15)" :key="i" :cx="(i%5)*12+6" :cy="Math.floor(i/5)*14+7" r="2.5" fill="#f87171"/>
            </svg>
            <div class="relative z-10">
              <div class="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <q-icon name="format_paint" size="20px" class="text-white" />
              </div>
              <h3 class="text-sm font-extrabold text-slate-800 mb-1">Cat</h3>
              <p class="text-xs text-slate-500 leading-relaxed">Warnai Rumahmu</p>
            </div>
          </div>

          <!-- Card: Keramik -->
          <div class="relative bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group overflow-hidden scroll-animate anim-up delay-200">
            <div class="absolute -top-6 -right-6 w-20 h-20 bg-red-100 rounded-full opacity-60 pointer-events-none"></div>
            <svg class="absolute bottom-3 left-3 opacity-30 pointer-events-none" width="60" height="44" viewBox="0 0 60 44" fill="none">
              <circle v-for="(_, i) in Array(15)" :key="i" :cx="(i%5)*12+6" :cy="Math.floor(i/5)*14+7" r="2.5" fill="#f87171"/>
            </svg>
            <div class="relative z-10">
              <div class="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <q-icon name="grid_view" size="20px" class="text-white" />
              </div>
              <h3 class="text-sm font-extrabold text-slate-800 mb-1">Keramik</h3>
              <p class="text-xs text-slate-500 leading-relaxed">Percantik Lantai dan Dindingmu</p>
            </div>
          </div>

          <!-- Card: Listrik -->
          <div class="relative bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group overflow-hidden scroll-animate anim-up delay-300">
            <div class="absolute -top-6 -right-6 w-20 h-20 bg-red-100 rounded-full opacity-60 pointer-events-none"></div>
            <svg class="absolute bottom-3 left-3 opacity-30 pointer-events-none" width="60" height="44" viewBox="0 0 60 44" fill="none">
              <circle v-for="(_, i) in Array(15)" :key="i" :cx="(i%5)*12+6" :cy="Math.floor(i/5)*14+7" r="2.5" fill="#f87171"/>
            </svg>
            <div class="relative z-10">
              <div class="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <q-icon name="electrical_services" size="20px" class="text-white" />
              </div>
              <h3 class="text-sm font-extrabold text-slate-800 mb-1">Listrik</h3>
              <p class="text-xs text-slate-500 leading-relaxed">Rumah Terang, Hati Senang</p>
            </div>
          </div>
        </div>

        <!-- Expanded Cards (shown when showMoreLayanan is true) -->
        <transition name="expand-fade">
          <div v-if="showMoreLayanan" class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-4">
            <div v-for="svc in extraLayanan" :key="svc.title"
              class="relative bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group overflow-hidden">
              <!-- Blob top-right -->
              <div class="absolute -top-6 -right-6 w-20 h-20 bg-red-100 rounded-full opacity-60 pointer-events-none"></div>
              <!-- Dots bottom-left -->
              <svg class="absolute bottom-3 left-3 opacity-30 pointer-events-none" width="60" height="44" viewBox="0 0 60 44" fill="none">
                <circle v-for="(_, i) in Array(15)" :key="i" :cx="(i%5)*12+6" :cy="Math.floor(i/5)*14+7" r="2.5" fill="#f87171"/>
              </svg>
              <div class="relative z-10">
                <div :class="['w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300', svc.color]">
                  <q-icon :name="svc.icon" size="20px" class="text-white" />
                </div>
                <h3 class="text-sm font-extrabold text-slate-800 mb-1">{{ svc.title }}</h3>
                <p class="text-xs text-slate-500 leading-relaxed">{{ svc.desc }}</p>
              </div>
            </div>
          </div>
        </transition>


        <!-- CTA Button -->
        <div class="flex justify-center mt-6">
          <button
            @click="showMoreLayanan = !showMoreLayanan"
            class="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-2.5 rounded-full transition-all duration-300 text-sm hover:scale-105 shadow-md cursor-pointer border-0"
          >
            {{ showMoreLayanan ? 'Sembunyikan' : 'Lihat Layanan Lainnya' }}
          </button>
        </div>
      </div>

      <!-- City Skyline SVG Decoration -->
      <div class="absolute bottom-0 left-4 right-4 sm:left-10 sm:right-10 pointer-events-none select-none overflow-hidden rounded-b-2xl">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-[80px] sm:h-[110px]">
          <g fill="#c8a0a0" opacity="0.35">
            <!-- Far left small buildings -->
            <rect x="0" y="90" width="18" height="30"/>
            <rect x="20" y="78" width="22" height="42"/>
            <rect x="44" y="85" width="14" height="35"/>

            <!-- Left cluster -->
            <rect x="60" y="65" width="28" height="55"/>
            <rect x="90" y="72" width="16" height="48"/>
            <!-- stepped tower left -->
            <rect x="108" y="40" width="36" height="80"/>
            <rect x="112" y="30" width="28" height="15"/>
            <rect x="116" y="22" width="20" height="12"/>
            <rect x="120" y="14" width="12" height="12"/>
            <!-- antenna -->
            <rect x="125" y="6" width="2" height="10"/>
            <rect x="146" y="55" width="20" height="65"/>
            <rect x="168" y="70" width="24" height="50"/>

            <!-- Center-left cluster -->
            <rect x="194" y="60" width="30" height="60"/>
            <rect x="226" y="50" width="14" height="70"/>
            <!-- tall center tower -->
            <rect x="242" y="25" width="44" height="95"/>
            <rect x="246" y="16" width="36" height="12"/>
            <rect x="250" y="8" width="28" height="10"/>
            <rect x="254" y="2" width="20" height="8"/>
            <!-- antenna -->
            <rect x="263" y="0" width="2" height="4"/>
            <rect x="288" y="45" width="18" height="75"/>
            <rect x="308" y="68" width="22" height="52"/>

            <!-- Center gap / small buildings -->
            <rect x="332" y="75" width="20" height="45"/>
            <rect x="354" y="62" width="28" height="58"/>
            <rect x="384" y="80" width="16" height="40"/>

            <!-- Center-right tower -->
            <rect x="402" y="38" width="40" height="82"/>
            <rect x="406" y="28" width="32" height="12"/>
            <rect x="410" y="18" width="24" height="12"/>
            <rect x="414" y="10" width="16" height="10"/>
            <rect x="421" y="4" width="2" height="8"/>
            <rect x="444" y="55" width="20" height="65"/>
            <rect x="466" y="66" width="26" height="54"/>

            <!-- Right-center cluster -->
            <rect x="494" y="72" width="18" height="48"/>
            <rect x="514" y="58" width="30" height="62"/>
            <rect x="546" y="50" width="16" height="70"/>
            <!-- second tall tower -->
            <rect x="564" y="30" width="42" height="90"/>
            <rect x="568" y="20" width="34" height="12"/>
            <rect x="572" y="10" width="26" height="12"/>
            <rect x="576" y="4" width="18" height="8"/>
            <rect x="584" y="0" width="2" height="6"/>
            <rect x="608" y="48" width="22" height="72"/>
            <rect x="632" y="65" width="18" height="55"/>

            <!-- Right cluster -->
            <rect x="652" y="74" width="24" height="46"/>
            <rect x="678" y="60" width="32" height="60"/>
            <rect x="712" y="72" width="16" height="48"/>
            <rect x="730" y="44" width="38" height="76"/>
            <rect x="734" y="34" width="30" height="12"/>
            <rect x="738" y="24" width="22" height="12"/>
            <rect x="742" y="16" width="14" height="10"/>
            <rect x="748" y="8" width="2" height="10"/>
            <rect x="770" y="60" width="20" height="60"/>
            <rect x="792" y="70" width="26" height="50"/>

            <!-- Far right buildings -->
            <rect x="820" y="76" width="22" height="44"/>
            <rect x="844" y="64" width="28" height="56"/>
            <rect x="874" y="55" width="36" height="65"/>
            <rect x="878" y="45" width="28" height="12"/>
            <rect x="882" y="36" width="20" height="11"/>
            <rect x="912" y="70" width="18" height="50"/>
            <rect x="932" y="78" width="24" height="42"/>
            <rect x="958" y="66" width="30" height="54"/>
            <rect x="990" y="80" width="16" height="40"/>
            <rect x="1008" y="72" width="20" height="48"/>
            <rect x="1030" y="82" width="18" height="38"/>
            <rect x="1050" y="70" width="28" height="50"/>
            <rect x="1080" y="78" width="20" height="42"/>
            <rect x="1102" y="85" width="16" height="35"/>
            <rect x="1120" y="76" width="22" height="44"/>
            <rect x="1144" y="84" width="18" height="36"/>
            <rect x="1164" y="90" width="20" height="30"/>
            <rect x="1186" y="88" width="14" height="32"/>
          </g>
        </svg>
      </div>

    </section>



    <!-- 1.5. Titip Beli Material Bangunan -->
    <section class="relative overflow-hidden mx-8 sm:mx-24 rounded-3xl mt-6 mb-2 fade-in-section">
      <!-- Red gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-red-500"></div>

      <!-- Geometric pattern overlay -->
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="triangles" width="60" height="60" patternUnits="userSpaceOnUse">
              <polygon points="30,5 55,50 5,50" fill="none" stroke="white" stroke-width="1"/>
              <polygon points="30,20 45,45 15,45" fill="white" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#triangles)"/>
        </svg>
      </div>

      <!-- Blob decorations -->
      <div class="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      <div class="absolute -bottom-20 -left-20 w-72 h-72 bg-red-900/30 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Content -->
      <div class="relative z-10 py-14 px-6 max-w-5xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white mb-3 font-heading">
          Titip Beli Material Bangunan
        </h2>
        <p class="text-red-100 text-sm sm:text-base mb-10 max-w-xl mx-auto leading-relaxed">
          Gak perlu repot cari material sendiri! Titip langsung ke Tukang Agra lewat kami.
        </p>

        <!-- 4 Features -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
              <img src="images/ikon.png" alt="Mudah" class="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"/>
            </div>
            <h3 class="text-white font-extrabold text-sm group-hover:text-yellow-200 transition-colors duration-300">Mudah</h3>
            <p class="text-red-100 text-xs leading-relaxed text-center">Jenis barang akan direkomendasikan langsung oleh Tukang Agra</p>
          </div>
          <div class="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
              <img src="images/ikon2.png" alt="Transparan" class="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"/>
            </div>
            <h3 class="text-white font-extrabold text-sm group-hover:text-yellow-200 transition-colors duration-300">Transparan</h3>
            <p class="text-red-100 text-xs leading-relaxed text-center">Jumlah dan harga material diketahui sebelum dibeli</p>
          </div>
          <div class="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
              <img src="images/ikon3.png" alt="Aman" class="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"/>
            </div>
            <h3 class="text-white font-extrabold text-sm group-hover:text-yellow-200 transition-colors duration-300">Aman</h3>
            <p class="text-red-100 text-xs leading-relaxed text-center">Tidak beresiko karena pembayaran melalui konfirmasi Anda</p>
          </div>
          <div class="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
              <img src="images/ikon4.png" alt="Nyaman" class="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"/>
            </div>
            <h3 class="text-white font-extrabold text-sm group-hover:text-yellow-200 transition-colors duration-300">Nyaman</h3>
            <p class="text-red-100 text-xs leading-relaxed text-center">Tidak perlu cari toko dan beli material sendiri</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 1.6. Tukang Jagoan -->
    <section class="relative overflow-hidden py-24 bg-white fade-in-section">
      <!-- Looping dotted background line (matches the mockup loop line) -->
      <div class="absolute inset-y-0 left-8 right-8 sm:left-24 sm:right-24 pointer-events-none overflow-hidden select-none z-0">
        <svg class="w-full h-full min-w-[1000px]" viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,280 C220,320 310,550 500,420 C700,290 900,100 1150,150 C1280,170 1350,280 1220,340 C1100,400 950,200 1100,80" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="6 6" fill="none"/>
        </svg>
      </div>

      <!-- Left red side decoration (near Jagoan Cat - Row 1) -->
      <div class="absolute left-8 sm:left-24 top-[12%] pointer-events-none select-none z-20 max-md:hidden">
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

      <!-- Right red side decoration (near Jagoan Keramik - Row 2) -->
      <div class="absolute right-8 sm:right-24 top-[36%] pointer-events-none select-none z-20 max-md:hidden">
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

      <!-- Left red side decoration (near Jagoan Listrik - Row 3) -->
      <div class="absolute left-8 sm:left-24 top-[60%] pointer-events-none select-none z-20 max-md:hidden">
        <svg class="w-8 h-24 sm:w-16 sm:h-48" viewBox="0 0 60 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C40,30 60,67 60,90 C60,113 40,150 0,180 Z" fill="url(#red-grad-side-3)"/>
          <defs>
            <linearGradient id="red-grad-side-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#dc2626" />
              <stop offset="100%" stop-color="#991b1b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!-- Right red side decoration (near Banyak Jagoan Lainnya - Row 4) -->
      <div class="absolute right-8 sm:right-24 top-[84%] pointer-events-none select-none z-20 max-md:hidden">
        <svg class="w-8 h-24 sm:w-16 sm:h-48" viewBox="0 0 60 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60,0 C20,30 0,67 0,90 C0,113 20,150 60,180 Z" fill="url(#red-grad-side-4)"/>
          <defs>
            <linearGradient id="red-grad-side-4" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#dc2626" />
              <stop offset="100%" stop-color="#991b1b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto px-6 space-y-24">
        <!-- Section Title -->
        <div class="text-center">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Tukang <span class="text-red-600">Jagoan</span>
          </h2>
        </div>

        <!-- Jagoan Cat (Image Left, Text Right) -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center max-w-5xl mx-auto">
          <div class="md:col-span-6 flex justify-center scroll-animate anim-left">
            <div class="relative w-full max-w-[480px] aspect-[16/10] rounded-[40px] overflow-hidden shadow-lg border border-slate-100/80 bg-white p-2">
              <div class="w-full h-full rounded-[32px] overflow-hidden">
                <img src="images/cat.png" alt="Jagoan Cat" class="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
          <div class="md:col-span-6 space-y-4 scroll-animate anim-right delay-150">
            <h3 class="text-2xl font-extrabold text-[#0B192C] font-heading">Jagoan Cat</h3>
            <p class="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Cat rumah sudah kusam or terkelupas? Layanan tukang cat kami bantu membuang cat lama, melakukan cat dasar, finishing dan segala permasalahan cat lainnya. Melayani cat di dinding, plafon, pintu dan jendela kayu.
            </p>
          </div>
        </div>

        <!-- Jagoan Keramik (Text Left, Image Right) -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center max-w-5xl mx-auto">
          <div class="md:col-span-6 md:order-2 flex justify-center scroll-animate anim-right">
            <div class="relative w-full max-w-[480px] aspect-[16/10] rounded-[40px] overflow-hidden shadow-lg border border-slate-100/80 bg-white p-2">
              <div class="w-full h-full rounded-[32px] overflow-hidden">
                <img src="images/keramik.png" alt="Jagoan Keramik" class="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
          <div class="md:col-span-6 md:order-1 space-y-4 scroll-animate anim-left delay-150">
            <h3 class="text-2xl font-extrabold text-[#0B192C] font-heading">Jagoan Keramik</h3>
            <p class="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Keramik rumah rusak ingin diganti? Layanan tukang keramik kami ahli dalam bongkar pasang keramik/porselen untuk lantai maupun dinding secara presisi.
            </p>
          </div>
        </div>

        <!-- Jagoan Listrik (Image Left, Text Right) -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center max-w-5xl mx-auto">
          <div class="md:col-span-6 flex justify-center scroll-animate anim-left">
            <div class="relative w-full max-w-[480px] aspect-[16/10] rounded-[40px] overflow-hidden shadow-lg border border-slate-100/80 bg-white p-2">
              <div class="w-full h-full rounded-[32px] overflow-hidden">
                <img src="images/listrik.png" alt="Jagoan Listrik" class="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
          <div class="md:col-span-6 space-y-4 scroll-animate anim-right delay-150">
            <h3 class="text-2xl font-extrabold text-[#0B192C] font-heading">Jagoan Listrik</h3>
            <p class="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Listrik rumah bermasalah? Layanan tukang listrik kami siap melayani segala kebutuhan listrik seperti memasang stop kontak, fitting lampu, mengatasi konslet dan permasalahan listrik lainnya.
            </p>
          </div>
        </div>

        <!-- ...dan Banyak Jagoan Lainnya -->
        <div class="pt-12 text-center space-y-8">
          <h3 class="text-xl sm:text-2xl font-extrabold text-slate-800 font-heading scroll-animate anim-up">
            ...dan Banyak Jagoan Lainnya
          </h3>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto px-4 sm:px-0">
            <div
              v-for="(item, idx) in jagoanLainnya"
              :key="idx"
              :class="[
                'flex flex-nowrap items-center gap-2 px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-2xl sm:rounded-full shadow-sm sm:shadow-md border hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-default min-w-0 scroll-animate anim-up',
                item.bg || 'bg-white',
                item.border || 'border-slate-100/80'
              ]"
              :style="{ transitionDelay: (idx * 45) + 'ms' }"
            >
              <div :class="['w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0', item.iconBg || 'bg-slate-50']">
                <q-icon :name="item.icon" :class="item.color" size="16px" />
              </div>
              <span :class="['text-[11px] sm:text-sm font-extrabold tracking-wide truncate', item.text || 'text-slate-700']">{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 1.7. Customer Support / Tanya Agra -->
    <section class="relative overflow-hidden py-16 sm:py-24 bg-white border-t border-slate-100 fade-in-section">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <!-- Left Column: Illustration with red blob background -->
        <div class="md:col-span-6 flex justify-center relative scroll-animate anim-left">
          <!-- Red blob decorative background -->
          <div class="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-700 opacity-90 rounded-[60px] sm:rounded-[100px] rotate-6 transform scale-95 pointer-events-none z-0"></div>
          <div class="absolute inset-0 bg-[#0B192C] opacity-5 rounded-[60px] sm:rounded-[100px] -rotate-3 transform scale-95 pointer-events-none z-0"></div>
          
          <div class="relative z-10 w-full max-w-[360px] aspect-square rounded-[40px] overflow-hidden p-2 flex items-center justify-center">
            <img src="images/customer_support.png" alt="Customer Support Agra" class="w-full h-full object-contain filter drop-shadow-md"/>
          </div>
        </div>

        <!-- Right Column: Text & Contact Options -->
        <div class="md:col-span-6 space-y-6 sm:space-y-8 text-left scroll-animate anim-right delay-150">
          <div class="space-y-3">
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
              Butuh Bantuan?<br/>
              Tanya <span class="text-red-600">Agra</span>
            </h2>
            <p class="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
              Punya pertanyaan atau ingin konsultasi, kami siap membantu
            </p>
          </div>

          <!-- Contact Channels List -->
          <div class="space-y-4">
            <!-- Phone/WhatsApp -->
            <a 
              href="https://api.whatsapp.com/send/?phone=6285695660902&text=Halo%20Agra%20Abhinaya%20Perkasa%2C%20saya%20butuh%20bantuan%20mengenai%20layanan%20tukang%20harian."
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-red-50/40 border border-slate-100 hover:border-red-100/50 transition-all duration-300 group no-underline"
            >
              <div class="w-10 h-10 rounded-full bg-red-100/50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                <q-icon name="phone" size="18px" />
              </div>
              <div class="min-w-0">
                <div class="text-xs font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">WhatsApp / Call</div>
                <div class="text-sm sm:text-base font-extrabold text-slate-700 tracking-wide leading-normal">0856-9566-0902</div>
              </div>
            </a>

            <!-- Email -->
            <a 
              href="mailto:agraabhinayaadm@gmail.com"
              class="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-red-50/40 border border-slate-100 hover:border-red-100/50 transition-all duration-300 group no-underline"
            >
              <div class="w-10 h-10 rounded-full bg-red-100/50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                <q-icon name="mail" size="18px" />
              </div>
              <div class="min-w-0">
                <div class="text-xs font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Email Support</div>
                <div class="text-sm sm:text-base font-extrabold text-slate-700 tracking-wide truncate leading-normal">agraabhinayaadm@gmail.com</div>
              </div>
            </a>
          </div>

          <!-- Primary CTA Button -->
          <div class="pt-2">
            <a 
              href="https://api.whatsapp.com/send/?phone=6285695660902&text=Halo%20Agra%20Abhinaya%20Perkasa%2C%20saya%20butuh%20bantuan%20mengenai%20layanan%20tukang%20harian."
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-full text-center shadow-lg hover:shadow-red-600/20 hover:scale-105 transition-all duration-300 no-underline text-sm sm:text-base"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const heroSlide = ref('slide1')
const heroSlides = ['slide1', 'slide2', 'slide3']
const prevHeroSlide = () => {
  const idx = heroSlides.indexOf(heroSlide.value)
  heroSlide.value = heroSlides[(idx - 1 + heroSlides.length) % heroSlides.length]
}
const nextHeroSlide = () => {
  const idx = heroSlides.indexOf(heroSlide.value)
  heroSlide.value = heroSlides[(idx + 1) % heroSlides.length]
}

const showMoreLayanan = ref(false)

const jagoanLainnya = [
  { title: 'Jagoan Cat', icon: 'brush', color: 'text-red-600', bg: 'bg-red-50/70', border: 'border-red-100', text: 'text-red-700', iconBg: 'bg-red-100/50' },
  { title: 'Jagoan Keramik', icon: 'grid_on', color: 'text-orange-600', bg: 'bg-orange-50/70', border: 'border-orange-100', text: 'text-orange-700', iconBg: 'bg-orange-100/50' },
  { title: 'Jagoan Listrik', icon: 'bolt', color: 'text-emerald-600', bg: 'bg-emerald-50/70', border: 'border-emerald-100', text: 'text-emerald-700', iconBg: 'bg-emerald-100/50' },
  { title: 'Kenek', icon: 'handyman', color: 'text-amber-600', bg: 'bg-amber-50/70', border: 'border-amber-100', text: 'text-amber-700', iconBg: 'bg-amber-100/50' },
  { title: 'Jagoan Aluminium', icon: 'window', color: 'text-indigo-600', bg: 'bg-indigo-50/70', border: 'border-indigo-100', text: 'text-indigo-700', iconBg: 'bg-indigo-100/50' },
  { title: 'Jagoan Batu', icon: 'gavel', color: 'text-rose-600', bg: 'bg-rose-50/70', border: 'border-rose-100', text: 'text-rose-700', iconBg: 'bg-rose-100/50' },
  { title: 'Jagoan Pipa', icon: 'water', color: 'text-blue-600', bg: 'bg-blue-50/70', border: 'border-blue-100', text: 'text-blue-700', iconBg: 'bg-blue-100/50' },
  { title: 'Jagoan Waterproofing', icon: 'shield', color: 'text-sky-600', bg: 'bg-sky-50/70', border: 'border-sky-100', text: 'text-sky-700', iconBg: 'bg-sky-100/50' },
  { title: 'Jagoan Gali', icon: 'handyman', color: 'text-amber-700', bg: 'bg-amber-50/60', border: 'border-amber-200/50', text: 'text-amber-800', iconBg: 'bg-amber-100/60' },
  { title: 'Jagoan Besi (Las)', icon: 'construction', color: 'text-purple-600', bg: 'bg-purple-50/70', border: 'border-purple-100', text: 'text-purple-700', iconBg: 'bg-purple-100/50' },
  { title: 'Jagoan Genteng', icon: 'roofing', color: 'text-orange-600', bg: 'bg-orange-50/60', border: 'border-orange-200/50', text: 'text-orange-800', iconBg: 'bg-orange-100/50' },
  { title: 'Jagoan Plafon', icon: 'roofing', color: 'text-blue-600', bg: 'bg-blue-50/60', border: 'border-blue-200/50', text: 'text-blue-800', iconBg: 'bg-blue-100/50' },
  { title: 'Konsultan', icon: 'engineering', color: 'text-yellow-600', bg: 'bg-yellow-50/70', border: 'border-yellow-100', text: 'text-yellow-800', iconBg: 'bg-yellow-100/50' },
  { title: 'Jagoan Sanitair', icon: 'bathroom', color: 'text-cyan-600', bg: 'bg-cyan-50/70', border: 'border-cyan-100', text: 'text-cyan-700', iconBg: 'bg-cyan-100/50' },
  { title: 'Jagoan Angkat', icon: 'move_to_inbox', color: 'text-orange-600', bg: 'bg-orange-50/70', border: 'border-orange-100', text: 'text-orange-700', iconBg: 'bg-orange-100/50' },
  { title: 'Jagoan Listrik Perapihan', icon: 'electrical_services', color: 'text-teal-600', bg: 'bg-teal-50/70', border: 'border-teal-100', text: 'text-teal-700', iconBg: 'bg-teal-100/50' },
  { title: 'Jagoan Pipa Perapihan', icon: 'plumbing', color: 'text-blue-500', bg: 'bg-blue-50/70', border: 'border-blue-100', text: 'text-blue-700', iconBg: 'bg-blue-100/50' }
]

const extraLayanan = [
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
  { title: 'Kenek', desc: 'Bantu Pekerjaan Cepat Selesai', icon: 'handyman', color: 'bg-gradient-to-br from-yellow-500 to-amber-600' },
]





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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.expand-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.expand-fade-leave-active {
  transition: all 0.3s ease;
}
.expand-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.expand-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@keyframes scale-up {
  0% {
    transform: scale(0.96);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-scale-up {
  animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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

.delay-75 { transition-delay: 150ms; }
.delay-100 { transition-delay: 200ms; }
.delay-150 { transition-delay: 300ms; }
.delay-200 { transition-delay: 400ms; }
.delay-250 { transition-delay: 500ms; }
.delay-300 { transition-delay: 600ms; }
.delay-350 { transition-delay: 700ms; }
.delay-400 { transition-delay: 800ms; }
.delay-450 { transition-delay: 900ms; }
.delay-500 { transition-delay: 1000ms; }
.delay-600 { transition-delay: 1200ms; }
.delay-700 { transition-delay: 1400ms; }
</style>
