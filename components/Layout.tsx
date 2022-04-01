import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AppHeader />
      <div>{children}</div>
      <AppFooter />
    </>
  );
}
