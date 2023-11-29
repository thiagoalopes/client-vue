import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL_API;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';



axios.interceptors.request.use(request => {
    if(!request.headers['Authorization']){
        
        axios.

    }
    console.log(request.headers['Authorization']);
    // Edit request config
    return request;
}, error => {
    console.log(2);
    return Promise.reject(error);
});

createApp(App).mount('#app');

