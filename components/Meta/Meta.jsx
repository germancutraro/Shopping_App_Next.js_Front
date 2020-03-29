import Head from 'next/head';

const Meta = () => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charset='utf-8' />
      <link rel='shortcut icon' href='/static/favicon.png' />
      <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
      <title>Shopping Cart</title>
    </Head>
  );
};

export default Meta;
