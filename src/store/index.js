import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const NOT_IN_BASKET = 0;
const IN_BASKET = 1;

export const getters = {
  itemsInBasket: state => state.items.filter(item => item.status === IN_BASKET),
  itemsNotInBasket: state => state.items.filter(item => item.status === NOT_IN_BASKET),
};

export const mutations = {
  addItems(state, items) {
    // eslint-disable-next-line no-param-reassign
    state.items = state.items.concat(items);
  },
  addItemToBasket(state, itemId) {
    // eslint-disable-next-line no-param-reassign
    state.items.find(item => item.id === itemId).status = IN_BASKET;
  },
  removeItemFromBasket(state, itemId) {
    // eslint-disable-next-line no-param-reassign
    state.items.find(item => item.id === itemId).status = NOT_IN_BASKET;
  },
};

export const actions = {
  fetchItems({ commit }) {
    commit('addItems', [
      {
        id: 1,
        name: 'Milk',
        status: NOT_IN_BASKET,
      },
      {
        id: 2,
        name: 'Bread',
        status: NOT_IN_BASKET,
      },
    ]);
  },
};

export const state = {
  items: [],
};

export const store = new Vuex.Store({
  getters,
  mutations,
  actions,
  state,
});
