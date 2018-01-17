export default {
  namespaced: true,
  state: [],
  mutations: {
    SET_REPORTS (state, reports) {
      // replace all items in the state array
      state.splice(0, state.length, ...reports)
    }
  },
  actions: {
    get ({ commit }) {
      fetch('http://www.snowio.com/api/reports?records=52')
        .then((response) => {
          return response.json()
        }).then((json) => {
          console.log('fetch success', json)
          commit('SET_REPORTS', json)
        }).catch((ex) => {
          console.log('fetch failed', ex)
        })
    }
  }
}
