export type Source = {
  media: string;
  url: string;
  mediaIcon: string | null;
};

export type Post = {
  title: string;
  slug: string;
  body: any;
  from: Source;
  generationDate: string;
};
