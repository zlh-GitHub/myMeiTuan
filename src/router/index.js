import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import index from '@/page/index'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'default',
        component: defaultPage,
        redirect: '/index',
        children: [{
            path: '/index',
            name: 'index',
            component: index
        }, {
            path: 's/:name',
            name: 'goods',
            component: () =>
                import ('@/page/goodList.vue')
        }, {
            path: '/changeCity',
            name: 'changeCity',
            component: () =>
                import ('@/page/changeCity.vue')
        }]
    }, {
        path: '/account',
        name: 'account',
        component: () =>
            import ('../layout/account.vue'),
        children: [{
                path: 'login',
                name: 'login',
                component: () =>
                    import ('@/page/login.vue')
            },
            {
                path: 'register',
                name: 'register',
                component: () =>
                    import ('@/page/register.vue')
            }
        ]
    }, {
        path: "/detail/:name",
        name: "detail",
        component: () =>
            import ("@/page/detail.vue")
    }],
    mode: 'history'
})