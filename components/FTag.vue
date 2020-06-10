<template>
  <div>
    <button
      class="text-12 text-center px-8 py-4 bg-primary-dark uppercase"
      @click="showDescription()"
    >
      {{ tag.name }}
    </button>

    <FFade>
      <div
        v-if="show"
        class="absolute top-0 left-0 flex items-center justify-center h-screen w-screen bg-opacity-75 bg-overlay"
      >
        <div class="flex flex-col p-16 bg-primary w-screen mx-32">
          <div class="flex">
            <div
              class="text-12 text-center px-8 py-4 mb-20 bg-primary-dark uppercase"
            >
              {{ tag.name }}
            </div>
          </div>

          <div class="mb-20">{{ tag.description }}</div>

          <div class="flex justify-center">
            <button
              class="text-secondary p-8 bg-accent uppercase"
              @click="hideDescription()"
            >
              {{ $t("ui.close") }}
            </button>
          </div>
        </div>
      </div>
    </FFade>
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import FFade from "~/components/transitions/FFade.vue";
import { Tag } from "~/types";

@Component({
  components: {
    FFade,
  },
})
export default class FTag extends Vue {
  @Prop({ required: true })
  tag!: Tag;

  show = false;

  showDescription() {
    this.show = true;
  }

  hideDescription() {
    this.show = false;
  }
}
</script>

<style scoped></style>
