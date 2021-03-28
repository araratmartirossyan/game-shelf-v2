import { createApp } from 'vue'
import urql from '@urql/vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'

// deps
import router from "./router";

const app = createApp(App)

app.use(urql, { url: 'https://graph.myshelf.info/graphql' })
app.use(router)
app.use(ElementPlus)
app.mount('#app')
