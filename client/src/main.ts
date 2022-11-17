import { createApp } from 'vue'
import App from './App.vue'
import AxiosAdapter from './infra/http/AxiosAdapter';
import FetchAdapter from './infra/http/FetchAdapter';
import BoardServiceHttp from './services/BoardServiceHttp';
//import App from './AppOptionsAPI.vue'

const baseUrl = "http://localhost:3000";
const app = createApp(App);
const httpClient = new AxiosAdapter();
//const httpClient2 = new FetchAdapter();
app.provide("boardService", new BoardServiceHttp(httpClient, baseUrl));
app.mount('#app');

