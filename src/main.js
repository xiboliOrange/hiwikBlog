import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import {Button, Input, Checkbox, Header, Aside, Main, Footer, Row, Col, Form, FormItem, Carousel} from 'element-ui'
import Axios from 'axios'
import './css/mybtn.css'
import './css/myfont.css'



Vue.prototype.http = Axios //配置Vue原型
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
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Carousel)


new Vue({
  render: h => h(App),
}).$mount('#app')
