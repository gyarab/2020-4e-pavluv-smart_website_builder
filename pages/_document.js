import Document, { Html, Head, Main, NextScript } from "next/document";

//html head structure for every page
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="/images/favicon.png" />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js"
            integrity="sha512-GZ1RIgZaSc8rnco/8CXfRdCpDxRCphenIiZ2ztLy3XQfCbQUSCuk8IudvNHxkRA3oUg6q0qejgN/qqyG1duv5Q=="
            crossorigin="anonymous"
          ></script>
          <script src="js/accordion.js" defer></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
