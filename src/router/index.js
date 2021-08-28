import VueRouter from "vue-router"

import MainPage from "../pages/MainPage"
import AllFilmsPage from "../pages/AllFilmsPage"

const routes = [
    {
        path: '/',
        comments: MainPage
    },
    {
        path: '/films',
        comments: AllFilmsPage
    }
]
console.log(VueRouter)

export default VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})