import { POSTS_URL } from '@/config/app-config';
import { PostsResponse } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<number> => {
  const url = `${POSTS_URL}/count/view${query}`;
  const posts = await fetchJson<PostsResponse>(url);
  return posts.meta?.pagination?.total;
};
