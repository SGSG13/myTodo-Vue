import * as types from '../types'
import axios from 'axios'

const state = {
  items: [],
  loading: false,
  error: null
};

const mutations = {
  [types.MUTATION_LOAD_ITEMS_START]: (state) => {
    state.loading = true;
  },
  [types.MUTATION_LOAD_ITEMS_SUCCESS]: (state, payload) => {
    state.items = payload;
    state.loading = false;
  },
  [types.SOCKET_CHANGETODO]: (state, payload) => {
    state.items = payload.items
  }
};

const actions = {
  [types.LOAD_ITEMS]: async ({ commit }) => {
    commit(types.MUTATION_LOAD_ITEMS_START);
    try {
      const { data } = await axios.get('api/todos');
      commit(types.MUTATION_LOAD_ITEMS_SUCCESS, data.items);
    } catch (error) {
      commit(types.MUTATION_RESPONSE_ERROR, error);
    }
  },
  [types.ADD_ITEM]: async ({ commit }, title) => {
    try {
      axios.post('/api/todo', { title });
    }
    catch (error) {
      commit(types.MUTATION_RESPONSE_ERROR, error);
    }
  },
  [types.DONE_ITEM]: async ({ commit }, id) => {
    try {
      axios.put(`/api/todo/${id}`);
    }
    catch (error) {
      commit(types.MUTATION_RESPONSE_ERROR, error);
    }
  },
  [types.REMOVE_ITEM]: async ({ commit }, id) => {
    try {
      axios.delete(`/api/todo/${id}`);
    }
    catch (error) {
      commit(types.MUTATION_RESPONSE_ERROR, error);
    }
  },
};

const getters = {
  [types.ITEMS]: state => state.items,
  [types.LOADING]: state => state.loading,
  [types.ERROR]: state => state.error,
  [types.DONE_COUNT]: state => state.items.filter((item) => item.done).length,
  [types.TODO_COUNT]: (state, getters) => state.items.length - getters[types.DONE_COUNT]
};

export default {
  state,
  mutations,
  actions,
  getters
}
