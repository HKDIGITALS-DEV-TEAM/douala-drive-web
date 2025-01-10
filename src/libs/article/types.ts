export interface Article {
  id: string;
  title: string;
  slug: string;
  category: {
    id: string;
    name: string;
  };
  image: string | null;
  excerpt: string | null;
  status: {
    id: string;
    name: string;
  };
  content: string;
  author: {
    id: string;
    name: string;
    email: string;
  };
  tags: {
    id: string;
    name: string;
  }[];
  createdAt: string;
  updatedAt: string;
}

export interface ArticleRequest {
  id: string | undefined;
  title: string;
  slug: string;
  category_id: string;
  image: string | null;
  excerpt: string | null;
  status_id: string;
  content: string;
  author_id: string;
  tags: string[] | null;
}

export type CategoryArticle = {
  id: string;
  name: string;
};

export type StatusArticle = {
  id: string;
  name: string;
};

export type Tag = {
  id: string;
  name: string;
};
