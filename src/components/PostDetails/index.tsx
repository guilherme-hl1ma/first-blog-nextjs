import Link from 'next/link';
import { Date } from '../Date';
import { Container } from './styled';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};
export const PostDetails = ({ date, author, category }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} |{' '}
      <Link
        as={`/post/page/1/${category}`}
        href="/post/page/[...param]"
        legacyBehavior
      >
        <a>{category}</a>
      </Link>
    </Container>
  );
};
