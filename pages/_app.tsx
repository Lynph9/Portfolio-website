import { Inter } from 'next/font/google';
import type { AppProps } from 'next/app';
import '../styles/fonts.css';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
