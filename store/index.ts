import devils_advocates from "~/static/data/devils_advocates.json";
import tags from "~/static/data/tags.json";
import topics from "~/static/data/topics.json";
import { State } from "~/types";

export const state = (): State => ({
  currentTopic: undefined,
  currentResourceType: "",

  topics: topics,
  devilsAdvocates: devils_advocates,
  tags: tags,
});

export const mutations = {
  setCurrentTopic(state: State, topicName: string) {
    state.currentTopic = state.topics.find((t) => t.name === topicName);
  },
  resetCurrentTopic(state: State) {
    state.currentTopic = undefined;
  },
  setCurrentResourceType(state: State, resourceType: string) {
    state.currentResourceType = resourceType;
  },
  resetCurrentResourceType(state: State) {
    state.currentResourceType = "";
  },
};
