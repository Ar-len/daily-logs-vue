import Vue from 'vue'
import Vuex from 'vuex'
import type from './type/type.js'
Vue.use(Vuex)
const storeObj = {
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {},
  modules: {
    type
  }
}
export default new Vuex.Store(storeObj)
