<template>
  <div>
    <div v-if="text" class="mb-12">{{ $t(text) }}:</div>

    <div
      v-for="point in points"
      :key="point"
      class="flex justify-top ml-8 mb-12"
    >
      <div class="mr-8">×</div>
      <div>
        <span v-if="prefix" class="font-black uppercase">{{ $t(prefix) }}</span>
        <span>{{ $t(point) }}</span>
      </div>
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
export default class FList extends Vue {
  pathHovered = false;

  @Prop()
  text!: string;

  @Prop({ required: true })
  points!: string[];

  @Prop()
  prefix!: string;
}
</script>

<style scoped></style>
