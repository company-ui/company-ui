import { createApp } from 'vue-demi';
import App from './app.vue';
import component from '../src/main';
import '@company-ui/style';
const app = createApp(App);
app.use(component);
app.mount('#app');
