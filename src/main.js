import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import App from './App.vue';
import routes from './routes';
import 'vuetify/dist/vuetify.min.css';
import '../node_modules/material-design-icons-iconfont/dist/material-design-icons.css';
import './registerServiceWorker';

Vue.config.productionTip = false;

const appOptions = {};

const router = new VueRouter({ routes, appOptions });

Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
