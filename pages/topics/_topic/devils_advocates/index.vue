<template>
  <div class="min-h-screen">
    <NavBar />

    <FHeader
      :title="`topics.${currentTopic.i18nKey}.title`"
      subtitle="devilsAdvocates.title"
      class="mb-24"
    />

    <FDevilsAdvocate
      v-for="devilsAdvocate in devilsAdvocates"
      :key="devilsAdvocate.i18nKey"
      :devilsAdvocate="devilsAdvocate"
    />
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
import FDevilsAdvocate from "~/components/FDevilsAdvocate.vue";

import { Topic, DevilsAdvocate } from "~/types";

@Component({
  components: {
    FHeader,
    NavBar,
    FDevilsAdvocate,
  },
  computed: {
    ...mapGetters(["currentTopic"]),
  },
  validate({ params, store }: any) {
    const topics: Topic[] = store.getters["topics"];
    return !!topics.find((t) => t.i18nKey === params.topic);
  },
})
export default class DevilsAdvocatesPage extends Vue {
  get devilsAdvocates(): DevilsAdvocate[] {
    return this.$store.getters["devilsAdvocates/list"];
  }

  beforeMount() {
    this.$store.commit("setCurrentTopic", this.$route.params.topic);
  }
}
</script>
