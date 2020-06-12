<template>
  <div class="min-h-screen w-screen">
    <NavBar />

    <FHeader
      :title="`topics.${currentTopic.i18nKey}.title`"
      :subtitle="
        `topics.${currentTopic.i18nKey}.${currentSubtopic.i18nKey}.title`
      "
      class="mb-24"
    />

    <div class="flex items-start mx-32 mb-24">
      <div class="mr-12">
        {{
          $t(
            `topics.${currentTopic.i18nKey}.${currentSubtopic.i18nKey}.description`
          )
        }}
      </div>

      <FWikipediaLink
        :i18nKey="
          `topics.${currentTopic.i18nKey}.${currentSubtopic.i18nKey}.wikipediaLink`
        "
      />
    </div>

    <Link
      :link="
        `/topics/${currentTopic.i18nKey}/${currentSubtopic.i18nKey}/external_resources`
      "
      label="externalResources.title"
      class="ml-32"
    />

    <Resource
      v-for="article in currentSubtopic.articles"
      :key="article.id"
      :article="article"
      class="mb-8 last:mb-0"
    />

    <FTagOverlay />
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
import FTagOverlay from "~/components/FTagOverlay.vue";
import FWikipediaLink from "~/components/FWikipediaLink.vue";
import FFade from "~/components/transitions/FFade.vue";
import Icon from "~/components/Icon.vue";

import { Subtopic } from "~/types";

@Component({
  components: {
    FHeader,
    Link,
    NavBar,
    Resource,
    Icon,
    FTagOverlay,
    FWikipediaLink,
  },
  computed: {
    ...mapGetters(["currentTopic", "currentSubtopic", "currentTag"]),
  },
  validate({ params, store }: any) {
    return !!store.getters["subtopics"](params.topic).find(
      (s: Subtopic) => s.i18nKey === params.subtopic
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
