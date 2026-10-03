<template>
  <q-page class="bg-slate-50 min-h-screen text-slate-750 flex flex-col font-sans">

    <!-- 1. LOGIN SCREEN (if not logged in) -->
    <div v-if="!isLoggedIn" class="flex-grow flex items-center justify-center p-6 relative">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.04),transparent_60%)] pointer-events-none"></div>

      <div class="w-full max-w-md bg-[#0B192C] border border-slate-850 rounded-3xl p-8 shadow-2xl relative z-10">
        <!-- Logo Header -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-slate-200 mb-4 p-2 shadow-inner">
            <img src="icons/favicon-128x128.png" alt="PT Agra Abhinaya Perkasa Logo" class="h-full w-full object-contain" />
          </div>
          <h1 class="text-2xl font-extrabold text-white tracking-tight">Admin</h1>
          <p class="text-white text-sm mt-2 font-medium opacity-90">PT Agra Abhinaya Perkasa</p>
        </div>

        <!-- Alert Error -->
        <div v-if="loginError" class="bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold p-3.5 rounded-xl mb-5 flex items-center">
          <q-icon name="error_outline" size="18px" class="mr-2 flex-shrink-0" />
          <span>{{ loginError }}</span>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Username</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-white">
                <q-icon name="person" size="20px" />
              </span>
              <input
                v-model="loginForm.username"
                type="text"
                required
                placeholder="Masukkan username..."
                class="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm font-semibold focus:outline-none focus:border-red-500 focus:bg-slate-900 transition-all duration-200"
              />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Password</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-white">
                <q-icon name="lock" size="20px" />
              </span>
              <input
                v-model="loginForm.password"
                :type="showPassword ? 'text' : 'password'"
                required
                placeholder="Masukkan password..."
                class="w-full pl-11 pr-11 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm font-semibold focus:outline-none focus:border-red-500 focus:bg-slate-900 transition-all duration-200"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-red-500 focus:text-red-500 focus:outline-none active:text-red-600 bg-transparent border-none cursor-pointer"
              >
                <q-icon :name="showPassword ? 'visibility_off' : 'visibility'" size="20px" />
              </button>
            </div>
          </div>

          <button
            type="submit"
            class="w-full py-3.5 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-sm rounded-xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-600/20 active:translate-y-0 transition-all duration-200 border-none cursor-pointer focus:outline-none"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>

    <!-- 2. MAIN ADMIN DASHBOARD -->
    <div v-else class="flex-grow flex flex-col md:flex-row relative">
      <!-- Mobile Sidebar Backdrop Overlay -->
      <div
        v-if="sidebarOpen"
        @click="sidebarOpen = false"
        class="md:hidden fixed inset-0 bg-black/40 z-25 backdrop-blur-xs transition-opacity duration-300"
      ></div>

      <!-- 1. Sidebar Navigation (Left Column - Full Height) -->
      <aside
        :class="[
          'bg-white border-r border-slate-300 flex flex-col justify-between flex-shrink-0 transition-all duration-300 ease-in-out md:static',
          'fixed md:static left-0 top-0 bottom-0 z-30 h-full md:h-screen md:sticky md:top-0',
          sidebarOpen
            ? 'translate-x-0 w-72'
            : '-translate-x-full md:translate-x-0 md:w-0 md:border-r-0 overflow-hidden'
        ]"
      >
        <div>
          <!-- Global Sidebar Header (Logo & Brand) -->
          <div class="p-5 border-b border-black/10 flex items-center justify-between bg-[#1E3E62]">
            <div class="flex items-center space-x-2.5">
              <img src="icons/favicon-128x128.png" alt="PT Agra Abhinaya Perkasa Logo" class="h-8 w-8 object-contain rounded-lg border border-white/10 bg-white p-0.5" />
              <div>
                <div class="font-extrabold text-xs text-white tracking-tight leading-tight">PT Agra Abhinaya</div>
                <div class="text-[9px] font-bold text-red-200 uppercase tracking-wider mt-0.5">Admin Area</div>
              </div>
            </div>
            <!-- Mobile close button inside sidebar -->
            <button
              type="button"
              @click="sidebarOpen = false"
              class="md:hidden p-1 text-slate-300 hover:text-white bg-transparent border-none cursor-pointer flex items-center justify-center"
            >
              <q-icon name="close" size="18px" />
            </button>
          </div>

          <!-- Nav List -->
          <nav class="p-4 space-y-1.5">
            <button
              v-for="tab in tabList"
              :key="tab.value"
              @click="selectTab(tab.value)"
              class="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left text-sm font-bold transition-all duration-200 border-none cursor-pointer"
              :class="activeTab === tab.value ? tab.activeClass : tab.unselectedClass"
            >
              <q-icon :name="tab.icon" size="20px" />
              <span>{{ tab.label }}</span>
            </button>
          </nav>
        </div>

      </aside>

      <!-- 2. Right Side Column (Navbar at top, Main dashboard editing panel below) -->
      <div class="flex-grow flex flex-col min-h-screen">
        <!-- Top Navbar Header -->
        <header class="bg-gradient-to-r from-red-700 to-red-600 px-6 py-4 flex items-center justify-between z-20 shadow-md border-b-2 border-red-900/40">
          <div class="flex items-center">
            <!-- Hamburger Menu Button -->
            <button
              type="button"
              @click="toggleSidebar"
              class="p-2 text-white hover:text-red-200 hover:bg-white/10 rounded-xl cursor-pointer border-none bg-transparent flex items-center justify-center mr-1"
            >
              <q-icon name="menu" size="24px" />
            </button>
          </div>

          <div class="flex items-center space-x-4">
            <div class="flex max-sm:hidden flex-col items-end">
              <span class="text-xs font-bold text-white">Admin Utama</span>
              <span class="text-[10px] text-emerald-300 font-bold flex items-center">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
                Sesi Aktif
              </span>
            </div>
             <button
              @click="handleLogout"
              class="flex items-center justify-center space-x-1.5 px-4 py-2 bg-white text-red-700 hover:bg-red-50 border border-transparent rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm"
            >
              <q-icon name="logout" size="16px" />
              <span>Keluar</span>
            </button>
          </div>
        </header>

        <!-- Main Dashboard Panels -->
        <main ref="mainScrollRef" @scroll="handleMainScroll" class="flex-grow p-6 md:p-8 lg:p-10 overflow-y-auto">
          <div class="max-w-5xl mx-auto w-full">
            <!-- Header -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200 pb-6 mb-8 gap-4">
          <div>
            <h2 class="text-2xl font-extrabold text-slate-950 tracking-tight">
              {{ currentTabLabel }}
            </h2>
            <p class="text-slate-500 text-sm mt-1">Kelola data dan konten website Agra Abhinaya Perkasa.</p>
          </div>
          <a
            href="/"
            target="_blank"
            class="inline-flex items-center space-x-1.5 px-4 py-2 bg-white border border-slate-200 hover:border-red-500/30 text-xs font-bold rounded-xl transition-all duration-200 text-slate-600 hover:text-red-600 no-underline shadow-sm"
          >
            <q-icon name="open_in_new" size="14px" />
            <span>Lihat Website</span>
          </a>
        </div>

        <!-- TAB PANEL: BERANDA -->
        <div v-if="activeTab === 'beranda'" class="space-y-8 w-full">
          <!-- Slide Manager -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span class="flex items-center flex-nowrap">
                <q-icon name="view_carousel" class="text-red-500 mr-2 flex-shrink-0" size="22px" />
                <span>Slide Banner Utama (Hero Slider)</span>
              </span>
              <button
                @click="addHeroSlide"
                class="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-extrabold text-xs rounded-xl border-none cursor-pointer transition-colors shrink-0"
              >
                + Tambah Slide Banner
              </button>
            </h3>

            <div class="space-y-6">
              <div v-for="(slide, idx) in store.heroSlides" :key="idx" class="border border-[#1E3E62]/15 rounded-2xl p-5 bg-[#1E3E62]/5 relative">
                <div class="absolute top-4 right-4">
                  <button
                    @click="removeHeroSlide(idx)"
                    class="p-2 bg-red-50 hover:bg-red-600 text-white rounded-xl border-none cursor-pointer flex items-center justify-center"
                    title="Hapus Slide"
                    style="background-color: rgb(239, 68, 68); color: white;"
                  >
                    <q-icon name="delete" size="18px" />
                  </button>
                </div>

                <div class="font-extrabold text-sm text-red-600 mb-4 uppercase tracking-wider">Slide {{ idx + 1 }}</div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="md:col-span-2">
                    <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Judul Slide</label>
                    <input
                      v-model="slide.title"
                      type="text"
                      class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Sub-Judul (Deskripsi)</label>
                    <textarea
                      v-model="slide.subtitle"
                      rows="2"
                      class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500 resize-none"
                    ></textarea>
                  </div>
                  <div class="md:col-span-2">
                    <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">File Gambar / Upload Foto</label>
                    <div class="flex flex-col sm:flex-row sm:items-center gap-3">
                      <input
                        v-model="slide.image"
                        type="text"
                        placeholder="Path gambar (e.g. images/construction_hero.png) atau base64 data"
                        class="flex-grow px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                      />

                      <div class="flex items-center shrink-0">
                        <input
                          type="file"
                          accept="image/*"
                          class="hidden"
                          :id="'hero-upload-' + idx"
                          @change="handleHeroUpload($event, idx)"
                        />
                        <label
                          :for="'hero-upload-' + idx"
                          class="px-4 py-3 bg-red-50 hover:bg-red-100 text-red-600 font-extrabold text-xs rounded-xl cursor-pointer transition-all duration-200 flex items-center space-x-1.5 border border-red-200/50"
                        >
                          <q-icon name="cloud_upload" size="18px" />
                          <span>Pilih & Upload</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button
                @click="saveGeneralData"
                class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all duration-200 border-none cursor-pointer shadow-md hover:shadow-lg hover:shadow-red-600/20"
              >
                Simpan Perubahan Banner
              </button>
            </div>
          </div>

          <!-- Profil Perusahaan -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex items-start sm:items-center flex-nowrap gap-2">
              <q-icon name="info" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
              <span class="leading-snug">Profil Perusahaan (Tentang Kami)</span>
            </h3>

            <div class="space-y-5">
              <div>
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Judul Profil</label>
                <input
                  v-model="store.aboutTitle"
                  type="text"
                  class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Deskripsi Profil (Gunakan spasi/Enter untuk paragraf baru)</label>
                <textarea
                  v-model="store.aboutText"
                  rows="8"
                  placeholder="Tuliskan deskripsi profile perusahaan..."
                  class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                ></textarea>
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button
                @click="saveGeneralData"
                class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all duration-200 border-none cursor-pointer shadow-md hover:shadow-lg hover:shadow-red-600/20"
              >
                Simpan Profil Perusahaan
              </button>
            </div>
          </div>

          <!-- Statistik Highlight Perusahaan -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex items-start sm:items-center flex-nowrap gap-2">
              <q-icon name="bar_chart" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
              <span class="leading-snug">Statistik Highlight Perusahaan (3 Card Utama)</span>
            </h3>

            <div class="space-y-6">
              <div v-for="(stat, idx) in store.companyStats" :key="idx" class="border border-[#1E3E62]/15 rounded-2xl p-5 bg-[#1E3E62]/5">
                <div class="font-extrabold text-sm text-red-650 mb-4 uppercase tracking-wider">Card Statistik {{ idx + 1 }}</div>

                <div class="space-y-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Judul Card</label>
                    <input
                      v-model="stat.title"
                      type="text"
                      class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Deskripsi Ringkas</label>
                    <textarea
                      v-model="stat.desc"
                      rows="2"
                      class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button
                @click="saveGeneralData"
                class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all duration-200 border-none cursor-pointer shadow-md hover:shadow-lg hover:shadow-red-600/20"
              >
                Simpan Statistik Perusahaan
              </button>
            </div>
          </div>

          <!-- Visi & Misi Manager -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex items-start sm:items-center flex-nowrap gap-2">
              <q-icon name="article" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
              <span class="leading-snug">Profil Perusahaan (Visi & Misi)</span>
            </h3>

            <div class="space-y-5">
              <div>
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Visi Perusahaan</label>
                <textarea
                  v-model="store.visiMisi.visi"
                  rows="3"
                  class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                ></textarea>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Misi Perusahaan</label>
                <div class="space-y-3">
                  <div v-for="(misi, idx) in store.visiMisi.misi" :key="idx" class="flex items-center space-x-3">
                    <span class="text-xs font-bold text-slate-400 w-6">{{ idx + 1 }}.</span>
                    <input
                      v-model="store.visiMisi.misi[idx]"
                      type="text"
                      class="flex-grow px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button
                @click="saveGeneralData"
                class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all duration-200 border-none cursor-pointer shadow-md hover:shadow-lg hover:shadow-red-600/20"
              >
                Simpan Profil Perusahaan
              </button>
            </div>
          </div>

          <!-- Workspace Kami (Galeri Kantor & Fasilitas) Slider Manager -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span class="flex items-center flex-nowrap">
                <q-icon name="photo_library" class="text-red-500 mr-2 flex-shrink-0" size="22px" />
                <span>Workspace Kami (Galeri Kantor & Fasilitas)</span>
              </span>
              <button
                @click="addOfficeSlide"
                class="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-extrabold text-xs rounded-xl border-none cursor-pointer transition-colors shrink-0"
              >
                + Tambah Slide Workspace
              </button>
            </h3>

            <div class="space-y-6">
              <div v-for="(slide, idx) in store.officeSlides" :key="idx" class="border border-[#1E3E62]/15 rounded-2xl p-5 bg-[#1E3E62]/5 relative">
                <div class="absolute top-4 right-4">
                  <button
                    @click="removeOfficeSlide(idx)"
                    class="p-2 bg-red-50 hover:bg-red-600 text-white rounded-xl border-none cursor-pointer"
                    title="Hapus Slide"
                    style="background-color: rgb(239, 68, 68);"
                  >
                    <q-icon name="delete" size="18px" />
                  </button>
                </div>

                <div class="font-extrabold text-sm text-red-650 mb-4 uppercase tracking-wider">Slide Workspace {{ idx + 1 }}</div>

                <div class="grid grid-cols-1 gap-5">
                  <div>
                    <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Judul Slide</label>
                    <input
                      v-model="slide.title"
                      type="text"
                      placeholder="Contoh: Ruang Rapat & Kolaborasi"
                      class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Deskripsi Detail</label>
                    <textarea
                      v-model="slide.desc"
                      rows="3"
                      placeholder="Tuliskan deskripsi atau cerita seputar ruangan ini..."
                      class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                    ></textarea>
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Foto Slide (Gambar Workspace)</label>
                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <!-- Preview Image -->
                      <div class="w-32 aspect-video rounded-xl border border-slate-200 bg-white overflow-hidden flex items-center justify-center shrink-0 self-center sm:self-auto">
                        <img
                          v-if="slide.image"
                          :src="slide.image"
                          class="w-full h-full object-cover"
                        />
                        <q-icon v-else name="image" class="text-slate-300" size="24px" />
                      </div>

                      <div class="flex-grow flex flex-col sm:flex-row gap-2">
                        <input
                          v-model="slide.image"
                          type="text"
                          placeholder="Path gambar (e.g. images/ruangadmin.jpeg) atau base64 data"
                          class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                        />

                        <div class="flex items-center justify-center sm:justify-start shrink-0">
                          <input
                            type="file"
                            accept="image/*"
                            class="hidden"
                            :id="'office-upload-' + idx"
                            @change="handleOfficeUpload($event, idx)"
                          />
                          <label
                            :for="'office-upload-' + idx"
                            class="w-full sm:w-auto px-4 py-3 bg-red-50 hover:bg-red-100 text-red-600 font-extrabold text-xs rounded-xl cursor-pointer transition-all duration-200 flex items-center justify-center space-x-1.5 border border-red-200/50 select-none text-center shadow-sm"
                          >
                            <q-icon name="cloud_upload" size="18px" />
                            <span>Pilih & Upload</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button
                @click="saveGeneralData"
                class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all duration-200 border-none cursor-pointer shadow-md hover:shadow-lg hover:shadow-red-600/20"
              >
                Simpan Galeri Workspace
              </button>
            </div>
          </div>

          <!-- Mengapa Memilih Kami (Keunggulan AAP) Editor -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex items-start sm:items-center flex-nowrap gap-2">
              <q-icon name="stars" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
              <span class="leading-snug">Mengapa Memilih Kami (Keunggulan & Kinerja)</span>
            </h3>

            <div class="space-y-6">
              <!-- Mascot & Bubble Section -->
              <div class="border border-[#1E3E62]/15 rounded-2xl p-5 bg-[#1E3E62]/5">
                <div class="font-extrabold text-sm text-[#0B192C] mb-4 uppercase tracking-wider">Maskot & Gelembung Balon Kata</div>

                <div class="space-y-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Teks Balon Kata Maskot</label>
                    <textarea
                      v-model="store.advantagesBubble"
                      rows="2"
                      class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                    ></textarea>
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Gambar/Ilustrasi Maskot</label>
                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <!-- Preview Image -->
                      <div class="w-24 h-24 rounded-xl border border-slate-200 bg-white overflow-hidden flex items-center justify-center shrink-0 self-center sm:self-auto">
                        <img
                          v-if="store.advantagesMascot"
                          :src="store.advantagesMascot"
                          class="w-full h-full object-contain p-1"
                        />
                        <q-icon v-else name="face" class="text-slate-300" size="24px" />
                      </div>

                      <div class="flex-grow flex flex-col sm:flex-row gap-2">
                        <input
                          v-model="store.advantagesMascot"
                          type="text"
                          placeholder="Path gambar (e.g. images/mascot_illustration.jpg) atau base64 data"
                          class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                        />

                        <div class="flex items-center justify-center sm:justify-start shrink-0">
                          <input
                            type="file"
                            accept="image/*"
                            class="hidden"
                            id="mascot-file-upload"
                            @change="handleMascotUpload($event)"
                          />
                          <label
                            for="mascot-file-upload"
                            class="w-full sm:w-auto px-4 py-3 bg-red-50 hover:bg-red-100 text-red-600 font-extrabold text-xs rounded-xl cursor-pointer transition-all duration-200 flex items-center justify-center space-x-1.5 border border-red-200/50 select-none text-center shadow-sm"
                          >
                            <q-icon name="cloud_upload" size="18px" />
                            <span>Pilih & Upload</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Advantages List Loop -->
              <div class="border border-[#1E3E62]/15 rounded-2xl p-5 bg-[#1E3E62]/5">
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                  <div class="font-extrabold text-sm text-[#0B192C] uppercase tracking-wider">Daftar Keunggulan Perusahaan</div>
                  <button
                    @click="addAdvantage"
                    class="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 font-extrabold text-xs rounded-lg border-none cursor-pointer transition-colors"
                  >
                    + Tambah Keunggulan
                  </button>
                </div>

                <div class="space-y-6">
                  <div v-for="(adv, idx) in store.advantagesList" :key="idx" class="border border-slate-200 rounded-xl p-4 bg-white relative">
                    <div class="absolute top-4 right-4">
                      <button
                        @click="removeAdvantage(idx)"
                        class="p-2 bg-red-50 hover:bg-red-600 text-white rounded-xl border-none cursor-pointer"
                        title="Hapus Keunggulan"
                        style="background-color: rgb(239, 68, 68);"
                      >
                        <q-icon name="delete" size="18px" />
                      </button>
                    </div>

                    <div class="font-extrabold text-xs text-red-650 mb-3 uppercase tracking-wider">Keunggulan {{ idx + 1 }}</div>

                    <div class="space-y-4">
                      <div>
                        <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Judul Keunggulan</label>
                        <input
                          v-model="adv.title"
                          type="text"
                          class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Deskripsi Penjelasan</label>
                        <textarea
                          v-model="adv.desc"
                          rows="2"
                          class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button
                @click="saveGeneralData"
                class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all duration-200 border-none cursor-pointer shadow-md hover:shadow-lg hover:shadow-red-600/20"
              >
                Simpan Keunggulan Kami
              </button>
            </div>
          </div>

          <!-- Layanan Kami Editor -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
              <h3 class="text-lg font-extrabold text-slate-900 m-0 flex items-start sm:items-center flex-nowrap gap-2">
                <q-icon name="miscellaneous_services" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
                <span class="leading-snug">Kelola Layanan Perusahaan</span>
              </h3>
              <button
                @click="addService"
                class="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-extrabold text-xs rounded-xl border-none cursor-pointer transition-colors"
              >
                + Tambah Layanan
              </button>
            </div>

            <div class="space-y-6">
              <!-- Judul Besar Section -->
              <div>
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Judul Sub-Header Layanan (Gunakan &lt;br /&gt; untuk baris baru)</label>
                <input
                  v-model="store.servicesTitle"
                  type="text"
                  class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                />
              </div>

              <!-- List Loop -->
              <div class="space-y-6">
                <div
                  v-for="(service, idx) in store.servicesList"
                  :key="idx"
                  class="border border-slate-200 rounded-2xl p-5 bg-[#1E3E62]/5 relative"
                >
                  <!-- Delete Button -->
                  <div class="absolute top-4 right-4">
                    <button
                      @click="removeService(idx)"
                      class="p-2 bg-red-50 hover:bg-red-600 text-white rounded-xl border-none cursor-pointer"
                      title="Hapus Layanan"
                      style="background-color: rgb(239, 68, 68);"
                    >
                      <q-icon name="delete" size="18px" />
                    </button>
                  </div>

                  <div class="font-extrabold text-xs text-red-600 mb-4 uppercase tracking-wider">Kartu Layanan {{ idx + 1 }}</div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Title -->
                    <div>
                      <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Nama Layanan (Cover Title)</label>
                      <input
                        v-model="service.title"
                        type="text"
                        class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <!-- Badge -->
                    <div>
                      <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Badge Label (Opsional, e.g. "Full Service")</label>
                      <input
                        v-model="service.badge"
                        type="text"
                        class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <!-- Cover Desc -->
                    <div class="md:col-span-2">
                      <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Deskripsi Singkat (Cover Description)</label>
                      <textarea
                        v-model="service.desc"
                        rows="2"
                        class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                      ></textarea>
                    </div>

                    <!-- Cover Image -->
                    <div class="md:col-span-2">
                      <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Gambar Cover Layanan</label>
                      <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <!-- Preview Image -->
                        <div class="w-32 aspect-video rounded-xl border border-slate-200 bg-white overflow-hidden flex items-center justify-center shrink-0 self-center sm:self-auto">
                          <img
                            v-if="service.image"
                            :src="service.image"
                            class="w-full h-full object-cover"
                          />
                          <q-icon v-else name="image" class="text-slate-300" size="24px" />
                        </div>

                        <div class="flex-grow flex flex-col sm:flex-row gap-2">
                          <input
                            v-model="service.image"
                            type="text"
                            placeholder="Path gambar (e.g. images/kontruksi.png) atau base64 data"
                            class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                          />

                          <div class="flex items-center justify-center sm:justify-start shrink-0">
                            <input
                              type="file"
                              accept="image/*"
                              class="hidden"
                              :id="'service-upload-' + idx"
                              @change="handleServiceUpload($event, idx)"
                            />
                            <label
                              :for="'service-upload-' + idx"
                              class="w-full sm:w-auto px-4 py-3 bg-red-50 hover:bg-red-100 text-red-600 font-extrabold text-xs rounded-xl cursor-pointer transition-all duration-200 flex items-center justify-center space-x-1.5 border border-red-200/50 select-none text-center shadow-sm"
                            >
                              <q-icon name="cloud_upload" size="18px" />
                              <span>Pilih & Upload</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Detail View Settings -->
                    <div class="md:col-span-2 border-t border-slate-200/60 pt-4 mt-2">
                      <div class="font-bold text-xs text-slate-700 mb-4 uppercase tracking-wider">Tampilan Detail (Ketika tombol Selengkapnya diklik)</div>
                    </div>

                    <!-- Detail Title -->
                    <div class="md:col-span-2">
                      <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Judul Detail</label>
                      <input
                        v-model="service.detailTitle"
                        type="text"
                        class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <!-- Detail Desc -->
                    <div class="md:col-span-2">
                      <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Deskripsi Detail</label>
                      <textarea
                        v-model="service.detailDesc"
                        rows="2"
                        class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                      ></textarea>
                    </div>

                    <!-- Bullets List Textarea -->
                    <div class="md:col-span-2">
                      <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Daftar Poin/Fitur Keunggulan (Gunakan baris baru / Enter untuk poin baru)</label>
                      <textarea
                        v-model="service.bulletsText"
                        rows="4"
                        placeholder="Contoh:&#10;Struktur SNI Kokoh&#10;RAB Transparan&#10;Arsitek & Sipil Profesional"
                        class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button
                @click="saveGeneralData"
                class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all duration-200 border-none cursor-pointer shadow-md hover:shadow-lg hover:shadow-red-600/20"
              >
                Simpan Layanan Kami
              </button>
            </div>
          </div>

          <!-- Tenaga Ahli (Qualified Artisans) Editor -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-lg font-extrabold text-slate-900 m-0 flex items-start sm:items-center flex-nowrap gap-2">
                <q-icon name="engineering" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
                <span class="leading-snug">Kelola Tenaga Ahli (Tukang)</span>
              </h3>
            </div>

            <div class="space-y-6">
              <!-- Header & Sub Header -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Sub-Header</label>
                  <input
                    v-model="store.artisansSubHeader"
                    type="text"
                    class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Judul Utama</label>
                  <input
                    v-model="store.artisansTitle"
                    type="text"
                    class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <!-- Description -->
              <div>
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Deskripsi Penjelasan</label>
                <textarea
                  v-model="store.artisansDesc"
                  rows="3"
                  class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                ></textarea>
              </div>

              <!-- Slides List -->
              <div class="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide flex justify-between items-center">
                  <span>Slide Foto Tenaga Ahli (Carousel)</span>
                  <button
                    type="button"
                    @click="addArtisanSlide"
                    class="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 border-none rounded-lg text-[10px] font-bold cursor-pointer text-slate-700 flex items-center space-x-1"
                  >
                    <q-icon name="add" size="12px" />
                    <span>Tambah Foto</span>
                  </button>
                </label>

                <div class="space-y-3 mt-3">
                  <div
                    v-for="(slideImg, sIdx) in store.artisansSlides"
                    :key="sIdx"
                    class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl relative shadow-xs"
                  >
                    <!-- Delete Button (Top Right absolute) -->
                    <button
                      type="button"
                      @click="removeArtisanSlide(sIdx)"
                      class="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg border-none cursor-pointer flex items-center justify-center transition-colors shrink-0"
                      title="Hapus Foto"
                    >
                      <q-icon name="delete" size="18px" />
                    </button>

                    <!-- Preview Image -->
                    <div class="w-32 aspect-video rounded-xl border border-slate-200 bg-white overflow-hidden flex items-center justify-center shrink-0 self-center sm:self-auto shadow-sm">
                      <img v-if="slideImg && !slideImg.startsWith('images/')" :src="slideImg" class="w-full h-full object-cover" />
                      <img v-else-if="slideImg" :src="slideImg" class="w-full h-full object-cover" />
                      <q-icon v-else name="image" class="text-slate-350" size="24px" />
                    </div>

                    <!-- Upload and URL -->
                    <div class="flex-grow flex flex-col gap-1.5 pt-4 sm:pt-0">
                      <span class="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Foto {{ sIdx + 1 }}</span>
                      <div class="flex items-center gap-2">
                        <input
                          type="file"
                          accept="image/*"
                          :id="'artisan-slide-upload-' + sIdx"
                          @change="handleArtisanSlideUpload($event, sIdx)"
                          class="hidden"
                        />
                        <label
                          :for="'artisan-slide-upload-' + sIdx"
                          class="px-3.5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-xl text-xs font-extrabold flex items-center justify-center space-x-1.5 cursor-pointer shrink-0 transition-colors duration-150 select-none shadow-sm"
                        >
                          <q-icon name="cloud_upload" size="16px" />
                          <span>Upload</span>
                        </label>
                        <input
                          v-model="store.artisansSlides[sIdx]"
                          type="text"
                          placeholder="Path gambar..."
                          class="flex-grow px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200 min-w-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div v-if="store.artisansSlides.length === 0" class="text-slate-400 text-[10px] font-semibold text-center py-2">
                    Belum ada foto ditambahkan.
                  </div>
                </div>
              </div>

              <!-- Core Points List -->
              <div class="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                  <span class="block text-xs font-bold text-slate-500 uppercase tracking-wide">Poin Keunggulan Tenaga Ahli</span>
                  <button
                    type="button"
                    @click="addArtisanPoint"
                    class="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 border-none rounded-lg text-[10px] font-bold cursor-pointer text-slate-700 flex items-center space-x-1"
                  >
                    <q-icon name="add" size="12px" />
                    <span>Tambah Poin</span>
                  </button>
                </div>

                <div class="space-y-4 mt-3">
                  <div v-for="(point, pIdx) in store.artisansPoints" :key="pIdx" class="p-4 bg-white border border-slate-200 rounded-xl relative space-y-3">
                    <div class="absolute top-3 right-3">
                      <button
                        type="button"
                        @click="removeArtisanPoint(pIdx)"
                        class="p-2 bg-red-50 hover:bg-red-650 border border-red-100 text-red-600 hover:text-white rounded-lg cursor-pointer transition-colors duration-150"
                      >
                        <q-icon name="delete" size="14px" />
                      </button>
                    </div>
                    <div class="font-extrabold text-[10px] text-red-600 uppercase tracking-wider">Poin {{ pIdx + 1 }}</div>
                    <div class="grid grid-cols-1 gap-3">
                      <div>
                        <label class="block text-[10px] font-bold text-slate-450 mb-1.5 uppercase tracking-wide">Judul Poin</label>
                        <input
                          v-model="point.title"
                          type="text"
                          class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-semibold focus:outline-none focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label class="block text-[10px] font-bold text-slate-450 mb-1.5 uppercase tracking-wide">Penjelasan Singkat</label>
                        <textarea
                          v-model="point.desc"
                          rows="2"
                          class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-semibold focus:outline-none focus:border-red-500"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div v-if="store.artisansPoints.length === 0" class="text-slate-400 text-[10px] font-semibold text-center py-2">
                    Belum ada poin ditambahkan.
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button
                @click="saveGeneralData"
                class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all duration-200 border-none cursor-pointer shadow-md hover:shadow-lg hover:shadow-red-600/20"
              >
                Simpan Tenaga Ahli
              </button>
            </div>
          </div>

        </div>

        <!-- TAB PANEL: PORTOFOLIO -->
        <div v-if="activeTab === 'portofolio'" class="space-y-6">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
            <div class="relative w-full sm:max-w-xs">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-450">
                <q-icon name="search" size="18px" />
              </span>
              <input
                v-model="portfolioSearch"
                type="text"
                placeholder="Cari nama proyek..."
                class="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs font-semibold focus:outline-none focus:border-red-500 focus:bg-white"
              />
            </div>
            <button
              @click="openPortfolioDialog()"
              class="w-full sm:w-auto px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl transition-all duration-200 flex items-center justify-center space-x-1.5 border-none cursor-pointer"
            >
              <q-icon name="add" size="18px" />
              <span>Tambah Proyek Baru</span>
            </button>
          </div>

          <!-- Project List -->
          <div class="space-y-4">
            <!-- Table Layout on Desktop (md and up) -->
            <div class="block max-[767px]:!hidden bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <div class="overflow-x-auto">
                <table class="w-full border-collapse text-left text-xs font-medium text-slate-700">
                  <thead>
                    <tr class="border-b border-slate-200 bg-slate-50/80 text-slate-500 font-bold uppercase tracking-wider">
                      <th class="p-4 sm:p-5">Gambar</th>
                      <th class="p-4 sm:p-5">Judul Proyek</th>
                      <th class="p-4 sm:p-5">Kategori</th>
                      <th class="p-4 sm:p-5">Lokasi</th>
                      <th class="p-4 sm:p-5 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    <tr v-for="item in filteredPortfolio" :key="item.id" class="hover:bg-slate-50/50 transition-colors">
                      <td class="p-4 sm:p-5">
                        <img :src="item.image" class="w-14 h-10 object-cover rounded-lg border border-slate-200 bg-white" />
                      </td>
                      <td class="p-4 sm:p-5 font-bold text-slate-900">{{ item.title }}</td>
                      <td class="p-4 sm:p-5">
                        <span class="inline-block px-2 py-0.5 bg-slate-100 text-slate-600 font-bold uppercase tracking-wide rounded-md text-[9px]">
                          {{ item.categoryLabel }}
                        </span>
                      </td>
                      <td class="p-4 sm:p-5 text-slate-500 font-medium">{{ item.location }}</td>
                      <td class="p-4 sm:p-5 text-right space-x-2">
                        <button
                          @click="openPortfolioDialog(item)"
                          class="px-3 py-1.5 bg-white hover:bg-slate-50 hover:text-slate-900 text-slate-650 border border-slate-200 rounded-lg text-[10px] font-bold cursor-pointer transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          @click="deleteProject(item.id, item.title)"
                          class="px-3 py-1.5 bg-red-50 hover:bg-red-600 hover:text-white text-red-600 border border-red-100 rounded-lg text-[10px] font-bold cursor-pointer transition-colors"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                    <tr v-if="filteredPortfolio.length === 0">
                      <td colspan="5" class="p-8 text-center text-slate-400 font-semibold">Tidak ada proyek ditemukan.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Card Layout on Mobile (under md) -->
            <div class="block md:hidden space-y-4">
              <div
                v-for="item in filteredPortfolio"
                :key="item.id"
                class="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col space-y-4"
              >
                <div class="flex items-center space-x-4">
                  <img
                    :src="item.image"
                    class="w-20 h-16 object-cover rounded-xl border border-slate-200 bg-white flex-shrink-0"
                  />
                  <div class="flex-1 min-w-0">
                    <h4 class="text-sm font-extrabold text-slate-900 leading-snug mb-1.5 line-clamp-2">{{ item.title }}</h4>
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="inline-block px-2 py-0.5 bg-slate-100 text-slate-600 font-bold uppercase tracking-wide rounded text-[9px]">
                        {{ item.categoryLabel }}
                      </span>
                      <span class="text-slate-500 text-[10px] font-semibold flex items-center">
                        <q-icon name="place" size="12px" class="mr-0.5 text-slate-450" />
                        {{ item.location }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Actions -->
                <div class="flex items-center justify-end space-x-2 pt-3 border-t border-slate-100">
                  <button
                    @click="openPortfolioDialog(item)"
                    class="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-xs font-extrabold cursor-pointer transition-all duration-150 flex-1 text-center"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteProject(item.id, item.title)"
                    class="px-4 py-2 bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-600 border border-rose-100 rounded-xl text-xs font-extrabold cursor-pointer transition-all duration-150 flex-1 text-center"
                  >
                    Hapus
                  </button>
                </div>
              </div>

              <div
                v-if="filteredPortfolio.length === 0"
                class="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-400 font-semibold shadow-sm"
              >
                Tidak ada proyek ditemukan.
              </div>
            </div>
          </div>
        </div>

        <!-- TAB PANEL: KLIEN -->
        <div v-if="activeTab === 'klien'" class="space-y-6 w-full">
          <!-- Add Client Form -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex items-start sm:items-center flex-nowrap gap-2">
              <q-icon name="add_photo_alternate" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
              <span class="leading-snug">Tambah Logo Klien / Mitra</span>
            </h3>

            <form @submit.prevent="submitClient" class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Nama Klien / Instansi</label>
                <input
                  v-model="clientForm.name"
                  type="text"
                  required
                  placeholder="Contoh: PT Semen Indonesia..."
                  class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Logo Gambar / Upload Foto</label>
                <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <!-- Logo Preview Box -->
                  <div class="w-16 h-16 rounded-xl border border-slate-200 bg-white overflow-hidden flex items-center justify-center shrink-0 self-center sm:self-auto shadow-sm">
                    <img
                      v-if="clientForm.image"
                      :src="clientForm.image"
                      class="w-full h-full object-contain p-1.5"
                    />
                    <q-icon v-else name="image" class="text-slate-350" size="24px" />
                  </div>

                  <div class="flex-grow flex flex-col sm:flex-row gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      id="client-file-upload"
                      @change="handleClientUpload($event)"
                      class="hidden"
                    />
                    <label
                      for="client-file-upload"
                      class="px-4 py-3.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl text-xs font-extrabold flex items-center justify-center space-x-2 cursor-pointer transition-all duration-200 shrink-0 select-none shadow-sm"
                    >
                      <q-icon name="cloud_upload" size="18px" />
                      <span>Upload Logo</span>
                    </label>

                    <input
                      v-model="clientForm.image"
                      type="text"
                      required
                      placeholder="Atau masukkan path / data base64..."
                      class="flex-grow px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>
              </div>

              <div class="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  class="px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all duration-200 border-none cursor-pointer"
                >
                  Tambah Klien
                </button>
              </div>
            </form>
          </div>

          <!-- Client Grid -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex items-start sm:items-center flex-nowrap gap-2">
              <q-icon name="groups" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
              <span class="leading-snug">Daftar Logo Klien Aktif</span>
            </h3>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <div
                v-for="client in store.clients"
                :key="client.id"
                class="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-between hover:border-red-500/20 transition-all duration-300 shadow-sm relative group"
              >
                <div class="h-16 w-full flex items-center justify-center p-2 mb-2 bg-slate-50 rounded-xl border border-slate-100">
                  <img :src="client.image" :alt="client.name" class="max-h-full max-w-[80%] object-contain" />
                </div>
                <div class="text-[10px] font-bold text-slate-700 text-center line-clamp-1 w-full mt-1">{{ client.name }}</div>

                <!-- Delete Button -->
                <button
                  @click="deleteClient(client.id, client.name)"
                  class="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center border-none shadow-md cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  title="Hapus Klien"
                >
                  <q-icon name="close" size="14px" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB PANEL: KELOLA ANEKA SOLUSI -->
        <div v-if="activeTab === 'solusi'" class="space-y-6">
          <div class="flex justify-between items-center bg-white border border-slate-200 rounded-3xl p-5 shadow-sm">
            <div>
              <h3 class="text-lg font-extrabold text-slate-900 leading-none">Kelola Solusi Bangunan</h3>
              <p class="text-xs text-slate-500 font-semibold mt-1.5">Tambah, ubah, atau hapus item kartu solusi masalah bangunan yang tampil di halaman depan.</p>
            </div>
            <button
              @click="openSolutionDialog()"
              class="px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all duration-200 border-none cursor-pointer flex items-center space-x-1.5 shadow-sm"
            >
              <q-icon name="add" size="18px" />
              <span>Tambah Solusi</span>
            </button>
          </div>

          <!-- Solutions Grid Layout -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="sol in store.solutions"
              :key="sol.id"
              :class="[
                'border rounded-2xl p-5 relative transition-all duration-300 flex flex-col justify-between h-full',
                getSolutionStyles(sol.color).cardBg
              ]"
            >
              <div class="space-y-3">
                <div class="flex items-center space-x-3.5">
                  <div
                    :class="[
                      'w-11 h-11 rounded-xl flex items-center justify-center border shrink-0',
                      getSolutionStyles(sol.color).iconBg
                    ]"
                  >
                    <q-icon :name="sol.icon" size="22px" />
                  </div>
                  <div>
                    <h5 class="text-sm font-extrabold text-[#0B192C] leading-none mb-1.5">{{ sol.name }}</h5>
                    <span
                      class="px-2 py-0.5 text-[9px] font-extrabold uppercase rounded-full tracking-wider border inline-block mt-0.5"
                      :class="getSolutionStyles(sol.color).badge"
                    >
                      {{ sol.color }}
                    </span>
                  </div>
                </div>
                <p class="text-xs text-slate-555 leading-relaxed font-semibold">
                  {{ sol.description }}
                </p>
              </div>
              <div class="flex justify-end pt-3 border-t border-slate-100 space-x-2 mt-4">
                <button
                  @click="openSolutionDialog(sol)"
                  class="px-3.5 py-2 bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 border border-slate-200 rounded-xl text-[10px] font-extrabold cursor-pointer transition-all duration-200"
                >
                  Edit
                </button>
                <button
                  @click="deleteSolution(sol.id, sol.name)"
                  class="px-3.5 py-2 bg-red-50 hover:bg-red-600 hover:text-white text-red-600 border border-red-100 rounded-xl text-[10px] font-extrabold cursor-pointer transition-all duration-200"
                >
                  Hapus
                </button>
              </div>
            </div>
            <div v-if="!store.solutions || store.solutions.length === 0" class="col-span-full p-8 text-center text-slate-400 font-semibold bg-white border border-slate-200 rounded-2xl">
              Belum ada solusi bangunan ditambahkan.
            </div>
          </div>
        </div>

        <!-- TAB PANEL: ULASAN MODERASI -->
        <div v-if="activeTab === 'ulasan'" class="space-y-6">
          <!-- Desktop Table Layout (Visible on medium screens and up) -->
          <div class="block max-[767px]:!hidden bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <div class="overflow-x-auto">
              <table class="w-full border-collapse text-left text-xs font-medium text-slate-700">
                <thead>
                  <tr class="border-b border-slate-200 bg-slate-50/80 text-slate-500 font-bold uppercase tracking-wider">
                    <th class="p-4 sm:p-5">Nama Pengirim</th>
                    <th class="p-4 sm:p-5">Rating</th>
                    <th class="p-4 sm:p-5">Isi Komentar / Ulasan</th>
                    <th class="p-4 sm:p-5">Tanggal</th>
                    <th class="p-4 sm:p-5 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr v-for="review in store.reviews" :key="review.id" class="hover:bg-slate-50/50 transition-colors">
                    <td class="p-4 sm:p-5 font-bold text-slate-900 whitespace-nowrap">{{ review.name }}</td>
                    <td class="p-4 sm:p-5">
                      <div class="flex items-center space-x-0.5 text-amber-500">
                        <q-icon
                          v-for="star in 5"
                          :key="star"
                          :name="star <= review.rating ? 'star' : 'star_border'"
                          size="14px"
                        />
                      </div>
                    </td>
                    <td class="p-4 sm:p-5 text-slate-650 leading-relaxed max-w-xs md:max-w-md">"{{ review.comment }}"</td>
                    <td class="p-4 sm:p-5 text-slate-500 font-medium whitespace-nowrap">{{ review.date }}</td>
                    <td class="p-4 sm:p-5 text-right">
                      <button
                        @click="deleteReview(review.id, review.name)"
                        class="px-3 py-1.5 bg-red-50 hover:bg-red-600 hover:text-white text-red-600 border border-red-100 rounded-lg text-[10px] font-bold cursor-pointer transition-colors"
                      >
                        Hapus Ulasan
                      </button>
                    </td>
                  </tr>
                  <tr v-if="store.reviews.length === 0">
                    <td colspan="5" class="p-8 text-center text-slate-400 font-semibold">Belum ada ulasan masuk.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Mobile Card Layout (Visible only on mobile/tablet) -->
          <div class="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              v-for="review in store.reviews"
              :key="review.id"
              class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm relative flex flex-col justify-between h-full"
            >
              <div class="space-y-3">
                <!-- Header: Name & Rating -->
                <div class="flex items-start justify-between">
                  <div>
                    <h5 class="text-sm font-extrabold text-[#0B192C] leading-none mb-1.5">{{ review.name }}</h5>
                    <div class="text-[10px] font-bold text-slate-400 tracking-wider">
                      {{ review.date }}
                    </div>
                  </div>
                  <!-- Stars -->
                  <div class="flex items-center space-x-0.5 text-amber-500 shrink-0">
                    <q-icon
                      v-for="star in 5"
                      :key="star"
                      :name="star <= review.rating ? 'star' : 'star_border'"
                      size="12px"
                    />
                  </div>
                </div>

                <!-- Review Text -->
                <p class="text-xs text-slate-650 leading-relaxed font-semibold">
                  "{{ review.comment }}"
                </p>
              </div>

              <!-- Footer Actions -->
              <div class="flex pt-3 border-t border-slate-100 mt-4">
                <button
                  @click="deleteReview(review.id, review.name)"
                  class="w-full py-2.5 bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-600 border border-rose-100 rounded-xl text-xs font-extrabold cursor-pointer transition-all duration-150 flex items-center justify-center space-x-1.5"
                >
                  <q-icon name="delete" size="16px" />
                  <span>Hapus Ulasan</span>
                </button>
              </div>
            </div>
            <div v-if="store.reviews.length === 0" class="col-span-full p-8 text-center text-slate-400 font-semibold bg-white border border-slate-200 rounded-2xl">
              Belum ada ulasan masuk.
            </div>
          </div>
        </div>

        <!-- TAB PANEL: TUKANG HARIAN -->
        <div v-if="activeTab === 'tukang_harian'" class="space-y-8 w-full">
          <!-- 1. Hero Title & Background Slides -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 class="text-lg font-extrabold text-slate-900 flex items-start sm:items-center flex-nowrap gap-2">
              <q-icon name="campaign" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
              <span class="leading-snug">Headline & Slideshow Background (Hero Banner)</span>
            </h3>

            <div class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Judul Headline Hero</label>
                <input
                  v-model="store.tukangHarianTitle"
                  type="text"
                  required
                  placeholder="Contoh: Semua Perbaikan Rumah Beres..."
                  class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Slide Background Hero</label>
                <div class="space-y-4">
                  <div
                    v-for="(slide, index) in store.tukangHarianSlides"
                    :key="index"
                    class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl relative shadow-xs"
                  >
                    <!-- Delete Button (Top Right absolute) -->
                    <button
                      @click="removeTukangHarianSlide(index)"
                      type="button"
                      class="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg border-none cursor-pointer flex items-center justify-center transition-colors shrink-0"
                      title="Hapus Slide"
                    >
                      <q-icon name="delete" size="18px" />
                    </button>

                    <!-- Preview Image -->
                    <div class="w-32 aspect-video rounded-xl border border-slate-200 bg-white overflow-hidden flex items-center justify-center shrink-0 self-center sm:self-auto shadow-sm">
                      <img :src="slide" class="w-full h-full object-cover" />
                    </div>

                    <!-- Upload and URL -->
                    <div class="flex-grow flex flex-col gap-1.5 pt-4 sm:pt-0">
                      <span class="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Slide {{ index + 1 }}</span>
                      <div class="flex items-center gap-2">
                        <input
                          type="file"
                          accept="image/*"
                          :id="'tukang-harian-upload-' + index"
                          @change="handleTukangHarianSlideUpload($event, index)"
                          class="hidden"
                        />
                        <label
                          :for="'tukang-harian-upload-' + index"
                          class="px-3.5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-xl text-xs font-extrabold flex items-center justify-center space-x-1.5 cursor-pointer shrink-0 transition-colors duration-150 select-none shadow-sm"
                        >
                          <q-icon name="cloud_upload" size="16px" />
                          <span>Ganti Gambar</span>
                        </label>
                        <input
                          v-model="store.tukangHarianSlides[index]"
                          type="text"
                          placeholder="Path gambar..."
                          class="flex-grow px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200 min-w-0"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    @click="addTukangHarianSlide"
                    type="button"
                    class="w-full py-3 bg-red-50 hover:bg-red-100 text-red-600 border border-dashed border-red-200 hover:border-red-300 rounded-2xl text-xs font-bold flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                  >
                    <q-icon name="add" size="16px" />
                    <span>Tambah Slide Baru</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Save button for Hero Banner -->
            <div class="flex justify-end pt-4 border-t border-slate-100">
              <button
                @click="saveTukangHarianData"
                class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
              >
                Simpan Hero Banner
              </button>
            </div>
          </div>

          <!-- 1.5. Titip Beli Material Bangunan -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 class="text-lg font-extrabold text-slate-900 flex items-start sm:items-center flex-nowrap gap-2">
              <q-icon name="shopping_cart" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
              <span class="leading-snug">Titip Beli Material Bangunan</span>
            </h3>

            <div class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Judul Bagian</label>
                <input
                  v-model="store.tukangHarianMaterial.title"
                  type="text"
                  required
                  placeholder="Contoh: Titip Beli Material Bangunan..."
                  class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Deskripsi Subtitle</label>
                <textarea
                  v-model="store.tukangHarianMaterial.subtitle"
                  rows="2"
                  required
                  placeholder="Deskripsi singkat mengenai layanan titip beli..."
                  class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                ></textarea>
              </div>

              <div>
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                  <label class="block text-xs font-bold text-slate-500 uppercase tracking-wide">Fitur Unggulan (Layanan Titip Beli)</label>
                  <button
                    @click="addTukangHarianMaterialFeature"
                    type="button"
                    class="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-[10px] font-bold flex items-center space-x-1 transition-colors cursor-pointer border-none"
                  >
                    <q-icon name="add" size="14px" />
                    <span>Tambah Fitur</span>
                  </button>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    v-for="(feature, idx) in store.tukangHarianMaterial.features"
                    :key="idx"
                    class="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3 relative group"
                  >
                    <!-- Header with title -->
                    <div class="flex justify-between items-center">
                      <span class="text-xs font-extrabold text-red-600 uppercase tracking-wider">Fitur {{ idx + 1 }}</span>
                      <button
                        @click="removeTukangHarianMaterialFeature(idx)"
                        type="button"
                        class="p-1 text-slate-400 hover:text-red-650 bg-transparent border-none cursor-pointer flex items-center justify-center"
                        title="Hapus Fitur"
                      >
                        <q-icon name="delete" size="16px" />
                      </button>
                    </div>

                    <!-- Icon Upload & Preview -->
                    <div class="flex items-center space-x-3.5">
                      <div class="w-12 h-12 rounded-full bg-white border border-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                        <img :src="feature.image" class="w-8 h-8 object-contain" />
                      </div>
                      <div class="flex-1 flex items-center space-x-2">
                        <input
                          type="file"
                          accept="image/*"
                          :id="'material-icon-upload-' + idx"
                          @change="handleTukangHarianMaterialUpload($event, idx)"
                          class="hidden"
                        />
                        <label
                          :for="'material-icon-upload-' + idx"
                          class="px-3 py-2 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-350 text-slate-700 rounded-lg text-[10px] font-extrabold cursor-pointer transition-all duration-200 shadow-sm"
                        >
                          Upload Ikon
                        </label>
                        <input
                          v-model="feature.image"
                          type="text"
                          placeholder="Path..."
                          class="flex-1 px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-900 text-[10px] font-semibold focus:outline-none focus:border-red-500"
                        />
                      </div>
                    </div>

                    <!-- Title & Description Input -->
                    <div class="space-y-2">
                      <input
                        v-model="feature.title"
                        type="text"
                        placeholder="Nama fitur (Mudah, dll)..."
                        class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-bold focus:outline-none focus:border-red-500"
                      />
                      <textarea
                        v-model="feature.desc"
                        rows="2"
                        placeholder="Deskripsi penjelasan..."
                        class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-semibold focus:outline-none focus:border-red-500"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Save button for Material Consignment -->
            <div class="flex justify-end pt-4 border-t border-slate-100">
              <button
                @click="saveTukangHarianData"
                class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
              >
                Simpan Titip Beli Material
              </button>
            </div>
          </div>

          <!-- 1.6. Tukang Jagoan -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
              <h3 class="text-lg font-extrabold text-slate-900 flex items-start sm:items-center flex-nowrap gap-2">
                <q-icon name="star" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
                <span class="leading-snug">Daftar Tukang Jagoan</span>
              </h3>
              <button
                @click="addTukangHarianJagoanItem"
                type="button"
                class="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-colors cursor-pointer border-none"
              >
                <q-icon name="add" size="16px" />
                <span>Tambah Jagoan</span>
              </button>
            </div>

            <div class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Judul Bagian</label>
                <input
                  v-model="store.tukangHarianJagoan.title"
                  type="text"
                  required
                  placeholder="Contoh: Tukang Jagoan..."
                  class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                />
              </div>

              <div class="space-y-4">
                <div
                  v-for="(jagoan, idx) in store.tukangHarianJagoan.list"
                  :key="idx"
                  class="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-4 relative group"
                >
                  <!-- Header with remove button -->
                  <div class="flex justify-between items-center">
                    <span class="text-xs font-extrabold text-red-600 uppercase tracking-wider">Jagoan Ke-{{ idx + 1 }}</span>
                    <button
                      @click="removeTukangHarianJagoanItem(idx)"
                      type="button"
                      class="p-1.5 text-slate-400 hover:text-red-650 bg-transparent border-none cursor-pointer flex items-center justify-center transition-colors"
                      title="Hapus Jagoan"
                    >
                      <q-icon name="delete" size="18px" />
                    </button>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <!-- Left: Image upload and preview -->
                    <div class="md:col-span-4 flex flex-col items-center justify-center border border-dashed border-slate-200 rounded-2xl p-4 bg-white space-y-3">
                      <div class="w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
                        <img :src="jagoan.image" class="w-full h-full object-cover" />
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        :id="'jagoan-image-upload-' + idx"
                        @change="handleTukangHarianJagoanUpload($event, idx)"
                        class="hidden"
                      />
                      <label
                        :for="'jagoan-image-upload-' + idx"
                        class="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-[10px] rounded-lg cursor-pointer transition-colors shadow-sm"
                      >
                        Upload Foto
                      </label>
                    </div>

                    <!-- Right: Title and Description -->
                    <div class="md:col-span-8 space-y-3">
                      <div>
                        <label class="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Nama Jagoan / Layanan</label>
                        <input
                          v-model="jagoan.title"
                          type="text"
                          required
                          placeholder="Contoh: Jagoan Cat..."
                          class="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label class="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Deskripsi Layanan</label>
                        <textarea
                          v-model="jagoan.desc"
                          rows="3"
                          required
                          placeholder="Deskripsi penjelasan apa saja yang ditangani..."
                          class="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Save button for Tukang Jagoan -->
            <div class="flex justify-end pt-4 border-t border-slate-100">
              <button
                @click="saveTukangHarianData"
                class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
              >
                Simpan Tukang Jagoan
              </button>
            </div>
          </div>

          <!-- 1.7. Banyak Jagoan Lainnya (Badges List) -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
              <h3 class="text-lg font-extrabold text-slate-900 flex items-start sm:items-center flex-nowrap gap-2">
                <q-icon name="view_cozy" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
                <span class="leading-snug">Badge Jagoan Lainnya</span>
              </h3>
              <button
                @click="addTukangHarianJagoanLainnyaItem"
                type="button"
                class="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-colors cursor-pointer border-none"
              >
                <q-icon name="add" size="16px" />
                <span>Tambah Badge</span>
              </button>
            </div>

            <div class="space-y-4">
              <div class="text-xs text-slate-500 font-semibold bg-slate-50 border border-slate-100 rounded-xl p-3 leading-relaxed">
                ℹ️ Ikon dan warna latar badge akan dibuat secara otomatis menyesuaikan nama layanan yang Anda input (misalnya mengandung kata "cat", "listrik", "plafon", "pipa", dsb).
              </div>

              <div class="flex flex-wrap gap-2.5">
                <div
                  v-for="(item, idx) in store.tukangHarianJagoanLainnya"
                  :key="idx"
                  class="flex items-center space-x-2 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl group transition-all"
                >
                  <input
                    v-model="item.title"
                    type="text"
                    required
                    placeholder="Nama Jagoan..."
                    class="bg-transparent border-none text-xs font-bold text-slate-800 focus:outline-none focus:ring-0 w-28"
                  />
                  <button
                    @click="removeTukangHarianJagoanLainnyaItem(idx)"
                    type="button"
                    class="p-0.5 text-slate-400 hover:text-red-600 bg-transparent border-none cursor-pointer flex items-center justify-center transition-colors"
                    title="Hapus Badge"
                  >
                    <q-icon name="close" size="14px" />
                  </button>
                </div>
              </div>
            </div>

            <!-- Save button for Jagoan Lainnya -->
            <div class="flex justify-end pt-4 border-t border-slate-100">
              <button
                @click="saveTukangHarianData"
                class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
              >
                Simpan Badge Jagoan
              </button>
            </div>
          </div>

          <!-- 1.8. Customer Support / Tanya Agra -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 class="text-lg font-extrabold text-slate-900 flex items-start sm:items-center flex-nowrap gap-2">
              <q-icon name="support_agent" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
              <span class="leading-snug">Kelola Customer Support (Tanya Agra)</span>
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
              <!-- Left side: Upload illustration / mascot image -->
              <div class="md:col-span-4 flex flex-col items-center justify-center space-y-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <div class="w-full max-w-[150px] aspect-square rounded-2xl overflow-hidden bg-white border border-slate-200 p-2 flex items-center justify-center relative group">
                  <img
                    :src="store.tukangHarianSupport.image || 'images/customer_support.png'"
                    alt="Mascot Support"
                    class="w-full h-full object-contain"
                  />
                </div>
                <div class="text-[10px] text-slate-400 font-bold text-center">Rekomendasi ukuran persegi (1:1) transparan (.png)</div>
                <label class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl cursor-pointer transition-colors">
                  Unggah Maskot Support
                  <input
                    type="file"
                    accept="image/*"
                    class="hidden"
                    @change="uploadSupportMascot"
                  />
                </label>
              </div>

              <!-- Right side: Fields -->
              <div class="md:col-span-8 space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-1.5 md:col-span-2">
                    <label class="text-xs font-extrabold text-slate-700">Judul Utama</label>
                    <input
                      v-model="store.tukangHarianSupport.title"
                      type="text"
                      required
                      placeholder="Masukkan judul..."
                      class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div class="space-y-1.5 md:col-span-2">
                    <label class="text-xs font-extrabold text-slate-700">Subjudul / Deskripsi Pendek</label>
                    <input
                      v-model="store.tukangHarianSupport.subtitle"
                      type="text"
                      required
                      placeholder="Masukkan deskripsi..."
                      class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-extrabold text-slate-700">Nomor WhatsApp / Kontak</label>
                    <input
                      v-model="store.tukangHarianSupport.whatsapp"
                      type="text"
                      required
                      placeholder="+62 821-1307-9456"
                      class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-extrabold text-slate-700">Email Support</label>
                    <input
                      v-model="store.tukangHarianSupport.email"
                      type="email"
                      required
                      placeholder="email@domain.com"
                      class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div class="space-y-1.5 md:col-span-2">
                    <label class="text-xs font-extrabold text-slate-700">Pesan WhatsApp Default</label>
                    <textarea
                      v-model="store.tukangHarianSupport.waMessage"
                      rows="2"
                      required
                      placeholder="Teks default yang dikirim ketika mengeklik tombol WhatsApp..."
                      class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <!-- Save button for Support Info -->
            <div class="flex justify-end pt-4 border-t border-slate-100">
              <button
                @click="saveTukangHarianData"
                class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
              >
                Simpan Info Support
              </button>
            </div>
          </div>

          <!-- 2. Layanan Tambahan (Extra Layanan) -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
              <h3 class="text-lg font-extrabold text-slate-900 m-0 flex items-start sm:items-center flex-nowrap gap-2">
                <q-icon name="dashboard_customize" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
                <span class="leading-snug">Layanan Tambahan (Extra Layanan)</span>
              </h3>
              <button
                @click="openExtraDialog()"
                type="button"
                class="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-colors cursor-pointer border-none"
              >
                <q-icon name="add" size="16px" />
                <span>Tambah Layanan</span>
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto p-2 bg-slate-50 border border-slate-100 rounded-2xl">
              <div
                v-for="(svc, idx) in store.tukangHarianExtra"
                :key="idx"
                class="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between hover:border-slate-350 transition-all duration-300 shadow-sm"
              >
                <div class="flex items-center space-x-3.5 min-w-0">
                  <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white bg-slate-800 shrink-0">
                    <q-icon :name="svc.icon" size="20px" />
                  </div>
                  <div class="min-w-0">
                    <h5 class="text-xs font-extrabold text-[#0B192C] leading-none mb-1">{{ svc.title }}</h5>
                    <p class="text-[10px] text-slate-500 font-semibold truncate">{{ svc.desc }}</p>
                  </div>
                </div>
                <div class="flex items-center space-x-1.5 shrink-0 ml-3">
                  <button
                    @click="openExtraDialog(svc, idx)"
                    type="button"
                    class="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 rounded-lg text-[10px] font-extrabold cursor-pointer border-none transition-all duration-200"
                  >
                    Edit
                  </button>
                  <button
                    @click="removeExtraLayanan(idx)"
                    type="button"
                    class="px-2.5 py-1.5 bg-red-50 hover:bg-red-650 hover:text-white text-red-600 rounded-lg text-[10px] font-extrabold cursor-pointer border-none transition-all duration-200"
                  >
                    Hapus
                  </button>
                </div>
              </div>
              <div v-if="!store.tukangHarianExtra || store.tukangHarianExtra.length === 0" class="col-span-full p-6 text-center text-slate-400 font-semibold text-xs">
                Belum ada layanan tambahan ditambahkan.
              </div>
            </div>

            <!-- Save button for Layanan Tambahan -->
            <div class="flex justify-end pt-4 border-t border-slate-100">
              <button
                @click="saveTukangHarianData"
                class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
              >
                Simpan Layanan Tambahan
              </button>
            </div>
          </div>
        </div>

        <!-- TAB: KELOLA TUKANG BORONGAN -->
        <div v-if="activeTab === 'borongan'" class="space-y-8 w-full">
          <!-- 1. Hero Banner (Slides, Title, Subtitle, WhatsApp Message) -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 class="text-lg font-extrabold text-slate-900 flex items-start sm:items-center flex-nowrap gap-2">
              <q-icon name="view_carousel" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
              <span class="leading-snug">Hero Banner - Tukang Borongan</span>
            </h3>

            <!-- 1.1. Slides List (Carousel images) -->
            <div class="space-y-3">
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-2">
                <label class="text-xs font-extrabold text-slate-700">Foto Slide Background (Carousel)</label>
                <button
                  @click="addBoronganHeroSlide"
                  type="button"
                  class="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-[10px] font-bold flex items-center space-x-1 transition-colors cursor-pointer border-none"
                >
                  <q-icon name="add" size="14px" />
                  <span>Tambah Slide</span>
                </button>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div
                  v-for="(slide, index) in store.boronganHeroSlides"
                  :key="index"
                  class="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group flex items-center justify-center"
                >
                  <img
                    :src="slide || 'images/placeholder.png'"
                    alt="Hero Slide Preview"
                    class="absolute inset-0 w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-black/30 sm:bg-black/40 opacity-100 sm:opacity-0 group-hover:opacity-100 flex items-center justify-center space-x-2 transition-opacity duration-200">
                    <label class="p-2 bg-white/95 hover:bg-white text-slate-800 rounded-full cursor-pointer shadow-md hover:scale-105 transition-transform flex items-center justify-center">
                      <q-icon name="edit" size="16px" />
                      <input
                        type="file"
                        accept="image/*"
                        class="hidden"
                        @change="(e) => uploadBoronganHeroSlide(index, e)"
                      />
                    </label>
                    <button
                      @click="removeBoronganHeroSlide(index)"
                      type="button"
                      class="p-2 bg-white/95 hover:bg-white text-red-600 rounded-full cursor-pointer shadow-md hover:scale-105 transition-transform border-none flex items-center justify-center"
                      title="Hapus Slide"
                    >
                      <q-icon name="delete" size="16px" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- 1.2. Text Fields -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div class="space-y-1.5 md:col-span-12">
                <label class="text-xs font-extrabold text-slate-700">Judul Utama Hero (Mendukung HTML)</label>
                <input
                  v-model="store.boronganHeroTitle"
                  type="text"
                  required
                  placeholder="Masukkan judul hero..."
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>

              <div class="space-y-1.5 md:col-span-12">
                <label class="text-xs font-extrabold text-slate-700">Subjudul / Deskripsi Hero</label>
                <textarea
                  v-model="store.boronganHeroDesc"
                  rows="3"
                  required
                  placeholder="Masukkan deskripsi pendek hero..."
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <div class="space-y-1.5 md:col-span-12">
                <label class="text-xs font-extrabold text-slate-700">Pesan WhatsApp Default (Konsultasi)</label>
                <textarea
                  v-model="store.boronganHeroWaMsg"
                  rows="2"
                  required
                  placeholder="Pesan awal WA untuk tombol Konsultasi..."
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
            </div>

            <!-- Save button for Borongan Hero -->
            <div class="flex justify-end pt-4 border-t border-slate-100">
              <button
                @click="saveBoronganHeroData"
                class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
              >
                Simpan Hero Borongan
              </button>
            </div>
          </div>

          <!-- 2. Solution Banner (Banner Promo/Solusi) -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 class="text-lg font-extrabold text-slate-900 flex items-start sm:items-center flex-nowrap gap-2">
              <q-icon name="image" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
              <span class="leading-snug">Banner Solusi / Promo</span>
            </h3>

            <div class="space-y-3">
              <label class="text-xs font-extrabold text-slate-700">Gambar Banner</label>
              
              <div class="relative max-w-2xl aspect-[21/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group flex items-center justify-center">
                <img
                  :src="store.boronganSolutionBanner || 'images/solusi_banner.jpg'"
                  alt="Solution Banner Preview"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                  <label class="px-4 py-2 bg-white/95 hover:bg-white text-slate-800 rounded-xl cursor-pointer shadow-md hover:scale-105 transition-transform flex items-center space-x-2 font-bold text-xs">
                    <q-icon name="photo_camera" size="18px" />
                    <span>Unggah Banner Baru</span>
                    <input
                      type="file"
                      accept="image/*"
                      class="hidden"
                      @change="uploadBoronganSolutionBanner"
                    />
                  </label>
                </div>
              </div>
              <p class="text-[10px] text-slate-400 font-semibold italic">Rekomendasi rasio banner memanjang (misal: 21:9 atau 16:7) dengan ukuran file di bawah 2MB.</p>
            </div>

            <!-- Save button for Solution Banner -->
            <div class="flex justify-end pt-4 border-t border-slate-100">
              <button
                @click="saveBoronganSolutionBannerData"
                class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
              >
                Simpan Banner Solusi
              </button>
            </div>
          </div>

          <!-- 3. Keuntungan Borongan (Manfaat list editor) -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
              <h3 class="text-lg font-extrabold text-slate-900 flex items-start sm:items-center flex-nowrap gap-2">
                <q-icon name="style" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
                <span class="leading-snug">Manfaat & Keuntungan Borongan</span>
              </h3>
              <button
                @click="addBoronganBenefitItem"
                type="button"
                class="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-[10px] font-bold flex items-center space-x-1 transition-colors cursor-pointer border-none"
              >
                <q-icon name="add" size="14px" />
                <span>Tambah Manfaat</span>
              </button>
            </div>

            <!-- Header Text Fields -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div class="space-y-1.5 md:col-span-12">
                <label class="text-xs font-extrabold text-slate-700">Judul Utama Seksi</label>
                <input
                  v-model="store.boronganBenefitsHeader"
                  type="text"
                  required
                  placeholder="Masukkan judul seksi keuntungan..."
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>

              <div class="space-y-1.5 md:col-span-12">
                <label class="text-xs font-extrabold text-slate-700">Subjudul / Deskripsi Seksi</label>
                <textarea
                  v-model="store.boronganBenefitsDesc"
                  rows="2"
                  required
                  placeholder="Masukkan deskripsi seksi keuntungan..."
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
            </div>

            <!-- List of Benefits -->
            <div class="space-y-4">
              <div
                v-for="(benefit, index) in store.boronganBenefits"
                :key="index"
                class="border border-slate-200 rounded-2xl p-4 bg-slate-50/50 space-y-4 relative"
              >
                <div class="absolute top-4 right-4 flex space-x-2">
                  <button
                    @click="removeBoronganBenefitItem(index)"
                    type="button"
                    class="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg cursor-pointer transition-colors border-none flex items-center justify-center"
                    title="Hapus Manfaat"
                  >
                    <q-icon name="delete" size="16px" />
                  </button>
                </div>

                <div class="text-xs font-extrabold text-red-650">Manfaat #{{ index + 1 }}</div>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <!-- Inputs (Left side) -->
                  <div class="md:col-span-8 space-y-3">
                    <div class="space-y-1.5">
                      <label class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Nama Manfaat</label>
                      <input
                        v-model="benefit.title"
                        type="text"
                        placeholder="Contoh: Harga Transparan..."
                        class="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:border-red-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div class="space-y-1.5">
                      <label class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Deskripsi Singkat</label>
                      <textarea
                        v-model="benefit.desc"
                        rows="2"
                        placeholder="Deskripsi penjelasan manfaat..."
                        class="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:border-red-500 focus:outline-none transition-colors resize-none"
                      ></textarea>
                    </div>

                    </div>

                  <!-- Image upload preview (Right side) -->
                  <div class="md:col-span-4 flex flex-col items-center justify-center space-y-2">
                    <label class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider self-start md:self-center">Foto Preview</label>
                    <div class="relative w-36 aspect-[4/3] rounded-xl overflow-hidden bg-white border border-slate-200 group flex items-center justify-center">
                      <img
                        :src="benefit.image || 'images/harga_transparan_benefit.jpg'"
                        alt="Benefit Image Preview"
                        class="w-full h-full object-cover"
                      />
                      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                        <label class="p-2 bg-white/95 hover:bg-white text-slate-800 rounded-full cursor-pointer shadow-md hover:scale-105 transition-transform flex items-center justify-center">
                          <q-icon name="photo_camera" size="16px" />
                          <input
                            type="file"
                            accept="image/*"
                            class="hidden"
                            @change="(e) => uploadBoronganBenefitImage(index, e)"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Save button for Benefits -->
            <div class="flex justify-end pt-4 border-t border-slate-100">
              <button
                @click="saveBoronganBenefitsData"
                class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
              >
                Simpan Manfaat Borongan
              </button>
            </div>
          </div>

          <!-- 4. Tahap Pelayanan / Alur Pengerjaan (Dynamic step editor) -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
              <h3 class="text-lg font-extrabold text-slate-900 flex items-start sm:items-center flex-nowrap gap-2">
                <q-icon name="route" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
                <span class="leading-snug">Tahap Pelayanan & Alur Kerja</span>
              </h3>
              <button
                @click="addBoronganStepItem"
                type="button"
                class="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-[10px] font-bold flex items-center space-x-1 transition-colors cursor-pointer border-none"
              >
                <q-icon name="add" size="14px" />
                <span>Tambah Tahapan</span>
              </button>
            </div>

            <!-- Header Text Fields -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div class="space-y-1.5 md:col-span-12">
                <label class="text-xs font-extrabold text-slate-700">Judul Utama Seksi</label>
                <input
                  v-model="store.boronganStepsHeader"
                  type="text"
                  required
                  placeholder="Masukkan judul seksi alur..."
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>

              <div class="space-y-1.5 md:col-span-12">
                <label class="text-xs font-extrabold text-slate-700">Subjudul / Deskripsi Seksi</label>
                <textarea
                  v-model="store.boronganStepsDesc"
                  rows="2"
                  required
                  placeholder="Masukkan deskripsi seksi alur..."
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
            </div>

            <!-- List of Steps -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="(step, index) in store.boronganSteps"
                :key="index"
                class="border border-slate-200 rounded-2xl p-4 bg-slate-50/50 space-y-3"
              >
                <div class="flex justify-between items-center relative">
                  <span class="text-xs font-extrabold text-red-650">Tahap {{ step.number || index + 1 }}</span>
                  <button
                    @click="removeBoronganStepItem(index)"
                    type="button"
                    class="p-1 bg-red-50 hover:bg-red-100 text-red-650 rounded-md cursor-pointer transition-colors border-none flex items-center justify-center absolute -top-1 -right-1"
                    title="Hapus Tahapan"
                  >
                    <q-icon name="delete" size="14px" />
                  </button>
                </div>

                <div class="space-y-2.5">
                  <div class="space-y-1.5">
                    <label class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Nama Tahapan</label>
                    <input
                      v-model="step.title"
                      type="text"
                      placeholder="Nama Tahap..."
                      class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Deskripsi Singkat</label>
                    <textarea
                      v-model="step.desc"
                      rows="2"
                      placeholder="Deskripsi penjelasan tahapan..."
                      class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:border-red-500 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <!-- Image upload preview -->
                  <div class="space-y-1.5">
                    <label class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Gambar Ilustrasi</label>
                    <div class="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white border border-slate-200 group flex items-center justify-center">
                      <img
                        :src="step.image || 'images/callcenter.png'"
                        alt="Step Image Preview"
                        class="w-full h-full object-cover"
                      />
                      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                        <label class="p-2 bg-white/95 hover:bg-white text-slate-800 rounded-full cursor-pointer shadow-md hover:scale-105 transition-transform flex items-center justify-center">
                          <q-icon name="photo_camera" size="16px" />
                          <input
                            type="file"
                            accept="image/*"
                            class="hidden"
                            @change="(e) => uploadBoronganStepImage(index, e)"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Save button for Steps -->
            <div class="flex justify-end pt-4 border-t border-slate-100">
              <button
                @click="saveBoronganStepsData"
                class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
              >
                Simpan Alur Pengerjaan
              </button>
            </div>
          </div>

          <!-- 5. Layanan Borongan / Spesialisasi Kami -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
              <h3 class="text-lg font-extrabold text-slate-900 flex items-start sm:items-center flex-nowrap gap-2">
                <q-icon name="construction" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
                <span class="leading-snug">Layanan Spesialisasi Borongan</span>
              </h3>
              <button
                @click="addBoronganSpecialtyItem"
                type="button"
                class="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-[10px] font-bold flex items-center space-x-1 transition-colors cursor-pointer border-none"
              >
                <q-icon name="add" size="14px" />
                <span>Tambah Spesialisasi</span>
              </button>
            </div>

            <!-- Header Text Fields -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div class="space-y-1.5 md:col-span-12">
                <label class="text-xs font-extrabold text-slate-700">Judul Utama Seksi</label>
                <input
                  v-model="store.boronganSpecialtiesHeader"
                  type="text"
                  required
                  placeholder="Masukkan judul seksi layanan..."
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>

              <div class="space-y-1.5 md:col-span-12">
                <label class="text-xs font-extrabold text-slate-700">Subjudul / Deskripsi Seksi</label>
                <textarea
                  v-model="store.boronganSpecialtiesDesc"
                  rows="2"
                  required
                  placeholder="Masukkan deskripsi seksi layanan..."
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
            </div>

            <!-- List of Specialties -->
            <div class="space-y-4">
              <div
                v-for="(spec, index) in store.boronganSpecialties"
                :key="index"
                class="border border-slate-200 rounded-2xl p-4 bg-slate-50/50 space-y-4 relative"
              >
                <div class="absolute top-4 right-4 flex space-x-2">
                  <button
                    @click="removeBoronganSpecialtyItem(index)"
                    type="button"
                    class="p-1.5 bg-red-50 hover:bg-red-100 text-red-650 rounded-lg cursor-pointer transition-colors border-none flex items-center justify-center"
                    title="Hapus Spesialisasi"
                  >
                    <q-icon name="delete" size="16px" />
                  </button>
                </div>

                <div class="text-xs font-extrabold text-red-650">Layanan #{{ index + 1 }}</div>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div class="md:col-span-12 space-y-3">
                    <div class="space-y-1.5">
                      <label class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Nama Layanan Spesialisasi</label>
                      <input
                        v-model="spec.title"
                        type="text"
                        placeholder="Contoh: Bangun Rumah & Ruko Baru..."
                        class="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:border-red-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div class="space-y-1.5">
                      <label class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Deskripsi Layanan</label>
                      <textarea
                        v-model="spec.desc"
                        rows="2"
                        placeholder="Deskripsi penjelasan rinci layanan..."
                        class="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:border-red-500 focus:outline-none transition-colors resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Save button for Specialties -->
            <div class="flex justify-end pt-4 border-t border-slate-100">
              <button
                @click="saveBoronganSpecialtiesData"
                class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
              >
                Simpan Spesialisasi Borongan
              </button>
            </div>
          </div>

          <!-- 6. Area Pekerjaan / Layanan Kebutuhan Rumah (Accordion editor) -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
              <h3 class="text-lg font-extrabold text-slate-900 flex items-start sm:items-center flex-nowrap gap-2">
                <q-icon name="home_work" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
                <span class="leading-snug">Area Pekerjaan Borongan</span>
              </h3>
              <button
                @click="addBoronganAreaItem"
                type="button"
                class="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-[10px] font-bold flex items-center space-x-1 transition-colors cursor-pointer border-none"
              >
                <q-icon name="add" size="14px" />
                <span>Tambah Area</span>
              </button>
            </div>

            <!-- Header Text Fields -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div class="space-y-1.5 md:col-span-12">
                <label class="text-xs font-extrabold text-slate-700">Judul Utama Seksi</label>
                <input
                  v-model="store.boronganAreasHeader"
                  type="text"
                  required
                  placeholder="Masukkan judul seksi area pekerjaan..."
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <!-- List of Areas -->
            <div class="space-y-6">
              <div
                v-for="(area, index) in store.boronganAreas"
                :key="index"
                class="border border-slate-200 rounded-2xl p-5 bg-slate-50/50 space-y-4 relative"
              >
                <div class="absolute top-4 right-4 flex space-x-2">
                  <button
                    @click="removeBoronganAreaItem(index)"
                    type="button"
                    class="p-1.5 bg-red-50 hover:bg-red-100 text-red-650 rounded-lg cursor-pointer transition-colors border-none flex items-center justify-center"
                    title="Hapus Area"
                  >
                    <q-icon name="delete" size="16px" />
                  </button>
                </div>

                <div class="text-xs font-extrabold text-red-650">Area #{{ index + 1 }}</div>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-5">
                  <!-- Inputs (Left side) -->
                  <div class="md:col-span-8 space-y-4">
                    <div class="space-y-1.5">
                      <label class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Nama Area Pekerjaan</label>
                      <input
                        v-model="area.title"
                        type="text"
                        placeholder="Contoh: Area Atap & Plafon..."
                        class="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:border-red-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div class="space-y-1.5">
                      <label class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Deskripsi Singkat</label>
                      <textarea
                        v-model="area.desc"
                        rows="2"
                        placeholder="Deskripsi penjelasan area..."
                        class="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:border-red-500 focus:outline-none transition-colors resize-none"
                      ></textarea>
                    </div>

                    <!-- Bullet items manager -->
                    <div class="space-y-2">
                      <label class="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Poin Detail Pekerjaan</label>
                      <div class="space-y-2 max-h-56 overflow-y-auto pr-1">
                        <div v-for="(bullet, bIdx) in area.bullets" :key="bIdx" class="flex items-center space-x-2">
                          <span class="text-[10px] font-bold text-slate-400">0{{ bIdx + 1 }}</span>
                          <input
                            v-model="area.bullets[bIdx]"
                            type="text"
                            placeholder="Tulis poin detail..."
                            class="flex-grow px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:border-red-500 focus:outline-none"
                          />
                          <button
                            @click="removeBoronganAreaBullet(index, bIdx)"
                            type="button"
                            class="p-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg border-none cursor-pointer flex items-center justify-center"
                            title="Hapus Poin"
                          >
                            <q-icon name="delete" size="14px" />
                          </button>
                        </div>
                      </div>
                      <button
                        @click="addBoronganAreaBullet(index)"
                        type="button"
                        class="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-650 rounded-lg text-[10px] font-bold border-none cursor-pointer flex items-center space-x-1 mt-1 transition-colors"
                      >
                        <q-icon name="add" size="12px" />
                        <span>Tambah Poin Detail</span>
                      </button>
                    </div>
                  </div>

                  <!-- Image upload preview (Right side) -->
                  <div class="md:col-span-4 flex flex-col items-center justify-center space-y-2">
                    <label class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider self-start md:self-center">Foto Cover Ilustrasi</label>
                    <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-200 group flex items-center justify-center shadow-sm">
                      <img
                        :src="area.image || 'images/plafon.png'"
                        alt="Area Image Preview"
                        class="w-full h-full object-cover"
                      />
                      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                        <label class="p-2.5 bg-white/95 hover:bg-white text-slate-800 rounded-full cursor-pointer shadow-md hover:scale-105 transition-transform flex items-center justify-center">
                          <q-icon name="photo_camera" size="18px" />
                          <input
                            type="file"
                            accept="image/*"
                            class="hidden"
                            @change="(e) => uploadBoronganAreaImage(index, e)"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Save button for Areas -->
            <div class="flex justify-end pt-4 border-t border-slate-100">
              <button
                @click="saveBoronganAreasData"
                class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
              >
                Simpan Area Pekerjaan
              </button>
            </div>
          </div>

          <!-- 7. Proses Pemesanan Borongan -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
              <h3 class="text-lg font-extrabold text-slate-900 flex items-start sm:items-center flex-nowrap gap-2">
                <q-icon name="view_list" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
                <span class="leading-snug">Proses Pemesanan Borongan</span>
              </h3>
              <button
                @click="addBoronganOrderStep"
                type="button"
                class="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-[10px] font-bold flex items-center space-x-1 transition-colors cursor-pointer border-none"
              >
                <q-icon name="add" size="14px" />
                <span>Tambah Langkah</span>
              </button>
            </div>

            <!-- Header Text Fields -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div class="space-y-1.5 md:col-span-12">
                <label class="text-xs font-extrabold text-slate-700">Judul Utama Seksi (Mendukung HTML)</label>
                <input
                  v-model="store.boronganOrderHeader"
                  type="text"
                  required
                  placeholder="Masukkan judul seksi proses pemesanan..."
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <!-- List of Order Steps -->
            <div class="space-y-4">
              <div
                v-for="(step, index) in store.boronganOrderSteps"
                :key="index"
                class="border border-slate-200 rounded-2xl p-4 bg-slate-50/50 space-y-4 relative"
              >
                <div class="absolute top-4 right-4 flex space-x-2">
                  <button
                    @click="removeBoronganOrderStep(index)"
                    type="button"
                    class="p-1.5 bg-red-50 hover:bg-red-100 text-red-650 rounded-lg cursor-pointer transition-colors border-none flex items-center justify-center"
                    title="Hapus Langkah"
                  >
                    <q-icon name="delete" size="16px" />
                  </button>
                </div>

                <div class="text-xs font-extrabold text-red-650">Langkah #{{ index + 1 }}</div>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div class="md:col-span-12 space-y-3">
                    <div class="space-y-1.5">
                      <label class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Nama Langkah</label>
                      <input
                        v-model="step.title"
                        type="text"
                        placeholder="Contoh: Pemesanan..."
                        class="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:border-red-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div class="space-y-1.5">
                      <label class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Deskripsi Langkah</label>
                      <textarea
                        v-model="step.desc"
                        rows="2"
                        placeholder="Deskripsi penjelasan langkah pemesanan..."
                        class="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:border-red-500 focus:outline-none transition-colors resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Save button for Order Steps -->
            <div class="flex justify-end pt-4 border-t border-slate-100">
              <button
                @click="saveBoronganOrderData"
                class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
              >
                Simpan Proses Pemesanan
              </button>
            </div>
          </div>

          <!-- 8. Layanan Customer Support / Hubungi Kami -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 class="text-lg font-extrabold text-slate-900 flex items-start sm:items-center flex-nowrap gap-2">
              <q-icon name="support_agent" class="text-red-500 flex-shrink-0" size="22px" style="margin-top: 2px;" />
              <span class="leading-snug">Layanan Customer Support Borongan</span>
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-5">
              <!-- Left side: Text Inputs (8 columns) -->
              <div class="md:col-span-8 space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-xs font-extrabold text-slate-700">Judul Utama Seksi</label>
                    <input
                      v-model="store.boronganSupport.title"
                      type="text"
                      placeholder="Butuh Bantuan? Hubungi Kami Sekarang!"
                      class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-extrabold text-slate-700">Kategori / Label</label>
                    <input
                      v-model="store.boronganSupport.subtitle"
                      type="text"
                      placeholder="LAYANAN CUSTOMER"
                      class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div class="space-y-1.5">
                  <label class="text-xs font-extrabold text-slate-700">Balon Kata Maskot</label>
                  <textarea
                    v-model="store.boronganSupport.bubbleText"
                    rows="2"
                    placeholder="Tulis ucapan selamat datang maskot..."
                    class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-xs font-extrabold text-slate-700">Telepon (Tampilan)</label>
                    <input
                      v-model="store.boronganSupport.phone"
                      type="text"
                      placeholder="(+62) 856 9566 0902"
                      class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-extrabold text-slate-700">Telepon Raw (Link dial)</label>
                    <input
                      v-model="store.boronganSupport.phoneRaw"
                      type="text"
                      placeholder="6282113079456"
                      class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-extrabold text-slate-700">E-mail</label>
                    <input
                      v-model="store.boronganSupport.email"
                      type="email"
                      placeholder="agraabhinayaadm@gmail.com"
                      class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-xs font-extrabold text-slate-700">WhatsApp (Tampilan)</label>
                    <input
                      v-model="store.boronganSupport.whatsapp"
                      type="text"
                      placeholder="+62 821-1307-9456"
                      class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-extrabold text-slate-700">WhatsApp Raw (Nomor HP)</label>
                    <input
                      v-model="store.boronganSupport.whatsappRaw"
                      type="text"
                      placeholder="6282113079456"
                      class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-extrabold text-slate-700">Pesan Awal WhatsApp</label>
                    <input
                      v-model="store.boronganSupport.waMessage"
                      type="text"
                      placeholder="Halo Agra, saya butuh bantuan..."
                      class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <!-- Right side: Mascot Image Upload (4 columns) -->
              <div class="md:col-span-4 flex flex-col items-center justify-center space-y-2">
                <label class="text-xs font-extrabold text-slate-700 self-start md:self-center">Ilustrasi Maskot</label>
                <div class="relative w-full max-w-[200px] aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-slate-200 group flex items-center justify-center shadow-sm">
                  <img
                    :src="store.boronganSupport.image || 'images/mascot_illustration.jpg'"
                    alt="Mascot Preview"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                    <label class="p-2.5 bg-white/95 hover:bg-white text-slate-800 rounded-full cursor-pointer shadow-md hover:scale-105 transition-transform flex items-center justify-center">
                      <q-icon name="photo_camera" size="18px" />
                      <input
                        type="file"
                        accept="image/*"
                        class="hidden"
                        @change="uploadBoronganSupportMascot"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Save button for Support -->
            <div class="flex justify-end pt-4 border-t border-slate-100">
              <button
                @click="saveBoronganSupportData"
                class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
              >
                Simpan Customer Support
              </button>
            </div>
          </div>
        </div>

        <!-- ========================================== -->
        <!-- TAB 9: KELOLA TUKANG KONSTRUKSI           -->
        <!-- ========================================== -->
        <div v-if="activeTab === 'konstruksi'" class="space-y-8 w-full">
          <!-- 1. Hero Headline & Video Slideshow -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 class="text-lg font-extrabold text-slate-900 flex items-center flex-nowrap">
              <q-icon name="campaign" class="text-emerald-700 mr-2 flex-shrink-0" size="22px" />
              <span>Headline & Video Slideshow (Hero Banner)</span>
            </h3>

            <div class="space-y-6">
              <div
                v-for="(slide, index) in store.konstruksiHeroSlides"
                :key="index"
                class="p-4 bg-slate-50 rounded-2xl border border-slate-150 relative space-y-4"
              >
                <div class="flex justify-between items-center">
                  <span class="text-xs font-black text-emerald-800 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-md">Slide {{ index + 1 }}</span>
                  <button
                    @click="removeKonstruksiSlide(index)"
                    class="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg border-none cursor-pointer"
                  >
                    <q-icon name="delete" size="18px" />
                  </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase">Judul Slide</label>
                    <input
                      v-model="slide.title"
                      type="text"
                      placeholder="Masukkan judul slide..."
                      class="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase">Slide Name (ID Unik)</label>
                    <input
                      v-model="slide.name"
                      type="text"
                      placeholder="Contoh: video1..."
                      class="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase">Deskripsi Slide</label>
                  <textarea
                    v-model="slide.desc"
                    rows="2"
                    placeholder="Masukkan deskripsi slide..."
                    class="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                  ></textarea>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Video Slide (File MP4)</label>
                  <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <video
                      v-if="slide.src"
                      :src="slide.src"
                      controls
                      muted
                      class="w-32 aspect-video rounded-xl bg-black border border-slate-200"
                    ></video>
                    <div class="flex-1 flex flex-col gap-2">
                      <div class="flex items-center gap-3">
                        <input
                          type="file"
                          accept="video/*"
                          :id="'konstruksi-slide-upload-' + index"
                          @change="handleKonstruksiSlideVideoUpload($event, index)"
                          class="hidden"
                        />
                        <label
                          :for="'konstruksi-slide-upload-' + index"
                          class="px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-350 text-slate-700 rounded-xl text-[11px] font-extrabold flex items-center space-x-2 cursor-pointer transition-all duration-200 select-none shadow-sm"
                        >
                          <q-icon name="movie" size="16px" />
                          <span>Ganti Video (Max 15MB)</span>
                        </label>
                      </div>
                      <input
                        v-model="slide.src"
                        type="text"
                        placeholder="Path / URL Video..."
                        class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-semibold focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-between items-center pt-2">
                <button
                  @click="addKonstruksiSlide"
                  class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer"
                >
                  + Tambah Slide
                </button>

                <button
                  @click="saveKonstruksiData('Headline dan Slide Banner')"
                  class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
                >
                  Simpan Headline & Slides
                </button>
              </div>
            </div>
          </div>

          <!-- 2. Solusi Statement Editor -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 class="text-lg font-extrabold text-slate-900 flex items-center flex-nowrap">
              <q-icon name="lightbulb" class="text-emerald-700 mr-2 flex-shrink-0" size="22px" />
              <span>Pernyataan Solusi (Floating Solution Card)</span>
            </h3>

            <div class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Pernyataan Solusi (Mendukung HTML)</label>
                <textarea
                  v-model="store.konstruksiSolutionTitle"
                  rows="3"
                  class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                ></textarea>
                <div class="text-[11px] text-slate-400 font-semibold mt-1">
                  * Tip: Anda dapat menggunakan tag HTML seperti <code class="bg-slate-100 px-1 py-0.5 rounded text-red-600">&lt;span class="text-red-600 font-black"&gt;teks&lt;/span&gt;</code> untuk memberi warna merah premium pada tulisan.
                </div>
              </div>

              <div class="flex justify-end pt-2">
                <button
                  @click="saveKonstruksiData('Pernyataan Solusi')"
                  class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
                >
                  Simpan Pernyataan Solusi
                </button>
              </div>
            </div>
          </div>

          <!-- 3. Jagoan Konstruksi Services CRUD -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 class="text-lg font-extrabold text-slate-900 flex items-center flex-nowrap">
              <q-icon name="engineering" class="text-emerald-700 mr-2 flex-shrink-0" size="22px" />
              <span>Kelola Jagoan Konstruksi (Daftar Layanan Utama)</span>
            </h3>

            <div class="space-y-6">
              <div>
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Judul Seksi Jagoan Konstruksi</label>
                <input
                  v-model="store.konstruksiServicesTitle"
                  type="text"
                  class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div class="space-y-4">
                <label class="block text-xs font-bold text-slate-500 uppercase">Daftar Layanan Jagoan</label>
                
                <div
                  v-for="(service, idx) in store.konstruksiServices"
                  :key="idx"
                  class="p-4 bg-slate-50 rounded-2xl border border-slate-150 space-y-4 relative"
                >
                  <div class="flex justify-between items-center">
                    <span class="text-xs font-black text-emerald-800 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-md">Layanan {{ idx + 1 }}</span>
                    <button
                      @click="removeKonstruksiService(idx)"
                      class="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg border-none cursor-pointer"
                    >
                      <q-icon name="delete" size="18px" />
                    </button>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-4">
                      <div>
                        <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase">Nama Layanan</label>
                        <input
                          v-model="service.title"
                          type="text"
                          class="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                        />
                      </div>
                      <div>
                        <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase">Deskripsi Layanan</label>
                        <textarea
                          v-model="service.desc"
                          rows="3"
                          class="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                        ></textarea>
                      </div>
                    </div>

                    <div>
                      <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Foto Sampul Layanan</label>
                      <div class="flex flex-col items-start gap-4">
                        <div class="w-full max-w-[280px] aspect-[16/10] rounded-2xl overflow-hidden bg-slate-200 border border-slate-300">
                          <img :src="service.image || 'images/cut fil.jpg'" class="w-full h-full object-cover" />
                        </div>
                        <div class="flex items-center gap-3 w-full">
                          <input
                            type="file"
                            accept="image/*"
                            :id="'konstruksi-service-upload-' + idx"
                            @change="handleKonstruksiServiceImageUpload($event, idx)"
                            class="hidden"
                          />
                          <label
                            :for="'konstruksi-service-upload-' + idx"
                            class="px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-350 text-slate-700 rounded-xl text-[11px] font-extrabold flex items-center space-x-2 cursor-pointer transition-all duration-200 select-none shadow-sm"
                          >
                            <q-icon name="image" size="16px" />
                            <span>Ganti Foto (Upload)</span>
                          </label>
                          <input
                            v-model="service.image"
                            type="text"
                            placeholder="Path gambar..."
                            class="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-semibold focus:outline-none focus:border-emerald-600"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-between items-center pt-2">
                <button
                  @click="addKonstruksiService"
                  class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer"
                >
                  + Tambah Layanan
                </button>

                <button
                  @click="saveKonstruksiData('Jagoan Konstruksi')"
                  class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
                >
                  Simpan Jagoan Konstruksi
                </button>
              </div>
            </div>
          </div>

          <!-- 4. Standar Keamanan & Mutu Editor -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 class="text-lg font-extrabold text-slate-900 flex items-center flex-nowrap">
              <q-icon name="verified_user" class="text-emerald-700 mr-2 flex-shrink-0" size="22px" />
              <span>Kelola Standar Keamanan & Mutu Kerja</span>
            </h3>

            <div class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Kategori Kecil (Label)</label>
                  <input
                    v-model="store.konstruksiStandardsHeader"
                    type="text"
                    class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Judul Seksi (Mendukung HTML)</label>
                  <input
                    v-model="store.konstruksiStandardsTitle"
                    type="text"
                    class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Deskripsi Penjelasan</label>
                <textarea
                  v-model="store.konstruksiStandardsDesc"
                  rows="2"
                  class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                ></textarea>
              </div>

              <div class="space-y-4 pt-4 border-t border-slate-100">
                <label class="block text-xs font-black text-slate-500 uppercase">Tiga Kartu Standar Kerja</label>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div
                    v-for="(card, cardIdx) in store.konstruksiStandardsCards"
                    :key="cardIdx"
                    class="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3"
                  >
                    <span class="text-[10px] font-black text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded uppercase">Kartu {{ cardIdx + 1 }}</span>
                    
                    <div>
                      <label class="block text-[10px] font-bold text-slate-500 mb-1">Ikon Google Material (Nama)</label>
                      <input
                        v-model="card.icon"
                        type="text"
                        placeholder="Contoh: biotech, grid_goldenratio..."
                        class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-semibold focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label class="block text-[10px] font-bold text-slate-500 mb-1">Tag (Kategori kecil)</label>
                      <input
                        v-model="card.tag"
                        type="text"
                        class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-semibold focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label class="block text-[10px] font-bold text-slate-500 mb-1">Judul Kartu</label>
                      <input
                        v-model="card.title"
                        type="text"
                        class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-semibold focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label class="block text-[10px] font-bold text-slate-500 mb-1">Keterangan / Deskripsi</label>
                      <textarea
                        v-model="card.desc"
                        rows="3"
                        class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-semibold focus:outline-none focus:border-emerald-600"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-end pt-2">
                <button
                  @click="saveKonstruksiData('Standar Keamanan dan Mutu')"
                  class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
                >
                  Simpan Standar Kerja
                </button>
              </div>
            </div>
          </div>

          <!-- 5. Alur Kerja Timeline Editor -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 class="text-lg font-extrabold text-slate-900 flex items-center flex-nowrap">
              <q-icon name="route" class="text-emerald-700 mr-2 flex-shrink-0" size="22px" />
              <span>Kelola Alur Kerja & Timeline Eksekusi</span>
            </h3>

            <div class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Kategori (Header)</label>
                  <input
                    v-model="store.konstruksiStepsHeader"
                    type="text"
                    class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Judul Seksi</label>
                  <input
                    v-model="store.konstruksiStepsTitle"
                    type="text"
                    class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Keterangan Singkat</label>
                  <input
                    v-model="store.konstruksiStepsDesc"
                    type="text"
                    class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div class="space-y-4">
                <label class="block text-xs font-black text-slate-500 uppercase">Daftar Langkah Alur Kerja</label>

                <div
                  v-for="(step, idx) in store.konstruksiSteps"
                  :key="idx"
                  class="p-4 bg-slate-50 rounded-2xl border border-slate-150 space-y-4 relative"
                >
                  <div class="flex justify-between items-center">
                    <span class="text-xs font-black text-emerald-800 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-md">Langkah {{ idx + 1 }}</span>
                    <button
                      @click="removeKonstruksiStep(idx)"
                      class="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg border-none cursor-pointer"
                    >
                      <q-icon name="delete" size="18px" />
                    </button>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-4">
                      <div class="grid grid-cols-3 gap-2">
                        <div class="col-span-1">
                          <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase">Urutan (No)</label>
                          <input
                            v-model.number="step.number"
                            type="number"
                            class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                          />
                        </div>
                        <div class="col-span-2">
                          <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase">Nama Langkah</label>
                          <input
                            v-model="step.title"
                            type="text"
                            class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase">Deskripsi Penjelasan</label>
                        <textarea
                          v-model="step.desc"
                          rows="3"
                          class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                        ></textarea>
                      </div>
                    </div>

                    <div>
                      <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Ilustrasi Pengerjaan (Gambar)</label>
                      <div class="flex flex-col items-start gap-4">
                        <div class="w-24 h-24 rounded-2xl overflow-hidden bg-slate-200 border border-slate-350 flex items-center justify-center">
                          <img :src="step.image || 'images/callcenter.png'" class="w-full h-full object-cover" />
                        </div>
                        <div class="flex items-center gap-3 w-full">
                          <input
                            type="file"
                            accept="image/*"
                            :id="'konstruksi-step-upload-' + idx"
                            @change="handleKonstruksiStepImageUpload($event, idx)"
                            class="hidden"
                          />
                          <label
                            :for="'konstruksi-step-upload-' + idx"
                            class="px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-350 text-slate-700 rounded-xl text-[11px] font-extrabold flex items-center space-x-2 cursor-pointer transition-all duration-200 select-none shadow-sm"
                          >
                            <q-icon name="image" size="16px" />
                            <span>Ganti Gambar (Upload)</span>
                          </label>
                          <input
                            v-model="step.image"
                            type="text"
                            placeholder="Path gambar..."
                            class="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-semibold focus:outline-none focus:border-emerald-600"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-between items-center pt-2">
                <button
                  @click="addKonstruksiStep"
                  class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer"
                >
                  + Tambah Langkah
                </button>

                <button
                  @click="saveKonstruksiData('Alur Kerja')"
                  class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
                >
                  Simpan Alur Kerja
                </button>
              </div>
            </div>
          </div>

          <!-- 6. Video Dokumentasi Reels CRUD -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 class="text-lg font-extrabold text-slate-900 flex items-center flex-nowrap">
              <q-icon name="video_library" class="text-emerald-700 mr-2 flex-shrink-0" size="22px" />
              <span>Kelola Galeri Video Dokumentasi (Format Reels 9:16)</span>
            </h3>

            <div class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Kategori Kiri (Header)</label>
                  <input
                    v-model="store.konstruksiVideosHeader"
                    type="text"
                    class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Judul Seksi Utama</label>
                  <input
                    v-model="store.konstruksiVideosTitle"
                    type="text"
                    class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Sub-headline (Teks Abu-abu)</label>
                  <input
                    v-model="store.konstruksiVideosSubtitle"
                    type="text"
                    class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Keterangan Singkat</label>
                  <input
                    v-model="store.konstruksiVideosDesc"
                    type="text"
                    class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div class="space-y-4">
                <label class="block text-xs font-black text-slate-500 uppercase">Daftar Video Reels Proyek</label>

                <div
                  v-for="(video, idx) in store.konstruksiVideos"
                  :key="idx"
                  class="p-4 bg-slate-50 rounded-2xl border border-slate-150 space-y-4 relative"
                >
                  <div class="flex justify-between items-center">
                    <span class="text-xs font-black text-emerald-800 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-md">Video {{ idx + 1 }}</span>
                    <button
                      @click="removeKonstruksiVideo(idx)"
                      class="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg border-none cursor-pointer"
                    >
                      <q-icon name="delete" size="18px" />
                    </button>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="space-y-3">
                      <div>
                        <label class="block text-[10px] font-bold text-slate-500 mb-1 uppercase">Judul Awal (Header)</label>
                        <input
                          v-model="video.titleHeader"
                          type="text"
                          placeholder="Contoh: Pekerjaan..."
                          class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-semibold focus:outline-none focus:border-emerald-600"
                        />
                      </div>
                      <div>
                        <label class="block text-[10px] font-bold text-slate-500 mb-1 uppercase">Judul Sorot (Highlight)</label>
                        <input
                          v-model="video.titleHighlight"
                          type="text"
                          placeholder="Contoh: Cut & Fill..."
                          class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-semibold focus:outline-none focus:border-emerald-600"
                        />
                      </div>
                      <div>
                        <label class="block text-[10px] font-bold text-slate-500 mb-1 uppercase">Tag Video</label>
                        <input
                          v-model="video.tag"
                          type="text"
                          placeholder="Contoh: Jagoan Cut & Fill..."
                          class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-semibold focus:outline-none focus:border-emerald-600"
                        />
                      </div>
                    </div>

                    <div class="space-y-3">
                      <div>
                        <label class="block text-[10px] font-bold text-slate-500 mb-1 uppercase">Ikon Layanan (Material Icon)</label>
                        <input
                          v-model="video.icon"
                          type="text"
                          placeholder="Contoh: terrain, texture, waves..."
                          class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-semibold focus:outline-none focus:border-emerald-600"
                        />
                      </div>
                      <div>
                        <label class="block text-[10px] font-bold text-slate-500 mb-1 uppercase">Penjelasan Singkat</label>
                        <textarea
                          v-model="video.desc"
                          rows="3"
                          class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-semibold focus:outline-none focus:border-emerald-600"
                        ></textarea>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <div>
                        <label class="block text-[10px] font-bold text-slate-500 mb-1 uppercase">File Video (Reels MP4)</label>
                        <div class="flex flex-col gap-2">
                          <input
                            type="file"
                            accept="video/*"
                            :id="'konstruksi-reels-upload-' + idx"
                            @change="handleKonstruksiReelsVideoUpload($event, idx)"
                            class="hidden"
                          />
                          <label
                            :for="'konstruksi-reels-upload-' + idx"
                            class="px-3 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-lg text-[10px] font-extrabold flex items-center justify-center space-x-1 cursor-pointer select-none"
                          >
                            <q-icon name="movie" size="14px" />
                            <span>Upload Video (Max 15MB)</span>
                          </label>
                          <input
                            v-model="video.src"
                            type="text"
                            placeholder="URL Video..."
                            class="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-900 text-[11px] font-semibold focus:outline-none focus:border-emerald-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label class="block text-[10px] font-bold text-slate-500 mb-1 uppercase">Thumbnail (Foto Cover)</label>
                        <div class="flex items-center gap-2">
                          <input
                            type="file"
                            accept="image/*"
                            :id="'konstruksi-reels-thumb-upload-' + idx"
                            @change="handleKonstruksiReelsThumbUpload($event, idx)"
                            class="hidden"
                          />
                          <label
                            :for="'konstruksi-reels-thumb-upload-' + idx"
                            class="p-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs cursor-pointer"
                          >
                            <q-icon name="image" size="16px" />
                          </label>
                          <input
                            v-model="video.thumbnail"
                            type="text"
                            placeholder="URL thumbnail..."
                            class="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-900 text-[11px] font-semibold focus:outline-none focus:border-emerald-600"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-between items-center pt-2">
                <button
                  @click="addKonstruksiVideo"
                  class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer"
                >
                  + Tambah Video
                </button>

                <button
                  @click="saveKonstruksiData('Galeri Video')"
                  class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
                >
                  Simpan Galeri Video
                </button>
              </div>
            </div>
          </div>

          <!-- 7. Customer Support Editor -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 class="text-lg font-extrabold text-slate-900 flex items-center flex-nowrap">
              <q-icon name="headset_mic" class="text-emerald-700 mr-2 flex-shrink-0" size="22px" />
              <span>Layanan Customer Support & Kontak Tanya Agra</span>
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
              <!-- Left side: Mascot & Upload -->
              <div class="col-span-1 md:col-span-4 flex flex-col items-center justify-center space-y-4">
                <label class="block text-xs font-bold text-slate-500 uppercase tracking-wide">Ilustrasi Maskot</label>
                <div class="w-48 h-48 rounded-[36px] overflow-hidden bg-slate-100 border border-slate-350 p-2 flex items-center justify-center">
                  <img :src="store.konstruksiSupport.image || 'images/customer_support.png'" class="w-full h-full object-contain" />
                </div>

                <div class="flex items-center space-x-3 w-full justify-center">
                  <input
                    type="file"
                    accept="image/*"
                    id="konstruksi-support-mascot-upload"
                    @change="handleKonstruksiSupportMascotUpload"
                    class="hidden"
                  />
                  <label
                    for="konstruksi-support-mascot-upload"
                    class="px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-350 text-slate-700 rounded-xl text-[11px] font-extrabold flex items-center space-x-2 cursor-pointer transition-all duration-200 select-none shadow-sm"
                  >
                    <q-icon name="cloud_upload" size="16px" />
                    <span>Unggah Maskot</span>
                  </label>
                </div>
              </div>

              <!-- Right side: Form Fields -->
              <div class="col-span-1 md:col-span-8 space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Judul (Balon Teks)</label>
                    <input
                      v-model="store.konstruksiSupport.title"
                      type="text"
                      class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Subtitle (Keterangan kecil)</label>
                    <input
                      v-model="store.konstruksiSupport.subtitle"
                      type="text"
                      class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Balon Kata Teks Bubble (Di Atas Maskot)</label>
                  <textarea
                    v-model="store.konstruksiSupport.bubbleText"
                    rows="2"
                    class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                  ></textarea>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">WhatsApp (Tampilan Teks)</label>
                    <input
                      v-model="store.konstruksiSupport.whatsapp"
                      type="text"
                      class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">WhatsApp Raw (Angka Saja - Contoh: 6282113079456)</label>
                    <input
                      v-model="store.konstruksiSupport.whatsappRaw"
                      type="text"
                      class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">WhatsApp Default Template Pesan Chat</label>
                  <input
                    v-model="store.konstruksiSupport.waMessage"
                    type="text"
                    class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Telepon Call Center</label>
                    <input
                      v-model="store.konstruksiSupport.phone"
                      type="text"
                      class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-500 mb-2 uppercase">Email Support</label>
                    <input
                      v-model="store.konstruksiSupport.email"
                      type="email"
                      class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-end pt-2 border-t border-slate-100">
              <button
                @click="saveKonstruksiSupportData"
                class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
              >
                Simpan Customer Support
              </button>
            </div>
          </div>
        </div>
        <!-- Floating Back to Top Button -->
        <button
          @click="scrollToTop"
          class="fixed bottom-6 right-6 z-[999] w-12 h-12 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer select-none hover:-translate-y-1 hover:scale-105 active:scale-95"
          :class="showBackToTop ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-4 scale-75 pointer-events-none'"
          aria-label="Kembali ke atas"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
          </div>
      </main>
      </div>
    </div>

    <!-- DIALOG: CUSTOM CONFIRMATION MODAL -->
    <q-dialog v-model="confirmDialog.show" persistent backdrop-filter="blur(4px)">
      <q-card class="bg-white border border-slate-200 text-slate-800 rounded-3xl w-full max-w-sm p-6 shadow-2xl overflow-hidden relative">
        <div class="flex flex-col items-center text-center space-y-4 pt-2">
          <!-- Warning Alert Icon with glow -->
          <div class="w-16 h-16 rounded-full bg-red-50 text-red-600 flex items-center justify-center shadow-inner animate-pulse">
            <q-icon name="warning" size="32px" />
          </div>
          
          <div class="space-y-1">
            <h3 class="text-base font-extrabold text-slate-900 tracking-tight my-0">
              {{ confirmDialog.title || 'Konfirmasi Hapus' }}
            </h3>
            <p class="text-slate-500 text-xs leading-relaxed font-semibold">
              {{ confirmDialog.message || 'Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dibatalkan.' }}
            </p>
          </div>
        </div>

        <q-card-actions align="center" class="pt-6 pb-2 grid grid-cols-2 gap-3 w-full">
          <button
            @click="cancelConfirm"
            type="button"
            class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer"
          >
            Batal
          </button>
          <button
            @click="acceptConfirm"
            type="button"
            class="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition-all duration-200 border-none cursor-pointer shadow-sm hover:shadow-md"
          >
            Ya, Hapus
          </button>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- DIALOG: EXTRA LAYANAN (TAMBAH / EDIT) -->
    <q-dialog v-model="extraDialog" persistent>
      <q-card class="bg-white border border-slate-200 text-slate-800 rounded-3xl w-full max-w-md p-4 shadow-2xl">
        <q-card-section class="flex justify-between items-center pb-4 border-b border-slate-100">
          <h3 class="text-sm font-extrabold text-slate-900">
            {{ editingExtraIndex > -1 ? 'Edit Layanan Tambahan' : 'Tambah Layanan Tambahan Baru' }}
          </h3>
          <q-btn icon="close" flat round dense v-close-popup class="text-slate-400" />
        </q-card-section>

        <q-card-section class="space-y-4 pt-4">
          <div>
            <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Nama Layanan</label>
            <input
              v-model="extraForm.title"
              type="text"
              required
              placeholder="Contoh: Pipa, Kanopi..."
              class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Deskripsi Singkat</label>
            <input
              v-model="extraForm.desc"
              type="text"
              required
              placeholder="Contoh: Air Mengalir Lancar..."
              class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
            />
          </div>
        </q-card-section>

        <q-card-actions align="right" class="border-t border-slate-100 pt-4 mt-4 space-x-2">
          <q-btn
            flat
            label="Batal"
            v-close-popup
            class="text-slate-500 hover:text-slate-800 rounded-xl text-xs font-bold font-sans"
          />
          <q-btn
            color="red-6"
            :label="editingExtraIndex > -1 ? 'Simpan' : 'Tambah'"
            @click="saveExtraLayanan"
            class="text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg hover:shadow-red-650/20 font-sans"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- 3. DIALOG: PORTFOLIO FORM (TAMBAH / EDIT) -->
    <q-dialog v-model="portfolioDialog" persistent>
       <q-card class="bg-white border border-slate-200 text-slate-800 rounded-3xl w-full max-w-2xl p-4 shadow-2xl">
         <q-card-section class="flex justify-between items-center pb-4 border-b border-slate-100">
           <h3 class="text-lg font-extrabold text-slate-900">
             {{ isEditing ? 'Edit Proyek Portofolio' : 'Tambah Proyek Baru' }}
           </h3>
           <button @click="portfolioDialog = false" class="bg-transparent border-none cursor-pointer text-slate-400 hover:text-slate-800">
             <q-icon name="close" size="20px" />
           </button>
         </q-card-section>

         <q-card-section class="space-y-4 pt-6 max-h-[55vh] md:max-h-[65vh] overflow-y-auto pr-2 text-slate-700">
           <!-- Title -->
           <div>
             <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Nama Proyek</label>
             <input
               v-model="projectForm.title"
               type="text"
               required
               placeholder="Contoh: Pekerjaan Cor Jalan Utama IKN..."
               class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200"
             />
           </div>

           <!-- Category & Labels -->
           <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div>
               <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Kode Kategori</label>
               <select
                 v-model="projectForm.category"
                 class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 cursor-pointer transition-all duration-200"
               >
                 <option value="konstruksi">konstruksi</option>
                 <option value="renovasi">renovasi</option>
                 <option value="concrete">concrete</option>
               </select>
             </div>
             <div>
               <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Label Kategori</label>
               <input
                 v-model="projectForm.categoryLabel"
                 type="text"
                 required
                 placeholder="Contoh: Konstruksi / Renovasi / Stamp Concrete"
                 class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200"
               />
             </div>
           </div>

           <!-- Location & Showcase Image -->
           <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div>
               <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Lokasi Proyek</label>
               <input
                 v-model="projectForm.location"
                 type="text"
                 required
                 placeholder="Contoh: Cikarang, Bekasi..."
                 class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200"
               />
             </div>
             <div>
               <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Gambar Utama / Upload Foto</label>
               <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                 <!-- Preview Image -->
                 <div class="w-24 h-16 rounded-xl border border-slate-200 bg-white overflow-hidden flex items-center justify-center shrink-0 self-center sm:self-auto shadow-sm">
                   <img
                     v-if="projectForm.image"
                     :src="projectForm.image"
                     class="w-full h-full object-cover"
                   />
                   <q-icon v-else name="image" class="text-slate-350" size="24px" />
                 </div>

                 <div class="flex-grow flex flex-col gap-2">
                   <div class="flex items-center gap-2">
                     <input
                       type="file"
                       accept="image/*"
                       id="project-main-upload"
                       @change="handleProjectMainUpload($event)"
                       class="hidden"
                     />
                     <label
                       for="project-main-upload"
                       class="px-3.5 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl text-xs font-extrabold flex items-center justify-center space-x-1.5 cursor-pointer shrink-0 transition-colors duration-150 select-none shadow-sm"
                     >
                       <q-icon name="cloud_upload" size="16px" />
                       <span>Upload</span>
                     </label>
                     <input
                       v-model="projectForm.image"
                       type="text"
                       required
                       placeholder="URL Gambar..."
                       class="flex-grow px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-slate-900 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200"
                     />
                   </div>
                 </div>
               </div>
             </div>
           </div>

           <!-- Descriptions -->
           <div>
             <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Deskripsi Singkat (Card)</label>
             <textarea
               v-model="projectForm.desc"
               required
               rows="2"
               placeholder="Tulis ringkasan singkat untuk tampilan kartu portofolio..."
               class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200 resize-none"
             ></textarea>
           </div>

           <div>
             <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Deskripsi Lengkap (Halaman Detail)</label>
             <textarea
               v-model="projectForm.fullDesc"
               required
               rows="4"
               placeholder="Tulis uraian lengkap proyek sipil yang telah selesai dikerjakan..."
               class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200 resize-none"
             ></textarea>
           </div>

           <!-- Gallery Images Array Editor -->
           <div class="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
             <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
               <span class="block text-xs font-bold text-slate-500 uppercase tracking-wide">Galeri Foto Proyek</span>
               <button
                 type="button"
                 @click="addGalleryRow"
                 class="px-3 py-1.5 bg-slate-100 hover:bg-slate-250 border-none rounded-lg text-[10px] font-bold cursor-pointer text-slate-700 flex items-center space-x-1"
               >
                 <q-icon name="add" size="12px" />
                 <span>Tambah Foto</span>
               </button>
             </div>

             <div class="space-y-4 mt-3">
                <div
                  v-for="(imgUrl, gIdx) in projectForm.gallery"
                  :key="gIdx"
                  class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl relative shadow-xs"
                >
                  <!-- Delete Button (Top Right absolute for clean design) -->
                  <button
                    type="button"
                    @click="removeGalleryRow(gIdx)"
                    class="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg border-none cursor-pointer flex items-center justify-center transition-colors shrink-0"
                    title="Hapus Foto"
                  >
                    <q-icon name="delete" size="18px" />
                  </button>

                  <!-- Thumbnail Preview -->
                  <div class="w-32 aspect-video rounded-xl border border-slate-200 bg-white overflow-hidden flex items-center justify-center shrink-0 self-center sm:self-auto shadow-sm">
                    <img v-if="imgUrl" :src="imgUrl" class="w-full h-full object-cover" />
                    <q-icon v-else name="image" class="text-slate-350" size="24px" />
                  </div>

                  <!-- Upload and URL -->
                  <div class="flex-grow flex flex-col gap-1.5 pt-4 sm:pt-0">
                    <span class="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Foto {{ gIdx + 1 }}</span>
                    <div class="flex items-center gap-2">
                      <input
                        type="file"
                        accept="image/*"
                        :id="'project-gallery-upload-' + gIdx"
                        @change="handleProjectGalleryUpload($event, gIdx)"
                        class="hidden"
                      />
                      <label
                        :for="'project-gallery-upload-' + gIdx"
                        class="px-3.5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-xl text-xs font-extrabold flex items-center justify-center space-x-1.5 cursor-pointer shrink-0 transition-colors duration-150 select-none shadow-sm"
                      >
                        <q-icon name="cloud_upload" size="16px" />
                        <span>Upload</span>
                      </label>
                      <input
                        v-model="projectForm.gallery[gIdx]"
                        type="text"
                        placeholder="Contoh: images/k1.png..."
                        class="flex-grow px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200 min-w-0"
                      />
                    </div>
                  </div>
                </div>
                <div v-if="projectForm.gallery.length === 0" class="text-slate-400 text-[10px] font-semibold text-center py-2">
                  Belum ada foto galeri ditambahkan.
                </div>
              </div>
           </div>
         </q-card-section>

         <q-card-actions align="right" class="border-t border-slate-100 pt-4 mt-4 space-x-2">
           <q-btn
             flat
             label="Batal"
             @click="portfolioDialog = false"
             class="text-slate-500 hover:text-slate-800 rounded-xl text-xs font-bold font-sans"
           />
           <q-btn
             color="red-6"
             :label="isEditing ? 'Simpan' : 'Tambah Proyek'"
             @click="savePortfolio"
             class="text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg hover:shadow-red-650/20 font-sans"
           />
         </q-card-actions>
       </q-card>
     </q-dialog>

    <!-- 4. DIALOG: SOLUTIONS FORM (TAMBAH / EDIT) -->
    <q-dialog v-model="solutionDialog" persistent>
      <q-card class="bg-white border border-slate-200 text-slate-800 rounded-3xl w-full max-w-lg p-4 shadow-2xl">
        <q-card-section class="flex justify-between items-center pb-4 border-b border-slate-100">
          <h3 class="text-lg font-extrabold text-slate-900">
            {{ isEditingSolution ? 'Edit Solusi Bangunan' : 'Tambah Solusi Baru' }}
          </h3>
          <button @click="solutionDialog = false" class="bg-transparent border-none cursor-pointer text-slate-400 hover:text-slate-800">
            <q-icon name="close" size="20px" />
          </button>
        </q-card-section>

        <q-card-section class="space-y-4 pt-6 text-slate-700">
          <!-- Name -->
          <div>
            <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Nama Solusi</label>
            <input
              v-model="solutionForm.name"
              type="text"
              required
              placeholder="Contoh: Kebocoran / Plafon..."
              class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
            />
          </div>

          <!-- Description -->
          <div>
            <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Deskripsi Ringkas</label>
            <input
              v-model="solutionForm.description"
              type="text"
              required
              placeholder="Contoh: Jaga Rumah Bebas Bocor / Cat Rumah..."
              class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
            />
          </div>
        </q-card-section>

        <q-card-actions align="right" class="border-t border-slate-100 pt-4 mt-4 space-x-2">
          <q-btn
            flat
            label="Batal"
            @click="solutionDialog = false"
            class="text-slate-500 hover:text-slate-800 rounded-xl text-xs font-bold font-sans"
          />
          <q-btn
            color="red-6"
            :label="isEditingSolution ? 'Simpan' : 'Tambah Solusi'"
            @click="saveSolution"
            class="text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg hover:shadow-red-600/20 font-sans"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Global Toast Toast Notification -->
    <div
      v-if="toastActive"
      class="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] bg-white border border-slate-200 text-slate-850 rounded-2xl px-6 py-4 shadow-2xl flex items-center space-x-3 transition-all duration-300"
    >
      <q-icon name="check_circle" class="text-emerald-500" size="24px" />
      <span class="text-sm font-bold">{{ toastMsg }}</span>
    </div>

  </q-page>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useWebsiteStore } from 'src/stores/websiteStore'

const store = useWebsiteStore()

// Custom Confirm Dialog State
const confirmDialog = ref({
  show: false,
  title: '',
  message: '',
  onAccept: null
})

const showConfirm = (title, message, callback) => {
  confirmDialog.value = {
    show: true,
    title,
    message,
    onAccept: callback
  }
}

const cancelConfirm = () => {
  confirmDialog.value.show = false
}

const acceptConfirm = () => {
  if (confirmDialog.value.onAccept) {
    confirmDialog.value.onAccept()
  }
  confirmDialog.value.show = false
}

// Authentication State
const isLoggedIn = ref(false)
const showPassword = ref(false)
const loginError = ref('')
const loginForm = ref({
  username: '',
  password: ''
})

// Tab Navigation
const activeTab = ref('beranda')
const tabList = [
  { label: 'Edit Beranda & Profil', value: 'beranda', icon: 'home', title: 'Edit Konten Beranda & Profil', activeClass: 'bg-red-600 text-white shadow-lg shadow-red-600/20', unselectedClass: 'bg-slate-50 text-slate-700 hover:bg-slate-100' },
  { label: 'Kelola Portofolio', value: 'portofolio', icon: 'folder', title: 'Kelola Portofolio Proyek', activeClass: 'bg-red-600 text-white shadow-lg shadow-red-600/20', unselectedClass: 'bg-slate-50 text-slate-700 hover:bg-slate-100' },
  { label: 'Kelola Klien & Partner', value: 'klien', icon: 'business', title: 'Kelola Klien & Logo Partner', activeClass: 'bg-red-600 text-white shadow-lg shadow-red-600/20', unselectedClass: 'bg-slate-50 text-slate-700 hover:bg-slate-100' },
  { label: 'Kelola Aneka Solusi', value: 'solusi', icon: 'plumbing', title: 'Kelola Solusi Bangunan', activeClass: 'bg-red-600 text-white shadow-lg shadow-red-600/20', unselectedClass: 'bg-slate-50 text-slate-700 hover:bg-slate-100' },
  { label: 'Moderasi Ulasan', value: 'ulasan', icon: 'star', title: 'Moderasi Komentar & Rating', activeClass: 'bg-red-600 text-white shadow-lg shadow-red-600/20', unselectedClass: 'bg-slate-50 text-slate-700 hover:bg-slate-100' },
  { label: 'Kelola Tukang Harian', value: 'tukang_harian', icon: 'construction', title: 'Kelola Konten Tukang Harian', activeClass: 'bg-[#6B1D1D] text-white shadow-lg shadow-[#6B1D1D]/30', unselectedClass: 'bg-red-50 text-red-700 hover:bg-red-100/80 border border-red-100/50' },
  { label: 'Kelola Tukang Borongan', value: 'borongan', icon: 'gavel', title: 'Kelola Konten Tukang Borongan', activeClass: 'bg-[#1E3E62] text-white shadow-lg shadow-[#1E3E62]/30', unselectedClass: 'bg-blue-50 text-blue-700 hover:bg-blue-100/80 border border-blue-100/50' },
  { label: 'Kelola Tukang Konstruksi', value: 'konstruksi', icon: 'engineering', title: 'Kelola Konten Tukang Konstruksi', activeClass: 'bg-[#1B4D3E] text-white shadow-lg shadow-[#1B4D3E]/30', unselectedClass: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100/80 border border-emerald-100/50' }
]

// Sidebar State & Navigation Toggle
const sidebarOpen = ref(true)
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

// Scroll To Top States & Helpers
const mainScrollRef = ref(null)
const showBackToTop = ref(false)

const handleMainScroll = () => {
  const scrollTop = mainScrollRef.value ? mainScrollRef.value.scrollTop : 0
  showBackToTop.value = window.scrollY > 300 || scrollTop > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  if (mainScrollRef.value) {
    mainScrollRef.value.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
const selectTab = (tabValue) => {
  activeTab.value = tabValue
  if (window.innerWidth < 1024) {
    sidebarOpen.value = false
  }
}

const currentTabLabel = computed(() => {
  return tabList.find(t => t.value === activeTab.value)?.title || ''
})

// Toast States
const toastActive = ref(false)
const toastMsg = ref('')
const triggerToast = (msg) => {
  toastMsg.value = msg
  toastActive.value = true
  setTimeout(() => {
    toastActive.value = false
  }, 4000)
}

// Upload Handler for Hero slides
const handleHeroUpload = (event, index) => {
  const file = event.target.files[0]
  if (!file) return

  if (file.size > 2 * 1024 * 1024) {
    triggerToast('Ukuran foto terlalu besar! Maksimal 2MB agar lancar tersimpan.')
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    store.heroSlides[index].image = e.target.result
    triggerToast(`Foto Slide ${index + 1} berhasil diunggah!`)
  }
  reader.readAsDataURL(file)
}

const addHeroSlide = () => {
  store.heroSlides.push({
    name: `slide_${Date.now()}`,
    title: 'Judul Slide Baru',
    subtitle: 'Deskripsi Slide Baru',
    image: 'images/placeholder.png'
  })
}

const removeHeroSlide = (index) => {
  store.heroSlides.splice(index, 1)
}

// Upload & Slide Helpers for Workspace Slider Editor
const handleOfficeUpload = (event, index) => {
  const file = event.target.files[0]
  if (!file) return

  if (file.size > 2 * 1024 * 1024) {
    triggerToast('Ukuran foto terlalu besar! Maksimal 2MB agar lancar tersimpan.')
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    store.officeSlides[index].image = e.target.result
    triggerToast(`Foto Workspace ${index + 1} berhasil diunggah!`)
  }
  reader.readAsDataURL(file)
}

const addOfficeSlide = () => {
  store.officeSlides.push({
    image: 'images/',
    title: '',
    desc: ''
  })
}

const removeOfficeSlide = (index) => {
  store.officeSlides.splice(index, 1)
}

// Upload Mascot Helper for Choosing Us Section
const handleMascotUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return

  if (file.size > 2 * 1024 * 1024) {
    triggerToast('Ukuran foto terlalu besar! Maksimal 2MB agar lancar tersimpan.')
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    store.advantagesMascot = e.target.result
    triggerToast('Foto Maskot berhasil diunggah!')
  }
  reader.readAsDataURL(file)
}

const addAdvantage = () => {
  store.advantagesList.push({
    icon: 'verified_user',
    title: '',
    desc: ''
  })
}

const removeAdvantage = (index) => {
  store.advantagesList.splice(index, 1)
}

// Upload & List Helpers for Layanan Kami Editor
const handleServiceUpload = (event, index) => {
  const file = event.target.files[0]
  if (!file) return

  if (file.size > 2 * 1024 * 1024) {
    triggerToast('Ukuran foto terlalu besar! Maksimal 2MB agar lancar tersimpan.')
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    store.servicesList[index].image = e.target.result
    triggerToast(`Foto Layanan ${index + 1} berhasil diunggah!`)
  }
  reader.readAsDataURL(file)
}

const addService = () => {
  store.servicesList.push({
    title: '',
    desc: '',
    image: 'images/',
    detailTitle: '',
    detailDesc: '',
    bulletsText: '',
    link: '',
    badge: '',
    activeBg: 'bg-[#0B192C]'
  })
}

const removeService = (index) => {
  store.servicesList.splice(index, 1)
}

// Tenaga Ahli (Artisans) Helpers
const addArtisanSlide = () => {
  store.artisansSlides.push('images/')
}

const removeArtisanSlide = (index) => {
  store.artisansSlides.splice(index, 1)
}

const handleArtisanSlideUpload = (event, index) => {
  const file = event.target.files[0]
  if (!file) return

  if (file.size > 2 * 1024 * 1024) {
    triggerToast('Ukuran foto terlalu besar! Maksimal 2MB.')
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    store.artisansSlides[index] = e.target.result
    triggerToast(`Foto Slide ${index + 1} berhasil diunggah!`)
  }
  reader.readAsDataURL(file)
}

const addArtisanPoint = () => {
  store.artisansPoints.push({
    title: '',
    desc: ''
  })
}

const removeArtisanPoint = (index) => {
  store.artisansPoints.splice(index, 1)
}

// Portfolio Search & List
const portfolioSearch = ref('')
const filteredPortfolio = computed(() => {
  if (!portfolioSearch.value.trim()) {
    return store.portfolioItems
  }
  const q = portfolioSearch.value.toLowerCase().trim()
  return store.portfolioItems.filter(p => p.title.toLowerCase().includes(q))
})

// Portfolio Dialog & Form
const portfolioDialog = ref(false)
const isEditing = ref(false)
const editingId = ref(null)
const projectForm = ref({
  title: '',
  category: 'konstruksi',
  categoryLabel: 'Konstruksi',
  location: '',
  image: '',
  desc: '',
  fullDesc: '',
  specifications: [],
  gallery: []
})

// Client Form
const clientForm = ref({
  name: '',
  image: ''
})

const handleClientUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (e) => {
    clientForm.value.image = e.target.result
  }
  reader.readAsDataURL(file)
}

const handleProjectMainUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (e) => {
    projectForm.value.image = e.target.result
  }
  reader.readAsDataURL(file)
}

const handleProjectGalleryUpload = (event, index) => {
  const file = event.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (e) => {
    projectForm.value.gallery[index] = e.target.result
  }
  reader.readAsDataURL(file)
}

// Lifecycle Load
onMounted(() => {
  store.initializeStore()

  // Collapse sidebar on small screens (tablets & mobile) by default
  if (window.innerWidth < 1024) {
    sidebarOpen.value = false
  } else {
    sidebarOpen.value = true
  }

  // Check auth session
  const adminSession = sessionStorage.getItem('ptagra-admin-authenticated')
  if (adminSession === 'true') {
    isLoggedIn.value = true
  }

  window.addEventListener('scroll', handleMainScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleMainScroll)
})

// Login & Logout Handlers
const handleLogin = () => {
  if (loginForm.value.username === 'admin' && loginForm.value.password === 'admin123') {
    isLoggedIn.value = true
    loginError.value = ''
    sessionStorage.setItem('ptagra-admin-authenticated', 'true')
    triggerToast('Selamat Datang! Login berhasil.')
  } else {
    loginError.value = 'Username atau password yang Anda masukkan salah.'
  }
}

const handleLogout = () => {
  isLoggedIn.value = false
  sessionStorage.removeItem('ptagra-admin-authenticated')
  loginForm.value.username = ''
  loginForm.value.password = ''
  triggerToast('Anda telah keluar dari halaman admin.')
}

// General Home Page Settings Saving
const saveGeneralData = async () => {
  // Jalankan semua update database secara paralel agar proses simpan jauh lebih cepat!
  await Promise.all([
    store.updateHeroSlides(),
    store.updateCompanyProfile(),
    store.updateVisiMisiDB(),
    store.updateOfficeSlidesDB(),
    store.updateAdvantagesDB(),
    store.updateServicesDB(),
    store.updateArtisansDB()
  ])
  store.saveStore()
  triggerToast('Perubahan halaman beranda berhasil disimpan.')
}

// Portfolio CRUD Operations
const openPortfolioDialog = (project = null) => {
  if (project) {
    isEditing.value = true
    editingId.value = project.id
    // Clone properties
    projectForm.value = {
      title: project.title,
      category: project.category,
      categoryLabel: project.categoryLabel,
      location: project.location,
      image: project.image,
      desc: project.desc,
      fullDesc: project.fullDesc,
      specifications: project.specifications ? [...project.specifications] : [],
      gallery: [...project.gallery]
    }
  } else {
    isEditing.value = false
    editingId.value = null
    projectForm.value = {
      title: '',
      category: 'konstruksi',
      categoryLabel: 'Konstruksi',
      location: '',
      image: 'images/',
      desc: '',
      fullDesc: '',
      specifications: [],
      gallery: ['images/']
    }
  }
  portfolioDialog.value = true
}

const addGalleryRow = () => {
  projectForm.value.gallery.push('images/')
}

const removeGalleryRow = (idx) => {
  projectForm.value.gallery.splice(idx, 1)
}

const savePortfolio = async () => {
  if (!projectForm.value.title.trim() || !projectForm.value.location.trim()) {
    alert('Nama proyek dan lokasi wajib diisi!')
    return
  }

  // Filter clean strings (remove empty paths or lines)
  const cleanSpecs = projectForm.value.specifications ? projectForm.value.specifications.filter(s => s.trim() !== '') : []
  const cleanGallery = projectForm.value.gallery.filter(g => g.trim() !== '' && g.trim() !== 'images/')

  const submission = {
    ...projectForm.value,
    specifications: cleanSpecs,
    gallery: cleanGallery
  }

  if (isEditing.value) {
    await store.updatePortfolioItem(editingId.value, submission)
    triggerToast(`Proyek "${submission.title}" berhasil diperbarui.`)
  } else {
    await store.addPortfolioItem(submission)
    triggerToast(`Proyek baru "${submission.title}" berhasil ditambahkan.`)
  }

  portfolioDialog.value = false
}

const deleteProject = async (id, title) => {
  showConfirm(
    'Hapus Portofolio',
    `Apakah Anda yakin ingin menghapus proyek "${title}" dari portofolio?`,
    async () => {
      await store.deletePortfolioItem(id)
      triggerToast(`Proyek "${title}" telah dihapus.`)
    }
  )
}

// Client Handlers
const submitClient = async () => {
  if (!clientForm.value.name.trim() || !clientForm.value.image.trim()) return

  await store.addClient({
    name: clientForm.value.name.trim(),
    image: clientForm.value.image.trim()
  })

  triggerToast(`Logo "${clientForm.value.name}" berhasil ditambahkan.`)
  clientForm.value.name = ''
  clientForm.value.image = ''
}

const deleteClient = async (id, name) => {
  showConfirm(
    'Hapus Logo Klien',
    `Hapus logo klien/partner "${name}"?`,
    async () => {
      await store.deleteClient(id)
      triggerToast(`Logo "${name}" telah dihapus.`)
    }
  )
}

// Review Handlers
const deleteReview = async (id, name) => {
  showConfirm(
    'Hapus Ulasan',
    `Hapus ulasan dari "${name}"? Ulasan tidak akan muncul lagi di marquee.`,
    async () => {
      await store.deleteReview(id)
      triggerToast(`Ulasan dari "${name}" telah dihapus.`)
    }
  )
}

// Borongan Handlers
const addBoronganHeroSlide = () => {
  store.boronganHeroSlides.push('images/boronganproyek.png')
}

const removeBoronganHeroSlide = (index) => {
  if (store.boronganHeroSlides.length <= 1) {
    triggerToast('Harus tersisa minimal 1 slide background!')
    return
  }
  store.boronganHeroSlides.splice(index, 1)
}

const uploadBoronganHeroSlide = (index, e) => {
  const file = e.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (event) => {
    store.boronganHeroSlides.splice(index, 1, event.target.result)
    triggerToast(`Slide background ke-${index + 1} berhasil diunggah!`)
  }
  reader.readAsDataURL(file)
}

const saveBoronganHeroData = async () => {
  await store.updateBoronganDB()
  triggerToast('Hero Banner Borongan berhasil disimpan.')
}

const uploadBoronganSolutionBanner = (e) => {
  const file = e.target.files[0]
  if (!file) return
  if (file.size > 2 * 1024 * 1024) {
    triggerToast('Ukuran banner terlalu besar! Maksimal 2MB.')
    return
  }
  const reader = new FileReader()
  reader.onload = (event) => {
    store.boronganSolutionBanner = event.target.result
    triggerToast('Gambar banner solusi berhasil diunggah!')
  }
  reader.readAsDataURL(file)
}

const saveBoronganSolutionBannerData = async () => {
  await store.updateBoronganDB()
  triggerToast('Banner Solusi Borongan berhasil disimpan.')
}

const addBoronganBenefitItem = () => {
  store.boronganBenefits.push({
    title: 'Manfaat Baru',
    desc: 'Deskripsi penjelasan manfaat baru...',
    image: 'images/harga_transparan_benefit.jpg'
  })
}

const removeBoronganBenefitItem = (index) => {
  if (store.boronganBenefits.length <= 1) {
    triggerToast('Harus tersisa minimal 1 manfaat!')
    return
  }
  showConfirm(
    'Hapus Manfaat',
    `Hapus manfaat "${store.boronganBenefits[index].title || 'ini'}"?`,
    () => {
      store.boronganBenefits.splice(index, 1)
    }
  )
}

const uploadBoronganBenefitImage = (index, e) => {
  const file = e.target.files[0]
  if (!file) return
  if (file.size > 2 * 1024 * 1024) {
    triggerToast('Ukuran foto terlalu besar! Maksimal 2MB.')
    return
  }
  const reader = new FileReader()
  reader.onload = (event) => {
    store.boronganBenefits.splice(index, 1, {
      ...store.boronganBenefits[index],
      image: event.target.result
    })
    triggerToast(`Foto preview manfaat ke-${index + 1} berhasil diunggah!`)
  }
  reader.readAsDataURL(file)
}

const saveBoronganBenefitsData = async () => {
  await store.updateBoronganDB()
  triggerToast('Manfaat & Keuntungan Borongan berhasil disimpan.')
}

const uploadBoronganStepImage = (index, e) => {
  const file = e.target.files[0]
  if (!file) return
  if (file.size > 2 * 1024 * 1024) {
    triggerToast('Ukuran foto terlalu besar! Maksimal 2MB.')
    return
  }
  const reader = new FileReader()
  reader.onload = (event) => {
    store.boronganSteps.splice(index, 1, {
      ...store.boronganSteps[index],
      image: event.target.result
    })
    triggerToast(`Foto ilustrasi tahap ke-${index + 1} berhasil diunggah!`)
  }
  reader.readAsDataURL(file)
}

const saveBoronganStepsData = async () => {
  await store.updateBoronganDB()
  triggerToast('Alur Pengerjaan Borongan berhasil disimpan.')
}

const addBoronganStepItem = () => {
  const nextNum = store.boronganSteps.length + 1
  store.boronganSteps.push({
    number: nextNum,
    title: `Tahap ${nextNum}`,
    desc: 'Deskripsi penjelasan tahapan baru...',
    image: 'images/callcenter.png'
  })
}

const removeBoronganStepItem = (index) => {
  if (store.boronganSteps.length <= 1) {
    triggerToast('Harus tersisa minimal 1 tahapan!')
    return
  }
  showConfirm(
    'Hapus Tahapan',
    `Hapus tahapan "${store.boronganSteps[index].title || 'ini'}"?`,
    () => {
      store.boronganSteps.splice(index, 1)
      // Re-index step numbers
      store.boronganSteps.forEach((step, idx) => {
        step.number = idx + 1
      })
    }
  )
}

const addBoronganSpecialtyItem = () => {
  store.boronganSpecialties.push({
    title: 'Spesialisasi Baru',
    desc: 'Deskripsi penjelasan layanan spesialisasi baru...'
  })
}

const removeBoronganSpecialtyItem = (index) => {
  if (store.boronganSpecialties.length <= 1) {
    triggerToast('Harus tersisa minimal 1 spesialisasi!')
    return
  }
  showConfirm(
    'Hapus Spesialisasi',
    `Hapus spesialisasi "${store.boronganSpecialties[index].title || 'ini'}"?`,
    () => {
      store.boronganSpecialties.splice(index, 1)
    }
  )
}

const saveBoronganSpecialtiesData = async () => {
  await store.updateBoronganDB()
  triggerToast('Layanan Spesialisasi Borongan berhasil disimpan.')
}

const addBoronganAreaItem = () => {
  store.boronganAreas.push({
    title: 'Area Pekerjaan Baru',
    desc: 'Deskripsi penjelasan area pekerjaan baru...',
    bullets: ['Poin pertama', 'dan lainnya'],
    image: 'images/plafon.png'
  })
}

const removeBoronganAreaItem = (index) => {
  if (store.boronganAreas.length <= 1) {
    triggerToast('Harus tersisa minimal 1 area pekerjaan!')
    return
  }
  showConfirm(
    'Hapus Area Pekerjaan',
    `Hapus area pekerjaan "${store.boronganAreas[index].title || 'ini'}"?`,
    () => {
      store.boronganAreas.splice(index, 1)
    }
  )
}

const addBoronganAreaBullet = (areaIndex) => {
  store.boronganAreas[areaIndex].bullets.push('Poin baru')
}

const removeBoronganAreaBullet = (areaIndex, bulletIndex) => {
  if (store.boronganAreas[areaIndex].bullets.length <= 1) {
    triggerToast('Harus tersisa minimal 1 poin keterangan!')
    return
  }
  store.boronganAreas[areaIndex].bullets.splice(bulletIndex, 1)
}

const uploadBoronganAreaImage = (index, e) => {
  const file = e.target.files[0]
  if (!file) return
  if (file.size > 2 * 1024 * 1024) {
    triggerToast('Ukuran foto terlalu besar! Maksimal 2MB.')
    return
  }
  const reader = new FileReader()
  reader.onload = (event) => {
    store.boronganAreas.splice(index, 1, {
      ...store.boronganAreas[index],
      image: event.target.result
    })
    triggerToast(`Foto area pekerjaan ke-${index + 1} berhasil diunggah!`)
  }
  reader.readAsDataURL(file)
}

const saveBoronganAreasData = async () => {
  await store.updateBoronganDB()
  triggerToast('Layanan Area Pekerjaan Borongan berhasil disimpan.')
}

const addBoronganOrderStep = () => {
  store.boronganOrderSteps.push({
    title: 'Langkah Baru',
    desc: 'Deskripsi penjelasan langkah pemesanan baru...'
  })
}

const removeBoronganOrderStep = (index) => {
  if (store.boronganOrderSteps.length <= 1) {
    triggerToast('Harus tersisa minimal 1 langkah pemesanan!')
    return
  }
  showConfirm(
    'Hapus Langkah Pemesanan',
    `Hapus langkah pemesanan "${store.boronganOrderSteps[index].title || 'ini'}"?`,
    () => {
      store.boronganOrderSteps.splice(index, 1)
    }
  )
}

const saveBoronganOrderData = async () => {
  await store.updateBoronganDB()
  triggerToast('Proses Pemesanan Borongan berhasil disimpan.')
}

const uploadBoronganSupportMascot = (e) => {
  const file = e.target.files[0]
  if (!file) return
  if (file.size > 2 * 1024 * 1024) {
    triggerToast('Ukuran foto terlalu besar! Maksimal 2MB.')
    return
  }
  const reader = new FileReader()
  reader.onload = (event) => {
    store.boronganSupport.image = event.target.result
    triggerToast('Maskot Customer Support Borongan berhasil diunggah!')
  }
  reader.readAsDataURL(file)
}

const saveBoronganSupportData = async () => {
  await store.updateBoronganDB()
  triggerToast('Layanan Customer Support Borongan berhasil disimpan.')
}

// ==========================================
// TUKANG KONSTRUKSI HANDLERS
// ==========================================
const saveKonstruksiData = async (sectionName) => {
  await store.updateKonstruksiDB()
  triggerToast(`Konten ${sectionName} Konstruksi berhasil disimpan.`)
}

const addKonstruksiSlide = () => {
  const newIndex = store.konstruksiHeroSlides.length + 1
  store.konstruksiHeroSlides.push({
    name: `video${newIndex}`,
    src: '',
    title: 'Slide Baru',
    desc: 'Deskripsi slide baru...'
  })
  triggerToast('Slide baru ditambahkan!')
}

const removeKonstruksiSlide = (index) => {
  store.konstruksiHeroSlides.splice(index, 1)
  triggerToast('Slide dihapus!')
}

const handleKonstruksiSlideVideoUpload = (event, index) => {
  const file = event.target.files[0]
  if (!file) return
  if (file.size > 15 * 1024 * 1024) {
    triggerToast('Ukuran video terlalu besar! Maksimal 15MB.')
    return
  }
  const reader = new FileReader()
  reader.onload = (e) => {
    store.konstruksiHeroSlides[index].src = e.target.result
    triggerToast(`Video Slide ${index + 1} berhasil diunggah!`)
  }
  reader.readAsDataURL(file)
}

const addKonstruksiService = () => {
  store.konstruksiServices.push({
    title: 'Layanan Baru',
    desc: 'Penjelasan mengenai layanan baru ini...',
    image: ''
  })
  triggerToast('Layanan jagoan baru ditambahkan!')
}

const removeKonstruksiService = (index) => {
  store.konstruksiServices.splice(index, 1)
  triggerToast('Layanan jagoan dihapus!')
}

const handleKonstruksiServiceImageUpload = (event, index) => {
  const file = event.target.files[0]
  if (!file) return
  if (file.size > 2 * 1024 * 1024) {
    triggerToast('Ukuran gambar terlalu besar! Maksimal 2MB.')
    return
  }
  const reader = new FileReader()
  reader.onload = (e) => {
    store.konstruksiServices[index].image = e.target.result
    triggerToast(`Gambar Layanan ${index + 1} berhasil diunggah!`)
  }
  reader.readAsDataURL(file)
}

const addKonstruksiStep = () => {
  const nextNo = store.konstruksiSteps.length + 1
  store.konstruksiSteps.push({
    number: nextNo,
    title: 'Langkah Baru',
    desc: 'Keterangan langkah baru...',
    image: ''
  })
  triggerToast('Langkah alur baru ditambahkan!')
}

const removeKonstruksiStep = (index) => {
  store.konstruksiSteps.splice(index, 1)
  store.konstruksiSteps.forEach((s, idx) => {
    s.number = idx + 1
  })
  triggerToast('Langkah alur dihapus!')
}

const handleKonstruksiStepImageUpload = (event, index) => {
  const file = event.target.files[0]
  if (!file) return
  if (file.size > 2 * 1024 * 1024) {
    triggerToast('Ukuran gambar terlalu besar! Maksimal 2MB.')
    return
  }
  const reader = new FileReader()
  reader.onload = (e) => {
    store.konstruksiSteps[index].image = e.target.result
    triggerToast(`Gambar Langkah ${index + 1} berhasil diunggah!`)
  }
  reader.readAsDataURL(file)
}

const addKonstruksiVideo = () => {
  store.konstruksiVideos.push({
    titleHeader: 'Pekerjaan',
    titleHighlight: 'Baru',
    desc: 'Penjelasan cuplikan singkat...',
    tag: 'Tag Baru',
    thumbnail: '',
    src: '',
    icon: 'terrain'
  })
  triggerToast('Video dokumentasi baru ditambahkan!')
}

const removeKonstruksiVideo = (index) => {
  store.konstruksiVideos.splice(index, 1)
  triggerToast('Video dokumentasi dihapus!')
}

const handleKonstruksiReelsVideoUpload = (event, index) => {
  const file = event.target.files[0]
  if (!file) return
  if (file.size > 15 * 1024 * 1024) {
    triggerToast('Ukuran video terlalu besar! Maksimal 15MB.')
    return
  }
  const reader = new FileReader()
  reader.onload = (e) => {
    store.konstruksiVideos[index].src = e.target.result
    triggerToast(`Video Dokumentasi ${index + 1} berhasil diunggah!`)
  }
  reader.readAsDataURL(file)
}

const handleKonstruksiReelsThumbUpload = (event, index) => {
  const file = event.target.files[0]
  if (!file) return
  if (file.size > 2 * 1024 * 1024) {
    triggerToast('Ukuran cover terlalu besar! Maksimal 2MB.')
    return
  }
  const reader = new FileReader()
  reader.onload = (e) => {
    store.konstruksiVideos[index].thumbnail = e.target.result
    triggerToast(`Cover Video ${index + 1} berhasil diunggah!`)
  }
  reader.readAsDataURL(file)
}

const handleKonstruksiSupportMascotUpload = (e) => {
  const file = e.target.files[0]
  if (!file) return
  if (file.size > 2 * 1024 * 1024) {
    triggerToast('Ukuran foto terlalu besar! Maksimal 2MB.')
    return
  }
  const reader = new FileReader()
  reader.onload = (event) => {
    store.konstruksiSupport.image = event.target.result
    triggerToast('Maskot Customer Support Konstruksi berhasil diunggah!')
  }
  reader.readAsDataURL(file)
}

const saveKonstruksiSupportData = async () => {
  await store.updateKonstruksiDB()
  triggerToast('Layanan Customer Support Konstruksi berhasil disimpan.')
}

// Tukang Harian Handlers
const handleTukangHarianSlideUpload = (event, index) => {
  const file = event.target.files[0]
  if (!file) return

  if (file.size > 2 * 1024 * 1024) {
    triggerToast('Ukuran foto terlalu besar! Maksimal 2MB.')
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    store.tukangHarianSlides.splice(index, 1, e.target.result)
    triggerToast(`Foto Slide ${index + 1} berhasil diunggah!`)
  }
  reader.readAsDataURL(file)
}

const handleTukangHarianMaterialUpload = (event, index) => {
  const file = event.target.files[0]
  if (!file) return

  if (file.size > 1 * 1024 * 1024) {
    triggerToast('Ukuran ikon terlalu besar! Maksimal 1MB.')
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    store.tukangHarianMaterial.features[index].image = e.target.result
    triggerToast(`Ikon Fitur ${index + 1} berhasil diunggah!`)
  }
  reader.readAsDataURL(file)
}

const addTukangHarianMaterialFeature = () => {
  store.tukangHarianMaterial.features.push({
    title: 'Fitur Baru',
    desc: 'Penjelasan mengenai fitur baru ini...',
    image: 'images/ikon.png'
  })
}

const removeTukangHarianMaterialFeature = (index) => {
  showConfirm(
    'Hapus Fitur Material',
    `Hapus fitur "${store.tukangHarianMaterial.features[index].title}"?`,
    () => {
      store.tukangHarianMaterial.features.splice(index, 1)
    }
  )
}

const handleTukangHarianJagoanUpload = (event, index) => {
  const file = event.target.files[0]
  if (!file) return

  if (file.size > 2 * 1024 * 1024) {
    triggerToast('Ukuran foto terlalu besar! Maksimal 2MB.')
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    store.tukangHarianJagoan.list[index].image = e.target.result
    triggerToast(`Foto Jagoan ${index + 1} berhasil diunggah!`)
  }
  reader.readAsDataURL(file)
}

const addTukangHarianJagoanItem = () => {
  store.tukangHarianJagoan.list.push({
    title: 'Jagoan Baru',
    desc: 'Deskripsi penjelasan layanan jagoan baru...',
    image: 'images/cat.png'
  })
}

const removeTukangHarianJagoanItem = (index) => {
  showConfirm(
    'Hapus Layanan Jagoan',
    `Hapus layanan jagoan "${store.tukangHarianJagoan.list[index].title}"?`,
    () => {
      store.tukangHarianJagoan.list.splice(index, 1)
    }
  )
}

const addTukangHarianJagoanLainnyaItem = () => {
  store.tukangHarianJagoanLainnya.push({
    title: 'Jagoan Baru'
  })
}

const removeTukangHarianJagoanLainnyaItem = (index) => {
  store.tukangHarianJagoanLainnya.splice(index, 1)
}

const uploadSupportMascot = (e) => {
  const file = e.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (event) => {
    store.tukangHarianSupport.image = event.target.result
    triggerToast('Maskot Customer Support berhasil diunggah!')
  }
  reader.readAsDataURL(file)
}

const addTukangHarianSlide = () => {
  store.tukangHarianSlides.push('images/tukang_harian_hero.png')
}

const removeTukangHarianSlide = (index) => {
  store.tukangHarianSlides.splice(index, 1)
}

const extraDialog = ref(false)
const editingExtraIndex = ref(-1)
const extraForm = ref({
  title: '',
  desc: '',
  icon: 'water',
  color: 'bg-gradient-to-br from-cyan-400 to-cyan-600'
})

const openExtraDialog = (svc = null, index = -1) => {
  if (svc) {
    editingExtraIndex.value = index
    extraForm.value = { ...svc }
  } else {
    editingExtraIndex.value = -1
    extraForm.value = {
      title: '',
      desc: '',
      icon: 'water',
      color: 'bg-gradient-to-br from-cyan-400 to-cyan-600'
    }
  }
  extraDialog.value = true
}

const autoAssignExtraIconAndColor = (name) => {
  const cleanName = (name || '').toLowerCase()
  
  // Icon Mapping
  let icon = 'build' // default fallback icon
  
  if (cleanName.includes('ojek') || cleanName.includes('motor') || cleanName.includes('kendaraan')) {
    icon = 'motorcycle'
  } else if (cleanName.includes('mobil') || cleanName.includes('supir') || cleanName.includes('driver')) {
    icon = 'directions_car'
  } else if (cleanName.includes('pipa') || cleanName.includes('ledeng') || cleanName.includes('toren') || cleanName.includes('wastafel') || cleanName.includes('air') || cleanName.includes('tengki')) {
    icon = 'water'
  } else if (cleanName.includes('toilet') || cleanName.includes('wc') || cleanName.includes('kamar mandi') || cleanName.includes('closet')) {
    icon = 'bathroom'
  } else if (cleanName.includes('konsultan') || cleanName.includes('desain') || cleanName.includes('arsitek') || cleanName.includes('rencana') || cleanName.includes('gambar')) {
    icon = 'engineering'
  } else if (cleanName.includes('plafon') || cleanName.includes('atap') || cleanName.includes('genteng') || cleanName.includes('kanopi') || cleanName.includes('dak')) {
    icon = 'roofing'
  } else if (cleanName.includes('dinding') || cleanName.includes('tembok') || cleanName.includes('sekat')) {
    icon = 'foundation'
  } else if (cleanName.includes('pintu') || cleanName.includes('jendela') || cleanName.includes('kusen')) {
    icon = 'door_front'
  } else if (cleanName.includes('dapur') || cleanName.includes('kitchen') || cleanName.includes('masak')) {
    icon = 'kitchen'
  } else if (cleanName.includes('angkat') || cleanName.includes('pindah') || cleanName.includes('barang') || cleanName.includes('angkut')) {
    icon = 'move_to_inbox'
  } else if (cleanName.includes('conblock') || cleanName.includes('paving') || cleanName.includes('ubin') || cleanName.includes('keramik')) {
    icon = 'grid_on'
  } else if (cleanName.includes('aluminium') || cleanName.includes('kaca') || cleanName.includes('jendela aluminium')) {
    icon = 'window'
  } else if (cleanName.includes('kipas') || cleanName.includes('fan') || cleanName.includes('exhaust') || cleanName.includes('ac')) {
    icon = 'air'
  } else if (cleanName.includes('batu') || cleanName.includes('taman') || cleanName.includes('kolam') || cleanName.includes('landscape')) {
    icon = 'landscape'
  } else if (cleanName.includes('lemari') || cleanName.includes('rak') || cleanName.includes('meja') || cleanName.includes('furniture')) {
    icon = 'inventory_2'
  } else if (cleanName.includes('cuci') || cleanName.includes('bersih') || cleanName.includes('cleaning')) {
    icon = 'cleaning_services'
  } else if (cleanName.includes('listrik') || cleanName.includes('lampu') || cleanName.includes('kabel') || cleanName.includes('saklar')) {
    icon = 'bolt'
  } else if (cleanName.includes('cat') || cleanName.includes('pengecatan')) {
    icon = 'brush'
  } else if (cleanName.includes('kebun') || cleanName.includes('tanaman')) {
    icon = 'park'
  } else if (cleanName.includes('cctv') || cleanName.includes('keamanan') || cleanName.includes('security') || cleanName.includes('kamera')) {
    icon = 'videocam'
  } else if (cleanName.includes('las') || cleanName.includes('tralis') || cleanName.includes('pagar') || cleanName.includes('besi') || cleanName.includes('welding')) {
    icon = 'construction'
  } else if (cleanName.includes('kenek') || cleanName.includes('bantu') || cleanName.includes('asisten')) {
    icon = 'handyman'
  }
  
  // Random Premium Gradient Picker
  const gradients = [
    'bg-gradient-to-br from-cyan-400 to-cyan-600',
    'bg-gradient-to-br from-teal-400 to-teal-600',
    'bg-gradient-to-br from-amber-400 to-amber-600',
    'bg-gradient-to-br from-indigo-400 to-indigo-600',
    'bg-gradient-to-br from-red-400 to-red-600',
    'bg-gradient-to-br from-purple-400 to-purple-600',
    'bg-gradient-to-br from-sky-400 to-sky-600',
    'bg-gradient-to-br from-violet-400 to-violet-600',
    'bg-gradient-to-br from-orange-400 to-orange-600',
    'bg-gradient-to-br from-emerald-400 to-green-600',
    'bg-gradient-to-br from-pink-400 to-rose-600',
    'bg-gradient-to-br from-blue-400 to-blue-600',
    'bg-gradient-to-br from-yellow-500 to-orange-500',
    'bg-gradient-to-br from-purple-500 to-pink-500',
    'bg-gradient-to-br from-stone-400 to-red-700'
  ]
  
  // Pick deterministic index based on title characters so color stays consistent for the same title
  let hash = 0
  for (let i = 0; i < cleanName.length; i++) {
    hash = cleanName.charCodeAt(i) + ((hash << 5) - hash)
  }
  const index = Math.abs(hash) % gradients.length
  const color = gradients[index]
  
  return { icon, color }
}

const saveExtraLayanan = () => {
  if (!extraForm.value.title.trim()) return

  // Automatically assign icon and gradient color based on the title
  const { icon, color } = autoAssignExtraIconAndColor(extraForm.value.title)
  extraForm.value.icon = icon
  extraForm.value.color = color

  if (editingExtraIndex.value > -1) {
    store.tukangHarianExtra[editingExtraIndex.value] = { ...extraForm.value }
  } else {
    store.tukangHarianExtra.push({ ...extraForm.value })
  }
  extraDialog.value = false
}

const removeExtraLayanan = (index) => {
  showConfirm(
    'Hapus Layanan Tambahan',
    `Hapus layanan tambahan "${store.tukangHarianExtra[index].title}"?`,
    () => {
      store.tukangHarianExtra.splice(index, 1)
    }
  )
}

const saveTukangHarianData = async () => {
  await store.updateTukangHarianDB()
  triggerToast('Perubahan halaman Tukang Harian berhasil disimpan.')
}

// Solutions Handlers
const solutionDialog = ref(false)
const isEditingSolution = ref(false)
const solutionForm = ref({
  id: null,
  name: '',
  description: '',
  icon: 'plumbing',
  color: 'blue'
})

const openSolutionDialog = (sol = null) => {
  if (sol) {
    isEditingSolution.value = true
    solutionForm.value = {
      id: sol.id,
      name: sol.name,
      description: sol.description,
      icon: sol.icon,
      color: sol.color
    }
  } else {
    isEditingSolution.value = false
    solutionForm.value = {
      id: null,
      name: '',
      description: '',
      icon: 'plumbing',
      color: 'blue'
    }
  }
  solutionDialog.value = true
}

const saveSolution = async () => {
  if (!solutionForm.value.name.trim() || !solutionForm.value.description.trim()) return

  await store.addSolution({
    id: solutionForm.value.id,
    name: solutionForm.value.name.trim(),
    description: solutionForm.value.description.trim(),
    icon: solutionForm.value.icon,
    color: solutionForm.value.color
  })

  triggerToast(
    isEditingSolution.value
      ? `Solusi "${solutionForm.value.name}" berhasil diperbarui.`
      : `Solusi "${solutionForm.value.name}" berhasil ditambahkan.`
  )
  solutionDialog.value = false
}

const deleteSolution = async (id, name) => {
  showConfirm(
    'Hapus Solusi Bangunan',
    `Apakah Anda yakin ingin menghapus solusi "${name}"?`,
    async () => {
      await store.deleteSolution(id)
      triggerToast(`Solusi "${name}" telah dihapus.`)
    }
  )
}

const getSolutionStyles = (color) => {
  const mapping = {
    blue: {
      cardBg: 'bg-blue-50 border-blue-100 hover:border-blue-300 shadow-sm shadow-blue-100/10',
      iconBg: 'bg-blue-100 text-blue-700 border-blue-200',
      badge: 'bg-blue-100 text-blue-700 border-blue-200'
    },
    red: {
      cardBg: 'bg-red-50 border-red-100 hover:border-red-300 shadow-sm shadow-red-100/10',
      iconBg: 'bg-red-100 text-red-700 border-red-200',
      badge: 'bg-red-100 text-red-700 border-red-200'
    },
    orange: {
      cardBg: 'bg-orange-50 border-orange-100 hover:border-orange-300 shadow-sm shadow-orange-100/10',
      iconBg: 'bg-orange-100 text-orange-700 border-orange-200',
      badge: 'bg-orange-100 text-orange-700 border-orange-200'
    },
    green: {
      cardBg: 'bg-green-50 border-green-100 hover:border-green-300 shadow-sm shadow-green-100/10',
      iconBg: 'bg-green-100 text-green-700 border-green-200',
      badge: 'bg-green-100 text-green-700 border-green-200'
    },
    cyan: {
      cardBg: 'bg-cyan-50 border-cyan-100 hover:border-cyan-300 shadow-sm shadow-cyan-100/10',
      iconBg: 'bg-cyan-100 text-cyan-700 border-cyan-200',
      badge: 'bg-cyan-100 text-cyan-700 border-cyan-200'
    },
    teal: {
      cardBg: 'bg-teal-50 border-teal-100 hover:border-teal-300 shadow-sm shadow-teal-100/10',
      iconBg: 'bg-teal-100 text-teal-700 border-teal-200',
      badge: 'bg-teal-100 text-teal-700 border-teal-200'
    },
    amber: {
      cardBg: 'bg-amber-50 border-amber-100 hover:border-amber-300 shadow-sm shadow-amber-100/10',
      iconBg: 'bg-amber-100 text-amber-700 border-amber-200',
      badge: 'bg-amber-100 text-amber-700 border-amber-200'
    },
    indigo: {
      cardBg: 'bg-indigo-50 border-indigo-100 hover:border-indigo-300 shadow-sm shadow-indigo-100/10',
      iconBg: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      badge: 'bg-indigo-100 text-indigo-700 border-indigo-200'
    }
  }
  return mapping[color] || mapping.blue
}
</script>

<style scoped>
/* Standard scrollbar stylings for admin view */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #f1f5f9;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 999px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ef4444;
}

/* Chrome Autofill styling overrides to keep input background dark */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px #0f172a inset !important;
  -webkit-text-fill-color: #ffffff !important;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
