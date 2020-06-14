<template>
  <div class="min-h-screen w-screen">
    <NavBar />

    <FHeader
      :title="
        `${currentDevilsAdvocate.firstname} ${currentDevilsAdvocate.lastname}`
      "
      subtitle="devilsAdvocates.works"
      class="mb-64"
    />

    <div class="ml-32 mb-64">
      <div class="text-24 mb-24">{{ $t("general.toc") }}</div>
      <FLink v-if="!!articles.length" link="#articles" label="articles.title" />
      <FLink v-if="!!videos.length" link="#videos" label="videos.title" />
    </div>

    <div id="articles" v-if="!!articles.length" class="mb-16">
      <div class="text-24 ml-32 mb-16">{{ $t("articles.title") }}</div>
      <FArticle
        v-for="article in articles"
        :key="article.i18nKey"
        :article="article"
        class="mb-8 last:mb-0"
      />
    </div>

    <div id="videos" v-if="!!videos.length">
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

import {
  Subtopic,
  Topic,
  Tag,
  Article,
  Video,
  DevilsAdvocate,
  Literature,
} from "~/types";

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
    return !!store.getters["devilsAdvocates/list"].find(
      (devilsAdvocate: DevilsAdvocate) =>
        devilsAdvocate.i18nKey === params.devils_advocate
    );
  },
})
export default class SubtopicPage extends Vue {
  get currentTopic(): Topic {
    return this.$store.getters["currentTopic"];
  }

  get currentDevilsAdvocate(): DevilsAdvocate {
    return this.$store.getters["devilsAdvocates/current"];
  }

  get currentTag(): Tag {
    return this.$store.getters["tag"];
  }

  get articles(): Article[] {
    return this.$store.getters["articlesByDevilsAdvocate"](
      this.currentDevilsAdvocate.i18nKey
    );
  }

  get videos(): Video[] {
    return this.$store.getters["videosByDevilsAdvocate"](
      this.currentDevilsAdvocate.i18nKey
    );
  }

  hideTagOverlay() {
    this.$store.commit("unsetCurrentTag");
  }

  beforeMount() {
    this.$store.commit("setCurrentTopic", this.$route.params.topic);
    this.$store.commit(
      "devilsAdvocates/setCurrent",
      this.$route.params.devils_advocate
    );
    this.$store.commit("unsetCurrentTag");
  }
}
</script>
