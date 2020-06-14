<template>
  <div class="min-h-screen">
    <NavBar />

    <FHeader :title="`topics.${currentTopic.i18nKey}.title`" />

    <div class="flex flex-col justify-center mt-32 ml-32">
      <FLink
        :link="`/topics/${currentTopic.i18nKey}/devils_advocates`"
        label="devilsAdvocates.title"
        :disabled="!!!devilsAdvocates.length"
        class="ml-16"
      />

      <div v-if="!!subtopics.length">
        <div class="text-24 mb-32">{{ $t("topics.subtopics") }}</div>

        <FLink
          v-for="subtopic in subtopics"
          :key="subtopic.id"
          :link="`/topics/${currentTopic.i18nKey}/${subtopic.i18nKey}`"
          :label="`topics.${currentTopic.i18nKey}.${subtopic.i18nKey}.title`"
          class="ml-16"
        />
      </div>
    </div>
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

import { Topic, DevilsAdvocate, Subtopic } from "~/types";

@Component({
  components: {
    FHeader,
    FLink,
    NavBar,
  },
  validate({ params, store }: any) {
    const topics: Topic[] = store.getters["topics"];
    return !!topics.find((t) => t.i18nKey === params.topic);
  },
})
export default class TopicPage extends Vue {
  get currentTopic(): Topic {
    return this.$store.getters["currentTopic"];
  }

  get subtopics(): Subtopic[] {
    return this.$store.getters["subtopicsByTopic"](this.currentTopic.i18nKey);
  }

  get devilsAdvocates(): DevilsAdvocate[] {
    return this.$store.getters["devilsAdvocates/byTopic"](
      this.currentTopic.i18nKey
    );
  }

  beforeMount() {
    this.$store.commit("setCurrentTopic", this.$route.params.topic);
  }
}
</script>
