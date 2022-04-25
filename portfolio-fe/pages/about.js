import { apolloClient } from "../lib/apolloClient"
import { GET_HEADER } from "../graphql/queries/header"
import { GET_ABOUT } from "../graphql/queries/about"
import Link from "next/link"
import Header from "../components/header"
import Markdown from "markdown-to-jsx"
import Seo from "../components/seo"

export default function About({ header, about }) {
  return (
    <div>
      <Seo seo={about.attributes.seo} siteTitle={header.attributes.title} />
      <Header header={header}/>
      <h2>{about.attributes.title}</h2>
      <Markdown children={about.attributes.content} />
      <Link href="/">
        <a>back</a>
      </Link>
    </div>
  )
}

export async function getStaticProps() {
  const { data: headerData, loading: headerLoading, error: headerError } = await apolloClient.query({
    query: GET_HEADER,
  })

  const { data: aboutData, loading: aboutLoading, error: aboutError } = await apolloClient.query({
    query: GET_ABOUT,
  })

  const sanitizedHeaderData = headerData.header.data
  const sanitizedAboutData = aboutData.about.data

  return {
    props: {
      header: sanitizedHeaderData,
      about: sanitizedAboutData,
    }
  }
}