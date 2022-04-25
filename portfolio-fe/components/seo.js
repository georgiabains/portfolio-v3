import Head from "next/head"

export default function Seo({ seo, defaultSeo }) {
  const title = seo?.metaTitle
    ? `${seo.metaTitle} - ${defaultSeo.metaTitle}`
    : defaultSeo.metaTitle

  const description = seo?.metaDescription
    ? seo.metaDescription
    : defaultSeo.metaDescription
  
  const image = seo?.shareImage?.data 
    ? `http://localhost:3333${seo.shareImage.data.attributes.url}`
    : `http://localhost:3333${defaultSeo.shareImage.data.attributes.url}`
  
  return (
    <Head>
      <title>{title}</title>
      <meta 
        name="description" 
        content={description} 
        key="description" 
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta 
        property="og:title" 
        content={title}
        key="og:title" 
      />
      <meta
        property="og:description"
        content={description} 
        key="og:description"
      />
      <meta 
        property="og:image" 
        content={image} 
        key="og:image" 
      />
    </Head>
  )
}