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
  topicKeys: string[];
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
}

export interface Subtopic {
  id: string;
  topicKey: string;
  i18nKey: string;
  wikipediaLink?: boolean;
}

interface Resource {
  subtopicKey: string;
  title: string;
  i18nKey: string;
  year: number;
  tagKeys: string[];
  devilsAdvocateKeys?: string[];
  authors?: string[];
}

export interface Article extends Resource {
  source: string;
}

export interface Literature extends Resource {
  purchaseLink: boolean;
}

export interface Study extends Resource {
  source: string;
}

export interface Video extends Resource {
  embedUrl: string;
}

export interface ExternalResource {
  subtopicKey: string;
  i18nKey: string;
  tagKeys: string[];
  source: string;
}
