<template>
  <button @click="goToTop()" class="flex flex-col items-center p-12">
    <Icon class="h-24 w-24 mb-8" type="arrowUp" />
    <div class="text-12">{{ $t("ui.goToTop")}}</div>
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
    goToTop() {
      document.body.scrollTop = 0;
    }
  }
});

export default HomeButton;
</script>

<style></style>
