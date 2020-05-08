import Vue from 'vue'
import Vuex from 'vuex'
import type from './type/type.js'
import typecopy from './type/type copy.js'
Vue.use(Vuex)
const storeObj = {
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {},
  modules: {
    type, typecopy
  }
}
export default new Vuex.Store(storeObj)
