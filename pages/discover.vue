<template>
  <div class="container">
    <nuxt-link to="/topics">{{ $t("topics.title") }}</nuxt-link>
    <nuxt-link to="/devils_advocates">
      {{
      $t("devilsAdvocates.title")
      }}
    </nuxt-link>
    <nuxt-link to="/external_resources">
      {{
      $t("externalResources.title")
      }}
    </nuxt-link>
    <div class="underline">{{ this.$store.state.devilsAdvocates }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Tag } from "~/types";
import tags from "~/static/data/tags.json";

export default Vue.extend({});
</script>

<style></style>
