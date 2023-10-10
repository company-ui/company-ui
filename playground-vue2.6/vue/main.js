import { Vue2 } from 'vue-demi';
import App from './app.vue';
import 'virtual:uno.css';
import CompanyUI from '../../packages/vue/src/main';
import '../../packages/style/src/index.scss';
Vue2.config.productionTip = false;
Vue2.use(CompanyUI);

new Vue2({
  render: (h) => h(App),
}).$mount('#app');
