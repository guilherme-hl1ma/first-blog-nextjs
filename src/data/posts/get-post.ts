import { POSTS_URL } from '@/config/app-config';
import { Post, PostData } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}&filters[slug]=${slugString}`;
  const jsonPosts = await fetchJson<{ data: Post[] }>(url);
  const posts = jsonPosts.data.map((post: Post) => post.attributes);
  return posts;
};
