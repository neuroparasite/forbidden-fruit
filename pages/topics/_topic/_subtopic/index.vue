<template>
  <div class="min-h-screen w-screen">
    <NavBar />

    <FHeader
      :title="`topics.${currentTopic.i18nKey}.title`"
      :subtitle="`subtopics.${currentSubtopic.i18nKey}.title`"
      class="mb-24"
    />

    <div class="flex items-start mx-32 mb-24">
      <div class="mr-12">
        {{ $t(`subtopics.${currentSubtopic.i18nKey}.description`) }}
      </div>

      <FWikipediaLink
        :i18nKey="`subtopics.${currentSubtopic.i18nKey}.wikipediaLink`"
      />
    </div>

    <FLink
      :link="`${currentSubtopic.i18nKey}/external_resources`"
      label="externalResources.title"
      class="ml-32 mb-64"
    />

    <div class="ml-32 mb-64">
      <div class="text-24 mb-24">{{ $t("general.toc") }}</div>
      <FLink
        v-if="articles.length"
        :link="`${currentSubtopic.i18nKey}#articles`"
        label="articles.title"
      />
      <FLink
        v-if="videos.length"
        :link="`${currentSubtopic.i18nKey}#videos`"
        label="videos.title"
      />
    </div>

    <div id="articles" v-if="articles.length" class="mb-16">
      <div class="text-24 ml-32 mb-16">{{ $t("articles.title") }}</div>
      <FArticle
        v-for="article in articles"
        :key="article.i18nKey"
        :article="article"
        class="mb-8 last:mb-0"
      />
    </div>

    <div id="videos" v-if="videos.length">
      <div class="text-24 ml-32 mb-16">{{ $t("videos.title") }}</div>
      <FVideo
        v-for="video in videos"
        :key="video.i18nKey"
        :video="video"
        class="mb-8 last:mb-0"
      />
    </div>

    <FTagOverlay />
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import FLink from "~/components/FLink.vue";
import FHeader from "~/components/FHeader.vue";
import NavBar from "~/components/NavBar.vue";
import FArticle from "~/components/FArticle.vue";
import FVideo from "~/components/FVideo.vue";
import FTagOverlay from "~/components/FTagOverlay.vue";
import FWikipediaLink from "~/components/FWikipediaLink.vue";
import FFade from "~/components/transitions/FFade.vue";
import Icon from "~/components/Icon.vue";

import { Subtopic, Topic, Tag, Article, Video } from "~/types";

@Component({
  components: {
    FHeader,
    FLink,
    NavBar,
    FArticle,
    FVideo,
    Icon,
    FTagOverlay,
    FWikipediaLink,
  },
  validate({ params, store }: any) {
    return !!store.getters["subtopics"].find(
      (s: Subtopic) => s.i18nKey === params.subtopic
    );
  },
})
export default class SubtopicPage extends Vue {
  get currentTopic(): Topic {
    return this.$store.getters["currentTopic"];
  }

  get currentSubtopic(): Subtopic {
    return this.$store.getters["currentSubtopic"];
  }

  get currentTag(): Tag {
    return this.$store.getters["tag"];
  }

  get articles(): Article[] {
    return this.$store.getters["articlesBySubtopic"](
      this.currentSubtopic.i18nKey
    );
  }

  get videos(): Video[] {
    return this.$store.getters["videosBySubtopic"](
      this.currentSubtopic.i18nKey
    );
  }

  hideTagOverlay() {
    this.$store.commit("unsetCurrentTag");
  }

  beforeMount() {
    this.$store.commit("setCurrentTopic", this.$route.params.topic);
    this.$store.commit("setCurrentSubtopic", this.$route.params.subtopic);
    this.$store.commit("unsetCurrentTag");
  }
}
</script>
