import { App } from 'vue-demi';
// @ts-ignore
import component from './AutoComplete.vue';

export default {
  install(app: App) {
    app.component(component.name, component);
  },
};
