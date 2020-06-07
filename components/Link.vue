<template>
  <button @click="navigateTo()" class="flex items-center">
    <Icon class="h-24 w-24 mr-12" type="link" />
    <div class="underline">{{ $t(label) }}</div>
  </button>
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
  },
  methods: {
    navigateTo() {
      this.$router.push(this.link);
    }
  }
});

export default Link;
</script>

<style></style>
