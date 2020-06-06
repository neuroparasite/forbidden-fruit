<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <HomeButton />

    <div>
      <Link
        v-for="link in links"
        :key="link.link"
        :link="link.link"
        :label="link.label"
        class="mb-32 last:mb-0"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "~/components/Icon.vue";
import HomeButton from "~/components/HomeButton.vue";
import Link from "~/components/Link.vue";
import { Tag } from "~/types";
import tags from "~/static/data/tags.json";

export default Vue.extend({
  components: {
    Icon,
    HomeButton,
    Link
  },
  data() {
    return {
      links: [
        {
          link: "/topics",
          label: "topics.title"
        },
        {
          link: "/devils_advocates",
          label: "devilsAdvocates.title"
        },
        {
          link: "/external_resources",
          label: "externalResources.title"
        }
      ]
    };
  }
});
</script>

<style></style>
