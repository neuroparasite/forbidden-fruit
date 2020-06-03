<template>
  <div>
    nonono
    <nuxt-link v-for="topic in topics" :key="topic.id" :to="`/topics/${topic.name}/`">
      <div v-on:click="setCurrentTopic(topic.name)">{{ topic.name }}</div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { topics } from "~/types";

export default Vue.extend({
  data() {
    return {
      topics: topics
    };
  },
  methods: {
    setCurrentTopic(topic: string) {
      this.$store.commit("setCurrentTopic", topic);
    }
  }
});
</script>