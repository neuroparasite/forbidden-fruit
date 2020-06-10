<template>
  <div class="flex p-12">
    <button @click="navigateHome()">
      <Icon class="h-24 w-24" type="home" />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import Icon from "~/components/Icon.vue";

@Component({
  components: {
    Icon,
  },
})
export default class HomeButton extends Vue {
  navigateHome() {
    this.$router.push("/");
  }
}
</script>

<style></style>
