<template>
  <div class="min-h-screen">
    <NavBar />

    <FHeader title="topics.title" />

    <div class="flex flex-col items-center justify-center mt-56">
      <div>
        <Link
          v-for="topic in topics"
          :key="topic.id"
          :link="`/topics/${topic.name}`"
          :label="topic.label"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { mapGetters } from "vuex";

import FHeader from "~/components/FHeader.vue";
import Link from "~/components/Link.vue";
import NavBar from "~/components/NavBar.vue";

@Component({
  components: {
    FHeader,
    Link,
    NavBar,
  },
  computed: {
    ...mapGetters(["topics"]),
  },
})
export default class TopicsPage extends Vue {
  beforeMount() {
    this.$store.commit("resetState");
  }
}
</script>
