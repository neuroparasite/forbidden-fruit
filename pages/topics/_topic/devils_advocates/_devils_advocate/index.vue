<template>
  <div class="min-h-screen">
    <NavBar />
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { mapGetters } from "vuex";

import FHeader from "~/components/FHeader.vue";
import NavBar from "~/components/NavBar.vue";

import { Topic } from "~/types";

@Component({
  components: {
    FHeader,
    NavBar,
  },
  computed: {
    ...mapGetters(["currentTopic", "currentDevilsAdvocate"]),
  },
  validate({ params, store }: any) {
    const topics: Topic[] = store.getters["topics"];
    return !!topics.find((t) => t.i18nKey === params.topic);
  },
})
export default class DevilsAdvocatesPage extends Vue {
  beforeMount() {
    this.$store.commit("setCurrentTopic", this.$route.params.topic);
    this.$store.commit(
      "setCurrentDevilsAdvocate",
      this.$route.params.devilsAdvocate
    );
  }
}
</script>
