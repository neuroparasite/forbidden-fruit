import devils_advocates from "~/static/data/devils_advocates.json";
import tags from "~/static/data/tags.json";
import { State } from "~/types";

export const state = (): State => ({
  currentTopic: "",
  currentResourceType: "",

  devilsAdvocates: devils_advocates,
  tags: tags,
});

export const mutations = {
  setCurrentTopic(state: State, topic: string) {
    state.currentTopic = topic;
  },
  setCurrentResourceType(state: State, resourceType: string) {
    state.currentResourceType = resourceType;
  },
};
