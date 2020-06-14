<template>
  <button class="flex items-center p-4" @click="copyLink()">
    <Icon class="h-16 w-16 mr-8" type="copy" />
    <div>{{ $t("ui.copyLink") }}</div>
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
export default class FCopyLinkButton extends Vue {
  @Prop({ required: true })
  link!: string;

  copyLink() {
    navigator.clipboard.writeText(this.link).then(
      () => {
        /* clipboard successfully set */
      },
      () => {
        /* clipboard write failed */
      }
    );
  }
}
</script>
