<template>
  <q-page class="bg-white min-h-screen pt-28 sm:pt-32 pb-12">
    <!-- Header with Back Button -->
    <div class="max-w-6xl mx-auto px-6 mb-8">
      <button
        @click="router.push('/')"
        class="inline-flex items-center space-x-2 text-slate-500 hover:text-red-600 transition-colors duration-300 bg-transparent border-none cursor-pointer focus:outline-none font-bold text-sm"
      >
        <q-icon name="arrow_back" size="18px" />
        <span>Kembali ke Beranda</span>
      </button>
    </div>

    <!-- Main Project Grid -->
    <div v-if="project" class="max-w-6xl mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left: Large Showcase Image & Autoplay Carousel (col-span-7) -->
        <div class="lg:col-span-7 space-y-6">
          <div class="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
            <q-carousel
              v-model="activeImage"
              transition-prev="slide-right"
              transition-next="slide-left"
              :swipeable="project.gallery && project.gallery.length > 1"
              animated
              :arrows="project.gallery && project.gallery.length > 1"
              :infinite="project.gallery && project.gallery.length > 1"
              :autoplay="project.gallery && project.gallery.length > 1 ? 4000 : false"
              height="350px"
              class="detail-carousel overflow-hidden rounded-2xl bg-white"
            >
              <q-carousel-slide
                v-for="(img, idx) in project.gallery"
                :key="idx"
                :name="img"
                :img-src="img"
              />
            </q-carousel>
          </div>
        </div>

        <!-- Right: Project Description & Specifications (col-span-5) -->
        <div class="lg:col-span-5 space-y-8">
          <div>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-[#0B192C] leading-tight mt-1">
              {{ project.title }}
            </h1>
            <div class="flex items-center text-xs font-bold text-slate-400 uppercase tracking-widest mt-4">
              <q-icon name="place" size="16px" class="mr-1 text-red-500" />
              <span>{{ project.location }}</span>
            </div>
          </div>

          <div class="border-t border-slate-100"></div>

          <!-- Description -->
          <div class="space-y-4">
            <h3 class="text-lg font-extrabold text-[#0B192C]">Tentang Proyek</h3>
            <p class="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              {{ project.fullDesc }}
            </p>
          </div>

        </div>

      </div>

      <!-- Other Projects Grid (Proyek Lainnya) -->
      <div class="mt-24 border-t border-slate-100 pt-16">
        <h3 class="text-2xl font-extrabold text-[#0B192C] text-center mb-12">Proyek Menarik Lainnya</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="otherProj in otherProjects"
            :key="otherProj.id"
            class="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            @click="navigateToProject(otherProj.id)"
          >
            <div class="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <img :src="otherProj.image" :alt="otherProj.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  <q-icon name="place" size="14px" class="mr-1 text-red-500" />
                  <span>{{ otherProj.location }}</span>
                </div>
                <h4 class="text-base font-extrabold text-[#0B192C] leading-snug mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {{ otherProj.title }}
                </h4>
                <p class="text-slate-500 text-xs leading-relaxed mb-4 font-medium">
                  {{ otherProj.desc }}
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

    <!-- Error fallback -->
    <div v-else class="max-w-6xl mx-auto px-6 py-24 text-center">
      <h2 class="text-2xl font-bold text-slate-800">Proyek tidak ditemukan</h2>
      <p class="text-slate-500 mt-2">Maaf, halaman detail portofolio ini tidak tersedia atau telah dipindahkan.</p>
      <q-btn label="Kembali ke Beranda" color="red-6" rounded class="mt-6" @click="router.push('/')" />
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useWebsiteStore } from 'src/stores/websiteStore'

const route = useRoute()
const router = useRouter()
const store = useWebsiteStore()

onMounted(() => {
  store.initializeStore()
})

const portfolioItems = computed(() => store.portfolioItems)

const project = computed(() => {
  const id = parseInt(route.params.id, 10)
  return portfolioItems.value.find(item => item.id === id)
})

const activeImage = ref('')

// Update active image default on load and on project change
watch(
  () => project.value,
  (newProject) => {
    if (newProject) {
      activeImage.value = newProject.image
    }
  },
  { immediate: true }
)

const otherProjects = computed(() => {
  if (!project.value) return []
  return portfolioItems.value.filter(item => item.id !== project.value.id).slice(0, 3)
})

const navigateToProject = (id) => {
  router.push(`/portofolio/${id}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.detail-carousel :deep(.q-carousel__prev-arrow .q-btn),
.detail-carousel :deep(.q-carousel__next-arrow .q-btn) {
  background-color: #ffffff !important;
  color: #0b192c !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12) !important;
  transition: all 0.3s ease;
}

.detail-carousel :deep(.q-carousel__prev-arrow .q-btn:hover),
.detail-carousel :deep(.q-carousel__next-arrow .q-btn:hover) {
  background-color: #f8fafc !important;
  transform: scale(1.05);
}
</style>
