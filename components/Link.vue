<template>
  <button
    @click="navigateTo()"
    class="flex items-center mb-32 last:mb-0"
    :class="{ 'text-disabled': disabled, 'pointer-events-none': disabled }"
  >
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
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
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
