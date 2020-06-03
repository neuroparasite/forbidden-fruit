export interface State {
  currentTopic: string;

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
  referenceLink: string;
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
  name: string;
  description: string;
  articleIds: number[];
  audioIds: number[];
  literatureIds: number[];
  studyIds: number[];
  videoIds: number[];
}
