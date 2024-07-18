import Head from 'next/head';
import { PostData } from '@/domain/posts/post';
import { AllPostsLinks, Category, Container } from './styles';
import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import { PostCard } from '@/components/PostCard';
import { Footer } from '@/components/Footer';
import { SITE_NAME } from '@/config/app-config';
import { PaginationData } from '@/domain/posts/pagination';
import { Pagination } from '@/components/Pagination';
import Link from 'next/link';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export default function HomePage({
  posts,
  category,
  pagination,
}: HomePageProps) {
  return (
    <>
      <Head>
        <title>
          {category ? `${category} - ${SITE_NAME}` : SITE_NAME}{' '}
          {pagination?.nextPage && ` - Página ${pagination.nextPage - 1}`}
        </title>
        <meta name="description" content="Blog Next" />
      </Head>
      <Header />
      {category && <Category>Categoria: {category}</Category>}
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              cover={post.cover.data.attributes.url}
              slug={post.slug}
              title={post.title}
            />
          ))}
        </Container>
        <Pagination {...pagination} />
        {!pagination?.nextPage && (
          <Link
            as="/post/page/1"
            href="/post/page/[...param]"
            passHref
            legacyBehavior
          >
            <AllPostsLinks>Ver Todos os Posts</AllPostsLinks>
          </Link>
        )}
      </MainContainer>
      <Footer />
    </>
  );
}
