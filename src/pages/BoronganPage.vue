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
            src="images/boronganproyek.png"
            alt="Layanan Borongan PT Agra"
            class="w-full h-full object-cover"
          />
        </q-carousel-slide>

        <!-- Slide 2 -->
        <q-carousel-slide name="slide2" class="p-0 overflow-hidden">
          <img
            src="images/boronganproyek2.png"
            alt="Layanan Borongan Konstruksi Agra"
            class="w-full h-full object-cover"
          />
        </q-carousel-slide>
      </q-carousel>

      <!-- Overlay Gradient -->
      <div class="absolute inset-0 z-10 pointer-events-none">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
      </div>

      <!-- Hero Content -->
      <div class="max-w-5xl mx-auto px-6 relative z-20 text-center sm:text-left mt-8 fade-in-section">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none mb-6 font-heading scroll-animate anim-up">
          Layanan Konstruksi <br class="hidden sm:inline" />
          <span class="text-red-500">Borongan Agra</span>
        </h1>
        <p class="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8 font-medium scroll-animate anim-up delay-100">
          Solusi terintegrasi pembangunan dan renovasi menyeluruh dari PT Agra Abhinaya Perkasa. Kami menangani seluruh siklus proyek mulai dari perancangan, pembelian material, pengerjaan tukang, hingga pengawasan ketat dengan garansi resmi.
        </p>
        <div class="flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start scroll-animate anim-up delay-200">
          <a
            href="https://api.whatsapp.com/send/?phone=6285695660902&text=Halo%20Agra%20Abhinaya%20Perkasa%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20borongan."
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-full text-center shadow-lg transition-all duration-300 hover:scale-105 no-underline flex items-center justify-center space-x-2"
          >
            <!-- WhatsApp Icon -->
            <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.022-.015-.044-.029-.065-.044-.226-.145-1.328-.655-1.534-.73-.205-.075-.354-.112-.504.112-.15.224-.58.73-.711.88-.13.15-.262.169-.487.056-.225-.113-.95-.35-1.81-1.118-.67-.597-1.121-1.335-1.253-1.56-.13-.225-.014-.347.1-.46.1-.1.224-.262.336-.393.112-.13.15-.224.224-.374.075-.15.038-.281-.019-.393-.056-.113-.505-1.217-.69-1.66-.183-.44-.368-.38-.505-.387-.13-.006-.28-.008-.43-.008-.15 0-.395.056-.602.28-.206.225-.79.77-.79 1.882 0 1.111.808 2.185.918 2.336.112.15 1.58 2.41 3.83 3.38.536.23 1.053.37 1.413.485.54.17 1.03.14 1.42.085.437-.06 1.328-.54 1.514-1.06.188-.52.188-1.012.13-1.11-.057-.1-.205-.15-.43-.263zM12 2C6.477 2 2 6.477 2 12c0 2.01.597 3.88 1.63 5.45L2 22l4.72-1.55C8.21 21.43 10.03 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.84 0-3.55-.53-5-1.43l-.36-.21-2.98.98.99-2.9-.24-.38C3.48 15.02 3 13.56 3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9z" />
            </svg>
            <span>Konsultasi Proyek Gratis</span>
          </a>
        </div>
      </div>

      <!-- Slide Dot Indicators -->
      <div class="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2.5">
        <button
          v-for="slide in ['slide1','slide2']"
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

    <!-- 1.5. Solution Banner (Solusi Tepat Masalah Bangunan Kamu!) -->
    <section class="relative bg-slate-50 pt-10 pb-4">
      <div class="max-w-4xl mx-auto px-6 fade-in-section delay-100">
        <div class="overflow-hidden rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300 scroll-animate anim-up">
          <img
            src="images/solusi_banner.jpg"
            alt="Solusi Tepat Masalah Bangunan Kamu!"
            class="w-full h-auto block"
          />
        </div>
      </div>
    </section>

    <!-- 2. Keuntungan Borongan Dari Agra -->
    <section class="py-20 bg-white relative overflow-hidden">
      <div class="max-w-6xl mx-auto px-6 fade-in-section delay-200">
        <div class="text-center max-w-3xl mx-auto mb-16 scroll-animate anim-up">
          <p class="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">Manfaat Terbaik</p>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0B192C] leading-tight font-heading">
            Keuntungan Borongan Dari Agra
          </h2>
          <p class="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Sistem borongan kami dirancang untuk menghilangkan kecemasan Anda selama pengerjaan konstruksi. Nikmati keunggulan layanan profesional terpadu dari kami.
          </p>
        </div>

        <!-- Dynamic Benefit Layout (Accordion on Left, Preview Card on Right) -->
        <!-- Dynamic Benefit Layout (Accordion on Left, Preview Card on Right) -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

          <!-- Left: Accordion / Card Stack (Col span 7) -->
          <div class="md:col-span-7 flex flex-col justify-center space-y-3.5 order-2 md:order-1">
            <div
              v-for="(benefit, index) in benefits"
              :key="index"
              class="space-y-1.5 scroll-animate anim-left"
              :style="{ transitionDelay: (index * 250) + 'ms' }"
            >
              <!-- Card Button -->
              <div 
                @click="activeBenefit = index"
                class="cursor-pointer transition-all duration-300 rounded-full border py-2 px-3.5 sm:py-2.5 sm:px-4 flex items-center space-x-3 shadow-md bg-gradient-to-r from-red-600 to-red-800 border-transparent text-white hover:scale-[1.01]"
              >
                <!-- Icon container (white circle as per screenshot) -->
                <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-white text-red-600 shadow-sm">
                  <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" :d="benefit.icon" />
                  </svg>
                </div>

                <!-- Title -->
                <h3 class="font-heading font-extrabold text-sm sm:text-base leading-none flex-1">
                  {{ benefit.title }}
                </h3>
              </div>

              <!-- Description Text (Shown below card on page background) -->
              <div
                class="transition-all duration-300 overflow-hidden pl-16 pr-4"
                :style="{ maxHeight: activeBenefit === index ? '120px' : '0px' }"
              >
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1.5 pb-2.5">
                  {{ benefit.desc }}
                </p>
              </div>
            </div>
          </div>

          <!-- Right: Dynamic Image Preview (Col span 5) -->
          <div class="md:col-span-5 flex items-center justify-center mt-4 md:mt-0 mb-6 md:mb-0 order-1 md:order-2 scroll-animate anim-right delay-200">
            <!-- Red rounded frame matching the mockup -->
            <div class="w-full max-w-[420px] mx-auto bg-red-600 p-5 rounded-[40px] shadow-xl border-4 border-red-500/20 relative overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div class="w-full h-full bg-white rounded-3xl overflow-hidden relative shadow-inner">
                <!-- Absolute background element like checking pattern or details -->
                <div class="absolute inset-0 bg-slate-50 flex items-center justify-center">
                  <transition name="fade" mode="out-in">
                    <img
                      :key="activeBenefit"
                      :src="benefits[activeBenefit].image"
                      :alt="benefits[activeBenefit].title"
                      class="w-full h-full object-cover animate-scale-up"
                    />
                  </transition>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 3. Tahap Pelayanan Tukang Borongan -->
    <section class="py-20 bg-white relative overflow-hidden">
      <!-- Background Wave Pattern (Filled with Navy-Red Gradient) -->
      <div class="absolute inset-0 z-0 opacity-[0.10] pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient-borongan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#dc2626" />
              <stop offset="100%" stop-color="#991b1b" />
            </linearGradient>
          </defs>
          <path d="M0 50 C 30 20, 70 80, 100 50 L 100 100 L 0 100 Z" fill="url(#wave-gradient-borongan)" />
        </svg>
      </div>

      <div class="max-w-5xl mx-auto px-6 relative z-10 fade-in-section delay-300">
        <div class="text-center max-w-3xl mx-auto mb-16 scroll-animate anim-up">
          <p class="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">Alur Pengerjaan</p>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0B192C] leading-tight font-heading">
            Tahap Pelayanan Tukang Borongan
          </h2>
          <p class="text-slate-600 text-sm mt-4">
            Kami menjaga transparansi dan kualitas di setiap tahap pengerjaan untuk kenyamanan maksimal Anda.
          </p>
        </div>

        <!-- 4-Step Timeline Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
          <div
            v-for="(step, idx) in steps"
            :key="step.number"
            class="relative flex flex-col items-center text-center group scroll-animate anim-up"
            :style="{ transitionDelay: (idx * 300) + 'ms' }"
          >
            <!-- Image frame with asymmetrical rounded corners matching the mockup -->
            <div class="relative w-full aspect-[4/3] rounded-tl-[35px] rounded-br-[35px] rounded-tr-[12px] rounded-bl-[12px] border-[5px] border-red-600 shadow-md overflow-hidden bg-slate-100 transition-transform duration-300 group-hover:scale-[1.02] z-0">
              <img
                :src="step.image"
                :alt="step.title"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Floating Step Number Circle Badge -->
            <div class="absolute -top-2 left-4 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-extrabold text-sm border-2 border-white shadow-md z-10">
              {{ step.number }}
            </div>

            <!-- Step Details -->
            <h4 class="font-heading font-extrabold text-sm sm:text-base text-slate-900 mt-4 mb-1.5 transition-colors duration-300 group-hover:text-red-600">
              {{ step.title }}
            </h4>
            <p class="text-slate-500 text-xs sm:text-sm leading-relaxed px-1">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Layanan Borongan Agra -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 fade-in-section delay-400">
        <div class="text-center max-w-3xl mx-auto mb-16 scroll-animate anim-up">
          <p class="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">Spesialisasi Kami</p>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0B192C] leading-tight font-heading">
            Layanan Borongan Agra
          </h2>
          <p class="text-slate-600 text-sm mt-4">
            Kami menangani berbagai kebutuhan konstruksi dengan sistem borongan penuh yang tepercaya.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Service list item 1 -->
          <div class="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 text-white border border-transparent transition-all duration-300 hover:shadow-lg hover:scale-[1.01] scroll-animate anim-up delay-100">
            <div class="w-10 h-10 rounded-xl bg-white text-red-600 flex items-center justify-center shrink-0 shadow-sm">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <h3 class="font-heading font-extrabold text-base text-white mb-1">Bangun Rumah & Ruko Baru</h3>
              <p class="text-slate-200 text-xs sm:text-sm leading-relaxed">Layanan konstruksi komprehensif mulai dari nol (fondasi) hingga siap huni (finishing kunci) untuk rumah pribadi maupun ruko komersial.</p>
            </div>
          </div>

          <!-- Service list item 2 -->
          <div class="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 text-white border border-transparent transition-all duration-300 hover:shadow-lg hover:scale-[1.01] scroll-animate anim-up delay-200">
            <div class="w-10 h-10 rounded-xl bg-white text-red-600 flex items-center justify-center shrink-0 shadow-sm">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h3 class="font-heading font-extrabold text-base text-white mb-1">Renovasi Besar & Ekspansi Ruang</h3>
              <p class="text-slate-200 text-xs sm:text-sm leading-relaxed">Menambah lantai rumah (tingkat), merombak tata letak ruangan, perbaikan struktur dak beton bocor, hingga penyegaran fasad bangunan.</p>
            </div>
          </div>

          <!-- Service list item 3 -->
          <div class="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 text-white border border-transparent transition-all duration-300 hover:shadow-lg hover:scale-[1.01] scroll-animate anim-up delay-300">
            <div class="w-10 h-10 rounded-xl bg-white text-red-600 flex items-center justify-center shrink-0 shadow-sm">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 21V12h6v9" />
              </svg>
            </div>
            <div>
              <h3 class="font-heading font-extrabold text-base text-white mb-1">Instalasi Atap & Baja Ringan</h3>
              <p class="text-slate-200 text-xs sm:text-sm leading-relaxed">Pemasangan atap baja ringan, kanopi besi, struktur kolom baja, dan pekerjaan las struktural berkualitas tinggi untuk menjamin kekokohan.</p>
            </div>
          </div>

          <!-- Service list item 4 -->
          <div class="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 text-white border border-transparent transition-all duration-300 hover:shadow-lg hover:scale-[1.01] scroll-animate anim-up delay-400">
            <div class="w-10 h-10 rounded-xl bg-white text-red-600 flex items-center justify-center shrink-0 shadow-sm">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
              </svg>
            </div>
            <div>
              <h3 class="font-heading font-extrabold text-base text-white mb-1">Pekerjaan Finishing & Interior</h3>
              <p class="text-slate-200 text-xs sm:text-sm leading-relaxed">Pemasangan keramik/granit lantai presisi, pengecatan dinding luar/dalam premium, pengerjaan plafon gipsum, dan instalasi kelistrikan gedung.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4.5. Layanan Kebutuhan Rumah (Accordion) -->
    <section class="py-20 bg-white relative overflow-hidden">
      <div class="max-w-6xl mx-auto px-6 relative z-10 fade-in-section delay-300">
        <div class="text-center max-w-3xl mx-auto mb-16 scroll-animate anim-up">
          <p class="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">Area Pekerjaan</p>
          <h2 class="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B192C] leading-tight">
            Layanan Borongan untuk Berbagai Kebutuhan Rumah
          </h2>
        </div>

        <!-- Vertical Stack / Horizontal Banners Container -->
        <div class="flex flex-col gap-4 w-full">
          <div
            v-for="(area, index) in areas"
            :key="index"
            @click="activeArea = index"
            class="transition-all duration-300 ease-in-out cursor-pointer scroll-animate anim-up"
            :style="{ transitionDelay: (index * 250) + 'ms' }"
          >
            <!-- ACTIVE CARD VIEW (Expanded Wide Banner) -->
            <div
              v-if="activeArea === index"
              class="flex flex-col md:flex-row bg-gradient-to-r from-[#0B192C] via-[#0B192C] to-white text-white rounded-2xl overflow-hidden shadow-lg cursor-default animate-fade-in items-stretch"
            >
              <!-- Left Side: Content Detail (Navy background) -->
              <div class="w-full md:w-5/12 p-8 sm:p-10 md:p-12 flex flex-col justify-center z-10">
                <h3 class="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3 leading-tight">{{ area.title }}</h3>
                <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium">{{ area.desc }}</p>

                <!-- Bullet list with clean white circle bullets aligned to top-left -->
                <ul class="space-y-4 text-xs sm:text-sm text-slate-100/95">
                  <li v-for="(bullet, bIdx) in area.bullets" :key="bIdx" class="flex items-start space-x-3">
                    <span class="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2"></span>
                    <span class="font-medium leading-relaxed">{{ bullet }}</span>
                  </li>
                </ul>
              </div>

              <!-- Right Side: Cover Image (Fills full height to the bottom, fades to white at right edge) -->
              <div class="w-full md:w-7/12 min-h-[250px] md:h-auto overflow-hidden relative z-0 flex">
                <img :src="area.image" :alt="area.title" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0B192C] via-[#0B192C]/40 to-transparent z-10"></div>
              </div>
            </div>

            <!-- COLLAPSED CARD VIEW (Sleek Wide Horizontal Bar) -->
            <div
              v-else
              class="flex flex-row justify-between items-center py-5 px-8 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-2xl shadow-md border border-transparent group transition-all duration-300 hover:scale-[1.01]"
            >
              <div class="flex items-center space-x-4">
                <!-- Number Badge -->
                <div class="w-8 h-8 rounded-full bg-white text-red-600 font-extrabold text-sm flex items-center justify-center shadow-sm shrink-0">
                  0{{ index + 1 }}
                </div>
                <h4 class="font-heading font-extrabold text-base md:text-lg text-white my-0 tracking-wide">
                  {{ area.title }}
                </h4>
              </div>

              <!-- Circle Arrow Button matching the mockup -->
              <div class="collapsed-arrow-btn w-9 h-9 rounded-full border border-white/30 text-white flex items-center justify-center transition-all duration-300 shadow-sm shrink-0">
                <svg class="w-4 h-4 transition-colors duration-300" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Tukang Agra ada di sekitar kita -->
    <section class="py-20 bg-slate-50 relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-6 text-center relative z-10 fade-in-section delay-500">
        <div class="scroll-animate anim-up">
          <p class="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">
            Wilayah Operasional
          </p>
          <h2 class="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B192C] mb-6">
            Tukang Agra ada di sekitar kita
          </h2>
          <p class="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Kami memiliki basis tenaga tukang profesional lokal yang berfokus melayani wilayah Kabupaten Bekasi, tepatnya di Cikarang Timur. Tim survey kami siap menuju lokasi proyek Anda dalam waktu cepat untuk melakukan pengukuran dan konsultasi langsung di tempat secara gratis!
          </p>
        </div>

        <!-- Interactive Map (AGRA ABHINAYA PERKASA) -->
        <div class="max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-xl border-4 border-white aspect-[16/9] w-full scroll-animate anim-up delay-200">
          <iframe
            src="https://maps.google.com/maps?q=AGRA%20ABHINAYA%20PERKASA%2C%20Jl.%20Tegal%20Danas%20No.18a%2C%20Sertajaya%2C%20Cikarang%20Timur&t=&z=17&ie=UTF8&iwloc=&output=embed"
            class="w-full h-full border-0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- 6. Proses Pemesanan Borongan -->
    <section class="py-20 bg-white relative overflow-hidden">
      <div class="max-w-6xl mx-auto px-6 relative z-10 fade-in-section delay-500 text-center">
        <div class="scroll-animate anim-up">
          <p class="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">
            Proses Pemesanan
          </p>
          <h2 class="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B192C] mb-16">
            Proses Pemesanan <span class="text-red-600">Borongan</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
          <!-- Step 1 -->
          <div class="flex flex-col items-center text-center group scroll-animate anim-up delay-100">
            <div class="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-110">
              <!-- Smartphone SVG Icon -->
              <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <rect x="6" y="2" width="12" height="20" rx="2" ry="2"></rect>
                <circle cx="12" cy="18" r="1" fill="currentColor"></circle>
              </svg>
            </div>
            <h3 class="font-heading font-extrabold text-lg text-slate-900 mb-2">Pemesanan</h3>
            <p class="text-slate-500 text-xs sm:text-sm leading-relaxed px-2">
              Isi formulir pemesanan sesuai kebutuhan perbaikan rumahmu dengan mudah dan cepat.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="flex flex-col items-center text-center group scroll-animate anim-up delay-200">
            <div class="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-110">
              <!-- Clipboard SVG Icon -->
              <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 11h6m-6 4h6" />
              </svg>
            </div>
            <h3 class="font-heading font-extrabold text-lg text-slate-900 mb-2">Survey</h3>
            <p class="text-slate-500 text-xs sm:text-sm leading-relaxed px-2">
              Tim Agra melakukan survei ke lokasi untuk mengecek kondisi dan menentukan solusi terbaik.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="flex flex-col items-center text-center group scroll-animate anim-up delay-300">
            <div class="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-110">
              <!-- Calculator / Invoice SVG Icon -->
              <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="font-heading font-extrabold text-lg text-slate-900 mb-2">Penawaran (RAB)</h3>
            <p class="text-slate-500 text-xs sm:text-sm leading-relaxed px-2">
              Setelah survei, kamu akan menerima penawaran harga yang jelas dan transparan.
            </p>
          </div>

          <!-- Step 4 -->
          <div class="flex flex-col items-center text-center group scroll-animate anim-up delay-400">
            <div class="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-110">
              <!-- Hammer SVG Icon -->
              <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.7 6.3a1 1 0 00 0 1.4l1.6 1.6a1 1 0 00 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h3 class="font-heading font-extrabold text-lg text-slate-900 mb-2">Projek</h3>
            <p class="text-slate-500 text-xs sm:text-sm leading-relaxed px-2">
              Pekerjaan dilakukan oleh tukang profesional dengan pengawasan hingga proyek selesai.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Panggil Konsultan & Form Keluhan -->
    <section class="py-20 bg-slate-50 relative overflow-hidden">
      <div class="max-w-6xl mx-auto px-6 relative z-10 fade-in-section delay-500">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          <!-- Left Column: Panggil Konsultan Banner Card (Col Span 4) -->
          <div class="lg:col-span-4 flex flex-col bg-red-700 text-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 h-full scroll-animate anim-left">
            <div class="h-64 overflow-hidden relative">
              <img src="images/survei.png" alt="Konsultan Agra" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-red-700 via-transparent to-transparent"></div>
            </div>

            <!-- Bottom Half Details -->
            <div class="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-heading font-extrabold text-2xl mb-2 text-white leading-tight">Panggil Konsultan Agra</h3>
                <p class="text-red-100 text-xs sm:text-sm mb-8">Konsultan Agra akan bantu untuk:</p>

                <ul class="space-y-5">
                  <li style="display: flex !important; flex-direction: row !important; align-items: flex-start !important;" class="space-x-3">
                    <!-- Clean checkmark without circle, aligned perfectly to top-left text line -->
                    <svg style="flex-shrink: 0 !important;" class="w-5 h-5 text-white mt-[3px]" fill="none" stroke="currentColor" stroke-width="3.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-sm sm:text-base font-semibold text-white leading-snug">Temukan semua masalah/kerusakan di rumah kamu</span>
                  </li>

                  <li style="display: flex !important; flex-direction: row !important; align-items: flex-start !important;" class="space-x-3">
                    <svg style="flex-shrink: 0 !important;" class="w-5 h-5 text-white mt-[3px]" fill="none" stroke="currentColor" stroke-width="3.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-sm sm:text-base font-semibold text-white leading-snug">Rekomendasi terbaik untuk perbaikan rumah</span>
                  </li>

                  <li style="display: flex !important; flex-direction: row !important; align-items: flex-start !important;" class="space-x-3">
                    <svg style="flex-shrink: 0 !important;" class="w-5 h-5 text-white mt-[3px]" fill="none" stroke="currentColor" stroke-width="3.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-sm sm:text-base font-semibold text-white leading-snug">Berikan hasil survei dan RAB yang transparan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Consultation Form Card (Col Span 8) -->
          <div class="lg:col-span-8 p-8 sm:p-10 md:p-12 rounded-3xl bg-[#FFF5F5] border border-red-100/50 shadow-sm flex flex-col justify-between h-full scroll-animate anim-right delay-200">
            <div>
              <h3 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight mb-2">
                Bingung Menentukan Solusi Perbaikan Bangunan?
              </h3>
              <p class="text-slate-500 text-xs sm:text-sm mb-8 leading-relaxed">
                Ceritakan masalah di rumahmu dan dapatkan solusinya dari tim Agra.
              </p>

              <form @submit.prevent="submitConsultation" class="space-y-5">
                <!-- Name Field -->
                <div>
                  <label for="client_name" class="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Nama *</label>
                  <input
                    id="client_name"
                    type="text"
                    v-model="consultationForm.name"
                    placeholder="Nama lengkap"
                    required
                    class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-red-600 text-sm text-slate-800 transition-all shadow-sm"
                  />
                </div>

                <!-- Whatsapp Field -->
                <div>
                  <label for="client_whatsapp" class="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Nomor Whatsapp *</label>
                  <input
                    id="client_whatsapp"
                    type="text"
                    v-model="consultationForm.whatsapp"
                    placeholder="0812xxxx"
                    required
                    class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-red-600 text-sm text-slate-800 transition-all shadow-sm"
                  />
                </div>

                <!-- Location Field -->
                <div>
                  <label for="client_location" class="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Lokasi *</label>
                  <input
                    id="client_location"
                    type="text"
                    v-model="consultationForm.location"
                    placeholder="Kecamatan, Kota/Kabupaten"
                    required
                    class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-red-600 text-sm text-slate-800 transition-all shadow-sm"
                  />
                </div>

                <!-- Complaint Field -->
                <div>
                  <label for="client_complaint" class="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Keluhan *</label>
                  <textarea
                    id="client_complaint"
                    v-model="consultationForm.complaint"
                    rows="4"
                    placeholder="Ceritakan masalah atau kebutuhan renovasi Anda..."
                    required
                    class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-red-600 text-sm text-slate-800 transition-all shadow-sm resize-none"
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <div class="pt-2">
                  <button
                    type="submit"
                    class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center space-x-2 text-sm"
                  >
                    <span>Kirim</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 8. Butuh Bantuan / Customer Service -->
    <section class="py-24 bg-white relative overflow-hidden">
      <!-- Layered Wavy Background (Filled with Red-Navy Gradients) -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <!-- Wave Layer 1 (Bottom Wave with Definitions) -->
        <svg class="absolute bottom-0 left-0 w-full h-[55%] pointer-events-none" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-grad-1-borongan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#dc2626" stop-opacity="0.08" />
              <stop offset="50%" stop-color="#b91c1c" stop-opacity="0.08" />
              <stop offset="100%" stop-color="#991b1b" stop-opacity="0.08" />
            </linearGradient>
            <linearGradient id="wave-grad-2-borongan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#dc2626" stop-opacity="0.14" />
              <stop offset="50%" stop-color="#b91c1c" stop-opacity="0.14" />
              <stop offset="100%" stop-color="#991b1b" stop-opacity="0.14" />
            </linearGradient>
            <linearGradient id="wave-grad-3-borongan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#dc2626" stop-opacity="0.22" />
              <stop offset="50%" stop-color="#b91c1c" stop-opacity="0.22" />
              <stop offset="100%" stop-color="#991b1b" stop-opacity="0.22" />
            </linearGradient>
          </defs>
          <path fill="url(#wave-grad-1-borongan)" d="M0,96L120,128C240,160,480,224,720,240C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
        <!-- Wave Layer 2 (Middle Wave) -->
        <svg class="absolute bottom-0 left-0 w-full h-[43%] pointer-events-none" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="url(#wave-grad-2-borongan)" d="M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        <!-- Wave Layer 3 (Top Wave Line) -->
        <svg class="absolute bottom-0 left-0 w-full h-[30%] pointer-events-none" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="url(#wave-grad-3-borongan)" d="M0,256L120,245.3C240,235,480,213,720,218.7C960,224,1200,256,1320,272L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
      </div>

      <div class="max-w-6xl mx-auto px-6 relative z-10 fade-in-section delay-500">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          <!-- Left Column: Customer Service Lady Illustration (Col Span 5) -->
          <div class="md:col-span-5 flex flex-col items-center justify-center scroll-animate anim-left">
            <!-- Speech Bubble (Gelembung Balon Kata) -->
            <div class="relative z-20 animate-bubble-float max-w-[280px] mb-6">
              <div class="bg-white border-2 border-red-500/20 shadow-xl p-3 px-4 rounded-2xl relative">
                <!-- Text -->
                <p class="text-xs font-extrabold text-[#0B192C] leading-relaxed text-center">
                  "Halo! Ada yang bisa saya bantu? Yuk, hubungi layanan customer support kami di samping!"
                </p>
                <!-- Speech Bubble Tail/Triangle pointing down -->
                <div class="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-red-500/20 rotate-45"></div>
              </div>
            </div>

            <!-- Mascot Card -->
            <div class="relative w-full max-w-[360px] sm:max-w-[400px] overflow-hidden rounded-3xl border border-slate-200/60 shadow-xl bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <img
                src="images/mascot_illustration.jpg"
                alt="Layanan Customer PT Agra Abhinaya Perkasa"
                class="w-full h-auto object-cover block"
              />
            </div>
          </div>

          <!-- Right Column: Support Channels Details (Col Span 7) -->
          <div class="md:col-span-7 space-y-6 scroll-animate anim-right delay-200">
            <h2 class="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 leading-tight">
              Butuh Bantuan? <br class="hidden sm:inline" />
              Hubungi Kami Sekarang!
            </h2>
            <p class="text-slate-500 text-sm sm:text-base font-semibold tracking-wide uppercase text-red-600">
              Layanan Customer
            </p>

            <!-- Contact options list -->
            <div class="space-y-4 pt-2">

              <!-- Call option -->
              <a
                href="tel:+6285695660902"
                class="flex items-center space-x-4 p-3 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/80 transition-all duration-200 group no-underline text-slate-800"
              >
                <div class="w-11 h-11 rounded-full bg-[#FFF5F5] flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
                  <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-xs text-slate-400 font-bold uppercase tracking-wider my-0">Telepon Resmi</p>
                  <p class="text-sm sm:text-base font-extrabold text-[#0B192C] my-0 leading-tight pt-0.5">(+62) 856 9566 0902</p>
                </div>
              </a>

              <!-- WhatsApp option -->
              <a
                href="https://api.whatsapp.com/send?phone=6285695660902&text=Halo%20Agra%20Abhinaya%20Perkasa%2C%20saya%20butuh%20bantuan%20mengenai%20layanan%20borongan."
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center space-x-4 p-3 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/80 transition-all duration-200 group no-underline text-slate-800"
              >
                <div class="w-11 h-11 rounded-full bg-[#FFF5F5] flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
                  <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-xs text-slate-400 font-bold uppercase tracking-wider my-0">Whatsapp Chat</p>
                  <p class="text-sm sm:text-base font-extrabold text-[#0B192C] my-0 leading-tight pt-0.5">(+62) 856 9566 0902</p>
                </div>
              </a>

              <!-- Email option -->
              <a
                href="mailto:agraabhinayaadm@gmail.com"
                class="flex items-center space-x-4 p-3 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/80 transition-all duration-200 group no-underline text-slate-800"
              >
                <div class="w-11 h-11 rounded-full bg-[#FFF5F5] flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
                  <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-xs text-slate-400 font-bold uppercase tracking-wider my-0">E-mail</p>
                  <p class="text-sm sm:text-base font-extrabold text-[#0B192C] my-0 leading-tight pt-0.5">agraabhinayaadm@gmail.com</p>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const heroSlide = ref('slide1')
const heroSlides = ['slide1', 'slide2']
const prevHeroSlide = () => {
  const idx = heroSlides.indexOf(heroSlide.value)
  heroSlide.value = heroSlides[(idx - 1 + heroSlides.length) % heroSlides.length]
}
const nextHeroSlide = () => {
  const idx = heroSlides.indexOf(heroSlide.value)
  heroSlide.value = heroSlides[(idx + 1) % heroSlides.length]
}

const activeBenefit = ref(0)

const consultationForm = ref({
  name: '',
  whatsapp: '',
  location: '',
  complaint: ''
})

const submitConsultation = () => {
  const phoneNumber = '6285695660902'
  const text = `Halo Agra Abhinaya Perkasa, saya ingin berkonsultasi mengenai perbaikan/renovasi bangunan:

Nama: ${consultationForm.value.name}
WhatsApp: ${consultationForm.value.whatsapp}
Lokasi: ${consultationForm.value.location}
Keluhan: ${consultationForm.value.complaint}`

  const encodedText = encodeURIComponent(text)
  window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`, '_blank')
}

const benefits = [
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

const activeArea = ref(0)
const areas = [
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

const steps = [
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

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  })

  const animElements = document.querySelectorAll('.fade-in-section')
  animElements.forEach(el => observer.observe(el))
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
  opacity: 1; /* Section wrapper serves as trigger, animation runs on child items */
}

.scroll-animate {
  opacity: 0;
  transition: opacity 2.2s cubic-bezier(0.16, 1, 0.3, 1),
              transform 2.2s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}

.anim-up {
  transform: translateY(50px);
}

.anim-left {
  transform: translateX(-60px);
}

.anim-right {
  transform: translateX(60px);
}

.is-visible .scroll-animate,
.is-visible.scroll-animate {
  opacity: 1;
  transform: translate(0) scale(1);
}

.delay-100 {
  transition-delay: 200ms;
}

.delay-200 {
  transition-delay: 400ms;
}

.delay-300 {
  transition-delay: 600ms;
}

.delay-400 {
  transition-delay: 800ms;
}

.delay-500 {
  transition-delay: 1000ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.99);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fadeIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@media (min-width: 768px) {
  .vertical-text {
    writing-mode: vertical-rl;
    text-combine-upright: all;
    transform: rotate(180deg);
  }
}

/* Float animation for CS Speech Bubble */
@keyframes bubble-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-bubble-float {
  animation: bubble-float 3s ease-in-out infinite;
}

.group:hover .collapsed-arrow-btn {
  background-color: #ffffff !important;
  border-color: #ffffff !important;
  color: #dc2626 !important;
}
</style>
