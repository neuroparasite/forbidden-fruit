<template>
  <div>
    <div class="mb-12">{{ $t(text) }}:</div>

    <div v-for="point in points" :key="point" class="flex justify-top ml-8 mb-12">
      <div class="mr-8">×</div>
      <div>{{ $t(point) }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const List = Vue.extend({
  data() {
    return {
      pathHovered: false
    };
  },
  props: {
    text: {
      type: String,
      required: true
    },
    points: {
      type: Array,
      required: true
    }
  },
  methods: {},
  computed: {}
});

export default List;
</script>

<style scoped>
</style>