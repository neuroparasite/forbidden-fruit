import tags from "~/static/data/tags.json";
import topics from "~/static/data/topics.json";
import { DevilsAdvocate, Topic, Subtopic, Tag } from "~/types";

interface State {
  currentTopic: Topic | undefined;
  currentSubtopic: Subtopic | undefined;
  currentTag: Tag | undefined;

  topics: Topic[];
  tags: Tag[];
}

export const state = (): State => ({
  currentTopic: undefined,
  currentSubtopic: undefined,
  currentTag: undefined,

  topics,
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
  topics: (state: State) => {
    return state.topics;
  },
  subtopics: (_: State, getters: any) => (topicName: string) => {
    const topic = getters["topics"].find(
      (topic: Topic) => topic.i18nKey === topicName
    );
    return topic?.subtopics;
  },
  articles: (_: State, getters: any) => {
    const subtopics: Subtopic[] = getters["subtopics"];
    return subtopics.map((subtopic: Subtopic) => subtopic.articles);
  },
  literature: (_: State, getters: any) => {
    const subtopics: Subtopic[] = getters["subtopics"];
    return subtopics.map((subtopic: Subtopic) => subtopic.literature);
  },
  studies: (_: State, getters: any) => {
    const subtopics: Subtopic[] = getters["subtopics"];
    return subtopics.map((subtopic: Subtopic) => subtopic.studies);
  },
  videos: (_: State, getters: any) => {
    const subtopics: Subtopic[] = getters["subtopics"];
    return subtopics.map((subtopic: Subtopic) => subtopic.videos);
  },
  tags: (state: State) => {
    return state.tags;
  },
  tagsByKeys: (state: State) => (tagKeys: string[]) => {
    return state.tags.filter((tag) => tagKeys.includes(tag.i18nKey));
  },
};
