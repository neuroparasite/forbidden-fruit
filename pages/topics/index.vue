<template>
  <div class="min-h-screen">
    <NavBar />

    <FHeader title="topics.title" />

    <div class="flex flex-col justify-center mt-32 ml-48">
      <FLink
        v-for="topic in topics"
        :key="topic.id"
        :link="`/topics/${topic.i18nKey}`"
        :label="`topics.${topic.i18nKey}.title`"
        :disabled="!hasSubtopic(topic.i18nKey)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import FHeader from "~/components/FHeader.vue";
import FLink from "~/components/FLink.vue";
import NavBar from "~/components/NavBar.vue";

@Component({
  components: {
    FHeader,
    FLink,
    NavBar,
  },
})
export default class TopicsPage extends Vue {
  get topics() {
    return this.$store.getters["topics"];
  }

  hasSubtopic(topicKey: string) {
    return !!this.$store.getters["subtopicsByTopic"](topicKey).length;
  }

  beforeMount() {
    this.$store.commit("resetState");
  }
}
</script>
