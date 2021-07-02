
const routes = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: "", component: () => import("pages/Explore.vue") },
      { path: "/nosotros", component: () => import("pages/Nosotros.vue") },
      { path: "/planes", component: () => import("pages/Planes.vue") },
      { path: "/reserva", component: () => import("pages/Reserva.vue") },
      { path: "/result", component: () => import("pages/Result.vue") },
      { path: "/tours", component: () => import("pages/Tours.vue") },
      {
        path: "/travels",
        component: () => import("src/travels/IndexPage.vue"),
      },
      {
        path: "/travels/:id",
        component: () => import("src/travels/ShowPage.vue"),
        props: true
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/',
    component: () => import('pages/Carrusel.vue')
  },
  {
    path: '/auth',
    component: () => import('pages/Auth.vue'),
  },
  {
    path: '/register',
    component: () => import('pages/Register.vue'),
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue'),
  }
]

export default routes
