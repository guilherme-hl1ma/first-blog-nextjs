import { POSTS_URL } from '@/config/app-config';
import { Post, PostData } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POSTS_URL}&${query}`;
  const jsonPosts = await fetchJson<{ data: Post[] }>(url);
  const posts = jsonPosts.data.map((post: Post) => post.attributes);
  return posts;
};
