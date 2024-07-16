export type PostID = number;

export type PostAuthor = {
  data: {
    id: PostID;
    attributes: {
      name: string;
      created_by: number;
      updated_by: number;
      created_at: string;
      updated_at: string;
    };
  };
};

export type PostCategory = {
  data: {
    id: PostID;
    attributes: {
      name: string;
      created_by: number;
      updated_by: number;
      createdAt: string;
      updated_at: string;
    };
  };
};

export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};

export type PostCover = {
  data: {
    id: PostID;
    attributes: PostCoverAttributes;
  };
};

export type PostCoverAttributes = {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    small: PostCoverFormat;
    thumbnail: PostCoverFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostData = {
  title: string;
  content: Paragraph[];
  slug: string;
  author: PostAuthor;
  category: PostCategory;
  created_by: PostCreatedBy;
  updated_by: PostCreatedBy;
  createdAt: string;
  updated_at: string;
  cover: PostCover;
};

export type Post = {
  id: PostID;
  attributes: PostData;
};

export type PostsResponse = {
  data: PostData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type Paragraph = {
  children: TextNode[];
};

export type TextNode = {
  text: string;
};
