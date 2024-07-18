import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostData } from '../domain/posts/post';
import { GetStaticProps } from 'next';
import HomePage from '@/containers/HomePage';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(
    'sort=id:desc&pagination[start]=0&pagination[limit]=3',
  );

  return {
    props: { posts },
    revalidate: 60,
  };
};
