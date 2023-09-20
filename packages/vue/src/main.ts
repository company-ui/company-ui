import type { App } from 'vue-demi';
import component from './autocomplete.vue';
import 'virtual:uno.css';

export default {
  install(app: App) {
    app.component(component.name, component);
  },
};
