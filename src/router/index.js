import { createRouter, createWebHistory } from 'vue-router'
import { localUtil } from '../utils/localUtil'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },

  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/home.vue'),
    children: [
      // {
      //   path: 'weather/city',
      //   name: 'weatherCity',
      //   component: () => import('../views/home/system/weather/city.vue')
      // },
      {
        path: 'user/info',
        name: 'userinfo',
        component: () => import('../views/system/user/userinfo/index.vue')
      },
      {
        path: 'shop/info',
        name: 'shopinfo',
        component: () => import('../views/system/shop/goods/index.vue')
      },
      {
        path: 'shop/kit',
        name: 'shopkit',
        component: () => import('../views/system/shop/garagekit/index.vue')
      },
      {
        path: 'shop/album',
        name: 'shopalbum',
        component: () => import('../views/system/shop/album/index.vue')
      }
    ]
  }
]

const router = createRouter({
  routes: routes,
  history: createWebHistory()
})

// router.beforeEach((to) => {
//   if (to.path !== '/login') {
//     const username = localUtil.setLocal('username')
//     if (!username) {
//       return '/login'
//     }
//   }
// })

export default router
