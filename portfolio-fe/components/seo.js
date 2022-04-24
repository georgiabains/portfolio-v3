import Head from "next/head"

export default function Seo({ seo }) {
  return (
    <Head>
      <title>{seo.attributes.metaTitle}</title>
      <meta name="description" content={seo.attributes.metaDescription} key="description" />
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta property="og:title" content={seo.attributes.metaTitle} key="og:title" />
      <meta
        property="og:description"
        content={seo.attributes.metaDescription}
        key="og:description"
      />
      <meta property="og:image" content={seo.attributes.shareImage} key="og:image" />
    </Head>
  )
}