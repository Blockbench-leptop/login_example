import axios from 'axios';
import {WinStorage} from './AuthSrorage';
import history from "../helpers/history";

axios.interceptors.request.use((config) => {
    config.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:8081/dev" : "http://mister-twister.com/kuku"
    config.headers['Authorization'] =`Bearer ${window.localStorage.getItem('token')}`
    return config
})

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 403) {
        alert(error.response.data.error)
    }
    if (error.response.status === 401) {
        WinStorage.removeToken()
        history.push('/')
    }
    if (error.response.status === 404) {
        alert('404 Server not found!')
    }
    return error
});
export {axios}
