<template>
  <div class="container">
    <nuxt-link to="/topics/gender">gender</nuxt-link>
    <nuxt-link to="/topics/gender">gender</nuxt-link>

    <div>
      <logo />
      <h1 class="title">nuxtjs</h1>
      <h2 class="subtitle">My astonishing Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green"
          >Documentation</a
        >
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
          >GitHub</a
        >
      </div>
    </div>

    <div>{{ message }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Logo from "~/components/Logo.vue";
import { Tag } from "~/types";

export default Vue.extend({
  components: {
    Logo,
  },
  data() {
    return {
      message: "hello",
    };
  },
  asyncData({ params, $axios }) {
    return $axios.$get(`/api/tags`).then((res) => {
      return { message: res.data };
    });
  },
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
