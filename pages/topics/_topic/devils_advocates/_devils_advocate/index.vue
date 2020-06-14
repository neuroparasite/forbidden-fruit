<template>
  <div class="min-h-screen">
    <NavBar />

    <div class="flex flex-col bg-primary-light p-24">
      <div class="flex items-start">
        <img :src="imageSrc" height="100" width="100" class="mr-24" alt="" />

        <div class="flex flex-col">
          <div class="text-32">
            {{ currentDevilsAdvocate.firstname }}
          </div>

          <div class="font-bold text-32">
            {{ currentDevilsAdvocate.lastname }}
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="flex justify-between items-center text-accent mt-32 mx-32">
        <FCopyLinkButton :link="url" />

        <FExternalLink
          :link="currentDevilsAdvocate.homepage"
          label="devilsAdvocates.homepage"
        />
      </div>

      <div class="mt-32 ml-32">
        <div v-if="!!currentDevilsAdvocate.socialMedia">
          <div class="text-18">{{ $t("devilsAdvocates.socialMedia") }}</div>
          <div class="ml-16 mb-24"></div>
        </div>

        <div class="text-18 mb-16">{{ $t("devilsAdvocates.works") }}</div>
        <div class="flex ml-16">
          <div class="mr-48">
            <FLink
              :link="`${currentDevilsAdvocate.i18nKey}/works#articles`"
              label="articles.title"
              :disabled="!hasArticles"
            />
            <FLink
              :link="`${currentDevilsAdvocate.i18nKey}/works#literature`"
              label="literature.title"
              :disabled="!hasLiterature"
            />
          </div>

          <div>
            <FLink
              :link="`${currentDevilsAdvocate.i18nKey}/works#studies`"
              label="studies.title"
              :disabled="!hasStudies"
            />
            <FLink
              :link="`${currentDevilsAdvocate.i18nKey}/works#videos`"
              label="videos.title"
              :disabled="!hasVideos"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center">
      <ScrollDownIndicator label="ui.learnMore" />
    </div>
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import FHeader from "~/components/FHeader.vue";
import NavBar from "~/components/NavBar.vue";
import FCopyLinkButton from "~/components/FCopyLinkButton.vue";
import FExternalLink from "~/components/FExternalLink.vue";
import FLink from "~/components/FLink.vue";
import ScrollDownIndicator from "~/components/ScrollDownIndicator.vue";

import { DevilsAdvocate, Tag, Topic } from "~/types";

@Component({
  components: {
    FHeader,
    NavBar,
    FCopyLinkButton,
    FExternalLink,
    FLink,
    ScrollDownIndicator,
  },
  validate({ params, store }: any) {
    const devilsAdvocates: DevilsAdvocate[] =
      store.getters["devilsAdvocates/list"];
    return !!devilsAdvocates.find((d) => d.i18nKey === params.devils_advocate);
  },
})
export default class DevilsAdvocatesPage extends Vue {
  get currentTopic(): Topic {
    return this.$store.getters["currentTopic"];
  }

  get currentDevilsAdvocate(): DevilsAdvocate {
    return this.$store.getters["devilsAdvocates/current"];
  }

  get hasArticles() {
    return this.$store.getters["devilsAdvocates/hasArticles"](
      this.currentDevilsAdvocate.i18nKey
    );
  }

  get hasLiterature() {
    return this.$store.getters["devilsAdvocates/hasLiterature"](
      this.currentDevilsAdvocate.i18nKey
    );
  }

  get hasStudies() {
    return this.$store.getters["devilsAdvocates/hasStudies"](
      this.currentDevilsAdvocate.i18nKey
    );
  }

  get hasVideos() {
    return this.$store.getters["devilsAdvocates/hasVideos"](
      this.currentDevilsAdvocate.i18nKey
    );
  }

  get imageSrc(): string {
    return require(`~/assets/img/${this.currentDevilsAdvocate.i18nKey}.jpg`);
  }

  get tagsByKeys(): Tag {
    return this.$store.getters["tagsByKeys"](
      this.currentDevilsAdvocate.tagKeys
    );
  }

  get url() {
    return `${process.env.baseURL}${this.$route.fullPath}`;
  }

  beforeMount() {
    this.$store.commit("setCurrentTopic", this.$route.params.topic);
    this.$store.commit(
      "devilsAdvocates/setCurrent",
      this.$route.params.devils_advocate
    );
  }
}
</script>
