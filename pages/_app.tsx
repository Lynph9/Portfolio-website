import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Erkin Erdoğan - Software Developer | Node.js, React Native, Unity" />
        <title>Erkin Erdoğan - Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
