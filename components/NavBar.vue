<template>
  <div class="sticky">
    <div class="flex items-center justify-between bg-primary-dark">
      <HomeButton />

      <div v-if="title" class="flex text-16">
        <div v-if="title" class="mr-4">{{ $t(title) }}</div>
        <div v-if="subtitle" class="mr-4">/</div>
        <div v-if="subtitle">{{ $t(subtitle) }}</div>
        <div v-if="subsubtitle" class="mr-4">/</div>
        <div v-if="subsubtitle">{{ $t(subsubtitle) }}</div>
      </div>

      <GoToTopButton />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomeButton from "~/components/HomeButton.vue";
import GoToTopButton from "~/components/GoToTopButton.vue";

const NavBar = Vue.extend({
  components: {
    HomeButton,
    GoToTopButton
  },
  props: {
    title: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    },
    subsubtitle: {
      type: String,
      required: false
    }
  }
});

export default NavBar;
</script>

<style></style>
