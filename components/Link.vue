<template>
  <div class="flex items-center">
    <Icon class="h-24 w-24 mr-12" type="link" />
    <nuxt-link :to="link">{{ $t(label) }}</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "~/components/Icon.vue";

const Link = Vue.extend({
  components: {
    Icon
  },
  props: {
    link: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
});

export default Link;
</script>

<style></style>
