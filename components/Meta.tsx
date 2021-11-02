import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <title>Dropdown Menu</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Dropdown Menu",
  keywords: "dropdown menu, radix",
  description:
    "Dropdown menu made using RadixPrimitives and MaterialUI in Next.js.",
};

export default Head;
