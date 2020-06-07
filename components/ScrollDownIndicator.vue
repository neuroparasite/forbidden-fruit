<template>
  <transition name="fade">
    <div v-if="!scrolled" class="flex flex-col items-center absolute bottom-20">
      <div class="text-12 mb-8">{{ $t("scroll.down") }}</div>
      <Icon class="h-24 w-24" type="arrowDown" />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "~/components/Icon.vue";

const ScrollDownIndicator = Vue.extend({
  components: {
    Icon
  },
  data() {
    return {
      scrolled: false
    };
  },

  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 20;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
});

export default ScrollDownIndicator;
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
