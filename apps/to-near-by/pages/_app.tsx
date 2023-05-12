import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Head from 'next/head';
import { StrictMode, useState } from 'react';

// eslint-disable-next-line @nx/enforce-module-boundaries
import '@tonearby/rui';

// rui/global-styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 1, // 1 hours
            staleTime: 1000 * 60 * 1, // 1min
          },
        },
      })
  );

  return (
    <>
      <Head>
        <title>Welcome to to-near-by!</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <main className="app">
        <QueryClientProvider client={queryClient}>
          <StrictMode>
            <Component {...pageProps} />
          </StrictMode>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </main>
    </>
  );
}

export default CustomApp;
