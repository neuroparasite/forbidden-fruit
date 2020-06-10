<template>
  <transition name="fade">
    <div v-if="!scrolled" class="flex flex-col items-center absolute bottom-20">
      <div class="text-12 mb-8">{{ $t("scroll.down") }}</div>
      <Icon class="h-24 w-24" type="arrowDown" />
    </div>
  </transition>
</template>

<script lang="ts">
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import Icon from "~/components/Icon.vue";

@Component({
  components: {
    Icon,
  },
})
export default class ScrollDownIndicator extends Vue {
  scrolled = false;

  handleScroll() {
    this.scrolled = window.scrollY > 20;
  }

  created() {
    window.addEventListener("scroll", this.handleScroll);
  }
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
