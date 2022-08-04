import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http'
Vue.use(Vuex)

export default new Vuex.Store({
    // state 公共状态
    state: {
        cityId: '310100',
        cityName: '上海',
        cinemasList: []
    },
    // 支持异步和同步
    actions: {
        getCinemasData (store, cityId) {
            // console.log('getCinemasData--action')
            return http.http({
                url: `/gateway?cityId=${cityId}&ticketFlag=1&k=1348166`,
                headers: {
                    'X-Host': 'mall.film-ticket.cinema.list'
                }
            }).then((res) => {
                // console.log(res.data.data)
                store.commit('changeCinemaData', res.data.data.cinemas)
            })
        }
    },
    // 用来修改state 方便跟踪
    mutations: {
        changeCityName (state, cityName) {
            console.log(cityName)
            state.cityName = cityName
        },
        changeCityId (state, cityId) {
            console.log(cityId)
            state.cityId = cityId
        },
        changeCinemaData (state, data) {
            state.cinemasList = data
        },
        clearCinemaList (state) {
            state.cinemasList = []
        }
    }
})
// vuex 管理保存公共状态，（分散在各个组件内容状态，统一管理，）

// vuex 默认是管理在内存，一刷新页面，公共状态就丢失了
// vuex 持久化
/**
 * vue项目应用
 * 1.非父传子的通信
 * 2.后端数据的缓存快照，减少重复的数据请求减轻服务器压力，提高用户体验
 */
