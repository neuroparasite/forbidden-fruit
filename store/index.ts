import devils_advocates from "~/static/data/devils_advocates.json";
import tags from "~/static/data/tags.json";
import topics from "~/static/data/topics.json";
import { Topic, State, Subtopic } from "~/types";

export const state = (): State => ({
  currentTopic: undefined,
  currentSubtopic: undefined,
  currentTag: undefined,
  currentDevilsAdvocate: undefined,

  topics,
  devilsAdvocates: devils_advocates,
  tags,
});

export const mutations = {
  resetState(state: State) {
    state.currentTopic = undefined;
    state.currentSubtopic = undefined;
    state.currentTag = undefined;
  },
  setCurrentTopic(state: State, i18nKey: string) {
    state.currentTopic = state.topics.find((t: Topic) => t.i18nKey === i18nKey);
  },
  setCurrentSubtopic(state: State, i18nKey: string) {
    state.currentSubtopic = state.currentTopic?.subtopics.find(
      (s: Subtopic) => s.i18nKey === i18nKey
    );
  },
  setCurrentTag(state: State, i18nKey: string) {
    state.currentTag = state.tags.find((t) => t.i18nKey === i18nKey);
  },
  unsetCurrentTag(state: State) {
    state.currentTag = undefined;
  },
  setCurrentDevilsAdvocate(state: State, i18nKey: string) {
    state.currentDevilsAdvocate = state.devilsAdvocates.find(
      (d) => d.i18nKey === i18nKey
    );
  },
};

export const getters = {
  currentTopic: (state: State) => {
    return state.currentTopic;
  },
  currentSubtopic: (state: State) => {
    return state.currentSubtopic;
  },
  currentTag: (state: State) => {
    return state.currentTag;
  },
  currentDevilsAdvocate: (state: State) => {
    return state.currentDevilsAdvocate;
  },
  topics: (state: State) => {
    return state.topics;
  },
  subtopics: (_: State, getters: any) => (topicName: string) => {
    const topic = getters["topics"].find((t: Topic) => t.i18nKey === topicName);
    return topic?.subtopics;
  },
  devilsAdvocates: (state: State) => {
    return state.devilsAdvocates;
  },
  devilsAdvocatesByKeys: (state: State) => (tagKeys: string[]) => {
    return state.devilsAdvocates.filter((devilsAdvocate) =>
      tagKeys.includes(devilsAdvocate.i18nKey)
    );
  },
  tags: (state: State) => {
    return state.tags;
  },
  tagsByKeys: (state: State) => (tagKeys: string[]) => {
    return state.tags.filter((tag) => tagKeys.includes(tag.i18nKey));
  },
};
