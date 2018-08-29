import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/display',
      name: 'display',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ './views/Display.vue'),
      props: (route) => ({
        docsLink: route.query.docslink
      }),
      beforeEnter: (to, from, next) => {
        if (to.query.docslink && /\/document\/d\/([a-zA-Z0-9-_]+)/.test(to.query.docslink)) {
          next()
        } else {
          next('/')
        }
      }
    }
  ]
})