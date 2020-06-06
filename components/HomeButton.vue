<template>
  <div class="pt-24 pl-24 flex z-50">
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
      this.$router.push("/");
    }
  }
});

export default HomeButton;
</script>

<style></style>
