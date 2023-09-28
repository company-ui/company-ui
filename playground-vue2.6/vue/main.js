import { Vue2 } from 'vue-demi';
import App from './app.vue';
import 'virtual:uno.css';
import component from '../../packages/vue/src/main';
import '../../packages/style/src/index.scss';
Vue2.config.productionTip = false;
Vue2.use(component);

new Vue2({
  render: (h) => h(App),
}).$mount('#app');
