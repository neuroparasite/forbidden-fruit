<template>
  <div class="flex flex-col p-16 bg-primary-light">
    <div class="font-medium text-18 mb-16">
      {{ $t(`externalResources.${externalResource.i18nKey}.title`) }}
    </div>

    <div class="mb-16">
      {{ $t(`externalResources.${externalResource.i18nKey}.description`) }}
    </div>

    <div v-if="tagsByKeys" class="tag-grid">
      <FTag v-for="tag in tagsByKeys" :key="tag.i18nKey" :tag="tag" />
    </div>

    <div class="flex justify-end text-accent">
      <a
        :href="externalResource.source"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center p-4"
      >
        <Icon class="h-20 w-20 mr-8" type="linkExternal" />
        <div>{{ $t("ui.source") }}</div>
      </a>
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
import { ExternalResource, Tag } from "~/types";

@Component({
  components: {
    Icon,
    FTag,
    FTagOverlay,
  },
})
export default class FExternalResource extends Vue {
  @Prop({ required: true })
  public externalResource!: ExternalResource;

  @Prop({ required: true })
  public i18nKeyTopic!: string;

  @Prop({ required: true })
  public i18nKeySubtopic!: string;

  get tagsByKeys(): Tag {
    return this.$store.getters["tagsByKeys"](this.externalResource.tagKeys);
  }
}
</script>

<style></style>
