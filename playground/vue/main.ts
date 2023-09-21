import { createApp } from 'vue-demi';
import App from './app.vue';
import component from '../../packages/vue/src/main';
import 'virtual:uno.css';
import '../../packages/style/src/index.scss';
const app = createApp(App);
app.use(component);
app.mount('#app');
