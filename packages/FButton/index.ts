import { App, Plugin } from 'vue';
import FButton from './index.vue';

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('f-button', FButton);
  },
};

export { FButton };