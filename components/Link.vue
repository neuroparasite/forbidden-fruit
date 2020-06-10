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
export default class Link extends Vue {
  @Prop({ required: true })
  link!: string;

  @Prop({ required: true })
  label!: string;

  @Prop({ default: false })
  disabled!: boolean;

  navigateTo() {
    this.$router.push(this.link);
  }
}
</script>

<style></style>
