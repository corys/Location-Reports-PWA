export default {
  namespaced: true,
  state: {
    mapVisible: true
  },
  mutations: {
    SHOW_MAP (state) {
      state.mapVisible = true
    },
    HIDE_MAP (state) {
      state.mapVisible = false
    }
  },
  actions: {
    showMap ({ commit }) {
      commit('SHOW_MAP')
    },
    hideMap ({ commit }) {
      commit('HIDE_MAP')
    },
    toggleMap ({ commit, state }) {
      state.mapVisible ? commit('HIDE_MAP') : commit('SHOW_MAP')
    }
  }
}
