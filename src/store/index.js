import Vue from 'vue'
import Vuex from 'vuex'
import reports from './reports.js'
import settings from './settings.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    reports: reports,
    settings: settings
  }
})
