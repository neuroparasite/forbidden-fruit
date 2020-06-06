<template>
  <div class="mt-12 ml-64 flex">
    <div class="flex flex-col" :class="{ 'mr-32': goToTop }">
      <div class="font-black text-32">{{ $t(title) }}</div>
      <div v-if="subtitle" class="flex">
        <div class="text-24 mr-20">{{ $t(subtitle) }}</div>
        <div v-if="subsubtitle" class="text-12">{{ $t(subsubtitle) }}</div>
      </div>
    </div>

    <GoToTopButton v-if="goToTop" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GoToTopButton from "~/components/GoToTopButton.vue";

const FHeader = Vue.extend({
  components: {
    GoToTopButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    },
    subsubtitle: {
      type: String,
      required: false
    },
    goToTop: {
      type: Boolean,
      required: false
    }
  }
});

export default FHeader;
</script>

<style></style>
