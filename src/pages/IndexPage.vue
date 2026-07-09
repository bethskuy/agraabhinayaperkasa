<template>
  <q-page class="bg-slate-50 min-h-screen">
    <!-- Hero Carousel Section -->
    <section id="hero" class="relative">
      <q-carousel
        v-model="activeSlide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="white"
        navigation
        arrows
        infinite
        :autoplay="5000"
        height="100vh"
        class="bg-slate-950 text-white"
      >
        <!-- Slide 1: Konstruksi -->
        <q-carousel-slide
          name="konstruksi"
          img-src="images/construction_hero.png"
          class="p-0 overflow-hidden relative flex items-center justify-center"
        >
          <div class="absolute inset-0 bg-slate-950/70 z-0"></div>
          <div
            class="absolute inset-0 opacity-5 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0"
          ></div>
          <div
            class="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center pt-16 space-y-6 relative z-10"
          >
            <h2
              class="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Pembangunan Gedung & <br class="hidden sm:inline" />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600"
                >Rumah Berkualitas</span
              >
            </h2>
            <p
              class="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Mulai dari pondasi hingga finishing akhir, kami membangun dengan struktur kokoh,
              material terbaik, dan pengawasan profesional dari tim ahli kami.
            </p>
          </div>
        </q-carousel-slide>

        <!-- Slide 2: Renovasi -->
        <q-carousel-slide
          name="renovasi"
          img-src="images/renovation_hero.png"
          class="p-0 overflow-hidden relative flex items-center justify-center"
        >
          <div class="absolute inset-0 bg-slate-950/70 z-0"></div>
          <div
            class="absolute inset-0 opacity-5 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0"
          ></div>
          <div
            class="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center pt-16 space-y-6 relative z-10"
          >
            <h2
              class="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Renovasi Rumah & Ruko
              <br class="hidden sm:inline" />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600"
                >Secara Transparan</span
              >
            </h2>
            <p
              class="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Perbaikan kebocoran, pengecatan ulang, perluasan lantai, hingga sekat interior ruang
              dengan rincian Rencana Anggaran Biaya (RAB) yang transparan dan jujur.
            </p>
          </div>
        </q-carousel-slide>

        <!-- Slide 3: Stamp Concrete -->
        <q-carousel-slide
          name="concrete"
          img-src="images/stamp_concrete_hero.png"
          class="p-0 overflow-hidden relative flex items-center justify-center"
        >
          <div class="absolute inset-0 bg-slate-950/70 z-0"></div>
          <div
            class="absolute inset-0 opacity-5 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0"
          ></div>
          <div
            class="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center pt-16 space-y-6 relative z-10"
          >
            <h2
              class="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Lantai Beton Dekoratif <br class="hidden sm:inline" />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600"
                >Motif Batu</span
              >
            </h2>
            <p
              class="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Solusi lantai carport, teras, halaman, dan pedestrian yang indah bermotif batu alam
              dengan daya tahan beton cor yang kokoh.
            </p>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </section>

    <!-- Client Section -->
    <section
      id="klien"
      class="py-16 bg-white border-b border-slate-200/50 relative overflow-hidden"
    >
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <p class="text-[10px] sm:text-xs font-bold text-[#E63946] uppercase tracking-widest mb-10">
          Dipercaya Oleh Mitra & Klien Strategis
        </p>

        <!-- Infinite Marquee Container with Vignette Overlays -->
        <div
          class="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 after:bg-gradient-to-l after:from-white after:to-transparent after:z-10"
        >
          <div
            class="flex flex-row items-center gap-6 animate-marquee hover:[animation-play-state:paused] py-2"
          >
            <!-- Original List (8 Items) -->
            <div class="flex flex-row items-center gap-6 shrink-0">
              <div
                class="bg-white border border-slate-200/40 rounded-2xl p-3 h-24 w-44 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/10 group select-none"
              >
                <img
                  src="images/abipraya.png"
                  alt="PT Brantas Abipraya"
                  class="max-w-[80%] max-h-14 object-contain transition-all duration-300"
                />
              </div>
              <div
                class="bg-white border border-slate-200/40 rounded-2xl p-3 h-24 w-44 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/10 group select-none"
              >
                <img
                  src="images/apg.png"
                  alt="APG"
                  class="max-w-[80%] max-h-14 object-contain transition-all duration-300"
                />
              </div>
              <div
                class="bg-white border border-slate-200/40 rounded-2xl p-3 h-24 w-44 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/10 group select-none"
              >
                <img
                  src="images/lippo.png"
                  alt="Lippo Group"
                  class="max-w-[80%] max-h-14 object-contain transition-all duration-300"
                />
              </div>
              <div
                class="bg-white border border-slate-200/40 rounded-2xl p-3 h-24 w-44 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/10 group select-none"
              >
                <img
                  src="images/agc.png"
                  alt="AGC Group"
                  class="max-w-[80%] max-h-14 object-contain transition-all duration-300"
                />
              </div>
              <div
                class="bg-white border border-slate-200/40 rounded-2xl p-3 h-24 w-44 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/10 group select-none"
              >
                <img
                  src="images/kaiproperti.png"
                  alt="KAI Properti"
                  class="max-w-[80%] max-h-14 object-contain transition-all duration-300"
                />
              </div>
              <div
                class="bg-white border border-slate-200/40 rounded-2xl p-3 h-24 w-44 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/10 group select-none"
              >
                <img
                  src="images/meiji.png"
                  alt="Meiji"
                  class="max-w-[80%] max-h-14 object-contain transition-all duration-300"
                />
              </div>
              <div
                class="bg-white border border-slate-200/40 rounded-2xl p-3 h-24 w-44 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/10 group select-none"
              >
                <img
                  src="images/nie.png"
                  alt="NIE"
                  class="max-w-[80%] max-h-14 object-contain transition-all duration-300"
                />
              </div>
              <div
                class="bg-white border border-slate-200/40 rounded-2xl p-3 h-24 w-44 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/10 group select-none"
              >
                <img
                  src="images/mastertama.png"
                  alt="PT Mastertama Adhi Propertindo"
                  class="max-w-[80%] max-h-14 object-contain transition-all duration-300"
                />
              </div>
            </div>

            <!-- Duplicated List for seamless looping (8 Items) -->
            <div class="flex flex-row items-center gap-6 shrink-0">
              <div
                class="bg-white border border-slate-200/40 rounded-2xl p-3 h-24 w-44 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/10 group select-none"
              >
                <img
                  src="images/abipraya.png"
                  alt="PT Brantas Abipraya"
                  class="max-w-[80%] max-h-14 object-contain transition-all duration-300"
                />
              </div>
              <div
                class="bg-white border border-slate-200/40 rounded-2xl p-3 h-24 w-44 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/10 group select-none"
              >
                <img
                  src="images/apg.png"
                  alt="APG"
                  class="max-w-[80%] max-h-14 object-contain transition-all duration-300"
                />
              </div>
              <div
                class="bg-white border border-slate-200/40 rounded-2xl p-3 h-24 w-44 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/10 group select-none"
              >
                <img
                  src="images/lippo.png"
                  alt="Lippo Group"
                  class="max-w-[80%] max-h-14 object-contain transition-all duration-300"
                />
              </div>
              <div
                class="bg-white border border-slate-200/40 rounded-2xl p-3 h-24 w-44 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/10 group select-none"
              >
                <img
                  src="images/agc.png"
                  alt="AGC Group"
                  class="max-w-[80%] max-h-14 object-contain transition-all duration-300"
                />
              </div>
              <div
                class="bg-white border border-slate-200/40 rounded-2xl p-3 h-24 w-44 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/10 group select-none"
              >
                <img
                  src="images/kaiproperti.png"
                  alt="KAI Properti"
                  class="max-w-[80%] max-h-14 object-contain transition-all duration-300"
                />
              </div>
              <div
                class="bg-white border border-slate-200/40 rounded-2xl p-3 h-24 w-44 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/10 group select-none"
              >
                <img
                  src="images/meiji.png"
                  alt="Meiji"
                  class="max-w-[80%] max-h-14 object-contain transition-all duration-300"
                />
              </div>
              <div
                class="bg-white border border-slate-200/40 rounded-2xl p-3 h-24 w-44 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/10 group select-none"
              >
                <img
                  src="images/nie.png"
                  alt="NIE"
                  class="max-w-[80%] max-h-14 object-contain transition-all duration-300"
                />
              </div>
              <div
                class="bg-white border border-slate-200/40 rounded-2xl p-3 h-24 w-44 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/10 group select-none"
              >
                <img
                  src="images/mastertama.png"
                  alt="PT Mastertama Adhi Propertindo"
                  class="max-w-[80%] max-h-14 object-contain transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional About Section -->
    <section ref="sectionRef" id="profil-perusahaan" class="py-24 bg-slate-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column (Text Intro) -->
          <div
            class="transition-all duration-1000 transform ease-out"
            :class="sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
          >
            <p class="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">
              Profil Perusahaan
            </p>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              General Contractor & Supplier <br />
              <span class="text-red-600">PT Agra Abhinaya Perkasa</span>
            </h2>
            <div class="mt-6 text-slate-600 leading-relaxed text-sm sm:text-base space-y-4">
              <p>
                <strong>PT AGRA ABHINAYA PERKASA</strong> adalah perusahaan yang bergerak di bidang
                <em>General Contractor</em> dan <em>General Supplier</em>, didirikan pada tahun
                2022.
              </p>
              <p>
                Kami menyediakan layanan pelaksanaan konstruksi serta pengadaan barang dan material
                pendukung proyek dengan mengutamakan kualitas, ketepatan waktu, dan keselamatan
                kerja.
              </p>
              <p>
                Dengan dukungan sumber daya manusia yang kompeten dan manajemen yang profesional,
                <strong>PT AGRA ABHINAYA PERKASA</strong> berkomitmen menjadi mitra terpercaya bagi
                klien dari sektor swasta maupun pemerintah.
              </p>
            </div>
          </div>

          <!-- Right Column (Stats Grid Container) -->
          <div class="space-y-4">
            <!-- Stat 1: Proyek Selesai -->
            <div
              class="space-y-1 transition-all duration-1000 transform ease-out delay-[100ms]"
              :class="sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
            >
              <div
                @click="toggleStat(0)"
                class="p-4 bg-gradient-to-r from-red-800 to-red-600 rounded-2xl border border-red-700/30 flex flex-row flex-nowrap items-center justify-between transition-all duration-300 hover:shadow-xl hover:shadow-red-600/20 hover:-translate-y-1 hover:scale-[1.015] cursor-pointer select-none"
              >
                <div class="flex items-center space-x-4 flex-1 min-w-0">
                  <div
                    class="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm"
                  >
                    <svg
                      class="w-6 h-6 text-red-600 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2l6 3 6-3v11.382a1 1 0 01-.553.894L15 20l-6-3-6 3z"
                      />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 2v18M15 5v15" />
                    </svg>
                  </div>
                  <span
                    class="block text-base font-extrabold text-white uppercase tracking-wider font-heading leading-none truncate"
                    >Proyek Selesai</span
                  >
                </div>
              </div>
              <div
                class="transition-all duration-300 overflow-hidden pl-16"
                :style="{ maxHeight: expandedStat === 0 ? '100px' : '0px' }"
              >
                <p class="text-sm sm:text-base text-slate-600 leading-relaxed pt-1.5 pb-3 pr-2">
                  Berbagai proyek konstruksi rumah mewah, ruko, gedung, dan perkerasan jalan di area
                  Jabodetabek.
                </p>
              </div>
            </div>

            <!-- Stat 2: Kepuasan Klien -->
            <div
              class="space-y-1 transition-all duration-1000 transform ease-out delay-[250ms]"
              :class="sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
            >
              <div
                @click="toggleStat(1)"
                class="p-4 bg-gradient-to-r from-red-800 to-red-600 rounded-2xl border border-red-700/30 flex flex-row flex-nowrap items-center justify-between transition-all duration-300 hover:shadow-xl hover:shadow-red-600/20 hover:-translate-y-1 hover:scale-[1.015] cursor-pointer select-none"
              >
                <div class="flex items-center space-x-4 flex-1 min-w-0">
                  <div
                    class="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm"
                  >
                    <svg
                      class="w-6 h-6 text-red-600 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <span
                    class="block text-base font-extrabold text-white uppercase tracking-wider font-heading leading-none truncate"
                    >Kepuasan Klien</span
                  >
                </div>
              </div>
              <div
                class="transition-all duration-300 overflow-hidden pl-16"
                :style="{ maxHeight: expandedStat === 1 ? '100px' : '0px' }"
              >
                <p class="text-sm sm:text-base text-slate-600 leading-relaxed pt-1.5 pb-3 pr-2">
                  Mengutamakan kualitas material terbaik, pengawasan ketat, serta rencana anggaran
                  biaya yang transparan.
                </p>
              </div>
            </div>

            <!-- Stat 3: Spesialis Stamp Concrete -->
            <div
              class="space-y-1 transition-all duration-1000 transform ease-out delay-[400ms]"
              :class="sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
            >
              <div
                @click="toggleStat(2)"
                class="p-4 bg-gradient-to-r from-red-800 to-red-600 rounded-2xl border border-red-700/30 flex flex-row flex-nowrap items-center justify-between transition-all duration-300 hover:shadow-xl hover:shadow-red-600/20 hover:-translate-y-1 hover:scale-[1.015] cursor-pointer select-none"
              >
                <div class="flex items-center space-x-4 flex-1 min-w-0">
                  <div
                    class="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm"
                  >
                    <svg
                      class="w-6 h-6 text-red-600 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16M10 6v6M14 12v6M8 12v6M16 6v6"
                      />
                    </svg>
                  </div>
                  <span
                    class="block text-base font-extrabold text-white uppercase tracking-wider font-heading leading-none truncate"
                    >Stamp Concrete</span
                  >
                </div>
              </div>
              <div
                class="transition-all duration-300 overflow-hidden pl-16"
                :style="{ maxHeight: expandedStat === 2 ? '100px' : '0px' }"
              >
                <p class="text-sm sm:text-base text-slate-600 leading-relaxed pt-1.5 pb-3 pr-2">
                  Pakar pengerjaan lantai beton dekoratif bermotif batu alam dan kayu yang kokoh,
                  berestetika tinggi, dan awet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visi & Misi Section -->
    <section
      ref="visiMisiRef"
      id="visi-misi"
      class="py-20 bg-white border-t border-b border-slate-100 relative overflow-hidden"
    >
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div
          class="text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ease-out"
          :class="visiMisiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
        >
          <p class="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">Visi & Misi</p>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0B192C] leading-tight">
            Komitmen & Arah Langkah Kami
          </h2>
        </div>

        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto transition-all duration-1000 transform ease-out delay-[200ms]"
          :class="visiMisiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
        >
          <!-- Card Visi (Left Column - Asymmetric Banner) -->
          <div
            class="bg-gradient-to-br from-[#0B192C] via-[#1E3E62] to-[#0B192C] rounded-3xl p-8 md:p-10 text-white shadow-xl flex flex-col justify-between relative overflow-hidden border border-red-500/10 min-h-[380px] lg:min-h-full transition-all duration-300 hover:shadow-2xl hover:shadow-red-950/20 hover:-translate-y-1"
          >
            <div
              class="absolute -top-12 -right-12 w-48 h-48 bg-red-600/10 rounded-full filter blur-2xl pointer-events-none"
            ></div>
            <!-- Giant Decorative Quote Mark -->
            <div
              class="absolute -bottom-8 -left-6 text-white/5 text-[180px] font-serif leading-none select-none pointer-events-none font-bold"
            >
              “
            </div>

            <div class="relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <span
                  class="inline-block px-3 py-1 bg-red-600 text-white font-extrabold text-[10px] uppercase tracking-wider rounded-full mb-6"
                >
                  Visi Perusahaan
                </span>
                <p
                  class="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed italic font-heading text-slate-100"
                >
                  "Menjadi perusahaan General Contractor dan General Supplier yang profesional,
                  terpercaya, dan berdaya saing, serta berkontribusi dalam pembangunan berkelanjutan
                  di Indonesia"
                </p>
              </div>

              <div class="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span class="text-xs text-slate-400 font-semibold tracking-wider uppercase"
                  >PT Agra Abhinaya Perkasa</span
                >
                <svg
                  class="w-10 h-10 text-red-500/30"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253m0 0A17.919 17.919 0 0012 7.5a17.919 17.919 0 008.716 2.247"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Card Misi (Right Column - Vertical Floating Offset Cards) -->
          <div class="flex flex-col justify-center space-y-6">
            <span
              class="inline-block px-3 py-1 bg-[#0B192C] text-white font-extrabold text-[10px] uppercase tracking-wider rounded-full self-start text-slate-800 mb-2"
            >
              Misi Perusahaan
            </span>

            <!-- Misi 1 -->
            <div
              class="bg-white border border-slate-200/50 shadow-md p-5 rounded-2xl flex flex-row flex-nowrap items-center space-x-5 transition-all duration-300 hover:shadow-xl hover:border-red-500/30 hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group"
            >
              <!-- Full background subtle wave/dot elements -->
              <div
                class="absolute inset-0 pointer-events-none z-0 opacity-[0.04] text-[#0B192C] group-hover:opacity-[0.18] group-hover:text-red-600 transition-all duration-500 ease-out transform group-hover:translate-x-3 group-hover:scale-[1.02]"
              >
                <svg
                  class="w-full h-full transition-all duration-300 group-hover:stroke-[1.6]"
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path d="M 0,30 Q 100,70 200,30 T 400,60" />
                  <path d="M 0,50 Q 120,20 240,80 T 400,40" stroke-dasharray="4 4" />
                  <path d="M 0,70 Q 80,90 200,40 T 400,80" />
                </svg>
              </div>
              <div
                class="relative z-10 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 shadow-sm border border-red-100 group-hover:bg-red-600 transition-colors duration-300"
              >
                <span
                  class="text-red-600 font-extrabold text-xl font-heading group-hover:text-white transition-colors duration-300"
                  >01</span
                >
              </div>
              <p
                class="relative z-10 text-slate-700 font-extrabold text-sm sm:text-base leading-snug"
              >
                Memberikan layanan berkualitas dan tepat waktu
              </p>
            </div>

            <!-- Misi 2 -->
            <div
              class="bg-white border border-slate-200/50 shadow-md p-5 rounded-2xl flex flex-row flex-nowrap items-center space-x-5 transition-all duration-300 hover:shadow-xl hover:border-red-500/30 hover:-translate-y-1 hover:scale-[1.02] sm:translate-x-6 relative overflow-hidden group"
            >
              <!-- Full background subtle wave/dot elements -->
              <div
                class="absolute inset-0 pointer-events-none z-0 opacity-[0.04] text-[#0B192C] group-hover:opacity-[0.18] group-hover:text-red-600 transition-all duration-500 ease-out transform group-hover:translate-x-3 group-hover:scale-[1.02]"
              >
                <svg
                  class="w-full h-full transition-all duration-300 group-hover:stroke-[1.6]"
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path d="M 0,30 Q 100,70 200,30 T 400,60" />
                  <path d="M 0,50 Q 120,20 240,80 T 400,40" stroke-dasharray="4 4" />
                  <path d="M 0,70 Q 80,90 200,40 T 400,80" />
                </svg>
              </div>
              <div
                class="relative z-10 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 shadow-sm border border-red-100 group-hover:bg-red-600 transition-colors duration-300"
              >
                <span
                  class="text-red-600 font-extrabold text-xl font-heading group-hover:text-white transition-colors duration-300"
                  >02</span
                >
              </div>
              <p
                class="relative z-10 text-slate-700 font-extrabold text-sm sm:text-base leading-snug"
              >
                Mengutamakan keselamatan kerja dan mutu
              </p>
            </div>

            <!-- Misi 3 -->
            <div
              class="bg-white border border-slate-200/50 shadow-md p-5 rounded-2xl flex flex-row flex-nowrap items-center space-x-5 transition-all duration-300 hover:shadow-xl hover:border-red-500/30 hover:-translate-y-1 hover:scale-[1.02] sm:translate-x-12 relative overflow-hidden group"
            >
              <!-- Full background subtle wave/dot elements -->
              <div
                class="absolute inset-0 pointer-events-none z-0 opacity-[0.04] text-[#0B192C] group-hover:opacity-[0.18] group-hover:text-red-600 transition-all duration-500 ease-out transform group-hover:translate-x-3 group-hover:scale-[1.02]"
              >
                <svg
                  class="w-full h-full transition-all duration-300 group-hover:stroke-[1.6]"
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path d="M 0,30 Q 100,70 200,30 T 400,60" />
                  <path d="M 0,50 Q 120,20 240,80 T 400,40" stroke-dasharray="4 4" />
                  <path d="M 0,70 Q 80,90 200,40 T 400,80" />
                </svg>
              </div>
              <div
                class="relative z-10 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 shadow-sm border border-red-100 group-hover:bg-red-600 transition-colors duration-300"
              >
                <span
                  class="text-red-600 font-extrabold text-xl font-heading group-hover:text-white transition-colors duration-300"
                  >03</span
                >
              </div>
              <p
                class="relative z-10 text-slate-700 font-extrabold text-sm sm:text-base leading-snug"
              >
                Meningkatkan kompetensi SDM
              </p>
            </div>

            <!-- Misi 4 -->
            <div
              class="bg-white border border-slate-200/50 shadow-md p-5 rounded-2xl flex flex-row flex-nowrap items-center space-x-5 transition-all duration-300 hover:shadow-xl hover:border-red-500/30 hover:-translate-y-1 hover:scale-[1.02] sm:translate-x-6 relative overflow-hidden group"
            >
              <!-- Full background subtle wave/dot elements -->
              <div
                class="absolute inset-0 pointer-events-none z-0 opacity-[0.04] text-[#0B192C] group-hover:opacity-[0.18] group-hover:text-red-600 transition-all duration-500 ease-out transform group-hover:translate-x-3 group-hover:scale-[1.02]"
              >
                <svg
                  class="w-full h-full transition-all duration-300 group-hover:stroke-[1.6]"
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path d="M 0,30 Q 100,70 200,30 T 400,60" />
                  <path d="M 0,50 Q 120,20 240,80 T 400,40" stroke-dasharray="4 4" />
                  <path d="M 0,70 Q 80,90 200,40 T 400,80" />
                </svg>
              </div>
              <div
                class="relative z-10 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 shadow-sm border border-red-100 group-hover:bg-red-600 transition-colors duration-300"
              >
                <span
                  class="text-red-600 font-extrabold text-xl font-heading group-hover:text-white transition-colors duration-300"
                  >04</span
                >
              </div>
              <p
                class="relative z-10 text-slate-700 font-extrabold text-sm sm:text-base leading-snug"
              >
                Menjaga kepercayaan dan kepuasan klien
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visitor Counter Showcase Section -->
    <section
      ref="statsRef"
      id="statistik-kunjungan"
      class="bg-slate-50 py-12 border-b border-slate-100 relative overflow-hidden"
    >
      <div class="max-w-6xl mx-auto px-6 relative z-10 flex justify-center">
        <div class="bg-white rounded-[32px] p-8 md:p-10 shadow-lg border border-slate-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center text-center max-w-sm w-full">
          <span class="text-red-600 font-extrabold text-5xl md:text-6xl leading-none">
            {{ visitorCount }}+
          </span>
          <span class="text-[#0B192C] font-extrabold text-sm sm:text-base mt-4 uppercase tracking-wider">
            Telah dikunjungi orang hari ini
          </span>
        </div>
      </div>
    </section>

    <!-- Kantor Kami Section -->
    <section
      ref="officeRef"
      id="kantor-kami"
      class="py-24 bg-white border-b border-slate-100 relative overflow-hidden"
    >
      <div class="max-w-6xl mx-auto px-6 relative z-10">
        <div
          class="transition-all duration-1000 transform ease-out"
          :class="officeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
        >
          <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
            <!-- Left: Stacked Photos Showcase -->
            <div class="md:col-span-6 flex justify-center relative">
              <div class="relative w-full max-w-[450px] aspect-[4/3]">
                <!-- Bottom stacked layer (Navy Panel) -->
                <div class="absolute inset-0 bg-[#0B192C] opacity-5 rounded-[32px] rotate-[6deg] scale-[0.94] border border-slate-200/50 shadow-md transition-all duration-500 ease-out"></div>
                <!-- Middle stacked layer (Red Panel) -->
                <div class="absolute inset-0 bg-red-600 opacity-[0.04] rounded-[32px] -rotate-[3deg] scale-[0.98] border border-red-500/10 shadow-md transition-all duration-500 ease-out"></div>
                
                <!-- Main/Top layer: Active Image Card -->
                <div class="relative z-10 w-full h-full rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <transition name="fade" mode="out-in">
                    <img
                      :key="officeIndex"
                      :src="currentOfficeSlide.image"
                      :alt="currentOfficeSlide.title"
                      class="w-full h-full object-cover select-none pointer-events-none"
                    />
                  </transition>
                </div>
              </div>
            </div>

            <!-- Right: Office Details & Custom Sliding Controls -->
            <div class="md:col-span-6 space-y-6 text-left">
              <div>
                <p class="text-xs font-bold text-red-600 uppercase tracking-widest mb-4">
                  Workspace Kami
                </p>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0B192C] leading-tight">
                  Kantor Pusat <span class="text-red-600">PT Agra</span>
                </h2>
                <p class="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed font-semibold">
                  Suasana ruang kerja yang kondusif dan profesional untuk mendiskusikan rencana proyek pembangunan Anda.
                </p>
              </div>

              <!-- Divider line -->
              <div class="border-t border-slate-100"></div>

              <!-- Active Slide Details -->
              <div class="min-h-[120px] transition-all duration-300">
                <h3 class="text-xl font-extrabold text-[#0B192C] font-heading m-0">
                  {{ currentOfficeSlide.title }}
                </h3>
                <p class="text-slate-600 text-sm leading-relaxed mt-2.5 font-medium">
                  {{ currentOfficeSlide.desc }}
                </p>
              </div>

              <!-- Custom Sliding Navigation Buttons -->
              <div class="flex items-center gap-3 pt-2">
                <button
                  @click="prevOfficeSlide"
                  class="w-11 h-11 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-md border border-red-600 hover:border-red-700 hover:scale-105 transition-all duration-300 focus:outline-none cursor-pointer"
                >
                  <q-icon name="arrow_back" size="18px" />
                </button>
                <button
                  @click="nextOfficeSlide"
                  class="w-11 h-11 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-md border border-red-600 hover:border-red-700 hover:scale-105 transition-all duration-300 focus:outline-none cursor-pointer"
                >
                  <q-icon name="arrow_forward" size="18px" />
                </button>
                <span class="text-xs font-bold text-slate-400 ml-2 select-none">
                  0{{ officeIndex + 1 }} / 0{{ officeSlides.length }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mengapa Memilih Kami Section -->
    <section
      ref="choosingUsRef"
      id="mengapa-memilih-kami"
      class="py-20 bg-slate-50 relative overflow-hidden"
    >
      <div class="max-w-6xl mx-auto px-6">
        <div
          class="text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ease-out"
          :class="choosingUsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
        >
          <p class="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">
            Mengapa Memilih Kami
          </p>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0B192C] leading-tight">
            Keunggulan Layanan & Kinerja AAP
          </h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <!-- Mascot (Left Column - Spans 5 columns on desktop) -->
          <div
            class="lg:col-span-5 flex flex-col items-center justify-center transition-all duration-1000 transform ease-out delay-[200ms] relative"
            :class="choosingUsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'"
          >
            <!-- Speech Bubble (Gelembung Balon Kata) -->
            <div class="relative z-20 animate-bubble-float max-w-[280px] mb-6">
              <div
                class="bg-white border-2 border-red-500/20 shadow-xl p-3 px-4 rounded-2xl relative"
              >
                <!-- Text -->
                <p class="text-xs font-extrabold text-[#0B192C] leading-relaxed text-center">
                  "Halo! Saya siap membantu mewujudkan proyek impian Anda dengan kualitas terbaik.
                  Yuk, lihat keunggulan kami di samping!"
                </p>
                <!-- Speech Bubble Tail/Triangle pointing down -->
                <div
                  class="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-red-500/20 rotate-45"
                ></div>
              </div>
            </div>

            <div
              class="relative flex items-center justify-center w-full max-w-[360px] sm:max-w-[400px]"
            >
              <!-- Background subtle decorative design shapes matching the theme -->
              <div
                class="absolute -top-6 -left-6 w-32 h-32 bg-red-600/5 rounded-full filter blur-xl pointer-events-none"
              ></div>
              <div
                class="absolute -bottom-8 -right-8 w-48 h-48 bg-[#0B192C]/5 rounded-full filter blur-2xl pointer-events-none"
              ></div>

              <!-- Premium Mascot Container Card -->
              <div
                class="relative z-10 w-full overflow-hidden rounded-3xl border border-slate-200/60 shadow-xl bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                <img
                  src="images/mascot_illustration.jpg"
                  alt="Maskot PT Agra Abhinaya Perkasa"
                  class="w-full h-auto object-cover block"
                />
                <!-- Float Accent Label (floating badge) -->
                <div
                  class="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-[#0B192C] to-[#1E3E62] text-white p-4 rounded-2xl shadow-md border border-white/10 flex items-center justify-between"
                >
                  <div>
                    <p class="text-[10px] uppercase font-bold text-red-500 tracking-wider">
                      Mitra Konstruksi Anda
                    </p>
                    <p class="text-sm font-extrabold font-heading">PT Agra Abhinaya Perkasa</p>
                  </div>
                  <div
                    class="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shrink-0"
                  >
                    <svg
                      class="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature Cards (Right Column - Spans 7 columns on desktop) -->
          <div
            class="lg:col-span-7 space-y-6 transition-all duration-1000 transform ease-out delay-[300ms]"
            :class="choosingUsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'"
          >
            <!-- 1. Profesional & Berpengalaman -->
            <div
              class="border border-slate-200/50 shadow-md p-5 rounded-2xl flex flex-row flex-nowrap items-center space-x-4 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/15 hover:border-red-500/30 hover:-translate-y-2 hover:scale-[1.015] group relative overflow-hidden"
            >
              <!-- Custom Watermark: Layered Waves background matching the mockup exactly -->
              <svg
                class="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 400 120"
                preserveAspectRatio="none"
              >
                <!-- Base card background light pink -->
                <rect width="400" height="120" fill="#FFF6F6" />
                <!-- Middle wave layer -->
                <path
                  d="M 0 85 C 150 75, 280 55, 400 45 L 400 120 L 0 120 Z"
                  fill="#FFEAEA"
                  opacity="0.8"
                />
                <!-- Bottom wave layer -->
                <path d="M 0 102 C 160 98, 290 85, 400 75 L 400 120 L 0 120 Z" fill="#FFDCDC" />
              </svg>
              <!-- Gradient glow overlay on hover -->
              <div
                class="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-red-500/[0.05] via-rose-500/[0.02] to-transparent transition-all duration-500"
              ></div>

              <div
                class="relative z-10 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 border border-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300"
              >
                <q-icon name="group" size="20px" />
              </div>
              <div class="relative z-10 col-span-1 flex-1 min-w-0 pr-2">
                <h4 class="text-base font-extrabold text-[#0B192C] mb-1">
                  Profesional & Berpengalaman
                </h4>
                <p class="text-slate-600 text-sm leading-relaxed">
                  Didukung oleh tim yang kompeten dan berpengalaman dalam pelaksanaan pekerjaan
                  konstruksi dan pengadaan.
                </p>
              </div>
            </div>

            <!-- 2. Kualitas & Ketepatan Waktu -->
            <div
              class="border border-slate-200/50 shadow-md p-5 rounded-2xl flex flex-row flex-nowrap items-center space-x-4 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/15 hover:border-red-500/30 hover:-translate-y-2 hover:scale-[1.015] group relative overflow-hidden"
            >
              <!-- Custom Watermark: Layered Waves background matching the mockup exactly -->
              <svg
                class="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 400 120"
                preserveAspectRatio="none"
              >
                <!-- Base card background light pink -->
                <rect width="400" height="120" fill="#FFF6F6" />
                <!-- Middle wave layer -->
                <path
                  d="M 0 85 C 150 75, 280 55, 400 45 L 400 120 L 0 120 Z"
                  fill="#FFEAEA"
                  opacity="0.8"
                />
                <!-- Bottom wave layer -->
                <path d="M 0 102 C 160 98, 290 85, 400 75 L 400 120 L 0 120 Z" fill="#FFDCDC" />
              </svg>
              <!-- Gradient glow overlay on hover -->
              <div
                class="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-red-500/[0.05] via-rose-500/[0.02] to-transparent transition-all duration-500"
              ></div>

              <div
                class="relative z-10 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 border border-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300"
              >
                <q-icon name="schedule" size="20px" />
              </div>
              <div class="relative z-10 col-span-1 flex-1 min-w-0 pr-2">
                <h4 class="text-base font-extrabold text-[#0B192C] mb-1">
                  Kualitas & Ketepatan Waktu
                </h4>
                <p class="text-slate-600 text-sm leading-relaxed">
                  Setiap pekerjaan dilaksanakan sesuai standar mutu dengan komitmen penyelesaian
                  tepat waktu.
                </p>
              </div>
            </div>

            <!-- 3. Komitmen Keselamatan Kerja (K3) -->
            <div
              class="border border-slate-200/50 shadow-md p-5 rounded-2xl flex flex-row flex-nowrap items-center space-x-4 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/15 hover:border-red-500/30 hover:-translate-y-2 hover:scale-[1.015] group relative overflow-hidden"
            >
              <!-- Custom Watermark: Layered Waves background matching the mockup exactly -->
              <svg
                class="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 400 120"
                preserveAspectRatio="none"
              >
                <!-- Base card background light pink -->
                <rect width="400" height="120" fill="#FFF6F6" />
                <!-- Middle wave layer -->
                <path
                  d="M 0 85 C 150 75, 280 55, 400 45 L 400 120 L 0 120 Z"
                  fill="#FFEAEA"
                  opacity="0.8"
                />
                <!-- Bottom wave layer -->
                <path d="M 0 102 C 160 98, 290 85, 400 75 L 400 120 L 0 120 Z" fill="#FFDCDC" />
              </svg>
              <!-- Gradient glow overlay on hover -->
              <div
                class="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-red-500/[0.05] via-rose-500/[0.02] to-transparent transition-all duration-500"
              ></div>

              <div
                class="relative z-10 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 border border-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300"
              >
                <q-icon name="health_and_safety" size="20px" />
              </div>
              <div class="relative z-10 col-span-1 flex-1 min-w-0 pr-2">
                <h4 class="text-base font-extrabold text-[#0B192C] mb-1">
                  Komitmen Keselamatan Kerja (K3)
                </h4>
                <p class="text-slate-600 text-sm leading-relaxed">
                  Keselamatan dan kesehatan kerja menjadi prioritas utama dalam seluruh aktivitas
                  proyek.
                </p>
              </div>
            </div>

            <!-- 4. Manajemen Proyek yang Terstruktur -->
            <div
              class="border border-slate-200/50 shadow-md p-5 rounded-2xl flex flex-row flex-nowrap items-center space-x-4 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/15 hover:border-red-500/30 hover:-translate-y-2 hover:scale-[1.015] group relative overflow-hidden"
            >
              <!-- Custom Watermark: Layered Waves background matching the mockup exactly -->
              <svg
                class="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 400 120"
                preserveAspectRatio="none"
              >
                <!-- Base card background light pink -->
                <rect width="400" height="120" fill="#FFF6F6" />
                <!-- Middle wave layer -->
                <path
                  d="M 0 85 C 150 75, 280 55, 400 45 L 400 120 L 0 120 Z"
                  fill="#FFEAEA"
                  opacity="0.8"
                />
                <!-- Bottom wave layer -->
                <path d="M 0 102 C 160 98, 290 85, 400 75 L 400 120 L 0 120 Z" fill="#FFDCDC" />
              </svg>
              <!-- Gradient glow overlay on hover -->
              <div
                class="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-red-500/[0.05] via-rose-500/[0.02] to-transparent transition-all duration-500"
              ></div>

              <div
                class="relative z-10 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 border border-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300"
              >
                <q-icon name="task_alt" size="20px" />
              </div>
              <div class="relative z-10 col-span-1 flex-1 min-w-0 pr-2">
                <h4 class="text-base font-extrabold text-[#0B192C] mb-1">
                  Manajemen Proyek yang Terstruktur
                </h4>
                <p class="text-slate-600 text-sm leading-relaxed">
                  Perencanaan, pelaksanaan, dan pengawasan proyek dilakukan secara sistematis dan
                  terkontrol.
                </p>
              </div>
            </div>

            <!-- 5. Mitra yang Dapat Dipercaya -->
            <div
              class="border border-slate-200/50 shadow-md p-5 rounded-2xl flex flex-row flex-nowrap items-center space-x-4 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/15 hover:border-red-500/30 hover:-translate-y-2 hover:scale-[1.015] group relative overflow-hidden"
            >
              <!-- Custom Watermark: Layered Waves background matching the mockup exactly -->
              <svg
                class="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 400 120"
                preserveAspectRatio="none"
              >
                <!-- Base card background light pink -->
                <rect width="400" height="120" fill="#FFF6F6" />
                <!-- Middle wave layer -->
                <path
                  d="M 0 85 C 150 75, 280 55, 400 45 L 400 120 L 0 120 Z"
                  fill="#FFEAEA"
                  opacity="0.8"
                />
                <!-- Bottom wave layer -->
                <path d="M 0 102 C 160 98, 290 85, 400 75 L 400 120 L 0 120 Z" fill="#FFDCDC" />
              </svg>
              <!-- Gradient glow overlay on hover -->
              <div
                class="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-red-500/[0.05] via-rose-500/[0.02] to-transparent transition-all duration-500"
              ></div>

              <div
                class="relative z-10 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 border border-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300"
              >
                <q-icon name="handshake" size="20px" />
              </div>
              <div class="relative z-10 col-span-1 flex-1 min-w-0 pr-2">
                <h4 class="text-base font-extrabold text-[#0B192C] mb-1">
                  Mitra yang Dapat Dipercaya
                </h4>
                <p class="text-slate-600 text-sm leading-relaxed">
                  Kami membangun hubungan kerja jangka panjang berdasarkan kepercayaan dan
                  komunikasi yang baik dengan klien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section ref="servicesRef" id="layanan" class="py-20 bg-white overflow-hidden relative">
      <div
        class="max-w-6xl mx-auto px-6 relative z-10 transition-all duration-1000 transform ease-out"
        :class="servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
      >
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">Layanan Kami</p>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0B192C] leading-tight">
            Solusi Konstruksi Terbaik <br />Untuk Kebutuhan Anda
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          <!-- Service Card 1: Konstruksi -->
          <div
            class="transition-all duration-500 relative rounded-3xl overflow-hidden flex flex-col justify-between min-h-[420px] sm:min-h-[460px] shadow-xl hover:shadow-2xl hover:-translate-y-1 group flex-1 w-full"
            :class="
              showKonstruksiInCard
                ? 'bg-[#0B192C] border-none p-5 text-white shadow-2xl'
                : 'bg-white/80 backdrop-blur-md border border-white/40 p-0 hover:bg-white/95 text-slate-800'
            "
          >
            <transition name="fade" mode="out-in">
              <!-- Tampilan Detail (Navy Gelap) -->
              <div
                v-if="showKonstruksiInCard"
                key="detail"
                class="flex flex-col justify-between h-full flex-1"
              >
                <div>
                  <!-- Header: Title & Close Button -->
                  <div class="flex items-center justify-between text-white mb-6">
                    <h3 class="font-heading font-extrabold text-2xl tracking-tight m-0">
                      Konstruksi
                    </h3>
                    <button
                      @click="showKonstruksiInCard = false"
                      class="bg-transparent border-none text-white/70 hover:text-white cursor-pointer flex items-center justify-center p-1 focus:outline-none shadow-none"
                    >
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <!-- Description text -->
                  <p class="text-white text-sm leading-relaxed mb-6 font-medium pr-1">
                    Melayani pembangunan baru dari nol untuk rumah tinggal, ruko komersial, gedung
                    perkantoran, dan gudang industri dengan standar mutu tinggi.
                  </p>

                  <!-- Bullets list -->
                  <ul class="text-white text-sm space-y-3.5 pl-5 list-disc font-semibold">
                    <li>Struktur SNI Kokoh</li>
                    <li>RAB Transparan</li>
                    <li>Arsitek & Sipil Profesional</li>
                  </ul>
                </div>

                <!-- Action Button -->
                <div class="mt-8">
                  <button
                    @click="navigateToKonstruksiDetail"
                    class="w-full bg-white hover:bg-slate-100 text-red-600 font-extrabold py-3.5 px-6 rounded-full transition-all duration-300 border-none cursor-pointer shadow-md hover:shadow-lg text-center block text-sm focus:outline-none animate-pulse-subtle"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>

              <!-- Tampilan Standar (Putih dengan Gambar) -->
              <div v-else key="standard" class="flex flex-col justify-between h-full flex-1">
                <div class="p-5 pb-0">
                  <div
                    class="relative h-[160px] sm:h-[200px] w-full rounded-2xl overflow-hidden mb-4"
                  >
                    <img
                      src="images/kontruksi.png"
                      alt="Konstruksi Bangunan"
                      class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div class="text-center px-2">
                    <h3
                      class="font-heading font-extrabold text-lg sm:text-xl text-slate-900 mb-2.5 flex items-center justify-center"
                    >
                      Konstruksi
                    </h3>
                    <p class="text-slate-600 text-sm leading-relaxed">
                      Agra melayani pembangunan baru rumah, ruko, gedung, dan gudang dengan struktur
                      kokoh, material teruji, serta pengawasan mandor berpengalaman.
                    </p>
                  </div>
                </div>
                <div class="p-5 pt-3 text-center">
                  <button
                    @click="showKonstruksiInCard = true"
                    class="inline-block bg-red-600 hover:bg-red-700 text-white border border-transparent font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none shadow-sm hover:shadow-md"
                  >
                    Selengkapnya
                  </button>
                </div>
              </div>
            </transition>
          </div>

          <!-- Service Card 2: Borongan -->
          <div
            class="transition-all duration-500 relative rounded-3xl overflow-hidden flex flex-col justify-between min-h-[420px] sm:min-h-[460px] shadow-xl hover:shadow-2xl hover:-translate-y-1 group flex-1 w-full"
            :class="
              showBoronganInCard
                ? 'bg-[#4E201B] border-none p-5 text-white shadow-2xl'
                : 'bg-white/80 backdrop-blur-md border border-white/40 p-0 hover:bg-white/95 text-slate-800'
            "
          >
            <transition name="fade" mode="out-in">
              <!-- Tampilan Detail (Cokelat Gelap) -->
              <div
                v-if="showBoronganInCard"
                key="detail"
                class="flex flex-col justify-between h-full flex-1"
              >
                <div>
                  <!-- Header: Title & Close Button -->
                  <div class="flex items-center justify-between text-white mb-6">
                    <h3 class="font-heading font-extrabold text-2xl tracking-tight m-0">
                      Borongan
                    </h3>
                    <button
                      @click="showBoronganInCard = false"
                      class="bg-transparent border-none text-white/70 hover:text-white cursor-pointer flex items-center justify-center p-1 focus:outline-none shadow-none"
                    >
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <!-- Description text -->
                  <p class="text-white text-sm leading-relaxed mb-6 font-medium pr-1">
                    Mengerjakan perbaikan bangunan secara borongan untuk rumah, kantor, ruko,
                    apartemen dan lainnya. Termasuk survey + jasa + material + pengawasan.
                  </p>

                  <!-- Bullets list -->
                  <ul class="text-white text-sm space-y-3.5 pl-5 list-disc font-semibold">
                    <li>Harga Transparan</li>
                    <li>Bertanggung jawab</li>
                    <li>Bergaransi</li>
                  </ul>
                </div>

                <!-- Action Button (White Pill with Red Text) -->
                <div class="mt-8">
                  <button
                    @click="navigateToDetail"
                    class="w-full bg-white hover:bg-slate-100 text-red-600 font-extrabold py-3.5 px-6 rounded-full transition-all duration-300 border-none cursor-pointer shadow-md hover:shadow-lg text-center block text-sm focus:outline-none animate-pulse-subtle"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>

              <!-- Tampilan Standar (Putih dengan Gambar) -->
              <div v-else key="standard" class="flex flex-col justify-between h-full flex-1">
                <div class="p-5 pb-0">
                  <div
                    class="relative h-[160px] sm:h-[200px] w-full rounded-2xl overflow-hidden mb-4"
                  >
                    <img
                      src="images/borongan.png"
                      alt="Layanan Borongan"
                      class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div class="text-center px-2">
                    <h3
                      class="font-heading font-extrabold text-lg sm:text-xl text-slate-900 mb-2.5 flex items-center justify-center"
                    >
                      Borongan
                      <span
                        class="ml-2 text-[9px] font-extrabold bg-red-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider"
                        >Full Service</span
                      >
                    </h3>
                    <p class="text-slate-600 text-sm leading-relaxed">
                      Agra menyediakan solusi layanan borongan menyeluruh untuk kelancaran
                      pembangunan dan renovasi besar agar prosesnya jadi mudah.
                    </p>
                  </div>
                </div>
                <div class="p-5 pt-3 text-center">
                  <button
                    @click="showBoronganInCard = true"
                    class="inline-block bg-red-600 hover:bg-red-700 text-white border border-transparent font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none shadow-sm hover:shadow-md"
                  >
                    Selengkapnya
                  </button>
                </div>
              </div>
            </transition>
          </div>

          <!-- Service Card 3: Tukang Harian -->
          <div
            class="transition-all duration-500 relative rounded-3xl overflow-hidden flex flex-col justify-between min-h-[420px] sm:min-h-[460px] shadow-xl hover:shadow-2xl hover:-translate-y-1 group flex-1 w-full"
            :class="
              showTukangHarianInCard
                ? 'bg-[#6B1D1D] border-none p-5 text-white shadow-2xl'
                : 'bg-white/80 backdrop-blur-md border border-white/40 p-0 hover:bg-white/95 text-slate-800'
            "
          >
            <transition name="fade" mode="out-in">
              <!-- Tampilan Detail (Merah Gelap) -->
              <div
                v-if="showTukangHarianInCard"
                key="detail"
                class="flex flex-col justify-between h-full flex-1"
              >
                <div>
                  <!-- Header: Title & Close Button -->
                  <div class="flex items-center justify-between text-white mb-6">
                    <h3 class="font-heading font-extrabold text-2xl tracking-tight m-0">
                      Tukang Harian
                    </h3>
                    <button
                      @click="showTukangHarianInCard = false"
                      class="bg-transparent border-none text-white/70 hover:text-white cursor-pointer flex items-center justify-center p-1 focus:outline-none shadow-none"
                    >
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <!-- Description text -->
                  <p class="text-white text-sm leading-relaxed mb-6 font-medium pr-1">
                    Penyediaan tenaga tukang terampil harian untuk perbaikan kecil/besar, perapihan
                    dinding, kusen pintu, pipa bocor, instalasi listrik, dan lainnya.
                  </p>

                  <!-- Bullets list -->
                  <ul class="text-white text-sm space-y-3.5 pl-5 list-disc font-semibold">
                    <li>Tenaga Tukang Profesional</li>
                    <li>Harga Flat Transparan</li>
                    <li>Tanpa Minimum Order</li>
                  </ul>
                </div>

                <!-- Action Button -->
                <div class="mt-8">
                  <button
                    @click="navigateToTukangHarianDetail"
                    class="w-full bg-white hover:bg-slate-100 text-red-600 font-extrabold py-3.5 px-6 rounded-full transition-all duration-300 border-none cursor-pointer shadow-md hover:shadow-lg text-center block text-sm focus:outline-none animate-pulse-subtle"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>

              <!-- Tampilan Standar (Putih dengan Gambar) -->
              <div v-else key="standard" class="flex flex-col justify-between h-full flex-1">
                <div class="p-5 pb-0">
                  <div
                    class="relative h-[160px] sm:h-[200px] w-full rounded-2xl overflow-hidden mb-4"
                  >
                    <img
                      src="images/harian.png"
                      alt="Tukang Harian"
                      class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div class="text-center px-2">
                    <h3
                      class="font-heading font-extrabold text-lg sm:text-xl text-slate-900 mb-2.5"
                    >
                      Tukang Harian
                    </h3>
                    <p class="text-slate-600 text-sm leading-relaxed">
                      Agra menyediakan solusi perbaikan rumah terencana oleh tenaga tukang
                      berpengalaman agar kamu dan keluarga dapat hidup nyaman.
                    </p>
                  </div>
                </div>
                <div class="p-5 pt-3 text-center">
                  <button
                    @click="showTukangHarianInCard = true"
                    class="inline-block bg-red-600 hover:bg-red-700 text-white border border-transparent font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none shadow-sm hover:shadow-md"
                  >
                    Selengkapnya
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Aneka Solusi Bangunan Section -->
    <section id="aneka-solusi" ref="anekaSolusiRef" class="py-20 overflow-hidden relative">
      <div class="max-w-5xl mx-auto px-6 md:px-12">
        <div
          class="bg-gradient-to-br from-red-900 via-red-800 to-red-900 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-10">
            <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern
                  id="triangle-pattern"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <polygon points="10,0 20,20 0,20" fill="white" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#triangle-pattern)" />
            </svg>
          </div>

          <div class="relative z-10">
            <div class="text-center mb-16">
              <h2
                :class="[
                  'text-3xl sm:text-4xl font-extrabold text-white leading-tight',
                  anekaSolusiVisible ? 'animate-fade-in-up' : '',
                ]"
                style="animation-delay: 0ms"
              >
                Aneka Solusi untuk Masalah Bangunan
              </h2>
              <div class="mt-8">
                <button
                  onclick="
                    window.open(
                      'https://api.whatsapp.com/send?phone=6285695660902&text=Halo%20Agra%20Abhinaya%20Perkasa,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20konstruksi/renovasi.',
                      '_blank',
                    )
                  "
                  :class="[
                    'inline-flex items-center gap-2 !bg-white hover:!bg-[#0B192C] !text-red-600 hover:!text-white !font-extrabold !py-3 !px-8 !rounded-full !transition-all !duration-300 !shadow-lg hover:!shadow-xl hover:!scale-105 !no-underline group !cursor-pointer border-0',
                    anekaSolusiVisible ? 'animate-fade-in-up' : '',
                  ]"
                  style="animation-delay: 100ms"
                >
                  <svg
                    class="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.472 4.97 1.473 5.466 0 9.911-4.45 9.916-9.925.002-2.653-1.03-5.147-2.908-7.027-1.879-1.879-4.381-2.914-7.036-2.915-5.474 0-9.922 4.451-9.926 9.929-.001 1.77.472 3.5 1.367 5.034l-1.01 3.693 3.793-.993zm11.233-7.518c-.3-.152-1.773-.875-2.047-.975-.274-.1-.474-.15-.674.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.264-.467-2.408-1.487-.889-.793-1.49-1.77-1.665-2.07-.175-.3-.019-.462.13-.611.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.491-.51-.674-.519-.174-.009-.373-.01-.572-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.309 1.272.494 1.707.633.717.228 1.368.196 1.883.119.574-.085 1.773-.725 2.022-1.425.249-.7.249-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"
                    />
                  </svg>
                  <span>Konsultasikan Kebutuhanmu</span>
                </button>
              </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 !text-slate-800">
              <!-- Item 1: Kebocoran -->
              <div
                :class="[
                  'bg-white rounded-3xl p-6 shadow-lg hover:shadow-blue-200/60 hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.03] relative overflow-hidden group cursor-pointer transition-all duration-700',
                  anekaSolusiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
                ]"
                style="transition-delay: 0ms"
              >
                <div
                  class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-70"
                ></div>
                <div class="relative z-10">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  >
                    <q-icon
                      name="plumbing"
                      size="28px"
                      class="text-white"
                    />
                  </div>
                  <h3
                    class="text-base font-extrabold text-slate-800 mb-2"
                  >
                    Kebocoran
                  </h3>
                  <p
                    class="text-sm text-slate-600"
                  >
                    Jaga Rumah Bebas Bocor
                  </p>
                </div>
                <div class="absolute bottom-0 left-0 w-full h-12 opacity-20">
                  <div class="flex flex-wrap gap-2 p-3">
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <!-- Item 2: Cat -->
              <div
                :class="[
                  'bg-white rounded-3xl p-6 shadow-lg hover:shadow-red-200/60 hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.03] relative overflow-hidden group cursor-pointer transition-all duration-700',
                  anekaSolusiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
                ]"
                style="transition-delay: 80ms"
              >
                <div
                  class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-50 to-transparent rounded-bl-full opacity-70"
                ></div>
                <div class="relative z-10">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  >
                    <q-icon
                      name="format_paint"
                      size="28px"
                      class="text-white"
                    />
                  </div>
                  <h3
                    class="text-base font-extrabold text-slate-800 mb-2"
                  >
                    Cat
                  </h3>
                  <p
                    class="text-sm text-slate-600"
                  >
                    Warnai Rumahmu
                  </p>
                </div>
                <div class="absolute bottom-0 left-0 w-full h-12 opacity-20">
                  <div class="flex flex-wrap gap-2 p-3">
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <!-- Item 3: Keramik -->
              <div
                :class="[
                  'bg-white rounded-3xl p-6 shadow-lg hover:shadow-orange-200/60 hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.03] relative overflow-hidden group cursor-pointer transition-all duration-700',
                  anekaSolusiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
                ]"
                style="transition-delay: 160ms"
              >
                <div
                  class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-50 to-transparent rounded-bl-full opacity-70"
                ></div>
                <div class="relative z-10">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  >
                    <q-icon
                      name="grid_view"
                      size="28px"
                      class="text-white"
                    />
                  </div>
                  <h3
                    class="text-base font-extrabold text-slate-800 mb-2"
                  >
                    Keramik
                  </h3>
                  <p
                    class="text-sm text-slate-600"
                  >
                    Percantik Lantai dan Dindingmu
                  </p>
                </div>
                <div class="absolute bottom-0 left-0 w-full h-12 opacity-20">
                  <div class="flex flex-wrap gap-2 p-3">
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <!-- Item 4: Listrik -->
              <div
                :class="[
                  'bg-white rounded-3xl p-6 shadow-lg hover:shadow-green-200/60 hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.03] relative overflow-hidden group cursor-pointer transition-all duration-700',
                  anekaSolusiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
                ]"
                style="transition-delay: 240ms"
              >
                <div
                  class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-50 to-transparent rounded-bl-full opacity-70"
                ></div>
                <div class="relative z-10">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  >
                    <q-icon
                      name="electrical_services"
                      size="28px"
                      class="text-white"
                    />
                  </div>
                  <h3
                    class="text-base font-extrabold text-slate-800 mb-2"
                  >
                    Listrik
                  </h3>
                  <p
                    class="text-sm text-slate-600"
                  >
                    Rumah Terang, Hati Senang
                  </p>
                </div>
                <div class="absolute bottom-0 left-0 w-full h-12 opacity-20">
                  <div class="flex flex-wrap gap-2 p-3">
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <!-- Item 5: Pipa -->
              <div
                :class="[
                  'bg-white rounded-3xl p-6 shadow-lg hover:shadow-cyan-200/60 hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.03] relative overflow-hidden group cursor-pointer transition-all duration-700',
                  anekaSolusiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
                ]"
                style="transition-delay: 80ms"
              >
                <div
                  class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-50 to-transparent rounded-bl-full opacity-70"
                ></div>
                <div class="relative z-10">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  >
                    <q-icon
                      name="water"
                      size="28px"
                      class="text-white"
                    />
                  </div>
                  <h3
                    class="text-base font-extrabold text-slate-800 mb-2"
                  >
                    Pipa
                  </h3>
                  <p
                    class="text-sm text-slate-600"
                  >
                    Air Mengalir Lancar
                  </p>
                </div>
                <div class="absolute bottom-0 left-0 w-full h-12 opacity-20">
                  <div class="flex flex-wrap gap-2 p-3">
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <!-- Item 6: Toilet -->
              <div
                :class="[
                  'bg-white rounded-3xl p-6 shadow-lg hover:shadow-teal-200/60 hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.03] relative overflow-hidden group cursor-pointer transition-all duration-700',
                  anekaSolusiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
                ]"
                style="transition-delay: 160ms"
              >
                <div
                  class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-50 to-transparent rounded-bl-full opacity-70"
                ></div>
                <div class="relative z-10">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  >
                    <q-icon
                      name="bathroom"
                      size="28px"
                      class="text-white"
                    />
                  </div>
                  <h3
                    class="text-base font-extrabold text-slate-800 mb-2"
                  >
                    Toilet
                  </h3>
                  <p
                    class="text-sm text-slate-600"
                  >
                    Kamar Mandi Bersih dan Nyaman
                  </p>
                </div>
                <div class="absolute bottom-0 left-0 w-full h-12 opacity-20">
                  <div class="flex flex-wrap gap-2 p-3">
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <!-- Item 7: Konsultan -->
              <div
                :class="[
                  'bg-white rounded-3xl p-6 shadow-lg hover:shadow-amber-200/60 hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.03] relative overflow-hidden group cursor-pointer transition-all duration-700',
                  anekaSolusiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
                ]"
                style="transition-delay: 240ms"
              >
                <div
                  class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-50 to-transparent rounded-bl-full opacity-70"
                ></div>
                <div class="relative z-10">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  >
                    <q-icon
                      name="support_agent"
                      size="28px"
                      class="text-white"
                    />
                  </div>
                  <h3
                    class="text-base font-extrabold text-slate-800 mb-2"
                  >
                    Konsultan
                  </h3>
                  <p
                    class="text-sm text-slate-600"
                  >
                    Bantu Rencanakan Proyekmu
                  </p>
                </div>
                <div class="absolute bottom-0 left-0 w-full h-12 opacity-20">
                  <div class="flex flex-wrap gap-2 p-3">
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <!-- Item 8: Plafon -->
              <div
                :class="[
                  'bg-white rounded-3xl p-6 shadow-lg hover:shadow-indigo-200/60 hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.03] relative overflow-hidden group cursor-pointer transition-all duration-700',
                  anekaSolusiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
                ]"
                style="transition-delay: 320ms"
              >
                <div
                  class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-50 to-transparent rounded-bl-full opacity-70"
                ></div>
                <div class="relative z-10">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  >
                    <q-icon
                      name="roofing"
                      size="28px"
                      class="text-white"
                    />
                  </div>
                  <h3
                    class="text-base font-extrabold text-slate-800 mb-2"
                  >
                    Plafon
                  </h3>
                  <p
                    class="text-sm text-slate-600"
                  >
                    Kebutuhan Langit-langit Rumahmu
                  </p>
                </div>
                <div class="absolute bottom-0 left-0 w-full h-12 opacity-20">
                  <div class="flex flex-wrap gap-2 p-3">
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center mt-12">
              <a
                href="/tukang-harian"
                @click.prevent="router.push('/tukang-harian')"
                class="inline-block bg-white text-red-700 hover:text-red-800 font-extrabold py-3.5 px-10 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 no-underline"
              >
                Lihat Layanan Lainnya
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portofolio Section -->
    <section
      ref="portfolioRef"
      id="portofolio"
      class="py-24 bg-white border-t border-slate-100 relative overflow-hidden"
    >
      <!-- Subtle Red Accent Top Boundary line -->
      <div class="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-rose-600 opacity-60"></div>
      
      <div class="max-w-6xl mx-auto px-6 relative z-10">
        <div
          class="transition-all duration-1000 transform ease-out"
          :class="portfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
        >
          <!-- Section Title -->
          <div class="text-center max-w-3xl mx-auto mb-12">
            <p class="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">Portofolio Kami</p>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0B192C] leading-tight">
              Galeri Proyek & <span class="text-red-600">Konstruksi Terbaik</span>
            </h2>
            <p class="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto font-medium">
              Lihat hasil kerja nyata kami yang mengedepankan presisi struktur, estetika premium, dan kepuasan klien.
            </p>
          </div>

          <!-- Project Gallery Slider -->
          <div class="relative w-full overflow-visible mt-12">
            <!-- Left Floating Arrow Button -->
            <button
              v-show="canScrollLeft"
              @click="scrollPortfolioLeft"
              class="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full slider-nav-btn flex items-center justify-center shadow-lg cursor-pointer"
            >
              <q-icon name="chevron_left" size="24px" />
            </button>

            <!-- Right Floating Arrow Button -->
            <button
              v-show="canScrollRight"
              @click="scrollPortfolioRight"
              class="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full slider-nav-btn flex items-center justify-center shadow-lg cursor-pointer"
            >
              <q-icon name="chevron_right" size="24px" />
            </button>

            <!-- Scroll container -->
            <div
              ref="portfolioScrollContainer"
              @scroll="updateScrollState"
              class="flex flex-row flex-nowrap gap-6 overflow-x-auto scroll-smooth pb-8 px-4 scrollbar-none snap-x snap-mandatory"
            >
              <div
                v-for="project in portfolioItems"
                :key="project.id"
                class="flex-shrink-0 w-[290px] sm:w-[330px] snap-start bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                @click="router.push('/portofolio/' + project.id)"
              >
                <!-- Image Container -->
                <div class="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    :src="project.image"
                    :alt="project.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <!-- Card Content -->
                <div class="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      <q-icon name="place" size="14px" class="mr-1 text-red-500" />
                      <span>{{ project.location }}</span>
                    </div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#0B192C] leading-snug mb-2 group-hover:text-red-600 transition-colors duration-300 min-h-[2.85em] line-clamp-2">
                      {{ project.title }}
                    </h3>
                    <p class="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 font-medium min-h-[4.5em] line-clamp-3">
                      {{ project.desc }}
                    </p>
                  </div>
                  <div class="text-xs font-bold text-red-600">
                    <span>Lihat Selengkapnya</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Qualified Artisans Section (Tukang Terkualifikasi) -->
    <section
      ref="artisansRef"
      id="tukang-terkualifikasi"
      class="py-20 bg-slate-50 border-t border-slate-100 relative overflow-hidden"
    >
      <div class="max-w-6xl mx-auto px-6 relative z-10">
        <div
          class="transition-all duration-1000 transform ease-out"
          :class="artisansVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
        >
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Left: Beautiful Image Slider -->
            <div class="relative">
              <q-carousel
                v-model="artisansSlide"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                navigation
                arrows
                infinite
                height="380px"
                class="rounded-3xl shadow-2xl border border-slate-100 overflow-hidden bg-white artisan-carousel"
              >
                <q-carousel-slide name="slide1" img-src="images/proses-ketat.png" />
                <q-carousel-slide name="slide2" img-src="images/hasil-rapih.png" />
                <q-carousel-slide name="slide3" img-src="images/tukang-sertifikat.png" />
              </q-carousel>
            </div>

            <!-- Right: Detailed Information -->
            <div class="space-y-6 text-left">
              <div>
                <p class="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">
                  Tenaga Ahli Mitra Agra
                </p>
                <h2
                  class="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight m-0"
                >
                  Tukang Terkualifikasi & Berpengalaman
                </h2>
                <p class="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-medium">
                  Semua proyek pembangunan, renovasi, hingga perbaikan kecil harian dikerjakan oleh
                  mitra tukang terlatih PT Agra Abhinaya Perkasa yang memiliki keahlian
                  tersertifikasi di bidangnya masing-masing.
                </p>
              </div>

              <!-- List of Core Values -->
              <div class="space-y-4 pt-2">
                <div class="flex flex-row flex-nowrap items-start space-x-3.5">
                  <div
                    class="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br from-red-600 to-red-800 text-white shadow-sm mt-0.5"
                  >
                    <svg
                      class="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-base font-extrabold text-slate-900 m-0">
                      Proses Seleksi Ketat
                    </h3>
                    <p class="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed font-medium">
                      Tukang disaring ketat berdasarkan kualitas pengerjaan, kejujuran, dan komitmen
                      waktu.
                    </p>
                  </div>
                </div>

                <div class="flex flex-row flex-nowrap items-start space-x-3.5">
                  <div
                    class="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br from-red-600 to-red-800 text-white shadow-sm mt-0.5"
                  >
                    <svg
                      class="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-base font-extrabold text-slate-900 m-0">
                      Sertifikasi & Keahlian Khusus
                    </h3>
                    <p class="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed font-medium">
                      Memiliki tukang spesialis untuk pengerjaan finishing, batu alam, konstruksi
                      beton, pipa, dan listrik.
                    </p>
                  </div>
                </div>

                <div class="flex flex-row flex-nowrap items-start space-x-3.5">
                  <div
                    class="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br from-red-600 to-red-800 text-white shadow-sm mt-0.5"
                  >
                    <svg
                      class="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-base font-extrabold text-slate-900 m-0">
                      Hasil Kerja Rapi & Bergaransi
                    </h3>
                    <p class="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed font-medium">
                      Jaminan perbaikan ulang gratis apabila terjadi kendala pengerjaan yang kurang
                      memuaskan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kontak Section -->
    <section
      ref="contactRef"
      id="kontak"
      class="py-24 bg-white border-t border-slate-100 relative overflow-hidden"
    >
      <!-- Decorative Background Elements (Light Theme) -->
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.03),transparent_50%)] pointer-events-none"
      ></div>

      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div
          class="transition-all duration-1000 transform ease-out"
          :class="contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
        >
          <!-- Section Header -->
          <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="text-xs font-bold tracking-widest text-red-600 uppercase"
              >Kontak Kami</span
            >
            <h2
              class="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight"
            >
              Hubungi Kami & Konsultasikan Proyek Anda
            </h2>
            <p class="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
              Tim ahli kami siap melayani pertanyaan, melakukan survei lokasi, dan memberikan
              estimasi terbaik untuk kebutuhan konstruksi Anda.
            </p>
          </div>

          <!-- Content Grid (Compact Cards) -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto items-stretch">
            <!-- Card 1: WhatsApp -->
            <a
              href="https://api.whatsapp.com/send/?phone=6285695660902&text=Halo%20Agra%20Abhinaya%20Perkasa%2C%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20konstruksi/renovasi."
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center space-x-3.5 bg-gradient-to-r from-red-600 to-red-800 border border-red-700/30 rounded-xl p-3.5 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-red-600/10 transition-all duration-300 no-underline"
            >
              <div
                class="w-11 h-11 bg-white text-emerald-600 border border-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.472 4.97 1.473 5.466 0 9.911-4.45 9.916-9.925.002-2.653-1.03-5.147-2.908-7.027-1.879-1.879-4.381-2.914-7.036-2.915-5.474 0-9.922 4.451-9.926 9.929-.001 1.77.472 3.5 1.367 5.034l-1.01 3.693 3.793-.993zm11.233-7.518c-.3-.152-1.773-.875-2.047-.975-.274-.1-.474-.15-.674.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.264-.467-2.408-1.487-.889-.793-1.49-1.77-1.665-2.07-.175-.3-.019-.462.13-.611.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.491-.51-.674-.519-.174-.009-.373-.01-.572-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.309 1.272.494 1.707.633.717.228 1.368.196 1.883.119.574-.085 1.773-.725 2.022-1.425.249-.7.249-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"
                  />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <span class="block text-xs sm:text-sm font-bold text-white truncate"
                  >+62 856-9566-0902</span
                >
              </div>
            </a>

            <!-- Card 2: Email -->
            <a
              href="mailto:agraabhinayaadm@gmail.com"
              class="group flex items-center space-x-3.5 bg-gradient-to-r from-red-600 to-red-800 border border-red-700/30 rounded-xl p-3.5 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-red-600/10 transition-all duration-300 no-underline"
            >
              <div
                class="w-11 h-11 bg-white text-blue-600 border border-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <span
                  class="block text-[11px] sm:text-xs xl:text-sm font-bold text-white break-all leading-tight"
                  >agraabhinayaadm@gmail.com</span
                >
              </div>
            </a>

            <!-- Card 3: Jam Operasional -->
            <div
              class="group flex items-center space-x-3.5 bg-gradient-to-r from-red-600 to-red-800 border border-red-700/30 rounded-xl p-3.5 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-red-600/10 transition-all duration-300"
            >
              <div
                class="w-11 h-11 bg-white text-amber-600 border border-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <span class="block text-xs sm:text-sm font-bold text-white truncate"
                  >Senin-Sabtu (08:00-17:00)</span
                >
              </div>
            </div>
          </div>

          <!-- Maps Embed Container -->
          <div
            class="mt-8 max-w-5xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <!-- Map Iframe -->
            <div class="w-full h-[320px] sm:h-[400px] bg-slate-100 relative">
              <iframe
                src="https://maps.google.com/maps?q=AGRA%20ABHINAYA%20PERKASA%2C%20Jl.%20Tegal%20Danas%20No.18a%2C%20Sertajaya%2C%20Cikarang%20Timur&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Media Sosial Section -->
    <section
      ref="socialRef"
      id="sosial-media"
      class="py-24 bg-white border-t border-slate-100 relative overflow-hidden"
    >
      <!-- Layered Wavy Background (Filled with Red-Navy Gradients) -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <!-- Wave Layer 1 (Bottom Wave with Definitions) -->
        <svg
          class="absolute bottom-0 left-0 w-full h-[55%] pointer-events-none"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#dc2626" stop-opacity="0.06" />
              <stop offset="50%" stop-color="#b91c1c" stop-opacity="0.07" />
              <stop offset="100%" stop-color="#991b1b" stop-opacity="0.08" />
            </linearGradient>
            <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#dc2626" stop-opacity="0.10" />
              <stop offset="50%" stop-color="#b91c1c" stop-opacity="0.12" />
              <stop offset="100%" stop-color="#991b1b" stop-opacity="0.14" />
            </linearGradient>
            <linearGradient id="wave-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#dc2626" stop-opacity="0.16" />
              <stop offset="50%" stop-color="#b91c1c" stop-opacity="0.19" />
              <stop offset="100%" stop-color="#991b1b" stop-opacity="0.22" />
            </linearGradient>
          </defs>
          <path
            fill="url(#wave-grad-1)"
            d="M0,96L120,128C240,160,480,224,720,240C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <!-- Wave Layer 2 (Middle Wave) -->
        <svg
          class="absolute bottom-0 left-0 w-full h-[43%] pointer-events-none"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#wave-grad-2)"
            d="M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <!-- Wave Layer 3 (Top Wave Line) -->
        <svg
          class="absolute bottom-0 left-0 w-full h-[30%] pointer-events-none"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#wave-grad-3)"
            d="M0,256L120,245.3C240,235,480,213,720,218.7C960,224,1200,256,1320,272L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div
          class="transition-all duration-1000 transform ease-out"
          :class="socialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
        >
          <!-- Section Header -->
          <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="text-xs font-bold tracking-widest text-red-600 uppercase">Ikuti Kami</span>
            <h2
              class="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight"
            >
              Media Sosial Agra
            </h2>
            <p class="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
              Ikuti akun resmi kami untuk melihat dokumentasi proyek, tips konstruksi, dan pembaruan
              seputar pekerjaan kami.
            </p>
          </div>

          <!-- Social Media Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">
            <!-- Instagram Card -->
            <a
              href="https://www.instagram.com/ptagraabhinayaperkasa/"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex flex-col justify-between bg-red-50/40 border border-red-100 rounded-2xl p-4 sm:p-5 hover:border-red-500/60 hover:bg-red-50 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 no-underline text-left"
            >
              <div class="flex items-center space-x-3.5">
                <div
                  class="w-10 h-10 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                    />
                  </svg>
                </div>
                <div class="flex flex-col justify-center">
                  <div
                    class="text-base font-bold text-slate-800 leading-tight group-hover:text-red-600 transition-colors duration-200"
                  >
                    Instagram
                  </div>
                  <div class="text-xs font-semibold text-slate-500 mt-0.5 leading-tight">
                    @ptagraabhinayaperkasa
                  </div>
                </div>
              </div>
              <div
                class="mt-4 text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform duration-250 flex items-center space-x-1"
              >
                <span>Kunjungi Instagram</span>
                <span>&rarr;</span>
              </div>
            </a>

            <!-- TikTok Card -->
            <a
              href="https://www.tiktok.com/@agraabhinayaperkasa"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex flex-col justify-between bg-red-50/40 border border-red-100 rounded-2xl p-4 sm:p-5 hover:border-red-500/60 hover:bg-red-50 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 no-underline text-left"
            >
              <div class="flex items-center space-x-3.5">
                <div
                  class="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .8.11v-3.5a6.93 6.93 0 0 0-1.9-.26 6.89 6.89 0 1 0 6.89 6.89V8.58a8.27 8.27 0 0 0 5.48 2.05V7.18a4.82 4.82 0 0 1-1.16-.49z"
                    />
                  </svg>
                </div>
                <div class="flex flex-col justify-center">
                  <div
                    class="text-base font-bold text-slate-800 leading-tight group-hover:text-red-600 transition-colors duration-200"
                  >
                    TikTok
                  </div>
                  <div class="text-xs font-semibold text-slate-500 mt-0.5 leading-tight">
                    @agraabhinayaperkasa
                  </div>
                </div>
              </div>
              <div
                class="mt-4 text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform duration-250 flex items-center space-x-1"
              >
                <span>Kunjungi TikTok</span>
                <span>&rarr;</span>
              </div>
            </a>

            <!-- Facebook Card -->
            <a
              href="https://www.facebook.com/profile.php?id=61590675123305"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex flex-col justify-between bg-red-50/40 border border-red-100 rounded-2xl p-4 sm:p-5 hover:border-red-500/60 hover:bg-red-50 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 no-underline text-left"
            >
              <div class="flex items-center space-x-3.5">
                <div
                  class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                </div>
                <div class="flex flex-col justify-center">
                  <div
                    class="text-base font-bold text-slate-800 leading-tight group-hover:text-red-600 transition-colors duration-200"
                  >
                    Facebook
                  </div>
                  <div class="text-xs font-semibold text-slate-500 mt-0.5 leading-tight">
                    PT Agra Abhinaya Perkasa
                  </div>
                </div>
              </div>
              <div
                class="mt-4 text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform duration-250 flex items-center space-x-1"
              >
                <span>Kunjungi Facebook</span>
                <span>&rarr;</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const activeSlide = ref('konstruksi')
const expandedStat = ref(0)

const statsVisible = ref(false)
const statsRef = ref(null)
const visitorCount = ref(0)
const hasAnimatedCount = ref(false)

const startVisitorCounter = () => {
  if (hasAnimatedCount.value) return
  hasAnimatedCount.value = true
  
  const target = 50
  const duration = 1500 // 1.5 seconds
  const startTime = performance.now()
  
  const animate = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Ease out quad animation
    const easeProgress = progress * (2 - progress)
    
    visitorCount.value = Math.floor(easeProgress * target)
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      visitorCount.value = target
    }
  }
  
  requestAnimationFrame(animate)
}

watch(
  () => statsVisible.value,
  (visible) => {
    if (visible) {
      startVisitorCounter()
    }
  }
)
const sectionVisible = ref(false)
const sectionRef = ref(null)
const servicesVisible = ref(false)
const servicesRef = ref(null)
const visiMisiVisible = ref(false)
const visiMisiRef = ref(null)
const choosingUsVisible = ref(false)
const choosingUsRef = ref(null)
const contactVisible = ref(false)
const contactRef = ref(null)
const socialVisible = ref(false)
const socialRef = ref(null)
const anekaSolusiVisible = ref(false)
const anekaSolusiRef = ref(null)

const portfolioVisible = ref(false)
const portfolioRef = ref(null)

const officeVisible = ref(false)
const officeRef = ref(null)
const officeIndex = ref(0)

const officeSlides = [
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

const currentOfficeSlide = computed(() => officeSlides[officeIndex.value])

const prevOfficeSlide = () => {
  officeIndex.value = (officeIndex.value - 1 + officeSlides.length) % officeSlides.length
}

const nextOfficeSlide = () => {
  officeIndex.value = (officeIndex.value + 1) % officeSlides.length
}

import { portfolioItems } from 'src/data/portfolio.js'

const portfolioScrollContainer = ref(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)

const scrollPortfolioLeft = () => {
  if (portfolioScrollContainer.value) {
    portfolioScrollContainer.value.scrollBy({ left: -340, behavior: 'smooth' })
  }
}
const scrollPortfolioRight = () => {
  if (portfolioScrollContainer.value) {
    portfolioScrollContainer.value.scrollBy({ left: 340, behavior: 'smooth' })
  }
}
const updateScrollState = () => {
  if (portfolioScrollContainer.value) {
    canScrollLeft.value = portfolioScrollContainer.value.scrollLeft > 10
    const maxScroll = portfolioScrollContainer.value.scrollWidth - portfolioScrollContainer.value.clientWidth
    canScrollRight.value = portfolioScrollContainer.value.scrollLeft < maxScroll - 10
  }
}

const showKonstruksiInCard = ref(false)
const showBoronganInCard = ref(false)
const showTukangHarianInCard = ref(false)

const artisansSlide = ref('slide1')

const artisansVisible = ref(false)
const artisansRef = ref(null)

const navigateToDetail = () => {
  showBoronganInCard.value = false
  router.push('/borongan')
}

const navigateToKonstruksiDetail = () => {
  showKonstruksiInCard.value = false
  router.push('/konstruksi')
}

const navigateToTukangHarianDetail = () => {
  showTukangHarianInCard.value = false
  router.push('/tukang-harian')
}

const toggleStat = (index) => {
  expandedStat.value = expandedStat.value === index ? null : index
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'profil-perusahaan') {
            sectionVisible.value = true
          } else if (entry.target.id === 'layanan') {
            servicesVisible.value = true
          } else if (entry.target.id === 'tukang-terkualifikasi') {
            artisansVisible.value = true
          } else if (entry.target.id === 'visi-misi') {
            visiMisiVisible.value = true
          } else if (entry.target.id === 'mengapa-memilih-kami') {
            choosingUsVisible.value = true
          } else if (entry.target.id === 'kontak') {
            contactVisible.value = true
          } else if (entry.target.id === 'sosial-media') {
            socialVisible.value = true
          } else if (entry.target.id === 'aneka-solusi') {
            anekaSolusiVisible.value = true
          } else if (entry.target.id === 'portofolio') {
            portfolioVisible.value = true
          } else if (entry.target.id === 'kantor-kami') {
            officeVisible.value = true
          } else if (entry.target.id === 'statistik-kunjungan') {
            statsVisible.value = true
          }
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 },
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
  if (servicesRef.value) {
    observer.observe(servicesRef.value)
  }
  if (artisansRef.value) {
    observer.observe(artisansRef.value)
  }
  if (visiMisiRef.value) {
    observer.observe(visiMisiRef.value)
  }
  if (choosingUsRef.value) {
    observer.observe(choosingUsRef.value)
  }
  if (contactRef.value) {
    observer.observe(contactRef.value)
  }
  if (socialRef.value) {
    observer.observe(socialRef.value)
  }
  if (anekaSolusiRef.value) {
    observer.observe(anekaSolusiRef.value)
  }
  if (portfolioRef.value) {
    observer.observe(portfolioRef.value)
  }
  if (officeRef.value) {
    observer.observe(officeRef.value)
  }
  if (statsRef.value) {
    observer.observe(statsRef.value)
  }

  setTimeout(() => {
    updateScrollState()
  }, 300)
})
</script>

<style scoped>
/* Menyelaraskan teks agar selalu terpusat vertikal dan horizontal di dalam slide */
:deep(.q-carousel__slide) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.artisan-carousel :deep(.q-carousel__prev-arrow .q-btn),
.artisan-carousel :deep(.q-carousel__next-arrow .q-btn),
.office-carousel :deep(.q-carousel__prev-arrow .q-btn),
.office-carousel :deep(.q-carousel__next-arrow .q-btn) {
  background-color: #ffffff !important;
  color: #0b192c !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12) !important;
  transition: all 0.3s ease;
}

.artisan-carousel :deep(.q-carousel__prev-arrow .q-btn:hover),
.artisan-carousel :deep(.q-carousel__next-arrow .q-btn:hover),
.office-carousel :deep(.q-carousel__prev-arrow .q-btn:hover),
.office-carousel :deep(.q-carousel__next-arrow .q-btn:hover) {
  background-color: #f8fafc !important;
  transform: scale(1.05);
}

.artisan-carousel :deep(.q-carousel__navigation .q-btn),
.office-carousel :deep(.q-carousel__navigation .q-btn) {
  color: #0b192c !important;
}

/* Animasi melayang gelembung kata maskot */
@keyframes bubble-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-bubble-float {
  animation: bubble-float 3s ease-in-out infinite;
}

/* Animasi marquee / ticker logo berjalan */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 35s linear infinite;
}

/* Animasi scale-up untuk modal */
@keyframes scale-up {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-scale-up {
  animation: scale-up 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Fade transition for in-card switch */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Subtle pulse animation for Lihat Detail button */
@keyframes pulse-subtle {
  0%,
  100% {
    transform: scale(1);
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  50% {
    transform: scale(1.02);
    box-shadow:
      0 10px 15px -3px rgba(220, 38, 38, 0.2),
      0 4px 6px -2px rgba(220, 38, 38, 0.1);
  }
}

.animate-pulse-subtle {
  animation: pulse-subtle 2s infinite ease-in-out;
}

/* Animasi fade-in-up untuk Aneka Solusi cards */
@keyframes fade-in-up {
  0% {
    transform: translateY(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.aneka-solusi-card {
  opacity: 0;
  transform: translateY(40px);
}

.aneka-solusi-card.animate-fade-in-up {
  opacity: 0;
  animation: fade-in-up 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Slowing down all scroll-triggered entrance transitions to match BoronganPage (2.2s duration) */
.transition-all.duration-1000,
.transition.duration-1000,
[class*="duration-1000"] {
  transition-duration: 2.2s !important;
}

/* Update delays to stagger more noticeably */
.delay-\[75ms\] {
  transition-delay: 150ms !important;
}
.delay-\[100ms\] {
  transition-delay: 200ms !important;
}
.delay-\[150ms\] {
  transition-delay: 300ms !important;
}
.delay-\[200ms\] {
  transition-delay: 400ms !important;
}
.delay-\[250ms\] {
  transition-delay: 500ms !important;
}
.delay-\[300ms\] {
  transition-delay: 600ms !important;
}
.delay-\[400ms\] {
  transition-delay: 800ms !important;
}
.delay-\[500ms\] {
  transition-delay: 1000ms !important;
}

/* Slow down Aneka Solusi entrance animation, but keep hover quick */
.grid > div[style*="transition-delay"] {
  transition: opacity 2.2s cubic-bezier(0.16, 1, 0.3, 1),
              transform 2.2s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.3s ease,
              background-color 0.3s ease,
              border-color 0.3s ease !important;
}

.grid > div[style*="transition-delay"]:hover {
  transition: opacity 0.3s ease,
              transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.3s ease,
              background-color 0.3s ease,
              border-color 0.3s ease !important;
  transition-delay: 0ms !important;
}

.grid > div[style="transition-delay: 80ms"] {
  transition-delay: 200ms !important;
}
.grid > div[style="transition-delay: 160ms"] {
  transition-delay: 400ms !important;
}
.grid > div[style="transition-delay: 240ms"] {
  transition-delay: 600ms !important;
}
.grid > div[style="transition-delay: 320ms"] {
  transition-delay: 800ms !important;
}

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
