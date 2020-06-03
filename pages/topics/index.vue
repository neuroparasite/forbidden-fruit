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

export default Vue.extend({
  data() {
    return {
      topics: [
        {
          id: "0",
          name: "gender"
        },
        {
          id: "1",
          name: "biology"
        }
      ]
    };
  },
  methods: {
    setCurrentTopic(topic: string) {
      this.$store.commit("setCurrentTopic", topic);
    }
  }
});
</script>