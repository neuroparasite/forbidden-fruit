<template>
  <div class="flex p-12">
    <button @click="navigateHome()">
      <Icon class="h-24 w-24" type="home" />
    </button>
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
