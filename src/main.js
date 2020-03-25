import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import './permission'; // permission control

Vue.use(ElementUI, {
  size: 'small'
});

Vue.use(ViewUI, {
  transfer: true,
  size: 'small',
  capture: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
