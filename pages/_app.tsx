import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.scss';

function MyApp({ Component, pageProps}: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
