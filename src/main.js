// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router/'
import store from '@/store'
import BootstrapVue from 'bootstrap-vue'
import NavigationComponent from '@/views/NavigationComponent'
import TodoComponent from '@/views/TodoComponent'
import ModalComponent from '@/views/modules/Modal'
import LoadingComponent from '@/views/modules/Loading'
import VCalendar from 'v-calendar'

// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'
import icon from 'material-design-icons'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(icon)
Vue.use(VCalendar, {
  componentPrefix: 'vc' // Use <vc-calendar /> instead of <v-calendar />
})
Vue.component('TodoComponent', TodoComponent)
Vue.component('NavigationComponent', NavigationComponent)
Vue.component('ModalComponent', ModalComponent)
Vue.component('LoadingComponent', LoadingComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
