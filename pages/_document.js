import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    const global = `
      body {
        margin:0px;
        padding: 0px;
        overflow-x: hidden;
        overflow-y: scroll;
      }
    `;
    return (
      <html>
        <Head>
          <title>PokeSearch</title>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway"
            rel="stylesheet"
          />
          {styleTags}
          <style>{global}</style>
        </Head>
        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    );
  }
}
