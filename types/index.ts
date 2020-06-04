export interface State {
  currentTopic: string;
  currentResourceType: string;

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
  name: string;
  description: string;
  articleIds: number[];
  audioIds: number[];
  literatureIds: number[];
  studyIds: number[];
  videoIds: number[];
}

export enum topicsEnum {
  GENDER = "gender",
  BIOLOGY = "biology",
  RELIGION = "religion",
  DIVERSITY = "diversity",
  NWO = "new-world-order",
}

export const topics = [
  {
    id: "0",
    name: topicsEnum.GENDER,
  },
  {
    id: "1",
    name: topicsEnum.BIOLOGY,
  },
  {
    id: "2",
    name: topicsEnum.RELIGION,
  },
  {
    id: "3",
    name: topicsEnum.DIVERSITY,
  },
  {
    id: "4",
    name: topicsEnum.NWO,
  },
];

export const resourceTypes = [
  {
    id: "0",
    name: "articles",
  },
  {
    id: "1",
    name: "audio",
  },
  {
    id: "2",
    name: "literature",
  },
  {
    id: "3",
    name: "studies",
  },
  {
    id: "4",
    name: "videos",
  },
];
