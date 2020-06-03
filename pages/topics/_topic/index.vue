<template>
  <div>
    <h1>{{ topic.name }}</h1>
    <div v-for="resourceType in resourceTypes" :key="resourceType.id">
      <nuxt-link :to="`/topics/${topic.name}/${resourceType.name}`">{{ resourceType.name }}</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const resourceTypes = [
  {
    id: "0",
    name: "articles"
  },
  {
    id: "1",
    name: "audio"
  },
  {
    id: "2",
    name: "literature"
  },
  {
    id: "3",
    name: "studies"
  },
  {
    id: "4",
    name: "videos"
  }
];

export default Vue.extend({
  data() {
    return {
      resourceTypes: resourceTypes
    };
  },
  props: ["topic"]
});
</script>