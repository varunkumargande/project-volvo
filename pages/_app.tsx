import "../public/css/styles.css";
import React from "react";
// import { createRenderer } from 'fela'
// import { RendererProvider } from 'react-fela'

import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  // const renderer = createRenderer()
  return (
    // <RendererProvider renderer={renderer}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    // </RendererProvider>
  )
}