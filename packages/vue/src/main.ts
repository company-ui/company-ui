import type { App } from 'vue-demi';
import autocomplete from './autocomplete';
import teleport from './teleport';

export default {
  install(app: App) {
    app.component(autocomplete.name, autocomplete);
    app.component(teleport.name, teleport);
  },
};

export { autocomplete, teleport };
