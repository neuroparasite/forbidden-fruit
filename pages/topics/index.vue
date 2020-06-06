<template>
  <div class="h-screen">
    <HomeButton>
      <BackLink class="ml-32" link="/discover" />
    </HomeButton>

    <FHeader title="topics.title" />

    <div class="flex flex-col items-center justify-center mt-56">
      <div>
        <Link
          v-for="topic in topics"
          :key="topic.id"
          :link="topic.name"
          :label="topic.label"
          class="mb-32 last:mb-0"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { topics } from "~/types";
import HomeButton from "~/components/HomeButton.vue";
import Link from "~/components/Link.vue";
import BackLink from "~/components/BackLink.vue";
import FHeader from "~/components/FHeader.vue";

export default Vue.extend({
  components: {
    HomeButton,
    Link,
    BackLink,
    FHeader
  },
  data() {
    return {
      topics: topics
    };
  },
  methods: {
    setCurrentTopic(topic: string) {
      this.$store.commit("setCurrentTopic", topic);
    }
  }
});
</script>