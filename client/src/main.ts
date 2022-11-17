import { createApp } from 'vue'
import App from './App.vue'
import BoardServiceHttp from './services/BoardServiceHttp';
//import App from './AppOptionsAPI.vue'

const app = createApp(App);
app.provide("boardService", new BoardServiceHttp());
app.mount('#app');

