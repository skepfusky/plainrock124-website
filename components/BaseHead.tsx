import Head from "next/head";

interface IBaseHeadProps {
  title: string;
  description: string;
}

export default function BaseHead({
  title,
  description
}: IBaseHeadProps) {
  return (
    <Head>
      <title>{title} | Plainrock124</title>
      <meta name="description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}