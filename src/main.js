import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import { Button , Form} from 'element-ui'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Form)
new Vue({
  render: h => h(App),
}).$mount('#app')
