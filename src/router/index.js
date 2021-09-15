import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../pages/MainPage'
import AllFilmsPage from '../pages/AllFilmsPage'
import FilmPage from '../pages/FilmPage'
import NotFound from '../pages/404'
import FilmsLayout from '../pages/FilmsLayout'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/films',
    name: 'filmsLayout',
    component: FilmsLayout,
    children: [
      {
        path: '',
        name: 'films',
        component: AllFilmsPage,
      },
      {
        path: ':id',
        name: 'filmPage',
        component: FilmPage,
        beforeEnter: (to, from, next) => {
          if(localStorage.getItem("auth")){
            next()
          }else{
            next({ name: 'films'})
          }
        }
      },
      {
        path: '/:catchAll(.*)/catchAll(.*)',
        redirect:{ name: "films" }
      },
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
