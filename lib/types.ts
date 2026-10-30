export type Photo = {
  src: string;
  w: number;
  h: number;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  oldUrl: string;
  photos: Photo[];
  details?: Record<string, string>;
};
