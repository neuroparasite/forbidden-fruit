<template>
  <div class="flex flex-col p-16 bg-primary-light mb-8 last:mb-0">
    <div class="flex items-center mb-16">
      <img :src="imageSrc" height="100" width="100" class="mr-24" alt="" />
      <div class="flex flex-col text-32">
        <div>
          {{ devilsAdvocate.firstname }}
        </div>
        <div class="font-bold">
          {{ devilsAdvocate.lastname }}
        </div>
      </div>
    </div>

    <div v-if="tagsByKeys" class="grid grid-cols-3 gap-16 mb-16">
      <FTag v-for="tag in tagsByKeys" :key="tag.i18nKey" :tag="tag" />
    </div>

    <div class="flex justify-end text-accent">
      <nuxt-link
        :to="`devils_advocates/${devilsAdvocate.i18nKey}`"
        class="flex items-center p-4"
      >
        <Icon class="h-20 w-20 mr-8" type="link" />
        <div class="underline">{{ $t("ui.learnMore") }}</div>
      </nuxt-link>
    </div>

    <FTagOverlay />
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import Icon from "~/components/Icon.vue";
import FTag from "~/components/FTag.vue";
import FTagOverlay from "~/components/FTagOverlay.vue";
import { DevilsAdvocate, Tag } from "~/types";

@Component({
  components: {
    Icon,
    FTag,
    FTagOverlay,
  },
})
export default class FExternalResource extends Vue {
  @Prop({ required: true })
  public devilsAdvocate!: DevilsAdvocate;

  get imageSrc(): string {
    return require(`~/assets/img/${this.devilsAdvocate.i18nKey}.jpg`);
  }

  get tagsByKeys(): Tag {
    return this.$store.getters["tagsByKeys"](this.devilsAdvocate.tagKeys);
  }
}
</script>

<style></style>
