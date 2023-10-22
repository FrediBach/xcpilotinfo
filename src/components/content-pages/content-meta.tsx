import Head from "next/head";
import getFullRedirectUrl from "@/utils/get-full-redirect-url";

type Props = {
  title: string;
  description: string;
  socialDescription?: string;
  socialImage?: string;
};

const ContentMeta = ({
  title,
  description,
  socialDescription,
  socialImage,
}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="description" content={description} key="desc" />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta
        property="og:description"
        content={socialDescription || description}
      />
      <meta
        name="twitter:description"
        content={socialDescription || description}
      />
      {!!socialImage && (
        <>
          <meta property="og:image" content={getFullRedirectUrl(socialImage)} />
          <meta
            name="twitter:image"
            content={getFullRedirectUrl(socialImage)}
          />
        </>
      )}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
    </Head>
  );
};

export default ContentMeta;
