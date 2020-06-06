<template>
  <button @click="navigateHome()" class="absolute top-24 left-24 p-12 z-50">
    <Icon class="h-24 w-24" type="home" />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "~/components/Icon.vue";

const HomeButton = Vue.extend({
  components: {
    Icon
  },
  methods: {
    navigateHome() {
      window.location.href = "/";
    }
  }
});

export default HomeButton;
</script>

<style></style>
