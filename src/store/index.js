import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import filters from './modules/filters'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
    filters
  }
})
