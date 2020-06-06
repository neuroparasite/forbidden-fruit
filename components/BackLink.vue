<template>
  <button @click="navigateTo()" class="flex items-center">
    <Icon class="h-24 w-24 mr-12" type="backLink" />
    <div>{{ $t("ui.back") }}</div>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "~/components/Icon.vue";

const BackLink = Vue.extend({
  components: {
    Icon
  },
  props: {
    link: {
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

export default BackLink;
</script>

<style></style>
