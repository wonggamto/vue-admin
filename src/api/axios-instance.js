import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 10000
})

instance.interceptors.request.use(
    config => {
        return config
    }, error => {
        return Promise.reject(error)
    })

instance.interceptors.response.use(
    response => {
        return response
    }, error => {
        return Promise.reject(error.response.data)
    })

export default instance

export const requestLogin = params => { return instance.post(`/login`, params).then(res => res.data) }