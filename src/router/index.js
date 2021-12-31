import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import AddProjects from '../views/AddProjects.vue'
import EditProjects from '../views/EditProjects.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/add',
        name: 'AddProjects',
        component: AddProjects
    },
    {
        path: '/edit/:id',
        name: 'EditProjects',
        component: EditProjects,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router