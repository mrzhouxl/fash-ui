import { App, Plugin } from 'vue';

import { ButtonPlugin } from './FButton';

const FashUIPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
  },
};

export default FashUIPlugin;

export * from './FButton';