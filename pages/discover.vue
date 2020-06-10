<template>
  <div class="h-screen">
    <NavBar />

    <div class="flex flex-col items-center justify-center mt-128">
      <div>
        <Link
          v-for="link in discoverLinks"
          :key="link.link"
          :link="link.link"
          :label="link.label"
          :disabled="link.disabled"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import Link from "~/components/Link.vue";
import NavBar from "~/components/NavBar.vue";

export default Vue.extend({
  components: {
    NavBar,
    Link
  },
  computed: {
    ...mapGetters(["discoverLinks"])
  },
  beforeMount() {
    this.$store.commit("resetState");
  }
});
</script>

<style></style>
