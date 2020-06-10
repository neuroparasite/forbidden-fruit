<template>
  <div class="h-screen">
    <NavBar />

    <FHeader :title="currentTopic.label" />
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
import { Subtopic } from "~/types";

@Component({
  components: {
    FHeader,
    Link,
    NavBar,
  },
  computed: {
    ...mapGetters(["currentTopic", "currentSubtopic", "subtopics"]),
  },
  validate({ params, store }: any) {
    return !!store.getters["subtopics"](params.topic).find(
      (s: Subtopic) => s.name === params.subtopic
    );
  },
})
export default class SubtopicPage extends Vue {
  beforeMount() {
    this.$store.commit("setCurrentTopic", this.$route.params.topic);
    this.$store.commit("setCurrentSubtopic", this.$route.params.subtopic);
  }
}
</script>
