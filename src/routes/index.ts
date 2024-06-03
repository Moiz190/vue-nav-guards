import { createRouter, createWebHistory } from "vue-router"
import Home from "../components/Home.vue"
import Contact from "../components/Contact.vue"
import Login from '../components/Login.vue'
// import { useAuthStore } from "../store"
const routes = [
    { path: '/home', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/contact',name: 'contact', component: Contact },

]
export const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    // const authStore = useAuthStore()
    const isLoggedIn =localStorage.getItem('email')
    if (isLoggedIn && to.path === '/login') {
        next('/home')
    }
    else if (
        (to.path !== '/login' && !isLoggedIn) 
    ) {
        next('/login')
    }
    else {
        next()
    }
})