import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueRouter from 'vue-router';
import Utils from './common/utils';
import Vuex from 'vuex';
import store from './store';
import { ajax } from './api/ajax';
import recordsCode from './api/response-code';
import './assets/css/style.scss';
import common from '@/assets/css/var.scss';
import '@/common/flexible.js';
import '@/common/antd-component.js';
import moment from 'moment';
import 'moment/locale/zh-cn';
import echarts from './common/echartsConfig.js';
import Chip from 'yc-chip';

// window.onerror = function (message) { // 捕获浏览器错误行为
//   console.log('');
//   // alert(`错误原因：${arguments[0]}\n错误URL: ${arguments[1]}\n错误行号: ${arguments[2]}`);
//   return true; // 禁止浏览器显示标准出错信息
// };
// a.innerHTML = ''; // 制造错误机会
console.log('process.argv值', JSON.parse(process.env.VUE_APP_CONFIG));
if (process.env.NODE_ENV === 'mock') require('@/mock');

Vue.use(Chip);
Vue.use(Vuex);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

// 引入基本模板
Vue.prototype.$echarts = echarts;
Vue.prototype.$http = {
  ajax,
};
Vue.prototype.$utils = Utils;
Vue.prototype.$var = common;
Vue.prototype.$moment = moment;
Vue.prototype.$records = recordsCode;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
