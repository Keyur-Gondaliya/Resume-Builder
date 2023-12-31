import React from "react";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  Component: any;
  pageProps: any;
};

function _app({ Component, pageProps }: Props) {
  return (
    <>
      <Head>
        <title>Resume Builder</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default _app;
