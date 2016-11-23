<template>
  <a class="language-picker" v-on:click="switchLanguage">{{ altLanguage }}</a>
</template>

<script>
export default {
  name: 'language-picker',
  computed: {
    activeLocale() {
      return this.$store.getters.activeLocale;
    },
    altLanguage() {
      return (this.activeLocale === 'zh-TW') ? 'English' : '中文';
    },
  },
  methods: {
    switchLanguage() {
      const targetLocale = (this.activeLocale === 'zh-TW') ? 'en-US' : 'zh-TW';
      this.$store.dispatch('SET_LOCALE', targetLocale);
    },
  },
};
</script>

<style>
  .language-picker {
    cursor: pointer;
  }
</style>
