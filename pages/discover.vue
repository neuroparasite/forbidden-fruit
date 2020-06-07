<template>
  <div class="h-screen">
    <NavBar />

    <div class="flex flex-col items-center justify-center mt-128">
      <div>
        <Link
          v-for="link in links"
          :key="link.link"
          :link="link.link"
          :label="link.label"
          :disabled="link.disabled"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Link from "~/components/Link.vue";
import NavBar from "~/components/NavBar.vue";

export default Vue.extend({
  components: {
    NavBar,
    Link
  },
  data() {
    return {
      links: [
        {
          link: "/topics",
          label: "topics.title",
          disabled: false
        },
        {
          link: "/devils_advocates",
          label: "devilsAdvocates.title",
          disabled: true
        },
        {
          link: "/external_resources",
          label: "externalResources.title",
          disabled: true
        }
      ]
    };
  },
  beforeMount() {
    this.$store.commit("resetCurrentTopic");
    this.$store.commit("resetCurrentResourceType");
  }
});
</script>

<style></style>
