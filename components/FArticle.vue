<template>
  <div class="flex flex-col p-16 bg-primary-light" :id="article.i18nKey">
    <div class="flex justify-between text-18 text-accent mb-8">
      <div>{{ article.year }}</div>
      <div v-if="devilsAdvocatesByKeys" class="flex flex-col">
        <div
          v-for="devilsAdvocate in devilsAdvocatesByKeys"
          :key="devilsAdvocate.i18nKey"
          class="mb-4 last:mb-0"
        >
          <div>
            {{ devilsAdvocate.firstname + " " + devilsAdvocate.lastname }}
          </div>
        </div>
      </div>
    </div>

    <div class="font-medium text-18 mb-16">{{ article.title }}</div>

    <div class="grid grid-cols-3 gap-16 mb-16">
      <FTag v-for="tag in tagsByKeys" :key="tag.i18nKey" :tag="tag" />
    </div>

    <div class="flex justify-between text-accent">
      <FCopyLinkButton :link="articleURL" />

      <FExternalLink :link="article.source" label="ui.source" />
    </div>
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import FCopyLinkButton from "~/components/FCopyLinkButton.vue";
import FExternalLink from "~/components/FExternalLink.vue";
import FTag from "~/components/FTag.vue";
import { Article, Tag } from "~/types";

@Component({
  components: {
    FCopyLinkButton,
    FExternalLink,
    FTag,
  },
})
export default class FArticle extends Vue {
  @Prop({ required: true })
  public article!: Article;

  get articleURL(): string {
    return `${process.env.baseURL}${this.$route.path}#${this.article.i18nKey}`;
  }

  get tagsByKeys(): Tag {
    return this.$store.getters["tagsByKeys"](this.article.tagKeys);
  }

  get devilsAdvocatesByKeys(): Tag {
    return this.$store.getters["devilsAdvocatesByKeys"](
      this.article.devilsAdvocateKeys
    );
  }
}
</script>

<style></style>
