import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  // Keep the historical Mumbai network as the local/demo default only.
  // Production deployments must set NEXT_PUBLIC_ACTIVE_CHAIN explicitly.
  const activeChain = process.env.NEXT_PUBLIC_ACTIVE_CHAIN ?? "mumbai";

  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
