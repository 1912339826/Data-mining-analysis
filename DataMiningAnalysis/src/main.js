// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import echarts from 'echarts'
echarts.dataTool = require("echarts/extension-src/dataTool/gexf");
import router from './router'
Vue.prototype.$echarts = echarts
Vue.prototype.$dataTool = echarts.dataTool;
Vue.config.productionTip = false
import './assets/font/思源黑体/font.css'
import './assets/font/思源宋体/font.css'
import './assets/font/font.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  'echarts/theme/macarons.js'
/* eslint-disable no-new */
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
