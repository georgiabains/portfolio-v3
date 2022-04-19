import { apolloClient } from "../lib/apolloClient"
import { GET_ABOUT, GET_HEADER } from "../graphql/queries"
import Link from "next/link"
import Header from "../components/header"
import ReactMarkdown from "react-markdown"

export default function About({ siteHeader, about }) {
  return (
    <div>
      <Header siteHeader={siteHeader}/>
      <h2>{about.attributes.title}</h2>
      <ReactMarkdown children={about.attributes.content} />
      <Link href="/">
        <a>back</a>
      </Link>
    </div>
  )
}

export async function getStaticProps(context) {
  const { data, loading, error } = await apolloClient.query({
    query: GET_HEADER,
  })

  const { data: aboutData, aboutLoading, aboutError } = await apolloClient.query({
    query: GET_ABOUT,
  })

  const sanitizedAboutData = aboutData.about.data

  return {
    props: {
      siteHeader: data.header.data,
      about: sanitizedAboutData,
    }
  }
}