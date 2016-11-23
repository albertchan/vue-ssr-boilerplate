import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    settings: {
      locale: 'en-US',
      view: {
        pageSize: 10,
      },
    },
    items: [],
  },

  actions: {
    SET_LOCALE(context, locale) {
      context.commit('SET_LOCALE', locale);
    },

    LOAD_ACTIVE_ITEMS(context) {
      const { commit } = context;

      // mock API response
      const collection = [
        {
          title: 'Item 1',
          description: 'Description for item 1',
        },
        {
          title: 'Item 2',
          description: 'Description for item 2',
        },
        {
          title: 'Item 3',
          description: 'Description for item 3',
        },
        {
          title: 'Item 4',
          description: 'Description for item 4',
        },
        {
          title: 'Item 5',
          description: 'Description for item 5',
        },
      ];

      commit('SET_ACTIVE_ITEMS', collection);

      return collection;
    },
  },

  getters: {
    activeItems(state) {
      if (state.items !== null) {
        return state.items;
      }
      return [];
    },

    activeLocale(state) {
      return state.settings.locale;
    },

    viewSettings(state) {
      return state.settings.view;
    },
  },

  /* eslint-disable no-param-reassign */
  mutations: {
    SET_LOCALE(state, locale) {
      state.settings.locale = locale;
    },

    SET_ACTIVE_ITEMS(state, collection) {
      state.items = collection;
    },
  },
  /* eslint-enable no-param-reassign */
});

export default store;
