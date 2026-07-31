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
              :class="activeTab === tab.value ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'bg-transparent text-slate-650 hover:text-[#0B192C] hover:bg-slate-100'"
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
            <div class="hidden sm:flex flex-col items-end">
              <span class="text-xs font-bold text-white">Admin Utama</span>
              <span class="text-[10px] text-emerald-300 font-bold flex items-center">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
                Sesi Aktif
              </span>
            </div>
            <button
              @click="handleLogout"
              class="flex items-center justify-center space-x-1.5 px-3.5 py-2 bg-white/10 hover:bg-white border border-white/25 hover:border-white text-white hover:text-red-700 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer"
            >
              <q-icon name="logout" size="16px" />
              <span>Keluar</span>
            </button>
          </div>
        </header>

        <!-- Main Dashboard Panels -->
        <main ref="mainScrollRef" @scroll="handleMainScroll" class="flex-grow p-6 md:p-8 lg:p-10 overflow-y-auto">
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
        <div v-if="activeTab === 'beranda'" class="space-y-8 max-w-4xl">
          <!-- Slide Manager -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex items-center justify-between">
              <span class="flex items-center">
                <q-icon name="view_carousel" class="text-red-500 mr-2" size="22px" />
                Slide Banner Utama (Hero Slider)
              </span>
              <button
                @click="addHeroSlide"
                class="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-extrabold text-xs rounded-xl border-none cursor-pointer transition-colors"
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
            <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex items-center">
              <q-icon name="info" class="text-red-500 mr-2" size="22px" />
              Profil Perusahaan (Tentang Kami)
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
            <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex items-center">
              <q-icon name="bar_chart" class="text-red-500 mr-2" size="22px" />
              Statistik Highlight Perusahaan (3 Card Utama)
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
            <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex items-center">
              <q-icon name="article" class="text-red-500 mr-2" size="22px" />
              Profil Perusahaan (Visi & Misi)
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
            <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex items-center justify-between">
              <span class="flex items-center">
                <q-icon name="photo_library" class="text-red-500 mr-2" size="22px" />
                Workspace Kami (Galeri Kantor & Fasilitas)
              </span>
              <button
                @click="addOfficeSlide"
                class="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-extrabold text-xs rounded-xl border-none cursor-pointer transition-colors"
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
                    <div class="flex items-center space-x-4">
                      <!-- Preview Image -->
                      <div class="w-24 h-16 rounded-xl border border-slate-200 bg-white overflow-hidden flex items-center justify-center shrink-0">
                        <img
                          v-if="slide.image"
                          :src="slide.image"
                          class="w-full h-full object-cover"
                        />
                        <q-icon v-else name="image" class="text-slate-300" size="24px" />
                      </div>

                      <input
                        v-model="slide.image"
                        type="text"
                        placeholder="Path gambar (e.g. images/ruangadmin.jpeg) atau base64 data"
                        class="flex-grow px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                      />

                      <div class="flex items-center shrink-0">
                        <input
                          type="file"
                          accept="image/*"
                          class="hidden"
                          :id="'office-upload-' + idx"
                          @change="handleOfficeUpload($event, idx)"
                        />
                        <label
                          :for="'office-upload-' + idx"
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
                Simpan Galeri Workspace
              </button>
            </div>
          </div>

          <!-- Mengapa Memilih Kami (Keunggulan AAP) Editor -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex items-center">
              <q-icon name="stars" class="text-red-500 mr-2" size="22px" />
              Mengapa Memilih Kami (Keunggulan & Kinerja)
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
                    <div class="flex items-center space-x-4">
                      <!-- Preview Image -->
                      <div class="w-16 h-16 rounded-xl border border-slate-200 bg-white overflow-hidden flex items-center justify-center shrink-0">
                        <img
                          v-if="store.advantagesMascot"
                          :src="store.advantagesMascot"
                          class="w-full h-full object-cover"
                        />
                        <q-icon v-else name="face" class="text-slate-300" size="24px" />
                      </div>

                      <input
                        v-model="store.advantagesMascot"
                        type="text"
                        placeholder="Path gambar (e.g. images/mascot_illustration.jpg) atau base64 data"
                        class="flex-grow px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                      />

                      <div class="flex items-center shrink-0">
                        <input
                          type="file"
                          accept="image/*"
                          class="hidden"
                          id="mascot-file-upload"
                          @change="handleMascotUpload($event)"
                        />
                        <label
                          for="mascot-file-upload"
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

              <!-- Advantages List Loop -->
              <div class="border border-[#1E3E62]/15 rounded-2xl p-5 bg-[#1E3E62]/5">
                <div class="flex justify-between items-center mb-4">
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
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-lg font-extrabold text-slate-900 m-0 flex items-center">
                <q-icon name="miscellaneous_services" class="text-red-500 mr-2" size="22px" />
                Kelola Layanan Perusahaan
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
                      <div class="flex items-center space-x-4">
                        <!-- Preview Image -->
                        <div class="w-24 h-16 rounded-xl border border-slate-200 bg-white overflow-hidden flex items-center justify-center shrink-0">
                          <img
                            v-if="service.image"
                            :src="service.image"
                            class="w-full h-full object-cover"
                          />
                          <q-icon v-else name="image" class="text-slate-300" size="24px" />
                        </div>

                        <input
                          v-model="service.image"
                          type="text"
                          placeholder="Path gambar (e.g. images/kontruksi.png) atau base64 data"
                          class="flex-grow px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                        />

                        <div class="flex items-center shrink-0">
                          <input
                            type="file"
                            accept="image/*"
                            class="hidden"
                            :id="'service-upload-' + idx"
                            @change="handleServiceUpload($event, idx)"
                          />
                          <label
                            :for="'service-upload-' + idx"
                            class="px-4 py-3 bg-red-50 hover:bg-red-100 text-red-600 font-extrabold text-xs rounded-xl cursor-pointer transition-all duration-200 flex items-center space-x-1.5 border border-red-200/50"
                          >
                            <q-icon name="cloud_upload" size="18px" />
                            <span>Pilih & Upload</span>
                          </label>
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
              <h3 class="text-lg font-extrabold text-slate-900 m-0 flex items-center">
                <q-icon name="engineering" class="text-red-500 mr-2" size="22px" />
                Kelola Tenaga Ahli (Tukang)
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
                  <div v-for="(slideImg, sIdx) in store.artisansSlides" :key="sIdx" class="flex items-center space-x-3">
                    <div class="w-16 h-12 rounded-xl border border-slate-200 bg-white overflow-hidden flex items-center justify-center shrink-0">
                      <img v-if="slideImg && !slideImg.startsWith('images/')" :src="slideImg" class="w-full h-full object-cover" />
                      <img v-else-if="slideImg" :src="slideImg" class="w-full h-full object-cover" />
                      <q-icon v-else name="image" class="text-slate-355" size="18px" />
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      :id="'artisan-slide-upload-' + sIdx"
                      @change="handleArtisanSlideUpload($event, sIdx)"
                      class="hidden"
                    />
                    <label
                      :for="'artisan-slide-upload-' + sIdx"
                      class="px-3 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-lg text-[10px] font-extrabold flex items-center space-x-1.5 cursor-pointer transition-all shrink-0 select-none border-dashed"
                    >
                      <q-icon name="cloud_upload" size="14px" />
                      <span>Upload</span>
                    </label>
                    <input
                      v-model="store.artisansSlides[sIdx]"
                      type="text"
                      placeholder="Path gambar..."
                      class="flex-grow px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-semibold focus:outline-none focus:border-red-500"
                    />
                    <button
                      type="button"
                      @click="removeArtisanSlide(sIdx)"
                      class="p-2 bg-red-50 hover:bg-red-650 border border-red-100 text-red-600 hover:text-white rounded-lg cursor-pointer transition-colors duration-150"
                    >
                      <q-icon name="delete" size="14px" />
                    </button>
                  </div>
                  <div v-if="store.artisansSlides.length === 0" class="text-slate-400 text-[10px] font-semibold text-center py-2">
                    Belum ada foto ditambahkan.
                  </div>
                </div>
              </div>

              <!-- Core Points List -->
              <div class="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide flex justify-between items-center">
                  <span>Poin Keunggulan Tenaga Ahli</span>
                  <button
                    type="button"
                    @click="addArtisanPoint"
                    class="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 border-none rounded-lg text-[10px] font-bold cursor-pointer text-slate-700 flex items-center space-x-1"
                  >
                    <q-icon name="add" size="12px" />
                    <span>Tambah Poin</span>
                  </button>
                </label>

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
          <div class="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
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
        </div>

        <!-- TAB PANEL: KLIEN -->
        <div v-if="activeTab === 'klien'" class="space-y-6 max-w-4xl">
          <!-- Add Client Form -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex items-center">
              <q-icon name="add_photo_alternate" class="text-red-500 mr-2" size="22px" />
              Tambah Logo Klien / Mitra
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
                <div class="flex items-center space-x-3">
                  <input
                    type="file"
                    accept="image/*"
                    id="client-file-upload"
                    @change="handleClientUpload($event)"
                    class="hidden"
                  />
                  <label
                    for="client-file-upload"
                    class="px-4 py-3.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-350 text-slate-700 rounded-xl text-xs font-extrabold flex items-center space-x-2 cursor-pointer transition-all duration-200 shrink-0 select-none"
                  >
                    <q-icon name="cloud_upload" size="18px" />
                    <span>Upload Logo</span>
                  </label>

                  <input
                    v-model="clientForm.image"
                    type="text"
                    required
                    placeholder="Atau masukkan path / data base64..."
                    class="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                  />
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
            <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex items-center">
              <q-icon name="groups" class="text-red-500 mr-2" size="22px" />
              Daftar Logo Klien Aktif
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
          <div class="hidden md:block bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
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
                <p class="text-xs text-slate-600 leading-relaxed font-semibold">
                  "{{ review.comment }}"
                </p>
              </div>

              <!-- Footer Actions -->
              <div class="flex justify-end pt-3 border-t border-slate-100 mt-4">
                <button
                  @click="deleteReview(review.id, review.name)"
                  class="px-3.5 py-2 bg-red-50 hover:bg-red-600 hover:text-white text-red-600 border border-red-100 rounded-xl text-[10px] font-extrabold cursor-pointer transition-all duration-200 flex items-center space-x-1"
                >
                  <q-icon name="delete" size="14px" />
                  <span>Hapus Ulasan</span>
                </button>
              </div>
            </div>
            <div v-if="store.reviews.length === 0" class="col-span-full p-8 text-center text-slate-400 font-semibold bg-white border border-slate-200 rounded-2xl">
              Belum ada ulasan masuk.
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
      </main>
      </div>
    </div>

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

        <q-card-section class="space-y-4 pt-6 max-h-[70vh] overflow-y-auto pr-2 text-slate-700">
          <!-- Title -->
          <div>
            <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Nama Proyek</label>
            <input
              v-model="projectForm.title"
              type="text"
              required
              placeholder="Contoh: Pekerjaan Cor Jalan Utama IKN..."
              class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
            />
          </div>

          <!-- Category & Labels -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Kode Kategori</label>
              <select
                v-model="projectForm.category"
                class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500 cursor-pointer"
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
                class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
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
                class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Gambar Utama / Upload Foto</label>
              <div class="flex items-center space-x-3">
                <input
                  type="file"
                  accept="image/*"
                  id="project-main-upload"
                  @change="handleProjectMainUpload($event)"
                  class="hidden"
                />
                <label
                  for="project-main-upload"
                  class="px-4 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-350 text-slate-700 rounded-xl text-xs font-extrabold flex items-center space-x-2 cursor-pointer transition-all duration-200 shrink-0 select-none animate-pulse"
                  style="animation-duration: 3s;"
                >
                  <q-icon name="cloud_upload" size="18px" />
                  <span>Upload Foto</span>
                </label>
                <input
                  v-model="projectForm.image"
                  type="text"
                  required
                  placeholder="Path atau URL Gambar Utama..."
                  class="flex-grow px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500"
                />
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
              class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500 resize-none"
            ></textarea>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Deskripsi Lengkap (Halaman Detail)</label>
            <textarea
              v-model="projectForm.fullDesc"
              required
              rows="4"
              placeholder="Tulis uraian lengkap proyek sipil yang telah selesai dikerjakan..."
              class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-red-500 resize-none"
            ></textarea>
          </div>


          <!-- Gallery Images Array Editor -->
          <div class="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
            <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide flex justify-between items-center">
              <span>Galeri Foto Proyek</span>
              <button
                type="button"
                @click="addGalleryRow"
                class="px-2.5 py-1 bg-slate-100 hover:bg-slate-250 border-none rounded-lg text-[10px] font-bold cursor-pointer text-slate-700 flex items-center space-x-1"
              >
                <q-icon name="add" size="12px" />
                <span>Tambah Foto</span>
              </button>
            </label>

            <div class="space-y-3 mt-3">
              <div v-for="(imgUrl, gIdx) in projectForm.gallery" :key="gIdx" class="flex items-center space-x-2">
                <input
                  type="file"
                  accept="image/*"
                  :id="'project-gallery-upload-' + gIdx"
                  @change="handleProjectGalleryUpload($event, gIdx)"
                  class="hidden"
                />
                <label
                  :for="'project-gallery-upload-' + gIdx"
                  class="px-3 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-lg text-[10px] font-extrabold flex items-center space-x-1.5 cursor-pointer transition-all shrink-0 select-none border-dashed"
                >
                  <q-icon name="cloud_upload" size="14px" />
                  <span>Upload</span>
                </label>
                <input
                  v-model="projectForm.gallery[gIdx]"
                  type="text"
                  placeholder="Contoh: images/k1.png..."
                  class="flex-grow px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-xs font-semibold focus:outline-none focus:border-red-500"
                />
                <button
                  type="button"
                  @click="removeGalleryRow(gIdx)"
                  class="p-2 bg-red-50 hover:bg-red-600 border border-red-100 text-red-600 hover:text-white rounded-lg cursor-pointer transition-colors duration-150"
                >
                  <q-icon name="delete" size="14px" />
                </button>
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
            class="text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg hover:shadow-red-600/20 font-sans"
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
      class="fixed bottom-6 right-6 z-50 bg-white border border-slate-200 text-slate-850 rounded-2xl px-6 py-4 shadow-2xl flex items-center space-x-3 transition-all duration-300"
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
  { label: 'Edit Beranda & Profil', value: 'beranda', icon: 'home', title: 'Edit Konten Beranda & Profil' },
  { label: 'Kelola Portofolio', value: 'portofolio', icon: 'folder', title: 'Kelola Portofolio Proyek' },
  { label: 'Kelola Klien & Partner', value: 'klien', icon: 'business', title: 'Kelola Klien & Logo Partner' },
  { label: 'Kelola Aneka Solusi', value: 'solusi', icon: 'plumbing', title: 'Kelola Solusi Bangunan' },
  { label: 'Moderasi Ulasan', value: 'ulasan', icon: 'star', title: 'Moderasi Komentar & Rating' }
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
  if (confirm(`Apakah Anda yakin ingin menghapus proyek "${title}" dari portofolio?`)) {
    await store.deletePortfolioItem(id)
    triggerToast(`Proyek "${title}" telah dihapus.`)
  }
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
  if (confirm(`Hapus logo klien/partner "${name}"?`)) {
    await store.deleteClient(id)
    triggerToast(`Logo "${name}" telah dihapus.`)
  }
}

// Review Handlers
const deleteReview = async (id, name) => {
  if (confirm(`Hapus ulasan dari "${name}"? Ulasan tidak akan muncul lagi di marquee.`)) {
    await store.deleteReview(id)
    triggerToast(`Ulasan dari "${name}" telah dihapus.`)
  }
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
  if (confirm(`Apakah Anda yakin ingin menghapus solusi "${name}"?`)) {
    await store.deleteSolution(id)
    triggerToast(`Solusi "${name}" telah dihapus.`)
  }
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
