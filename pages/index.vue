<template>
  <div class="overflow-x-hidden">
    <!-- Arm -->
    <img
      class="absolute pointer-events-none mt-64"
      width="360"
      height="411"
      src="~/static/img/arm_angle.png"
      alt
    />

    <!-- Home -->
    <div class="flex flex-col items-center text-center min-h-screen">
      <div class="mt-56 mx-64">
        <div class="text-16 mb-12">{{ $t("home.quote") }}</div>
        <div class="text-12">{{ $t("home.quoteSource") }}</div>
      </div>

      <div
        class="flex items-center justify-center mt-128 text-24 text-secondary font-black tracking-tighter leading-none w-fruit h-fruit rounded-full bg-secondary"
      >
        <nuxt-link class="w-fruitText underline" to="/topics">{{
          $t("home.fruitText")
        }}</nuxt-link>
      </div>

      <ScrollDownIndicator />
    </div>

    <!-- Info -->
    <div
      class="flex flex-col items-center justify-center min-h-screen text-secondary"
    >
      <div
        class="flex flex-col items-center justify-center h-circleLarge w-circleLarge border-3 border-primary border-solid rounded-full bg-secondary"
      >
        <div class="flex flex-col px-64">
          <div class="mb-24">{{ $t("info.description") }}</div>

          <FList :points="listPoints" prefix="emphasis.fuck" />
        </div>
      </div>
    </div>

    <!-- Support Me -->
    <!-- <div class="flex flex-col items-center justify-center min-h-screen">
      <div class="flex items-center">
        <Icon class="h-32 w-32 mr-12" type="paypal" />
        <a href="https://paypal.me/xxx" class="underline">{{ $t("paypal") }}</a>
      </div>
    </div>-->
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import Icon from "~/components/Icon.vue";
import FList from "~/components/FList.vue";
import ScrollDownIndicator from "~/components/ScrollDownIndicator.vue";

@Component({
  components: {
    Icon,
    FList,
    ScrollDownIndicator,
  },
})
export default class HomePage extends Vue {
  listPoints = [
    "info.listPoints.politicalCorrectness",
    "info.listPoints.feminism",
    "info.listPoints.fakeNews",
  ];

  beforeMount() {
    this.$store.commit("resetState");
  }
}
</script>

<style scoped></style>
