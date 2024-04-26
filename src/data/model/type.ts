import { HeadingItem } from "../../config/types";

export type Group = {
  category: string;
  displayName: string;
  count: number;
};

export type HashTag = {
  count: number;
  url: string;
};

export interface PostMatter {
  title: string;
  date: Date;
  dateString: string;
  thumbnail: string;
  desc: string;
}

export interface Post extends PostMatter {
  category: string;
  content: string;
  uri: string;
  readingMinutes: number;
  toc: HeadingItem[]
}
