<template>
  <div class="flex flex-col p-16 bg-primary-light" :id="video.i18nKey">
    <div class="flex justify-between text-18 text-accent mb-8">
      <div>{{ video.year }}</div>
      <div v-if="devilsAdvocatesByKeys" class="flex flex-col">
        <div
          v-for="devilsAdvocate in devilsAdvocatesByKeys"
          :key="devilsAdvocate.i18nKey"
          class="mb-4 last:mb-0"
        >
          <div>
            {{ devilsAdvocate.firstname + " " + devilsAdvocate.lastname }}
          </div>
        </div>
      </div>
    </div>

    <div class="font-medium text-18 mb-16">{{ video.title }}</div>

    <iframe
      width="100%"
      height="100%"
      :src="video.embedUrl"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="mb-16"
    ></iframe>

    <div class="tag-grid">
      <FTag v-for="tag in tagsByKeys" :key="tag.i18nKey" :tag="tag" />
    </div>

    <div class="flex justify-start text-accent">
      <FCopyLinkButton :link="videoURL" />
    </div>
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import FCopyLinkButton from "~/components/FCopyLinkButton.vue";
import FTag from "~/components/FTag.vue";
import { Tag, Video } from "~/types";

@Component({
  components: {
    FCopyLinkButton,
    FTag,
  },
})
export default class FVideo extends Vue {
  @Prop({ required: true })
  public video!: Video;

  get videoURL(): string {
    return `${process.env.baseURL}${this.$route.path}#${this.video.i18nKey}`;
  }

  get tagsByKeys(): Tag {
    return this.$store.getters["tagsByKeys"](this.video.tagKeys);
  }

  get devilsAdvocatesByKeys(): Tag {
    return this.$store.getters["devilsAdvocates/byKeys"](
      this.video.devilsAdvocateKeys
    );
  }
}
</script>

<style></style>
