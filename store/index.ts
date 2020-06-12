import discover_links from "~/static/data/discover_links.json";
import devils_advocates from "~/static/data/devils_advocates.json";
import tags from "~/static/data/tags.json";
import topics from "~/static/data/topics.json";
import { Topic, State, Subtopic } from "~/types";

export const state = (): State => ({
  currentTopic: undefined,
  currentSubtopic: undefined,
  currentTag: undefined,

  discoverLinks: discover_links,
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
  setCurrentTopic(state: State, topicName: string) {
    state.currentTopic = state.topics.find(
      (t: Topic) => t.i18nKey === topicName
    );
  },
  setCurrentSubtopic(state: State, subtopicName: string) {
    state.currentSubtopic = state.currentTopic?.subtopics.find(
      (s: Subtopic) => s.i18nKey === subtopicName
    );
  },
  setCurrentTag(state: State, tagName: string) {
    state.currentTag = state.tags.find((t) => t.name === tagName);
  },
  unsetCurrentTag(state: State) {
    state.currentTag = undefined;
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
  discoverLinks: (state: State) => {
    return state.discoverLinks;
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
  tags: (state: State) => {
    return state.tags;
  },
  tagsByNames: (state: State) => (tagNames: string[]) => {
    return state.tags.filter((tag) => tagNames.includes(tag.name));
  },
};
