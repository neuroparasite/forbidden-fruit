<template>
  <div class="min-h-screen w-screen">
    <NavBar />

    <FHeader
      :title="`subtopics.${currentSubtopic.i18nKey}.title`"
      subtitle="externalResources.title"
      class="mb-24"
    />

    <FExternalResource
      v-for="externalResource in externalResources"
      :key="externalResource.i18nKey"
      :externalResource="externalResource"
      :i18nKeyTopic="currentTopic.i18nKey"
      :i18nKeySubtopic="currentSubtopic.i18nKey"
      class="mb-8 last:mb-0"
    />
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
import FFade from "~/components/transitions/FFade.vue";
import FExternalResource from "~/components/FExternalResource.vue";

import { Subtopic, Topic, ExternalResource } from "~/types";

@Component({
  components: {
    FHeader,
    FLink,
    NavBar,
    FArticle,
    FFade,
    FExternalResource,
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

  get externalResources(): ExternalResource[] {
    return this.$store.getters["externalResourcesBySubtopic"](
      this.currentSubtopic.i18nKey
    );
  }

  beforeMount() {
    this.$store.commit("setCurrentTopic", this.$route.params.topic);
    this.$store.commit("setCurrentSubtopic", this.$route.params.subtopic);
    this.$store.commit("unsetCurrentTag");
  }
}
</script>
