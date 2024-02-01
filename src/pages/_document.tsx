import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

type MyDocumentProps = {
  lang: string;
};

class MyDocument extends Document<MyDocumentProps> {
  [x: string]: any;
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & MyDocumentProps> {
    const pathname = ctx.req?.url?.startsWith('/ru') ? 'ru' : 'en';

    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, lang: pathname };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
