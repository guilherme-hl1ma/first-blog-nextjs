import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global-style';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
