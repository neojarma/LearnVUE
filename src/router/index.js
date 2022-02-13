import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import {
    projectAuth
} from '../firebase/config'

//auth guard
const requireAuth = (to, from, next) => {
    let user = projectAuth.currentUser
    if (!user) {
        next({
            name: 'Home'
        })
    } else {
        next()
    }
}

const requireNoAuth = (to, from, next) => {
    let user = projectAuth.currentUser
    if (user) {
        next({
            name: 'Chatroom'
        })
    } else {
        next()
    }
}

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter: requireNoAuth
    },
    {
        path: '/chatroom',
        name: 'Chatroom',
        component: () =>
            import ('../views/Chatroom.vue'),
        beforeEnter: requireAuth
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router