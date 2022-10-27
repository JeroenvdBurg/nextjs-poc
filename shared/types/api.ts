export type HomePageApiModel = {
  title: string;
  description: string;
  contentBlocks: ContentBlockApiModel[];
};

export type PageApiModel = {
  slug: string;
  title: string;
  description: string;
  contentBlocks: ContentBlockApiModel[];
};

export type ContentBlockApiModel = {
  title: string;
  text: string;
  link?: LinkApiModel;
  image?: ImageApiModel;
  alignLeft: boolean;
};

export type ImageApiModel = {
  url: string;
};

export type LinkApiModel = {
  title: string;
  page: HomePageApiModel | PageApiModel;
};
