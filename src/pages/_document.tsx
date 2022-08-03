import Document, { Head, Html, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html>
      <Head />
      <body id="inicio" className={'bg-gray-50'}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export const getInitialProps = async (ctx: any) => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};

export default MyDocument;
