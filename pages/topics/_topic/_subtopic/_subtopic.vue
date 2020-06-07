<template>
  <nuxt-child :subtopic="subtopic" />
</template>

<script>
const subtopics = [
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
      subtopics: subtopics
    };
  },
  computed: {
    topic() {
      return subtopics.find(v => v.name == this.$route.params.subtopic);
    }
  }
};
</script>