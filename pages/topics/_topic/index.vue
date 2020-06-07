<template>
  <div class="h-screen">
    <NavBar />

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
import Link from "~/components/Link.vue";
import FHeader from "~/components/FHeader.vue";
import NavBar from "~/components/NavBar.vue";

import { resourceTypes } from "~/types";

export default Vue.extend({
  components: {
    NavBar,
    Link,
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
  }
});
</script>