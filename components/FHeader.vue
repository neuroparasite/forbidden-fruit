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
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class FHeader extends Vue {
  @Prop({ required: true })
  title!: string;

  @Prop()
  subtitle!: string;

  @Prop()
  subsubtitle!: string;

  @Prop()
  goToTop!: boolean;
}
</script>

<style></style>
