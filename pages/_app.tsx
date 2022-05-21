import { MoralisProvider } from "react-moralis";

import "../styles/globals.css";

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID || ""}
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER || ""}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
