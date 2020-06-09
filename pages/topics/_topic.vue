<template>
  <nuxt-child :topic="topic" />
</template>

<script>
export default {
  computed: {
    topic() {
      return this.$store.state.topics.find(
        v => v.name == this.$route.params.topic
      );
    }
  }
};
</script>