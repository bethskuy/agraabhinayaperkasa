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
          v-for="slide in store.konstruksiHeroSlides"
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
                  :href="'https://api.whatsapp.com/send/?phone=' + store.konstruksiSupport.whatsappRaw + '&text=' + encodeURIComponent(store.konstruksiSupport.waMessage)"
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
          v-for="slide in store.konstruksiHeroSlides"
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
              <h2 class="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-[#0B192C] leading-tight" v-html="store.konstruksiSolutionTitle"></h2>
              <div class="pt-2">
                <a
                  :href="'https://api.whatsapp.com/send/?phone=' + store.konstruksiSupport.whatsappRaw + '&text=' + encodeURIComponent(store.konstruksiSupport.waMessage)"
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

    <!-- 1.6. Jagoan Kontruksi -->
    <section class="relative overflow-hidden py-24 bg-white fade-in-section">
      <!-- Looping dotted background line -->
      <div class="absolute inset-y-0 left-8 right-8 sm:left-24 sm:right-24 pointer-events-none overflow-hidden select-none z-0">
        <svg class="w-full h-full min-w-[1000px]" viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,280 C220,320 310,550 500,420 C700,290 900,100 1150,150 C1280,170 1350,280 1220,340 C1100,400 950,200 1100,80" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="6 6" fill="none"/>
        </svg>
      </div>

      <!-- Left red side decoration -->
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

      <!-- Right red side decoration -->
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
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading scroll-animate anim-up" v-html="store.konstruksiServicesTitle"></h2>
        </div>

        <!-- Dynamic Loop Jagoan Konstruksi -->
        <div 
          v-for="(service, idx) in store.konstruksiServices"
          :key="idx"
          class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center max-w-5xl mx-auto"
        >
          <!-- Image Column -->
          <div 
            class="md:col-span-6 flex justify-center scroll-animate"
            :class="idx % 2 === 0 ? 'anim-left' : 'md:order-2 anim-right'"
          >
            <div class="relative w-full max-w-[480px] aspect-[16/10] rounded-[40px] overflow-hidden shadow-lg border border-slate-100/80 bg-white p-2">
              <div class="w-full h-full rounded-[32px] overflow-hidden">
                <img :src="service.image" :alt="service.title" class="w-full h-full object-cover"/>
              </div>
            </div>
          </div>

          <!-- Text Column -->
          <div 
            class="md:col-span-6 space-y-4 scroll-animate"
            :class="idx % 2 === 0 ? 'anim-right delay-150' : 'md:order-1 anim-left delay-150'"
          >
            <h3 class="text-2xl font-extrabold text-[#0B192C] font-heading">{{ service.title }}</h3>
            <p class="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              {{ service.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 1.7. Standar Keamanan & Mutu Sipil -->
    <section class="relative overflow-hidden py-24 bg-slate-50 border-t border-slate-100 fade-in-section">
      <!-- Subtle top radial glow -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.03),transparent_60%)] pointer-events-none"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="text-xs font-bold text-red-600 uppercase tracking-widest mb-3 scroll-animate anim-up">
            {{ store.konstruksiStandardsHeader }}
          </p>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0B192C] leading-tight scroll-animate anim-up delay-75" v-html="store.konstruksiStandardsTitle"></h2>
          <p class="text-slate-500 text-sm sm:text-base mt-4 leading-relaxed font-semibold scroll-animate anim-up delay-150">
            {{ store.konstruksiStandardsDesc }}
          </p>
        </div>

        <!-- 3-Column Modern Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card Loops -->
          <div 
            v-for="(card, cardIdx) in store.konstruksiStandardsCards"
            :key="cardIdx"
            class="scroll-animate anim-up"
            :class="'delay-' + (cardIdx * 150)"
          >
            <div class="bg-gradient-to-br from-red-600 to-red-800 rounded-[32px] p-8 shadow-xl border border-red-500/10 text-white h-full flex flex-col justify-between hover:-translate-y-4 hover:scale-[1.03] transition-all duration-500 cursor-pointer hover:shadow-red-600/30 group">
              <div>
                <div class="w-14 h-14 bg-white text-red-600 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  <q-icon :name="card.icon" size="28px" />
                </div>
                <span class="text-[11px] font-extrabold text-red-100 uppercase tracking-wider">
                  {{ card.tag }}
                </span>
                <h3 class="text-xl font-extrabold text-white font-heading mt-4 mb-3">
                  {{ card.title }}
                </h3>
                <p class="text-white/90 text-sm leading-relaxed font-medium">
                  {{ card.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 1.8. Alur Kerja Pengerjaan Konstruksi -->
    <section class="py-24 bg-white relative overflow-hidden fade-in-section">
      <!-- Background Wave Pattern (Filled with Navy-Red Gradient) -->
      <div class="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient-konstruksi" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#dc2626" />
              <stop offset="100%" stop-color="#991b1b" />
            </linearGradient>
          </defs>
          <path d="M0 50 C 30 20, 70 80, 100 50 L 100 100 L 0 100 Z" fill="url(#wave-gradient-konstruksi)" />
        </svg>
      </div>

      <div class="max-w-6xl mx-auto px-6 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-20">
          <p class="text-xs font-bold text-red-600 uppercase tracking-widest mb-3 scroll-animate anim-up">
            {{ store.konstruksiStepsHeader }}
          </p>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0B192C] leading-tight font-heading scroll-animate anim-up delay-75">
            {{ store.konstruksiStepsTitle }}
          </h2>
          <p class="text-slate-500 text-sm sm:text-base mt-4 leading-relaxed font-semibold scroll-animate anim-up delay-150">
            {{ store.konstruksiStepsDesc }}
          </p>
        </div>

        <!-- 4-Step Timeline Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
          <div
            v-for="(step, idx) in store.konstruksiSteps"
            :key="idx"
            class="relative flex flex-col items-center text-center group scroll-animate anim-up"
            :style="{ transitionDelay: (idx * 150) + 'ms' }"
          >
            <!-- Image frame with asymmetrical rounded corners -->
            <div class="relative w-full aspect-[4/3] rounded-tl-[35px] rounded-br-[35px] rounded-tr-[12px] rounded-bl-[12px] border-[5px] border-red-600 shadow-md overflow-hidden bg-slate-100 transition-transform duration-500 group-hover:scale-[1.03] z-0">
              <img
                :src="step.image"
                :alt="step.title"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Floating Step Number Circle Badge -->
            <div class="absolute -top-2 left-4 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-extrabold text-sm border-2 border-white shadow-md z-10 transition-transform duration-300 group-hover:scale-110">
              {{ step.number }}
            </div>

            <h3 class="text-lg font-extrabold text-[#0B192C] mt-6 mb-2 font-heading transition-colors duration-300 group-hover:text-red-600">
              {{ step.title }}
            </h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium px-2">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 1.9. Galeri Video Dokumentasi Proyek -->
    <section class="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden fade-in-section">
      <!-- Subtle top radial glow -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.02),transparent_70%)] pointer-events-none"></div>

      <div class="max-w-6xl mx-auto px-6 relative z-10">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="text-xs font-bold text-red-600 uppercase tracking-widest mb-3 scroll-animate anim-up">
            {{ store.konstruksiVideosHeader }}
          </p>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0B192C] leading-tight font-heading scroll-animate anim-up delay-75">
            {{ store.konstruksiVideosTitle }}
          </h2>
          <p class="text-xs sm:text-sm font-extrabold text-slate-400 mt-2 uppercase tracking-widest scroll-animate anim-up delay-100">
            {{ store.konstruksiVideosSubtitle }}
          </p>
          <p class="text-slate-500 text-sm sm:text-base mt-4 leading-relaxed font-semibold scroll-animate anim-up delay-150">
            {{ store.konstruksiVideosDesc }}
          </p>
        </div>

        <!-- Video Cards Horizontal sliding Carousel (Mobile Vertical Video Style / 9:16) -->
        <div class="relative w-full overflow-visible">
          <!-- Left Floating Arrow Button -->
          <button
            v-show="canScrollLeft"
            @click="scrollVideosLeft"
            class="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full slider-nav-btn flex items-center justify-center shadow-lg cursor-pointer"
          >
            <q-icon name="chevron_left" size="24px" />
          </button>

          <!-- Right Floating Arrow Button -->
          <button
            @click="scrollVideosRight"
            class="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full slider-nav-btn flex items-center justify-center shadow-lg cursor-pointer"
          >
            <q-icon name="chevron_right" size="24px" />
          </button>

          <!-- Scroll container -->
          <div
            ref="videoScrollContainer"
            @scroll="updateScrollState"
            class="flex flex-row flex-nowrap gap-6 overflow-x-auto scroll-smooth pb-8 px-4 scrollbar-none snap-x snap-mandatory"
          >
            <div
              v-for="(video, idx) in store.konstruksiVideos"
              :key="idx"
              class="flex-shrink-0 w-[270px] sm:w-[280px] snap-start scroll-animate anim-up"
              :style="{ transitionDelay: (idx * 100) + 'ms' }"
            >
            <div
              @click="playVideo(video, idx)"
              class="relative w-full aspect-[9/16] rounded-[36px] overflow-hidden shadow-lg border border-slate-100/80 bg-slate-900 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 outline-none focus:outline-none"
              style="transform: translateZ(0); backface-visibility: hidden; -webkit-backface-visibility: hidden;"
            >
              <!-- Video background preview -->
              <video
                :src="video.src"
                autoplay
                loop
                muted
                playsinline
                class="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              ></video>

              <!-- Gradient overlay matching mockup -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/60 z-0"></div>

              <!-- Top Title Outlined Style -->
              <div class="absolute top-6 left-6 right-6 z-10">
                <h4 class="text-base sm:text-lg font-extrabold text-white uppercase tracking-wider drop-shadow-md leading-tight">
                  {{ video.titleHeader }} <br />
                  <span class="text-red-500">{{ video.titleHighlight }}</span>
                </h4>
              </div>

              <!-- Center Play Button Overlay -->
              <div class="absolute inset-0 flex items-center justify-center z-10">
                <div
                  class="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:border-red-500 shadow-lg cursor-pointer"
                >
                  <q-icon name="play_arrow" size="28px" class="ml-1" />
                </div>
              </div>  
              
              <!-- Bottom Description and Service Avatar Tag -->
              <div class="absolute bottom-6 left-6 right-6 z-10 space-y-4">
                  <p class="text-white text-xs sm:text-sm font-semibold leading-relaxed line-clamp-2 opacity-95">
                    {{ video.desc }}
                  </p>
                  <!-- Brand Tag row -->
                  <div class="flex items-center gap-2 pt-3 border-t border-white/10">
                    <div class="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white">
                      <q-icon :name="video.icon" size="12px" />
                    </div>
                    <span class="text-[11px] font-extrabold text-white/95 uppercase tracking-wider">
                      {{ video.tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Modal Dialog player (Stories/Reels vertical viewer) -->
    <q-dialog v-model="showVideoModal" content-class="scrollbar-none" backdrop-filter="blur(8px)" transition-show="scale" transition-hide="scale">
      <div class="relative w-full max-w-[400px] sm:max-w-[480px] max-h-screen flex items-center justify-center p-4 overflow-visible scrollbar-none">
        <!-- Floating Left Arrow (Reels navigation) -->
        <button
          @click="playPrevVideo"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-black/40 hover:bg-red-600 text-white flex items-center justify-center border border-white/10 backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-110"
        >
          <q-icon name="chevron_left" size="24px" />
        </button>

        <!-- Active Reels Card Container (9:16) -->
        <div class="relative w-[300px] sm:w-[340px] aspect-[9/16] rounded-[40px] overflow-hidden bg-black border border-white/10 shadow-2xl">
          <!-- Video Tag -->
          <video
            ref="activeVideoEl"
            @timeupdate="onVideoTimeUpdate"
            @click="toggleVideoPlay"
            autoplay
            playsinline
            class="w-full h-full object-cover cursor-pointer"
            :src="selectedVideoSrc"
          ></video>

          <!-- Top Overlay: Title and Close -->
          <div class="absolute top-6 left-6 right-6 flex items-start justify-between z-20">
            <h4 class="text-sm font-extrabold text-white uppercase tracking-wider drop-shadow-md leading-tight max-w-[80%]" v-if="store.konstruksiVideos[activeVideoIndex]">
              {{ store.konstruksiVideos[activeVideoIndex].titleHeader }} <br />
              <span class="text-red-500">{{ store.konstruksiVideos[activeVideoIndex].titleHighlight }}</span>
            </h4>
            <button
              @click="showVideoModal = false"
              class="w-8 h-8 rounded-full bg-black/40 hover:bg-red-600 text-white flex items-center justify-center cursor-pointer transition-all duration-300 border border-white/10"
            >
              <q-icon name="close" size="18px" />
            </button>
          </div>

          <!-- Bottom Text and Custom Tag Overlay -->
          <div class="absolute bottom-8 left-6 right-6 z-20 space-y-4 text-white" v-if="store.konstruksiVideos[activeVideoIndex]">
            <p class="text-white text-xs sm:text-sm font-semibold leading-relaxed drop-shadow-md">
              {{ store.konstruksiVideos[activeVideoIndex].desc }}
            </p>
            <!-- Avatar / Brand Tag -->
            <div class="flex items-center gap-2 pt-3 border-t border-white/20">
              <div class="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white">
                <q-icon :name="store.konstruksiVideos[activeVideoIndex].icon" size="12px" />
              </div>
              <span class="text-[11px] font-extrabold text-white/95 uppercase tracking-wider">
                {{ store.konstruksiVideos[activeVideoIndex].tag }}
              </span>
            </div>
          </div>

          <!-- Custom Playing Progress Bar Line -->
          <div class="absolute bottom-4 left-6 right-6 h-1 bg-white/20 rounded-full overflow-hidden z-20">
            <div class="h-full bg-red-600 transition-all duration-100" :style="{ width: videoProgress + '%' }"></div>
          </div>
        </div>

        <!-- Floating Right Arrow (Reels navigation) -->
        <button
          @click="playNextVideo"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-black/40 hover:bg-red-600 text-white flex items-center justify-center border border-white/10 backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-110"
        >
          <q-icon name="chevron_right" size="24px" />
        </button>
      </div>
    </q-dialog>

    <!-- Customer Support / Tanya Agra -->
    <section class="relative overflow-hidden py-16 sm:py-24 bg-white border-t border-slate-100 fade-in-section">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <!-- Left Column: Illustration with red blob background -->
        <div class="md:col-span-6 flex justify-center relative scroll-animate anim-left">
          <!-- Red blob decorative background -->
          <div class="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-700 opacity-90 rounded-[60px] sm:rounded-[100px] rotate-6 transform scale-95 pointer-events-none z-0"></div>
          <div class="absolute inset-0 bg-[#0B192C] opacity-5 rounded-[60px] sm:rounded-[100px] -rotate-3 transform scale-95 pointer-events-none z-0"></div>
          
          <div class="relative z-10 w-full max-w-[360px] aspect-square rounded-[40px] overflow-hidden p-2 flex items-center justify-center">
            <img :src="store.konstruksiSupport.image || 'images/customer_support.png'" alt="Customer Support Agra" class="w-full h-full object-contain filter drop-shadow-md"/>
          </div>
        </div>

        <!-- Right Column: Text & Contact Options -->
        <div class="md:col-span-6 space-y-6 sm:space-y-8 text-left scroll-animate anim-right delay-150">
          <div class="space-y-3">
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading leading-tight" v-html="store.konstruksiSupport.title"></h2>
            <p class="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
              {{ store.konstruksiSupport.bubbleText }}
            </p>
          </div>

          <!-- Contact Channels List -->
          <div class="space-y-4">
            <!-- Phone/WhatsApp -->
            <a 
              :href="'https://api.whatsapp.com/send/?phone=' + store.konstruksiSupport.whatsappRaw + '&text=' + encodeURIComponent(store.konstruksiSupport.waMessage)"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-red-50/40 border border-slate-100 hover:border-red-100/50 transition-all duration-300 group no-underline"
            >
              <div class="w-10 h-10 rounded-full bg-red-100/50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                <q-icon name="phone" size="18px" />
              </div>
              <div class="min-w-0">
                <div class="text-xs font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">WhatsApp / Call</div>
                <div class="text-sm sm:text-base font-extrabold text-slate-700 tracking-wide leading-normal">{{ store.konstruksiSupport.whatsapp }}</div>
              </div>
            </a>

            <!-- Email -->
            <a 
              :href="'mailto:' + store.konstruksiSupport.email"
              class="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-red-50/40 border border-slate-100 hover:border-red-100/50 transition-all duration-300 group no-underline"
            >
              <div class="w-10 h-10 rounded-full bg-red-100/50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                <q-icon name="mail" size="18px" />
              </div>
              <div class="min-w-0">
                <div class="text-xs font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Email Support</div>
                <div class="text-sm sm:text-base font-extrabold text-slate-700 tracking-wide truncate leading-normal">{{ store.konstruksiSupport.email }}</div>
              </div>
            </a>
          </div>

          <!-- Primary CTA Button -->
          <div class="pt-2">
            <a 
              :href="'https://api.whatsapp.com/send/?phone=' + store.konstruksiSupport.whatsappRaw + '&text=' + encodeURIComponent(store.konstruksiSupport.waMessage)"
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
import { useWebsiteStore } from 'src/stores/websiteStore'

const store = useWebsiteStore()

// Carousel state
const currentSlide = ref('')

// Initialize currentSlide to first slide name
onMounted(() => {
  if (store.konstruksiHeroSlides && store.konstruksiHeroSlides.length) {
    currentSlide.value = store.konstruksiHeroSlides[0].name
  } else {
    currentSlide.value = 'video1'
  }
})

const prevSlide = () => {
  const slides = store.konstruksiHeroSlides
  if (!slides || !slides.length) return
  const idx = slides.findIndex(s => s.name === currentSlide.value)
  if (idx !== -1) {
    const prevIdx = (idx - 1 + slides.length) % slides.length
    currentSlide.value = slides[prevIdx].name
  }
}

const nextSlide = () => {
  const slides = store.konstruksiHeroSlides
  if (!slides || !slides.length) return
  const idx = slides.findIndex(s => s.name === currentSlide.value)
  if (idx !== -1) {
    const nextIdx = (idx + 1) % slides.length
    currentSlide.value = slides[nextIdx].name
  }
}

const showVideoModal = ref(false)
const selectedVideoSrc = ref('')
const selectedVideoTitle = ref('')

const videoScrollContainer = ref(null)
const canScrollLeft = ref(false)

const scrollVideosLeft = () => {
  if (videoScrollContainer.value) {
    videoScrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' })
  }
}

const scrollVideosRight = () => {
  if (videoScrollContainer.value) {
    videoScrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' })
  }
}

const updateScrollState = () => {
  if (videoScrollContainer.value) {
    canScrollLeft.value = videoScrollContainer.value.scrollLeft > 10
  }
}

const activeVideoIndex = ref(0)
const videoProgress = ref(0)
const activeVideoEl = ref(null)

const playVideo = (video, idx) => {
  activeVideoIndex.value = idx
  selectedVideoSrc.value = video.src
  selectedVideoTitle.value = `${video.titleHeader} ${video.titleHighlight}`
  videoProgress.value = 0
  showVideoModal.value = true
}

const toggleVideoPlay = () => {
  if (activeVideoEl.value) {
    if (activeVideoEl.value.paused) {
      activeVideoEl.value.play()
    } else {
      activeVideoEl.value.pause()
    }
  }
}

const playNextVideo = () => {
  const videos = store.konstruksiVideos
  if (!videos || !videos.length) return
  if (activeVideoIndex.value < videos.length - 1) {
    activeVideoIndex.value++
  } else {
    activeVideoIndex.value = 0
  }
  const nextVideo = videos[activeVideoIndex.value]
  selectedVideoSrc.value = nextVideo.src
  selectedVideoTitle.value = `${nextVideo.titleHeader} ${nextVideo.titleHighlight}`
  videoProgress.value = 0
}

const playPrevVideo = () => {
  const videos = store.konstruksiVideos
  if (!videos || !videos.length) return
  if (activeVideoIndex.value > 0) {
    activeVideoIndex.value--
  } else {
    activeVideoIndex.value = videos.length - 1
  }
  const prevVideo = videos[activeVideoIndex.value]
  selectedVideoSrc.value = prevVideo.src
  selectedVideoTitle.value = `${prevVideo.titleHeader} ${prevVideo.titleHighlight}`
  videoProgress.value = 0
}

const onVideoTimeUpdate = (e) => {
  const video = e.target
  if (video.duration) {
    videoProgress.value = (video.currentTime / video.duration) * 100
  }
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

.delay-75 { transition-delay: 150ms; }
.delay-150 { transition-delay: 300ms; }
.delay-300 { transition-delay: 600ms; }

/* Custom slider navigation buttons styling */
.slider-nav-btn {
  background-color: #ffffff !important;
  color: #0b192c !important;
  border: 1px solid #e2e8f0 !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.slider-nav-btn:hover {
  background-color: #dc2626 !important; /* red-600 */
  color: #ffffff !important;           /* white text/icon */
  border-color: #dc2626 !important;
  transform: translateY(-50%) scale(1.1) !important;
}

.slider-nav-btn .q-icon {
  color: inherit !important;
}
</style>
