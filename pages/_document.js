import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const sheet = new ServerStyleSheet();
    const html = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleTags();
    return (
      <html>
        <Head>
          <style>{styleTags}</style>
          <style>{`
            body {
              margin: 0px;
              padding: 0px;
            }
            * {
              box-sizing: border-box;
            }
          `}</style>
        </Head>
        <body className="custom_class">
          <div className="root">{html}</div>
          <NextScript />
        </body>
      </html>
    );
  }
}
