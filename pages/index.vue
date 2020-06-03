<template>
  <div class="container">
    <nuxt-link to="/topics">topics</nuxt-link>

    <div class="underline">{{ this.$store.state.devilsAdvocates }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import fs from "fs";
import Logo from "~/components/Logo.vue";
import { Tag } from "~/types";
import tags from "~/static/data/tags.json";

export default Vue.extend({
  components: {
    Logo
  },
  data() {
    return {
      message: "hello"
    };
  }
  // asyncData({ params }) {
  //   // let tags: Tag[] = [];
  //   // if (process.server) {
  //   //   tags = JSON.parse(fs.readFileSync("~/static/tags.json", "utf8"));
  //   // }

  //   return { message: tags };
  // },
  // validate({ params }) {
  //   // Must be a number
  //   return /^\d+$/.test(params.id);
  // }
});
</script>

<style>
</style>
