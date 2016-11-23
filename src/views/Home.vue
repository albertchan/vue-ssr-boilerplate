<template>
  <div class="home-view">
    <spinner :show="!items"></spinner>
    <div class="content-top">
      <div class="container">
        <h1>vue-ssr-boilerplate</h1>
        <p>This is a stripped down version of the
          <a href="https://github.com/vuejs/vue-hackernews-2.0">vue-hackernews-2.0</a>
          demo featuring Vue 2.0, vue-router, and vuex, with server-side rendering.
        </p>
        <div class="panel panel-default">
          <div class="panel-heading">Prefetched items</div>
          <div class="panel-body">
            <ul>
              <li v-for="item in items">
                {{ item.title }}: {{ item.description }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue';

function fetchItems(store) {
  return store.dispatch('LOAD_ACTIVE_ITEMS');
}

export default {
  name: 'home-view',
  components: { Spinner },
  computed: {
    items() {
      return this.$store.getters.activeItems;
    },
  },
  preFetch: fetchItems,
  beforeMount() {
    fetchItems(this.$store);
  },
};
</script>

<style>
</style>
