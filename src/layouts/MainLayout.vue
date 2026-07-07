<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Navbar / Header -->
    <q-header
      class="bg-transparent text-white py-3 md:py-4 transition-all duration-300 pointer-events-none !overflow-visible"
    >
      <!-- Desktop Floating Navbar (visible only on desktop) -->
      <div 
        v-if="!isMobile"
        :class="[
          'flex max-w-6xl mx-auto px-6 py-2.5 rounded-full items-center justify-between transition-all duration-500 border shadow-lg w-[calc(100%-3rem)] pointer-events-auto',
          isScrolled 
            ? 'bg-slate-900/90 border-[#1E3E62]/40 shadow-xl backdrop-blur-md scale-[0.98]'
            : 'bg-slate-950/50 border-white/10 backdrop-blur-sm shadow-md'
        ]"
      >
        <!-- Left: Logo & Title -->
        <a href="/" class="flex items-center space-x-2.5 no-underline cursor-pointer">
          <img src="icons/favicon-128x128.png" alt="Agra Abhinaya Perkasa Logo" class="h-8 w-8 object-contain rounded-md border border-slate-700 bg-white p-0.5" />
          <span class="font-heading text-base md:text-lg font-extrabold tracking-tight flex items-center no-underline leading-none">
            <span class="text-white">AGRA</span>
            <span class="text-red-500 font-bold ml-2 text-xs sm:text-sm">ABHINAYA PERKASA</span>
          </span>
        </a>

        <!-- Middle: Navigation Items -->
        <div class="flex items-center space-x-5 text-xs sm:text-sm font-semibold">
          <a href="/" @click.prevent="navigateToAnchor('hero')" class="transition-colors duration-200 no-underline text-slate-200 hover:text-red-500">Beranda</a>
          <a href="/#profil-perusahaan" @click.prevent="navigateToAnchor('profil-perusahaan')" class="transition-colors duration-200 no-underline text-slate-200 hover:text-red-500">Tentang Kami</a>
          
          <!-- Dropdown Layanan (Quasar Native Teleported Menu) -->
          <div class="cursor-pointer text-slate-200 hover:text-red-500 font-semibold text-xs sm:text-sm py-2 flex items-center space-x-1">
            <span>Layanan</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

            <q-menu
              anchor="bottom middle"
              self="top middle"
              :offset="[0, 12]"
              transition-show="jump-down"
              transition-hide="jump-up"
              class="bg-slate-900/95 border border-[#1E3E62]/40 rounded-2xl shadow-xl backdrop-blur-md p-1.5 min-w-[170px]"
            >
              <q-list class="text-slate-200 min-w-[160px]">
                <q-item clickable v-close-popup to="/konstruksi" class="rounded-xl hover:bg-red-600/20 text-slate-200 hover:text-white transition-colors duration-150 py-2.5">
                  <q-item-section class="font-semibold text-xs sm:text-sm">Jasa Konstruksi</q-item-section>
                </q-item>
                <q-item clickable v-close-popup to="/borongan" class="rounded-xl hover:bg-red-600/20 text-slate-200 hover:text-white transition-colors duration-150 py-2.5">
                  <q-item-section class="font-semibold text-xs sm:text-sm">Jasa Borongan</q-item-section>
                </q-item>
                <q-item clickable v-close-popup to="/tukang-harian" class="rounded-xl hover:bg-red-600/20 text-slate-200 hover:text-white transition-colors duration-150 py-2.5">
                  <q-item-section class="font-semibold text-xs sm:text-sm">Tukang Harian</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </div>
          
          <a href="/#kontak" @click.prevent="navigateToAnchor('kontak')" class="transition-colors duration-200 no-underline text-slate-200 hover:text-red-500">Kontak</a>
        </div>

        <!-- Right: CTA Button (Order Sekarang style) -->
        <div>
          <a 
            href="https://api.whatsapp.com/send?phone=6285695660902&text=Halo%20Agra%20Abhinaya%20Perkasa%2C%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20konstruksi/renovasi."
            target="_blank"
            rel="noopener noreferrer"
            class="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-md no-underline block"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>

      <!-- Mobile Toolbar (visible only on mobile) -->
      <div v-if="isMobile" class="px-4 pt-4 pointer-events-auto">
        <div class="w-full bg-slate-200/90 backdrop-blur-md border border-white/40 shadow-lg rounded-2xl px-4 py-3.5 flex items-center justify-between text-slate-800 transition-all duration-300">
          <!-- Hamburger Menu Icon (Left) -->
          <button @click="toggleMobileMenu" class="bg-transparent border-none p-1 focus:outline-none hover:text-red-600 transition-colors duration-200 flex items-center justify-center cursor-pointer shadow-none">
            <svg class="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <!-- Logo & Brand (Center) -->
          <a href="/" class="flex items-center space-x-1.5 no-underline cursor-pointer">
            <img src="icons/favicon-128x128.png" alt="Agra Abhinaya Perkasa Logo" class="h-7 w-7 object-contain rounded-md" />
            <span class="font-heading text-lg font-black tracking-wider flex items-center no-underline leading-none">
              <span class="text-red-600">A</span>
              <span class="text-[#1E3E62]">A</span>
              <span class="text-[#1E3E62]">P</span>
            </span>
          </a>

          <!-- Phone CTA Icon (Right) -->
          <a href="tel:+6285695660902" class="p-1 text-red-600 hover:text-red-700 transition-colors duration-200 flex items-center justify-center">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>
        </div>
      </div>
    </q-header>

    <!-- Sidebar Drawer (Mobile) -->
    <q-drawer
      v-model="mobileMenuOpen"
      side="left"
      overlay
      behavior="mobile"
      class="bg-slate-900 text-white p-6 pointer-events-auto"
    >
        <div class="flex flex-col h-full justify-between">
          <!-- Top Area: Logo & Close Button -->
          <div class="space-y-8">
            <div class="flex items-center justify-between border-b border-slate-800 pb-5">
              <div class="flex items-center space-x-2.5">
                <img src="icons/favicon-128x128.png" alt="Logo" class="h-9 w-9 object-contain bg-white p-1 rounded-lg border border-white shadow-[0_0_15px_rgba(255,255,255,0.75)]" />
                <div class="font-heading flex flex-col leading-none">
                  <span class="text-white font-extrabold text-base tracking-tight">AGRA ABHINAYA</span>
                  <span class="text-red-500 font-bold text-xs tracking-wider mt-1">PERKASA</span>
                </div>
              </div>
              <!-- Close Button -->
              <button @click="closeMobileMenu" class="bg-transparent border-none text-slate-400 hover:text-white cursor-pointer focus:outline-none flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Navigation Links List -->
            <nav class="flex flex-col space-y-4">
              <a href="/" @click.prevent="navigateToAnchor('hero')" class="text-base font-semibold text-slate-300 hover:text-red-500 py-2.5 px-4 rounded-xl hover:bg-slate-800/50 transition-all duration-200 no-underline block">Beranda</a>
              <a href="/#profil-perusahaan" @click.prevent="navigateToAnchor('profil-perusahaan')" class="text-base font-semibold text-slate-300 hover:text-red-500 py-2.5 px-4 rounded-xl hover:bg-slate-800/50 transition-all duration-200 no-underline block">Tentang Kami</a>
              
              <!-- Interactive Accordion for Layanan Mobile -->
              <div class="space-y-1">
                <div 
                  @click="mobileLayananOpen = !mobileLayananOpen" 
                  class="flex items-center justify-between text-base font-semibold text-slate-300 hover:text-red-500 py-2.5 px-4 rounded-xl hover:bg-slate-800/50 transition-all duration-200 cursor-pointer select-none"
                >
                  <span>Layanan</span>
                  <svg 
                    :class="['w-4 h-4 transition-transform duration-250', mobileLayananOpen ? 'rotate-180 text-red-500' : 'text-slate-400']" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2.5" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>

                <!-- Dropdown items wrapper -->
                <div 
                  class="transition-all duration-300 overflow-hidden pl-4 space-y-1.5"
                  :style="{ maxHeight: mobileLayananOpen ? '180px' : '0px', opacity: mobileLayananOpen ? '1' : '0' }"
                >
                  <a 
                    href="/konstruksi" 
                    @click.prevent="router.push('/konstruksi'); closeMobileMenu()" 
                    class="pl-6 text-base font-semibold text-slate-400 hover:text-red-500 py-2 rounded-xl hover:bg-slate-800/30 transition-all duration-200 no-underline block"
                  >
                    Jasa Konstruksi
                  </a>
                  <a 
                    href="/borongan" 
                    @click.prevent="router.push('/borongan'); closeMobileMenu()" 
                    class="pl-6 text-base font-semibold text-slate-400 hover:text-red-500 py-2 rounded-xl hover:bg-slate-800/30 transition-all duration-200 no-underline block"
                  >
                    Jasa Borongan
                  </a>
                  <a 
                    href="/tukang-harian" 
                    @click.prevent="router.push('/tukang-harian'); closeMobileMenu()" 
                    class="pl-6 text-base font-semibold text-slate-400 hover:text-red-500 py-2 rounded-xl hover:bg-slate-800/30 transition-all duration-200 no-underline block"
                  >
                    Tukang Harian
                  </a>
                </div>
              </div>

              <a href="/#kontak" @click.prevent="navigateToAnchor('kontak')" class="text-base font-semibold text-slate-300 hover:text-red-500 py-2.5 px-4 rounded-xl hover:bg-slate-800/50 transition-all duration-200 no-underline block">Kontak</a>
            </nav>
          </div>

          <!-- Bottom Area: CTA -->
          <div class="border-t border-slate-800 pt-6">
            <a
              href="https://api.whatsapp.com/send/?phone=6285695660902&text=Halo%20Agra%20Abhinaya%20Perkasa%2C%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20konstruksi/renovasi."
              target="_blank"
              rel="noopener noreferrer"
              class="block bg-red-600 hover:bg-red-700 text-white text-center py-3.5 rounded-xl font-bold text-sm transition-colors duration-200 no-underline shadow-md"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </q-drawer>

    <!-- Page Container -->
    <q-page-container class="!pt-0">
      <router-view />

      <!-- Footer Section -->
      <footer class="bg-white text-slate-600 py-16 border-t border-slate-200/80 font-sans relative overflow-hidden">
        <!-- Subtle Background Glow -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.02),transparent_60%)] pointer-events-none"></div>

        <div class="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-slate-200/80">
            <!-- Left Column: Branding -->
            <div class="md:col-span-4 space-y-4">
              <a href="/" class="flex items-center space-x-2.5 no-underline cursor-pointer h-8">
                <img src="icons/favicon-128x128.png" alt="Agra Abhinaya Perkasa Logo" class="h-8 w-8 object-contain rounded-md border border-slate-200 bg-white p-0.5" />
                <span class="font-heading text-base sm:text-lg font-extrabold tracking-tight flex items-center no-underline leading-none">
                  <span class="text-[#0B192C]">PT AGRA</span>
                  <span class="text-red-600 font-bold ml-1.5 text-xs sm:text-sm">ABHINAYA PERKASA</span>
                </span>
              </a>
              <p class="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm text-left">
                Penyedia layanan jasa konstruksi, pembangunan gedung, dan renovasi rumah tepercaya dengan basis tenaga tukang profesional berdedikasi tinggi serta garansi pengerjaan resmi.
              </p>
              <!-- Social Media Icon Links -->
              <div class="flex items-center space-x-3 pt-2">
                <!-- Instagram -->
                <a 
                  href="https://www.instagram.com/ptagraabhinayaperkasa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-9 h-9 bg-slate-50 hover:bg-rose-600 text-slate-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 border border-slate-200 hover:border-rose-600 hover:scale-105"
                  aria-label="Instagram"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                
                <!-- TikTok -->
                <a 
                  href="https://www.tiktok.com/@agraabhinayaperkasa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-9 h-9 bg-slate-50 hover:bg-slate-900 text-slate-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 border border-slate-200 hover:border-slate-900 hover:scale-105"
                  aria-label="TikTok"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .8.11v-3.5a6.93 6.93 0 0 0-1.9-.26 6.89 6.89 0 1 0 6.89 6.89V8.58a8.27 8.27 0 0 0 5.48 2.05V7.18a4.82 4.82 0 0 1-1.16-.49z" />
                  </svg>
                </a>

                <!-- Facebook -->
                <a 
                  href="https://www.facebook.com/profile.php?id=61590675123305" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-9 h-9 bg-slate-50 hover:bg-blue-600 text-slate-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 border border-slate-200 hover:border-blue-600 hover:scale-105"
                  aria-label="Facebook"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Middle Column A: Inilah Agra -->
            <div class="md:col-span-2 space-y-4 text-left">
              <div class="text-sm font-bold text-[#0B192C] uppercase tracking-wider h-8 flex items-center">Inilah Agra</div>
              <ul class="space-y-2.5 p-0 list-none text-xs sm:text-sm">
                <li>
                  <a 
                    href="/" 
                    @click.prevent="navigateToAnchor('hero')" 
                    class="relative py-0.5 no-underline text-slate-600 hover:text-red-600 transition-colors duration-300 group inline-block"
                  >
                    Beranda
                    <span class="absolute bottom-0 left-0 w-full h-[1.5px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/#profil-perusahaan" 
                    @click.prevent="navigateToAnchor('profil-perusahaan')" 
                    class="relative py-0.5 no-underline text-slate-600 hover:text-red-600 transition-colors duration-300 group inline-block"
                  >
                    Tentang Kami
                    <span class="absolute bottom-0 left-0 w-full h-[1.5px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/#kontak" 
                    @click.prevent="navigateToAnchor('kontak')" 
                    class="relative py-0.5 no-underline text-slate-600 hover:text-red-600 transition-colors duration-300 group inline-block"
                  >
                    Kontak
                    <span class="absolute bottom-0 left-0 w-full h-[1.5px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Middle Column B: Layanan -->
            <div class="md:col-span-2 space-y-4 text-left">
              <div class="text-sm font-bold text-[#0B192C] uppercase tracking-wider h-8 flex items-center">Layanan</div>
              <ul class="space-y-2.5 p-0 list-none text-xs sm:text-sm">
                <li>
                  <a 
                    href="/konstruksi" 
                    @click.prevent="router.push('/konstruksi')" 
                    class="relative py-0.5 no-underline text-slate-600 hover:text-red-600 transition-colors duration-300 group inline-block"
                  >
                    Jasa Konstruksi
                    <span class="absolute bottom-0 left-0 w-full h-[1.5px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/borongan" 
                    @click.prevent="router.push('/borongan')" 
                    class="relative py-0.5 no-underline text-slate-600 hover:text-red-600 transition-colors duration-300 group inline-block"
                  >
                    Jasa Borongan
                    <span class="absolute bottom-0 left-0 w-full h-[1.5px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/tukang-harian" 
                    @click.prevent="router.push('/tukang-harian')" 
                    class="relative py-0.5 no-underline text-slate-600 hover:text-red-600 transition-colors duration-300 group inline-block"
                  >
                    Tukang Harian
                    <span class="absolute bottom-0 left-0 w-full h-[1.5px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Right Column: Contact Details -->
            <div class="md:col-span-4 space-y-4 text-left">
              <div class="text-sm font-bold text-[#0B192C] uppercase tracking-wider h-8 flex items-center">Hubungi Kami</div>
              <ul class="space-y-3.5 p-0 list-none text-xs sm:text-sm">
                <li class="flex items-center space-x-2.5">
                  <svg class="w-5 h-5 text-red-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.472 4.97 1.473 5.466 0 9.911-4.45 9.916-9.925.002-2.653-1.03-5.147-2.908-7.027-1.879-1.879-4.381-2.914-7.036-2.915-5.474 0-9.922 4.451-9.926 9.929-.001 1.77.472 3.5 1.367 5.034l-1.01 3.693 3.793-.993zm11.233-7.518c-.3-.152-1.773-.875-2.047-.975-.274-.1-.474-.15-.674.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.264-.467-2.408-1.487-.889-.793-1.49-1.77-1.665-2.07-.175-.3-.019-.462.13-.611.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.491-.51-.674-.519-.174-.009-.373-.01-.572-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.309 1.272.494 1.707.633.717.228 1.368.196 1.883.119.574-.085 1.773-.725 2.022-1.425.249-.7.249-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
                  </svg>
                  <a href="https://api.whatsapp.com/send/?phone=6285695660902" target="_blank" rel="noopener noreferrer" class="hover:text-red-600 transition-colors duration-200 text-slate-600 no-underline">+62 856-9566-0902</a>
                </li>
                <li class="flex items-center space-x-2.5">
                  <svg class="w-5 h-5 text-red-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:agraabhinayaadm@gmail.com" class="hover:text-red-600 transition-colors duration-200 text-slate-600 no-underline break-all">agraabhinayaadm@gmail.com</a>
                </li>
                <li class="flex items-start space-x-2.5">
                  <svg class="w-5 h-5 text-red-600 shrink-0 mt-[3px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div class="leading-relaxed flex-1 text-left text-slate-600">Jl. Tegal Danas No.18a, Sertajaya, Kec. Cikarang Tim., Kabupaten Bekasi, Jawa Barat 17530</div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Bottom: Copyright -->
          <div class="pt-8 text-xs text-slate-500 text-center sm:text-left">
            <p class="m-0">© 2026 PT Agra Abhinaya Perkasa. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>

      <!-- Floating WhatsApp Button -->
      <a 
        href="https://api.whatsapp.com/send/?phone=6285695660902&text=Halo%20Agra%20Abhinaya%20Perkasa%2C%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20konstruksi/renovasi."
        target="_blank"
        rel="noopener noreferrer"
        class="fixed bottom-6 right-6 z-[999] w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
        aria-label="Hubungi kami via WhatsApp"
      >
        <!-- Pulse Glow Effect -->
        <span class="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"></span>
        <!-- SVG Icon -->
        <svg class="w-7 h-7 relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.472 4.97 1.473 5.466 0 9.911-4.45 9.916-9.925.002-2.653-1.03-5.147-2.908-7.027-1.879-1.879-4.381-2.914-7.036-2.915-5.474 0-9.922 4.451-9.926 9.929-.001 1.77.472 3.5 1.367 5.034l-1.01 3.693 3.793-.993zm11.233-7.518c-.3-.152-1.773-.875-2.047-.975-.274-.1-.474-.15-.674.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.264-.467-2.408-1.487-.889-.793-1.49-1.77-1.665-2.07-.175-.3-.019-.462.13-.611.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.491-.51-.674-.519-.174-.009-.373-.01-.572-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.309 1.272.494 1.707.633.717.228 1.368.196 1.883.119.574-.085 1.773-.725 2.022-1.425.249-.7.249-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
        </svg>
      </a>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const mobileLayananOpen = ref(false)
const isMobile = ref(false)

const checkScreenSize = () => {
  // Gunakan breakpoint 1024px (standard md/lg screen laptop) untuk berganti menu
  isMobile.value = window.innerWidth < 1024
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  mobileLayananOpen.value = false
}

const navigateToAnchor = (anchorId) => {
  closeMobileMenu()
  

  if (route.path === '/') {
    const el = document.getElementById(anchorId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  } else {
    router.push('/').then(() => {
      setTimeout(() => {
        const el = document.getElementById(anchorId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 300)
    })
  }
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
  window.removeEventListener('scroll', handleScroll)
})
</script>
