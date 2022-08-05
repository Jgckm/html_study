import { createStore } from 'vuex'

export default createStore({
  state: {
    isTabbarShow: true
  },
  getters: {
  },
  mutations: {
    hide(){
        this.state.isTabbarShow = false
    },
    show(){
        this.state.isTabbarShow = true
    },
  },
  actions: {
   
  },
  modules: {
  }
})
