import Vue from 'vue'
import Vuex from 'vuex'
import products from './productsStore' 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
      } else {
        localStorage.removeItem('user')
      }
    }
  },
  getters: {
    isLoggedIn: state => !!state.user
  },
  modules: {
    products,
  }
})
