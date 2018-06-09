/**
 * axios
 * Reference: https://github.com/axios/axios
 */
import axiosBase from 'axios'

/* === URL === */
const baseURL = 'http://localhost:7777/static/data/'

const axios = axiosBase.create({
    baseURL: `${baseURL}`,
    timeout: 5000
})

/* === Handling === */
const onSuccess = response => Promise.resolve(response)

const onError = e => Promise.reject(e)


const $axios = {
    get: (url, config) => axios.get(url, config).then(onSuccess).catch(onError),
    post: (url, data, config) => axios.post(url, data, config).then(onSuccess).catch(onError),
    put: (url, data, config) => axios.put(url, data, config).then(onSuccess).catch(onError),
    patch: (url, data, config) => axios.patch(url, data, config).then(onSuccess).catch(onError),
    delete: (url, config) => axios.delete(url, config).then(onSuccess).catch(onError)
}

export default $axios