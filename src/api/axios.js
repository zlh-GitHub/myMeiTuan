import axios from 'axios'
import url from './url.js'

axios.defaults.baseURL = url.baseUrl
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.params = {
    appkey: 'zlhy_1553836760218',
    ...config.params
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default axios


























