import { apolloClient } from "../lib/apolloClient"
import { GET_HEADER } from "../graphql/queries/header"
import { GET_ABOUT } from "../graphql/queries/about"
import { GET_DEFAULT_SEO_DATA } from "../graphql/queries/defaultSeo"
import Link from "next/link"
import Markdown from "markdown-to-jsx"
import Seo from "../components/seo"

export default function About({ about, defaultSeo }) {
  return (
    <div>
      <Seo seo={about.attributes.seo} defaultSeo={defaultSeo} />
      <h2>{about.attributes.title}</h2>
      <Markdown children={about.attributes.content} />
      <Link href="/">
        <a>back</a>
      </Link>
    </div>
  )
}

export async function getStaticProps() {
  const { data: defaultSeoData, loading: defaultSeoLoading, error: defaultSeoError } = await apolloClient.query({
    query: GET_DEFAULT_SEO_DATA,
  })

  const { data: headerData, loading: headerLoading, error: headerError } = await apolloClient.query({
    query: GET_HEADER,
  })

  const { data: aboutData, loading: aboutLoading, error: aboutError } = await apolloClient.query({
    query: GET_ABOUT,
  })

  const sanitizedDefaultSeoData = defaultSeoData.defaultSeo.data.attributes.defaultSeo
  const sanitizedHeaderData = headerData.header.data
  const sanitizedAboutData = aboutData.about.data

  return {
    props: {
      defaultSeo: sanitizedDefaultSeoData,
      header: sanitizedHeaderData,
      about: sanitizedAboutData,
    }
  }
}