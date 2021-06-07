
const routes = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/planes", component: () => import("pages/Planes.vue") },
      { path: "/ticket", component: () => import("pages/Ticket.vue") },
      { path: "/result", component: () => import("pages/Result.vue") },
      {
        path: "/travels",
        component: () => import("src/travels/IndexPage.vue"),
      },
      
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
  }
]

export default routes
