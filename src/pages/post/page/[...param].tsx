import HomePage from '@/containers/HomePage';
import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PaginationData } from '@/domain/posts/pagination';
import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Carregando...</div>;

  if (!posts.length) return <div>Página não encontrada.</div>;

  return <HomePage posts={posts} category={category} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const param = ctx.params?.param;

  if (!param || !Array.isArray(param) || param.length < 1) {
    return {
      notFound: true,
    };
  }

  const page = Number(param[0]);
  const category = param[1] || '';

  const postsPerPage = 3;
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const categoryQuery = category
    ? `&filters[$and][0][category][name][$contains]=${category}`
    : '';

  const posts = await getAllPosts(
    `sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}${categoryQuery}`,
  );

  const numberOfPosts = Number(await countAllPosts(categoryQuery));

  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    postsPerPage,
    previousPage,
    category,
  };

  return {
    props: { posts, pagination, category },
    revalidate: 60,
  };
};
