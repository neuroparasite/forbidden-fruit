<template>
  <transition name="fade">
    <button
      @click="goToTop()"
      class="flex flex-col items-center p-12"
      :class="{ 'opacity-0': !scrolled }"
    >
      <Icon class="h-24 w-24" type="arrowUp" />
    </button>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "~/components/Icon.vue";

const GoToTopButton = Vue.extend({
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
    },
    goToTop() {
      document.body.scrollTop = 0;
    }
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
});

export default GoToTopButton;
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
