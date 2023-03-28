import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import {Button, Input, Checkbox, Header, Aside, Main, Footer, Row, Col} from 'element-ui'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Row)
Vue.use(Col)

new Vue({
  render: h => h(App),
}).$mount('#app')
