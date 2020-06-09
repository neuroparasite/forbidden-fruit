<template>
  <div class="h-screen">
    <NavBar />

    <FHeader title="topics.title" />

    <div class="flex flex-col items-center justify-center mt-56">
      <div>
        <Link
          v-for="topic in topics"
          :key="topic.id"
          :link="'/topics/' + topic.name"
          :label="topic.label"
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

export default Vue.extend({
  components: {
    Link,
    FHeader,
    NavBar
  },
  data() {
    return {
      topics: this.$store.state.topics
    };
  },
  beforeMount() {
    this.$store.commit("resetCurrentTopic");
    this.$store.commit("resetCurrentResourceType");
  }
});
</script>