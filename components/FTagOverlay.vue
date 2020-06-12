<template>
  <FFade>
    <div
      v-if="currentTag"
      class="fixed top-0 left-0 flex items-center justify-center min-h-screen w-screen bg-opacity-75 bg-overlay"
      @click="hideTagOverlay()"
    >
      <div class="flex flex-col p-16 bg-primary w-screen mx-32">
        <div class="flex">
          <div
            class="text-12 text-center px-8 py-4 mb-20 bg-primary-dark uppercase"
          >
            {{ $t(`tags.${currentTag.i18nKey}.title`) }}
          </div>
        </div>

        <div class="mb-20">
          {{ $t(`tags.${currentTag.i18nKey}.description`) }}
        </div>

        <div
          class="flex"
          :class="{
            'justify-between': currentTag.wikipediaLink,
            'justify-end': !currentTag.wikipediaLink,
          }"
        >
          <FWikipediaLink
            v-if="currentTag.wikipediaLink"
            :i18nKey="`tags.${currentTag.i18nKey}.wikipediaLink`"
          />

          <button
            class="text-secondary p-8 bg-accent uppercase"
            @click="hideTagOverlay()"
          >
            {{ $t("ui.close") }}
          </button>
        </div>
      </div>
    </div>
  </FFade>
</template>

<script lang="ts">
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { mapGetters } from "vuex";

import FWikipediaLink from "~/components/FWikipediaLink.vue";
import FFade from "~/components/transitions/FFade.vue";

import { Subtopic } from "~/types";

@Component({
  components: {
    FWikipediaLink,
    FFade,
  },
  computed: {
    ...mapGetters(["currentTag"]),
  },
})
export default class FTagOverlay extends Vue {
  hideTagOverlay() {
    this.$store.commit("unsetCurrentTag");
  }
}
</script>
