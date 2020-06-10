<template>
  <div class="sticky">
    <div class="flex items-center justify-between bg-primary-dark">
      <HomeButton />

      <div v-if="title" class="flex text-16">
        <div v-if="title" class="mr-4">{{ $t(title) }}</div>
        <div v-if="subtitle" class="mr-4">/</div>
        <div v-if="subtitle">{{ $t(subtitle) }}</div>
        <div v-if="subsubtitle" class="mr-4">/</div>
        <div v-if="subsubtitle">{{ $t(subsubtitle) }}</div>
      </div>

      <GoToTopButton />
    </div>
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import HomeButton from "~/components/HomeButton.vue";
import GoToTopButton from "~/components/GoToTopButton.vue";

@Component({
  components: {
    HomeButton,
    GoToTopButton,
  },
})
export default class NavBar extends Vue {
  @Prop()
  title!: string;

  @Prop()
  subtitle!: string;

  @Prop()
  subsubtitle!: string;
}
</script>

<style></style>
