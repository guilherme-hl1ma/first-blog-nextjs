import { Comments } from '@/Comments';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import { MainContainer } from '@/components/MainContainer';
import { PostContainer } from '@/components/PostContainer';
import { PostCover } from '@/components/PostCover';
import { PostDetails } from '@/components/PostDetails';
import { PostData } from '@/domain/posts/post';
import { convertParagraphsToMarkdown } from '@/utils/convert-paragraphs-to-markdown';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  const markdownContent = convertParagraphsToMarkdown(post.content);

  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover coverUrl={post.cover.data.attributes.url} alt={post.title} />
        <PostDetails
          author={post.author.data.attributes.name}
          category={post.category.data.attributes.name}
          date={post.createdAt}
        />
        <PostContainer content={markdownContent} />
        <Comments title={post.title} slug={post.slug} />
      </MainContainer>
      <Footer />
    </>
  );
};
