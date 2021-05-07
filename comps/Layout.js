import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>FireGram</title>
    </Head>
    {children}
  </>
);

export default Layout;
