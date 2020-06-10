<template>
  <div class="h-screen">
    <NavBar />

    <FHeader title="topics.title" />

    <div class="flex flex-col items-center justify-center mt-56">
      <div>
        <Link
          v-for="topic in topics"
          :key="topic.id"
          :link="`/topics/${topic.name}`"
          :label="topic.label"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import Link from "~/components/Link.vue";
import FHeader from "~/components/FHeader.vue";
import NavBar from "~/components/NavBar.vue";
import { Topic } from "~/types";

export default Vue.extend({
  components: {
    Link,
    FHeader,
    NavBar
  },
  computed: {
    ...mapGetters(["topics"])
  },
  beforeMount() {
    this.$store.commit("resetState");
  }
});
</script>