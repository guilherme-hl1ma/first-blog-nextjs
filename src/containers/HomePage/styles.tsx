// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
`;

export const Category = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: bold;
  padding: ${({ theme }) => theme.spacings.medium};
`;

export const AllPostsLinks = styled.a`
  display: block;
  text-align: center;
  margin: ${({ theme }) => theme.spacings.large} 0;
`;
