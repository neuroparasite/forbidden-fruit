<template>
  <div class="h-screen">
    <NavBar />

    <FHeader :title="currentTopic.label" />
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";

import Link from "~/components/Link.vue";
import FHeader from "~/components/FHeader.vue";
import NavBar from "~/components/NavBar.vue";

export default Vue.extend({
  components: {
    NavBar,
    Link,
    FHeader
  },
  computed: {
    ...mapGetters(["currentTopic", "currentSubtopic", "subtopics"])
  },
  validate({ params, store }) {
    return !!store.getters["subtopics"](params.topic).find(
      s => s.name === params.subtopic
    );
  },
  beforeMount() {
    this.$store.commit("setCurrentTopic", this.$route.params.topic);
    this.$store.commit("setCurrentSubtopic", this.$route.params.subtopic);
  }
});
</script>