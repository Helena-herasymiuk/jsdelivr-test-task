import Vue from 'vue'
import Vuex from 'vuex'
import PackagesApi from '@/api/packagesApi'
const api = new PackagesApi()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packages: [],
    packagesTotal: 0,
    packagesSearchInfo: {
      text: '',
      size: 10, 
      page: 1
    },
    loading: false,
    openPackageInfo: {}

  },
  mutations: {
    setPackages(state, payload) {
      state.packages = Vue.prototype.$_.cloneDeep( payload.hits )
      state.packagesTotal =  payload.nbHits
    },
    setPackagesSearchInfo(state, payload) {
      let obj = {}
      if ( (payload.text || payload.size) && !payload.page) { // start from page 1 if changed search text or page size
        obj.page = 1
      }
      state.packagesSearchInfo = Object.assign(state.packagesSearchInfo, payload, obj)
    },

    startLoading(state) {
      state.loading = true
    },
    finishLoading(state) {
      state.loading = false
    },

    openPackage(state, payload) {
      state.openPackageInfo = Object.assign(state.openPackageInfo, payload)
    },
    closePackage(state) {
      state.openPackageInfo = {}
    }
  },
  getters: {
    getPackages(state) {
      return state.packages
    },
    getPackagesTotal(state) {
      return state.packagesTotal
    },
    getPackagesSearchInfo(state) {
      return state.packagesSearchInfo
    },
    getLoading(state) {
      return state.loading
    },
    getOpendPackage(state) {
      return state.openPackageInfo
    }
  },
  actions: {
    /**
     * search packages by text size & page
     */
    async searchPackages({commit, getters}, payload) {
      commit('setPackagesSearchInfo', payload)  // update search info in store
      commit('startLoading')

      let info = getters.getPackagesSearchInfo  // get updated search info
      
      return await api.searchPackages({...info, page: info.page - 1})
        .then(response => {
          commit('setPackages', response)
          
        })
        .finally(() => commit('finishLoading') )
    },
    /**
     * get addditional package info
     */
    async openPackage({commit}, payload) {
      
      commit('openPackage', {search: payload})
      return await api.getPackageInfo(payload)
        .then(response => {
          commit('openPackage', {package: response})
        })
    }
  },
  modules: {
  },
})
