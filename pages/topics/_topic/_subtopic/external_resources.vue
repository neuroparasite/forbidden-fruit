<template>
  <div class="min-h-screen w-screen">
    <NavBar />

    <FHeader
      :title="`topics.${currentTopic.i18nKey}.${currentSubtopic.i18nKey}.title`"
      subtitle="externalResources.title"
      class="mb-24"
    />

    <FExternalResource
      v-for="externalResource in currentSubtopic.externalResources"
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
import { mapGetters } from "vuex";

import Link from "~/components/Link.vue";
import FHeader from "~/components/FHeader.vue";
import NavBar from "~/components/NavBar.vue";
import Resource from "~/components/Resource.vue";
import FFade from "~/components/transitions/FFade.vue";
import FExternalResource from "~/components/FExternalResource.vue";

import { Subtopic } from "~/types";

@Component({
  components: {
    FHeader,
    Link,
    NavBar,
    Resource,
    FFade,
    FExternalResource,
  },
  computed: {
    ...mapGetters(["currentTopic", "currentSubtopic"]),
  },
  validate({ params, store }: any) {
    return !!store.getters["subtopics"](params.topic).find(
      (s: Subtopic) => s.i18nKey === params.subtopic
    );
  },
})
export default class SubtopicPage extends Vue {
  beforeMount() {
    this.$store.commit("setCurrentTopic", this.$route.params.topic);
    this.$store.commit("setCurrentSubtopic", this.$route.params.subtopic);
    this.$store.commit("unsetCurrentTag");
  }
}
</script>
