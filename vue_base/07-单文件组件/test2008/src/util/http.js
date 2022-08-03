// import axios from 'axios'
// // 1
// function httpForDetail (id) {
//   return axios({
//     url: `/detail/gateway?filmId=${id}&k=4143510`,
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16593314392095394284634113","bc":"110100"}',
//       'X-Host': 'mall.film-ticket.film.info'
//     }
//   })
// }
// function htppForList () {
//   return axios({
//     url: '/maizuo/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2546257',
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16593314392095394284634113","bc":"110100"}',
//       'X-Host': 'mall.film-ticket.film.list'
//     }
//   })
// }
// // es6 导出
// export default {
//   httpForDetail,
//   htppForList
// }

// 2.请求数据封装
import axios from 'axios'
import { Toast } from 'vant'

const http = axios.create({
  // 配置基础路径
  baseURL: 'https://m.maizuo.com/',
  timeout: 3000,
  // 请求头
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16593314392095394284634113","bc":"110100"}'
  }
})

// Add a request interceptor
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  })

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
http.interceptors.response.use(function (response) {
  Toast.clear()
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})
export default {
  http
}
