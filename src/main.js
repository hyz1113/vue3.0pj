import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App);
// 第三方UI库
import Antd from 'ant-design-vue';
import '@/assets/css/antd.css';

app.use(Antd)

app.use(store)
app.use(router)
app.mount('#app')
