import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostData } from '@/domain/posts/post';
import { GetServerSideProps } from 'next';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return <HomePage posts={posts} category={category} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urlQuery = `sort=id:desc&pagination[start]=0&pagination[limit]=&filters[$and][0][category][name][$contains]=${ctx.query.category}`;
  const posts = await getAllPosts(urlQuery);

  return {
    props: { posts, category: ctx.query.category },
  };
};
