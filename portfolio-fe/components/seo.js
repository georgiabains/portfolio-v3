import Head from "next/head"

export default function Seo({ seo, siteTitle }) {
  // TODO: Clean this title code up
  let title = ''
  if (seo.metaTitle) {
    title = `${seo.metaTitle} - ${siteTitle}`
  } else {
    title = siteTitle
  }

  return (
    <Head>
      <title>{title}</title>
      <meta 
        name="description" 
        content={seo.metaDescription} 
        key="description" 
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta 
        property="og:title" 
        content={seo.metaTitle} 
        key="og:title" 
      />
      <meta
        property="og:description"
        content={seo.metaDescription}
        key="og:description"
      />
      <meta 
        property="og:image" 
        content={seo.shareImage} 
        key="og:image" 
      />
    </Head>
  )
}