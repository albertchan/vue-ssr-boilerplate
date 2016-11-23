import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import router from './router';
import store from './store';
import * as filters from './filters';
import I18N from './services/i18n';

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

// Load i18n service
const i18nService = I18N.getInstance();
i18nService.init(['en-US', 'zh-TW'], 'en-US');

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app = new Vue(Vue.util.extend({
  router,
  store,

  // Inject methods for all child components
  methods: {
    translate(key, options) {
      const activeLocale = this.$store.getters.activeLocale;
      return i18nService.translate(key, { locale: activeLocale, ...options });
    },
  },
}, App));

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store };
