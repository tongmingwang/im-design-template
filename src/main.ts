import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'im-design/dist/index.css';
import ImDesign, { ImDirective } from 'im-design';

createApp(App)
  .use(ImDesign, { size: 36, zIndex: 1000 })
  .use(ImDirective)
  .mount('#app');
