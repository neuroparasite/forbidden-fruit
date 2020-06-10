<template>
  <div class="flex flex-col p-16 bg-primary-light" :id="article.id">
    <div class="text-18 text-accent mb-8">{{ article.year }}</div>

    <div class="font-medium text-18 mb-16">{{ article.title }}</div>

    <div class="grid grid-cols-3 gap-16 mb-16">
      <FTag v-for="tag in tagsByNames" :key="tag.name" :tag="tag" />
    </div>

    <div class="flex justify-between text-accent">
      <button class="flex items-center p-4" @click="copyLink()">
        <Icon class="h-16 w-16 mr-8" type="copy" />
        <div>{{ $t("ui.copyLink") }}</div>
      </button>

      <a
        :href="article.source"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center p-4"
      >
        <Icon class="h-20 w-20 mr-8" type="linkExternal" />
        <div>{{ $t("ui.source") }}</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { mapGetters } from "vuex";

import Icon from "~/components/Icon.vue";
import FTag from "~/components/FTag.vue";
import { Article, Tag } from "~/types";

@Component({
  components: {
    Icon,
    FTag,
  },
})
export default class Resource extends Vue {
  @Prop({ required: true })
  public article!: Article;

  get articleURL(): string {
    return `https://forbidden-fruit.now.sh${this.$route.path}#${this.article.id}`;
  }

  get tagsByNames(): Tag {
    return this.$store.getters["tagsByNames"](this.article.tagNames);
  }

  copyLink() {
    navigator.clipboard.writeText(this.articleURL).then(
      () => {
        /* clipboard successfully set */
      },
      () => {
        /* clipboard write failed */
      }
    );
  }
}
</script>

<style></style>
