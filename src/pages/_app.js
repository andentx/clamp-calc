import { GlobalContextProvider } from '../contexts/globalContext';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </>
  );
}
