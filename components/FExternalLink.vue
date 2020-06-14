<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="flex items-center p-4"
  >
    <Icon class="h-20 w-20 mr-8" type="linkExternal" />
    <div>{{ $t(label) }}</div>
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
export default class FExternalLink extends Vue {
  @Prop({ required: true })
  link!: string;

  @Prop({ required: true })
  label!: string;
}
</script>
