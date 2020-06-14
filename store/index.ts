import { GetterTree, MutationTree } from "vuex";
import articles from "~/static/data/articles.json";
import tags from "~/static/data/tags.json";
import topics from "~/static/data/topics.json";
import externalResources from "~/static/data/externalResources.json";
import literature from "~/static/data/literature.json";
import studies from "~/static/data/studies.json";
import subtopics from "~/static/data/subtopics.json";
import videos from "~/static/data/videos.json";
import {
  Article,
  Literature,
  Study,
  Subtopic,
  Tag,
  Topic,
  Video,
  ExternalResource,
} from "~/types";

interface State {
  currentTopic: Topic | undefined;
  currentSubtopic: Subtopic | undefined;
  currentTag: Tag | undefined;

  topics: Topic[];
  subtopics: Subtopic[];
  articles: Article[];
  literature: Literature[];
  studies: Study[];
  videos: Video[];
  tags: Tag[];
  externalResources: ExternalResource[];
}

export const state = (): State => ({
  currentTopic: undefined,
  currentSubtopic: undefined,
  currentTag: undefined,

  topics,
  subtopics,
  articles,
  literature,
  studies,
  videos,
  tags,
  externalResources,
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  resetState(state: State) {
    state.currentTopic = undefined;
    state.currentSubtopic = undefined;
    state.currentTag = undefined;
  },
  setCurrentTopic(state: State, i18nKey: string) {
    state.currentTopic = state.topics.find((t: Topic) => t.i18nKey === i18nKey);
  },
  setCurrentSubtopic(state: State, i18nKey: string) {
    state.currentSubtopic = state.subtopics.find(
      (s: Subtopic) => s.i18nKey === i18nKey
    );
  },
  setCurrentTag(state: State, i18nKey: string) {
    state.currentTag = state.tags.find((t) => t.i18nKey === i18nKey);
  },
  unsetCurrentTag(state: State) {
    state.currentTag = undefined;
  },
};

export const getters: GetterTree<RootState, RootState> = {
  currentTopic: (state: State) => {
    return state.currentTopic;
  },
  currentSubtopic: (state: State) => {
    return state.currentSubtopic;
  },
  currentTag: (state: State) => {
    return state.currentTag;
  },
  topics: (state: State) => {
    return state.topics;
  },
  subtopics: (state: State) => {
    return state.subtopics;
  },
  subtopicsByTopic: (state: State) => (topicKey: string) => {
    return state.subtopics.filter((subtopic) => subtopic.topicKey === topicKey);
  },
  articles: (state: State) => {
    return state.articles;
  },
  articlesBySubtopic: (state: State) => (subtopicKey: string) => {
    return state.articles.filter(
      (article) => article.subtopicKey === subtopicKey
    );
  },
  literature: (state: State) => {
    return state.literature;
  },
  literatureBySubtopic: (state: State) => (subtopicKey: string) => {
    return state.literature.filter(
      (literature) => literature.subtopicKey === subtopicKey
    );
  },
  studies: (state: State) => {
    return state.studies;
  },
  studiesBySubtopic: (state: State) => (subtopicKey: string) => {
    return state.studies.filter((study) => study.subtopicKey === subtopicKey);
  },
  videos: (state: State) => {
    return state.videos;
  },
  videosBySubtopic: (state: State) => (subtopicKey: string) => {
    return state.videos.filter((video) => video.subtopicKey === subtopicKey);
  },
  tags: (state: State) => {
    return state.tags;
  },
  tagsByKeys: (state: State) => (tagKeys: string[]) => {
    return state.tags.filter((tag) => tagKeys.includes(tag.i18nKey));
  },
  externalResources: (state: State) => {
    return state.externalResources;
  },
  externalResourcesBySubtopic: (state: State) => (subtopicKey: string) => {
    return state.externalResources.filter(
      (externalResource) => externalResource.subtopicKey === subtopicKey
    );
  },
};
