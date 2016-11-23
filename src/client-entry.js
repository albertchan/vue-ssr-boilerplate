import 'es6-promise/auto';
import { app, store } from './app';
// require('style-loader!css-loader!sass-loader./styles/bootstrap.scss');

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
store.replaceState(window.__INITIAL_STATE__); // eslint-disable-line no-underscore-dangle

// actually mount to DOM
app.$mount('#app');

// service worker
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
