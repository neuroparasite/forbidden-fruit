<template>
  <div class="min-h-screen">
    <NavBar />

    <FHeader :title="`topics.${currentTopic.i18nKey}.title`" />

    <div class="flex flex-col items-center justify-center mt-56">
      <div>
        <Link
          v-for="subtopic in currentTopic.subtopics"
          :key="subtopic.id"
          :link="`/topics/${currentTopic.i18nKey}/${subtopic.i18nKey}`"
          :label="`topics.${currentTopic.i18nKey}.${subtopic.i18nKey}.title`"
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
import { mapGetters } from "vuex";

import Link from "~/components/Link.vue";
import FHeader from "~/components/FHeader.vue";
import NavBar from "~/components/NavBar.vue";

import { Topic } from "~/types";

@Component({
  components: {
    FHeader,
    Link,
    NavBar,
  },
  computed: {
    ...mapGetters(["currentTopic"]),
  },
  validate({ params, store }: any) {
    const topics: Topic[] = store.getters["topics"];
    return !!topics.find((t) => t.i18nKey === params.topic);
  },
})
export default class TopicPage extends Vue {
  beforeMount() {
    this.$store.commit("setCurrentTopic", this.$route.params.topic);
  }
}
</script>
