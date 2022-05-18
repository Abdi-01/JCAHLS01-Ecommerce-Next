import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// Google Analytics Import
import react from 'react';
import * as gtag from "../lib/gtag"
import Script from 'next/script';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // Ketika ada perubahan di route, akan trigger useEffect
  react.useEffect(() => {
    // console.log("CEK GA ID", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
    const handleRouteChange = (url) => {
      console.log("CEK ROUTE PAGE GA", url)
      gtag.pageview(url);
      gtag.event("Load Page", "Access", "Landing Page", "User access Landing Page")
    };
    console.log("CEK ROUTE ", router.events)
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return <div>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=G-K7BQER64ZS`}
    />
    <Script id="gtag-init" strategy="lazyOnload">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-K7BQER64ZS', {
            page_path: window.location.pathname,
          });
          `}
    </Script>
    <Component {...pageProps} />
  </div>
}

export default MyApp
