<template>
  <div class="min-h-screen w-screen">
    <NavBar />

    <FHeader
      :title="currentTopic.label"
      :subtitle="currentSubtopic.label"
      class="mb-24"
    />

    <Resource
      v-for="article in currentSubtopic.articles"
      :key="article.id"
      :article="article"
      class="mb-8 last:mb-0"
    />

    <!-- Tag Overlay -->
    <FFade>
      <div
        v-if="currentTag"
        class="fixed top-0 flex items-center justify-center min-h-screen w-screen bg-opacity-75 bg-overlay"
        @click="hideTagOverlay()"
      >
        <div class="flex flex-col p-16 bg-primary w-screen mx-32">
          <div class="flex">
            <div
              class="text-12 text-center px-8 py-4 mb-20 bg-primary-dark uppercase"
            >
              {{ currentTag.name }}
            </div>
          </div>

          <div class="mb-20">{{ currentTag.description }}</div>

          <div class="flex justify-center">
            <button
              class="text-secondary p-8 bg-accent uppercase"
              @click="hideTagOverlay()"
            >
              {{ $t("ui.close") }}
            </button>
          </div>
        </div>
      </div>
    </FFade>
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

import { Subtopic } from "~/types";

@Component({
  components: {
    FHeader,
    Link,
    NavBar,
    Resource,
    FFade,
  },
  computed: {
    ...mapGetters([
      "currentTopic",
      "currentSubtopic",
      "subtopics",
      "currentTag",
    ]),
  },
  validate({ params, store }: any) {
    return !!store.getters["subtopics"](params.topic).find(
      (s: Subtopic) => s.name === params.subtopic
    );
  },
})
export default class SubtopicPage extends Vue {
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
