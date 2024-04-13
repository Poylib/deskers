export type Group = {
  category: string;
  displayName: string;
  count: number;
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
  filepath: string;
  readingMinutes: number;
}
