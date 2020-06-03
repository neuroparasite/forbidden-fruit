<template>
  <div>
    <h1>{{ topic.name }}</h1>
    <nuxt-link
      v-for="resourceType in resourceTypes"
      :key="resourceType.id"
      :to="`/topics/${topic.name}/${resourceType.name}`"
    >
      <div v-on:click="setCurrentResourceType(resourceType.name)">{{ resourceType.name }}</div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { resourceTypes } from "~/types";

export default Vue.extend({
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
  }
});
</script>