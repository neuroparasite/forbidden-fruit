<template>
  <div class="mt-24 ml-48 flex">
    <div class="flex flex-col">
      <div class="font-black text-32">{{ $t(title) }}</div>
      <div v-if="subtitle" class="flex">
        <div class="text-24 mr-20">{{ $t(subtitle) }}</div>
        <div v-if="subsubtitle" class="text-12">{{ $t(subsubtitle) }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const FHeader = Vue.extend({
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
