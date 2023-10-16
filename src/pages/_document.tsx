import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/assets/image/logo.svg" />
        {/* <!-- CSS LINK--> */}

        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/ngRangeSkin.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/preview.css" />

        {/* <!-- JS LINK  --> */}

        <script src="/assets/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/jquery-3.6.0.min.js"></script>
        <script src="/assets/js/custom.js"></script>
        <script src="/assets/js/ckeditor.js"></script>
        <script src="/assets/js/smooth-scrollbar.js"></script>
        <script src="/assets/js/angular.js"></script>
        <script src="/assets/js/rangeSlider.js"></script>
        <script src="/assets/js/jquery.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
