import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // state 公共状态
    state: {
        cityId: '310100',
        cityName: '上海'
    }
})
