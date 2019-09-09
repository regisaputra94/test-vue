import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      meta: {
        layout: 'default'
      },
      component: () => import('@/containers/home')
    }
  ]
})
