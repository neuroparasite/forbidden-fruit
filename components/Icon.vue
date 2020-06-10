<template>
  <svg
    :class="{ scale: this.pathHovered }"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="icon.viewBox"
    :fill="color"
  >
    <g v-if="this.growOnHover" :class="{ 'cursor-pointer': this.clickable }">
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

    <g v-else :class="{ 'cursor-pointer': this.clickable }">
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
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import SVGIcon from "~/static/icons";
import { iconPaths } from "~/static/icons";

@Component
export default class Icon extends Vue {
  pathHovered = false;

  @Prop({ required: true })
  type!: string;

  @Prop({ default: "currentColor" })
  color!: string;

  @Prop({ default: false })
  growOnHover!: boolean;

  @Prop({ default: false })
  clickable!: boolean;

  grow(): void {
    this.pathHovered = true;
  }
  shrink(): void {
    this.pathHovered = false;
  }

  get icon(): SVGIcon {
    return iconPaths[this.type];
  }
}
</script>

<style scoped>
svg {
  transition: transform 0.2s ease-in-out;
}

.scale {
  transform: scale(1.1);
}
</style>
