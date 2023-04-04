import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { theme } from '../chakra/theme';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const redirectUri = `${process.env['NEXT_PUBLIC_BASE_URL']}/success`;

  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        {<Component {...pageProps} />}
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
