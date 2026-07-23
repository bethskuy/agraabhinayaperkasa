const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'borongan', component: () => import('pages/BoronganPage.vue') },
      { path: 'konstruksi', component: () => import('pages/KonstruksiPage.vue') },
      { path: 'tukang-harian', component: () => import('pages/TukangHarianPage.vue') },
      { path: 'portofolio/:id', component: () => import('pages/PortfolioDetailPage.vue') }
    ],
  },

  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
