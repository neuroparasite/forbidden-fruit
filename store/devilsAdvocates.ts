import devils_advocates from "~/static/data/devilsAdvocates.json";
import { DevilsAdvocate, Article, Literature, Study, Video } from "~/types";
import { GetterTree, MutationTree } from "vuex";
import { RootState } from "~/store";

interface State {
  list: DevilsAdvocate[];
  current: DevilsAdvocate | undefined;
}

export const state = (): State => ({
  list: devils_advocates,
  current: undefined,
});

export type DevilsAdvocatesState = ReturnType<typeof state>;

export const mutations: MutationTree<DevilsAdvocatesState> = {
  setCurrent(state: State, i18nKey: string) {
    state.current = state.list.find((d) => d.i18nKey === i18nKey);
  },
};

export const getters: GetterTree<DevilsAdvocatesState, RootState> = {
  list: (state: State) => {
    return state.list;
  },
  current: (state: State) => {
    return state.current;
  },
  byKeys: (state: State) => (tagKeys: string[]) => {
    return state.list.filter((devilsAdvocate) =>
      tagKeys.includes(devilsAdvocate.i18nKey)
    );
  },
  hasArticles: (_: State, __: any, rootState: RootState) => (
    devilsAdvocateKey: string
  ) => {
    return !!rootState.articles.find((article) =>
      article.devilsAdvocateKeys?.includes(devilsAdvocateKey)
    );
  },
  hasLiterature: (_: State, __: any, rootState: RootState) => (
    devilsAdvocateKey: string
  ) => {
    return !!rootState.literature.find((lit) =>
      lit.devilsAdvocateKeys?.includes(devilsAdvocateKey)
    );
  },
  hasStudies: (_: State, __: any, rootState: RootState) => (
    devilsAdvocateKey: string
  ) => {
    return !!rootState.studies.find((study) =>
      study.devilsAdvocateKeys?.includes(devilsAdvocateKey)
    );
  },
  hasVideos: (_: State, __: any, rootState: RootState) => (
    devilsAdvocateKey: string
  ) => {
    return !!rootState.videos.find((video) =>
      video.devilsAdvocateKeys?.includes(devilsAdvocateKey)
    );
  },
};
