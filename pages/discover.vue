<template>
  <div class="h-screen">
    <HomeButton />

    <div class="flex flex-col items-center justify-center mt-128">
      <div>
        <Link
          v-for="link in links"
          :key="link.link"
          :link="link.link"
          :label="link.label"
          :disabled="link.disabled"
          class="mb-32 last:mb-0"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomeButton from "~/components/HomeButton.vue";
import Link from "~/components/Link.vue";

export default Vue.extend({
  components: {
    HomeButton,
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
  }
});
</script>

<style></style>
