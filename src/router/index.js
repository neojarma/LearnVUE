import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    //create route to Details views
    {
        path: '/post/:id',
        name: 'Details',
        component: () =>
            import ('../views/Details.vue'),
        props: true
    },
    //create route to Create views
    {
        path: '/create',
        name: 'Create',
        component: () =>
            import ('../views/Create.vue')
    },
    {
        path: '/tags/:tag',
        name: 'Tag',
        component: () =>
            import ('../views/Tag.vue'),
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router