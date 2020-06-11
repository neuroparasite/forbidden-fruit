<template>
  <div class="min-h-screen">
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
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { mapGetters } from "vuex";

import Link from "~/components/Link.vue";
import NavBar from "~/components/NavBar.vue";

@Component({
  components: {
    Link,
    NavBar,
  },
  computed: {
    ...mapGetters(["discoverLinks"]),
  },
})
export default class DiscoverPage extends Vue {
  beforeMount() {
    this.$store.commit("resetState");
  }
}
</script>

<style></style>
