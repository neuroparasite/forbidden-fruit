<template>
  <svg
    :class="{ scale: this.pathHovered }"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="icon.viewBox"
    :fill="color"
  >
    <g v-if="this.growOnHover" :class="{'cursor-pointer': this.clickable}">
      <path
        v-on:mouseover="grow()"
        v-on:mouseout="shrink()"
        v-for="path in icon.paths"
        :key="path.path"
        :d="path.path"
        :fill-rule="path.fillRule ? path.fillRule : 'nonzero'"
        :clip-rule="path.clipRule ? path.clipRule : 'nonzero'"
      />
    </g>

    <g v-else :class="{'cursor-pointer': this.clickable}">
      <path
        v-for="path in icon.paths"
        :key="path.path"
        :d="path.path"
        :fill-rule="path.fillRule ? path.fillRule : 'nonzero'"
        :clip-rule="path.clipRule ? path.clipRule : 'nonzero'"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "~/static/icons";
import { iconPaths } from "~/static/icons";

const Icon = Vue.extend({
  data() {
    return {
      pathHovered: false
    };
  },
  props: {
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "currentColor"
    },
    growOnHover: {
      type: Boolean,
      default: false
    },
    clickable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    grow(): void {
      this.pathHovered = true;
    },
    shrink(): void {
      this.pathHovered = false;
    }
  },
  computed: {
    icon(): Icon {
      return iconPaths[this.type];
    }
  }
});

export default Icon;
</script>

<style scoped>
svg {
  transition: transform 0.2s ease-in-out;
}

.scale {
  transform: scale(1.1);
}
</style>