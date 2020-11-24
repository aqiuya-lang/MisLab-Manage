// import axios from 'axios'
// const instance = axios.create({
//     baseURL:"http://47.107.62.150:8080",
//     // timeout: 1000,
    
//     withCredentials: false,
// })

// export default instance
import axios from 'axios'
import qs from 'qs'
const instance = axios.create()
instance.interceptors.request.use(
    config => 
    {
        if (localStorage.getItem('Authorization')) {
            config.headers.token = localStorage.getItem('Authorization')
        }
        return config;
    },
    err => {
        return Promise.reject(err)
    }
)
instance.interceptors.response.use(
    response => {
        return Promise.resolve(response.data);
    },
    err => {
        return Promise.reject(err)
    }
)
export default instance


