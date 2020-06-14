import devils_advocates from "~/static/data/devils_advocates.json";
import { DevilsAdvocate, Article, Literature, Study, Video } from "~/types";

interface State {
  list: DevilsAdvocate[];
  current: DevilsAdvocate | undefined;
}

export const state = (): State => ({
  list: devils_advocates,
  current: undefined,
});

export const mutations = {
  setCurrent(state: State, i18nKey: string) {
    state.current = state.list.find((d) => d.i18nKey === i18nKey);
  },
};

export const getters = {
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
  hasArticles: (_: State, getters: any) => (devilsAdvocateKey: string) => {
    const articles: Article[] = getters["articles"];
    return !!articles.find((article) =>
      article.devilsAdvocateKeys?.includes(devilsAdvocateKey)
    );
  },
  hasLiterature: (_: State, getters: any) => (devilsAdvocateKey: string) => {
    const literature: Literature[] = getters["literature"];
    return !!literature.find((lit) =>
      lit.devilsAdvocateKeys?.includes(devilsAdvocateKey)
    );
  },
  hasStudies: (_: State, getters: any) => (devilsAdvocateKey: string) => {
    const studies: Study[] = getters["studies"];
    return !!studies.find((study) =>
      study.devilsAdvocateKeys?.includes(devilsAdvocateKey)
    );
  },
  hasVideos: (_: State, getters: any) => (devilsAdvocateKey: string) => {
    const videos: Video[] = getters["videos"];
    return !!videos.find((video) =>
      video.devilsAdvocateKeys?.includes(devilsAdvocateKey)
    );
  },
};
