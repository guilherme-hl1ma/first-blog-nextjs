import Link from 'next/link';
import { SITE_NAME } from '../../config/app-config';
import { Container } from './styled';

export const Header = () => {
  return (
    <Container>
      <Link href="/" legacyBehavior>
        <a>{SITE_NAME}</a>
      </Link>
    </Container>
  );
};
