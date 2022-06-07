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
    loading: false
    // packagesPage: 1

  },
  mutations: {
    setPackages(state, payload) {
      state.packages = Vue.prototype.$_.cloneDeep( payload.objects )
      state.packagesTotal = Vue.prototype.$_.cloneDeep( payload.total )
    },
    setPackagesSearchInfo(state, payload) {
      let obj = {}
      if ( (payload.text || payload.size) && !payload.page) {
        obj.page = 1
      }
      state.packagesSearchInfo = Object.assign(state.packagesSearchInfo, payload, obj)
    },
    startLoading(state) {
      state.loading = true
    },
    finishLoading(state) {
      state.loading = false
    }
    // setPerPage(state, payload) {
    //   state.packagesPerPage = payload
    // }
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
    }
    // getPage(state) {
    //   return state.packagesPage
    // },
  },
  actions: {
    async searchPackages({commit, getters, state}, payload) {
      commit('setPackagesSearchInfo', payload)
      commit('startLoading')

      let info = getters.getPackagesSearchInfo,
        from = (info.page - 1) * info.size
      console.log( info, 'searchPackages', state)
      return await api.searchPackages({...info, from})
        .then(response => {
          commit('setPackages', response)
          
        })
        .finally(() => commit('finishLoading') )
    }
  },
  modules: {
  },
})
