<template>
  <div>
    <button
      class="text-12 text-center px-8 py-4 bg-primary-dark uppercase"
      @click="showTagOverlay()"
    >
      {{ $t(`tags.${tag.i18nKey}.title`) }}
    </button>
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { Tag } from "~/types";

@Component
export default class FTag extends Vue {
  @Prop({ required: true })
  tag!: Tag;

  showTagOverlay() {
    this.$store.commit("setCurrentTag", this.tag.i18nKey);
  }
}
</script>

<style scoped></style>
