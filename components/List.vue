<template>
  <div>
    <div class="mb-12">{{ $t(text) }}:</div>

    <div
      v-for="point in points"
      :key="point"
      class="flex justify-top ml-8 mb-12"
    >
      <div class="mr-8">×</div>
      <div>{{ $t(point) }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import Icon from "~/components/Icon.vue";

@Component({
  components: {
    Icon,
  },
})
export default class List extends Vue {
  pathHovered = false;

  @Prop({ required: true })
  text!: string;

  @Prop({ required: true })
  points!: string[];
}
</script>

<style scoped></style>
