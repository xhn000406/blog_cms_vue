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
      {
        path: 'user/info',
        name: 'userinfo',
        component: () => import('../views/system/user/userinfo/index.vue')
      },
      {
        path: 'auth/info',
        name: 'authInfo',
        component: () => import('../views/userInfo/index.vue')
      },
      {
        path: 'dict/info',
        name: 'dictInfo',
        component: () => import('../views/system/dict/index.vue')
      },
      {
        path: 'editor',
        name: 'editor',
        component: () => import('../views/edit/index.vue')
      },
      {
        path: 'dict/artcile',
        name: 'dictArtcile',
        component: () => import('../views/system/article/index.vue')
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
