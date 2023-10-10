import { createApp } from 'vue-demi';
import 'virtual:uno.css';
import App from './app.vue';
import CompanyUI from '../../packages/vue/src/main';
import '../../packages/style/src/index.scss';
const app = createApp(App);
app.use(CompanyUI);
app.mount('#app');
