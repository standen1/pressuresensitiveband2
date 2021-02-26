import '../styles/globals.css';
import Head from 'next/head';


import Layout from '../components/layout/layout';


function MyApp({ Component, pageProps, router }) {
  return ( 
	  <>
	  <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
	  <Layout>
	  	<Component {...pageProps} key={router.route} />
	  </Layout>
	  </>
  );
}

export default MyApp
