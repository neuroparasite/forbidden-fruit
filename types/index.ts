export interface State {
  currentTopic: Topic | undefined;
  currentSubtopic: Subtopic | undefined;
  currentTag: Tag | undefined;
  currentDevilsAdvocate: DevilsAdvocate | undefined;

  topics: Topic[];
  tags: Tag[];
  devilsAdvocates: DevilsAdvocate[];
}

export interface Tag {
  i18nKey: string;
  wikipediaLink?: boolean;
}

export interface DevilsAdvocate {
  firstname: string;
  lastname: string;
  i18nKey: string;
  homepage: string;
  imageLink: string;
  tagKeys: string[];
  socialMedia?: SocialMedia;
}

export interface SocialMedia {
  youtube?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  bitchute?: string;
}

export interface Topic {
  id: string;
  i18nKey: string;
  subtopics: Subtopic[];
}

export interface Subtopic {
  id: string;
  i18nKey: string;
  articles?: Article[];
  literature?: Literature[];
  studies?: Study[];
  videos?: Video[];
  externalResources: ExternalResource[];
  wikipediaLink?: boolean;
}

export interface Article {
  title: string;
  i18nKey: string;
  year: number;
  tagKeys: string[];
  source: string;
  devilsAdvocateKeys?: string[];
  authors?: string[];
}

export interface Literature {
  title: string;
  i18nKey: string;
  year: number;
  tagKeys: string[];
  purchaseLink: boolean;
  devilsAdvocateKeys?: string[];
  authors?: string[];
}

export interface Study {
  title: string;
  i18nKey: string;
  year: number;
  tagKeys: string[];
  source: string;
  devilsAdvocateKeys?: string[];
  authors?: string[];
}

export interface Video {
  title: string;
  i18nKey: string;
  year: number;
  tagKeys: string[];
  embedUrl: string;
  devilsAdvocateKeys?: string[];
  authors?: string[];
}

export interface ExternalResource {
  i18nKey: string;
  tagKeys: string[];
  source: string;
}
