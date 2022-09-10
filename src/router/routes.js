

const routes = [
  {
    path: '/',
    component: () => import('layouts/PublicLayout.vue'),
    meta: { requiresAuth: false },
    children: [
      { path: '', component: () => import('src/pages/Index.vue') },
      { path: 'signin', component: () => import('src/pages/SignIn.vue') },
      { path: 'signup', component: () => import('src/pages/SignUp.vue') }
    ]
  },
  {
    path: '/app',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '', component: () => import('src/pages/DogList.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
