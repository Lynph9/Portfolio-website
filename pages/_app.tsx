import { Inter } from 'next/font/google';
import type { AppProps } from 'next/app';
import '../styles/fonts.css';
import '../styles/globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Erkin Erdoğan&apos;s Portfolio - Game Development, 3D Modeling, and Software Development" />
        <title>Erkin Erdoğan - Portfolio</title>
      </Head>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
