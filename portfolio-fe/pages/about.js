import { apolloCon } from "../connection/apolloCon"
import { getAbout, getHeader } from "../graphql/queries"
import Link from "next/link"
import Header from "../components/header"

export default function About({ siteHeader, about }) {
  return (
    <div>
      <Header siteHeader={siteHeader}/>
      <h2>{about.attributes.title}</h2>
      <p>{about.attributes.content}</p>
      <Link href="/">
        <a>back</a>
      </Link>
    </div>
  )
}

export async function getStaticProps(context) {
  const { data, loading, error } = await apolloCon.query({
    query: getHeader,
  })

  const { data: aboutData, aboutLoading, aboutError } = await apolloCon.query({
    query: getAbout,
  })

  const sanitizedAboutData = aboutData.about.data

  return {
    props: {
      siteHeader: data.header.data,
      about: sanitizedAboutData,
    }
  }
}