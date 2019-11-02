import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/works',
            name: 'works',
            component: () =>
                import ('./views/Works.vue')
        },
        {
            path: '/bike',
            name: 'bike',
            component: () =>
                import ('./views/Bike.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () =>
                import ('./views/Contact.vue')
        }
    ]
})