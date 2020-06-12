<template>
  <a
    :href="$t(i18nKey)"
    target="_blank"
    rel="noopener noreferrer"
    class="py-4 px-4 border-primary border-1 border-solid"
  >
    <Icon class="h-32 w-32" type="wikipedia" />
  </a>
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
export default class FWikipediaLink extends Vue {
  @Prop({ required: true })
  i18nKey!: string;
}
</script>

<style></style>
