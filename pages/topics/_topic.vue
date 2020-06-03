<template>
  <nuxt-child :topic="topic" />
</template>

<script>
const topics = [
  {
    id: "0",
    name: "gender"
  },
  {
    id: "1",
    name: "biology"
  }
];

export default {
  data() {
    return {
      topics: topics
    };
  },
  computed: {
    topic() {
      return topics.find(v => v.name == this.$route.params.topic);
    }
  }
};
</script>