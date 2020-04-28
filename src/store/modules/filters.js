import * as types from '../types'

const state = {
  search: '',
  status: 'all'
};

const mutations = {
  [types.MUTATION_SET_SEARCH]: (state, payload) => {
    state.search = payload;
  },
  [types.MUTATION_SET_STATUS]: (state, payload) => {
    state.status = payload;
  },
};

const actions = {
  [types.SET_SEARCH]: ({ commit }, search) => {
    commit(types.MUTATION_SET_SEARCH, search);
  },
  [types.SET_STATUS]: ({ commit }, status) => {
    commit(types.MUTATION_SET_STATUS, status);
  },
};

const getters = {
  [types.SEARCH]: state => state.search,
  [types.STATUS]: state => state.status
};

export default {
  state,
  mutations,
  actions,
  getters
}
