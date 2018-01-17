import Vue from 'vue'
import Vuex from 'vuex'
import reports from './reports.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    reports: reports
  }
})
