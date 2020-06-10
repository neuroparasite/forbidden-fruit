export interface State {
  currentTopic: Topic | undefined;
  currentSubtopic: Subtopic | undefined;

  discoverLinks: DiscoverLink[];
  topics: Topic[];
  tags: Tag[];
  devilsAdvocates: DevilsAdvocate[];
  // externalSources: ExternalSource[];
  // articles: Resource[];
  // audios: Resource[];
  // literatures: Resource[];
  // studies: Resource[];
  // videos: Video[];
  // topics: Topic[];
}

export interface Tag {
  name: string;
  description: string;
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

export interface Resource {
  id: number;
  name: string;
  description: string;
  source: string;
}

export interface ExternalSource {
  name: string;
  description: string;
  source: string;
}

export interface Video extends Resource {
  isVideo: boolean;
}

export interface Topic {
  id: string;
  name: string;
  label: string;
  //description: string;
  subtopics: Subtopic[];
}

export interface Subtopic {
  id: string;
  name: string;
  //description: string;
}

export interface DiscoverLink {
  id: string;
  link: string;
  label: string;
  disabled: boolean;
}
