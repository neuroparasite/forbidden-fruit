<template>
  <div class="mt-24 ml-24 flex z-50">
    <button @click="navigateHome()" class="p-12">
      <Icon class="h-24 w-24" type="home" />
    </button>

    <slot></slot>
  </div>
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
