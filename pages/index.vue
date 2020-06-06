<template>
  <div class="overflow-x-hidden">
    <!-- Home -->
    <div class="flex flex-col items-center text-center h-screen">
      <div class="mt-56 mx-64">
        <div class="text-12 mb-12">{{ $t("home.quote") }}</div>
        <div class="text-10">{{ $t("home.quoteSource") }}</div>
      </div>

      <div
        class="flex items-center justify-center mt-128 text-24 text-secondary font-black tracking-tighter leading-none w-fruit h-fruit rounded-full bg-secondary"
      >
        <nuxt-link class="w-fruitText" to="/discover">{{ $t("home.discover") }}</nuxt-link>
      </div>

      <transition name="fade">
        <div v-if="!scrolled" class="flex flex-col items-center absolute bottom-20">
          <div class="text-12 mb-8">{{ $t("scroll.down") }}</div>
          <Icon class="h-24 w-24" type="arrowDown" />
        </div>
      </transition>
    </div>

    <!-- Info -->
    <div class="flex flex-col items-center justify-center h-screen">
      <div
        class="flex flex-col items-center justify-center h-circleLarge w-circleLarge border-3 border-primary border-solid rounded-full"
      >
        <div class="flex flex-col px-64">
          <div class="mb-24">{{ $t("info.description")}}</div>

          <List :text="listText" :points="listPoints" />
        </div>
      </div>
    </div>

    <!-- Support Me -->
    <!-- <div class="flex flex-col items-center justify-center h-screen">
      <div class="flex items-center">
        <Icon class="h-32 w-32 mr-12" type="paypal" />
        <a href="https://paypal.me/xxx" class="underline">{{ $t("paypal") }}</a>
      </div>
    </div>-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "~/components/Icon.vue";
import List from "~/components/List.vue";

export default Vue.extend({
  components: {
    Icon,
    List
  },
  data() {
    return {
      listText: "info.listText",
      listPoints: [
        "info.listPoints.resources",
        "info.listPoints.individuals",
        "info.listPoints.knowledge"
      ],
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
