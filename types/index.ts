export interface State {
  currentTopic: Topic | undefined;
  currentSubtopic: Subtopic | undefined;
  currentTag: Tag | undefined;

  discoverLinks: DiscoverLink[];
  topics: Topic[];
  tags: Tag[];
  devilsAdvocates: DevilsAdvocate[];
  // externalSources: ExternalSource[];
  // audios: Resource[];
  // literatures: Resource[];
  // studies: Resource[];
  // videos: Video[];
  // topics: Topic[];
}

export interface Tag {
  name: string;
  i18nKey: string;
  wikipediaLink?: boolean;
}

export interface DevilsAdvocate {
  name: string;
  description: string;
  values: string[];
  background: string;
  resourceIds: number[];
  topResourceIds: number[];
  homepage: string;
  imageLink: string;
}

export interface Topic {
  id: string;
  i18nKey: string;
  //description: string;
  subtopics: Subtopic[];
}

export interface Subtopic {
  id: string;
  i18nKey: string;
  articles: Article[];
  externalResources: ExternalResource[];
  wikipediaLink?: boolean;
}

export interface Article {
  id: string;
  year: number;
  title: string;
  description: string;
  tagNames: string[];
  source: string;
}

export interface ExternalResource {
  i18nKey: string;
  tagNames: string[];
  source: string;
}

export interface DiscoverLink {
  id: string;
  link: string;
  label: string;
  disabled: boolean;
}
