<template>
  <div class="h-screen">
    <HomeButton>
      <BackLink class="ml-32" link="/topics" />
    </HomeButton>

    <FHeader :title="`topics.${topic.name}.title`" />

    <div class="flex flex-col items-center justify-center mt-56">
      <div>
        <Link
          v-for="resourceType in resourceTypes"
          :key="resourceType.id"
          :link="`/topics/${topic.name}/${resourceType.name}`"
          :label="resourceType.label"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomeButton from "~/components/HomeButton.vue";
import Link from "~/components/Link.vue";
import BackLink from "~/components/BackLink.vue";
import FHeader from "~/components/FHeader.vue";

import { resourceTypes } from "~/types";

export default Vue.extend({
  components: {
    HomeButton,
    Link,
    BackLink,
    FHeader
  },
  data() {
    return {
      resourceTypes: resourceTypes
    };
  },
  props: ["topic"],
  methods: {
    setCurrentResourceType(resourceType: string) {
      this.$store.commit("setCurrentResourceType", resourceType);
    }
  },
  beforeMount() {
    const topic = this.$route.fullPath.split("/")[2];
    this.$store.commit("setCurrentTopic", topic);
    this.$store.commit("setCurrentResourceType", "articles");
  }
});
</script>