import './style.css'
import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app =createApp(App)
const options={
    maxToasts: 3,
};
app.use(Toast, options);
app.use(store)
app.mount('#app')
