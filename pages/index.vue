<template>
  <div>
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

      <div class="flex flex-col items-center absolute bottom-20">
        <div class="text-12 mb-8">{{ $t("scroll.down") }}</div>
        <Icon class="h-24 w-24" type="arrowDown" />
      </div>
    </div>

    <div class="flex flex-col items-center justify-center h-screen">
      <div
        class="flex flex-col items-center justify-center h-circleLarge w-circleLarge border-3 border-primary border-solid rounded-full"
      >
        <div class="flex flex-col px-48">
          <div>{{ $t("info.description")}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "~/components/Icon.vue";

export default Vue.extend({
  components: {
    Icon
  }
});
</script>

<style></style>
