
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      { path: '', component: () => import('pages/LoginPage.vue') },

      // ...other sub routes
    ],
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      { path: '', component: () => import('pages/RegisterPage.vue') },

      // ...other sub routes
    ],
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      { path: '', component: () => import('pages/HomeMenuPage.vue') },

      // ...other sub routes
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
