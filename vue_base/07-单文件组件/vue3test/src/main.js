import { createApp } from 'vue'
import App from './base/02-todo'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';


createApp(App).use(store).use(router).use(Vant).mount('#app')
