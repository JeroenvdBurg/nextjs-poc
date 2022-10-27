import type { AppProps } from 'next/app';
import Router from 'next/router';
import { useEffect, useState } from 'react';

import PageLoader from '../features/app/PageLoader';

import '../style/global.scss';

type FloatingFocus = any;

let floatingFocusInstance: FloatingFocus;

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    async function initFloatingFocus() {
      const FloatingFocus = (await import('@q42/floating-focus-a11y')).default;
      floatingFocusInstance = new FloatingFocus();
    }

    if (!floatingFocusInstance) {
      initFloatingFocus();
    }

    Router.events.on('routeChangeStart', () => setLoadingPage(true));
    Router.events.on('routeChangeComplete', () => setLoadingPage(false));
    Router.events.on('routeChangeError', () => setLoadingPage(false));

    return () => {
      Router.events.off('routeChangeStart', () => setLoadingPage(true));
      Router.events.off('routeChangeComplete', () => setLoadingPage(false));
      Router.events.off('routeChangeError', () => setLoadingPage(false));
    };
  });

  return (
    <>
      <PageLoader loading={loadingPage} />
      <Component {...pageProps} />
    </>
  );
}
