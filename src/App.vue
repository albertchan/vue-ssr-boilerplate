<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand" exact>
            <img class="logo" src="~public/logo.png" alt="logo">
          </router-link>
        </div>
        <div class="collapose navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/about">{{ $root.translate('nav.about') }}</router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <language-picker />
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view class="view" />
    </transition>
  </div>
</template>

<script>
import LanguagePicker from './components/LanguagePicker.vue';

export default {
  components: { LanguagePicker },
};
</script>

<style lang="sass">
  @import "./styles/bootstrap.scss";
  @import "./styles/colors.scss";

  body {
    background-color: #fafafa;
    color: $color-text;
  }

  .navbar-brand > img {
    height: 20px;
  }

</style>
