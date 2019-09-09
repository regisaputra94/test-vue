// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'

import DefaultLayout from '@/layouts/default'
import AuthLayout from '@/layouts/auth'
import BlankLayout from '@/layouts/blank'

Vue.component('default-layout', DefaultLayout)
Vue.component('auth-layout', AuthLayout)
Vue.component('blank-layout', BlankLayout)

const requireComponent = require.context(
  './components',
  false,
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  fileName = fileName.split('.')[1]
  const componentName = `${fileName.replace('/', '')}Component`

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(SuiVue)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
