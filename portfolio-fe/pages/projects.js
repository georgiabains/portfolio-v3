import { apolloClient } from "../lib/apolloClient"
import { GET_HEADER } from "../graphql/queries/header"
import { GET_ALL_PROJECT_CARDS } from "../graphql/queries/projects"
import { GET_DEFAULT_SEO_DATA } from "../graphql/queries/defaultSeo"
import Link from "next/link"
import ProjectCard from "../components/projectCard"
import Seo from "../components/seo"

export default function Home({ projects, defaultSeo }) {
  return (
    <div>
      <Seo defaultSeo={defaultSeo} />
      <Link href="/">
        <a>back</a>
      </Link>
      <h2>Projects</h2>
      <div>
        {projects &&
          projects.map((project) => {
            return (
              <ProjectCard project={project} key={project.id} />
            )
          })
        }
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const { data: defaultSeoData, loading: defaultSeoLoading, error: defaultSeoError } = await apolloClient.query({
    query: GET_DEFAULT_SEO_DATA,
  })

  const { data: headerData, loading: headerLoading , error: headerError } = await apolloClient.query({
    query: GET_HEADER,
  })

  const { data: projectData, loading: projectLoading, error: projectError } = await apolloClient.query({
    query: GET_ALL_PROJECT_CARDS,
  })
  
  const sanitizedDefaultSeoData = defaultSeoData.defaultSeo.data.attributes.defaultSeo
  const sanitizedHeaderData = headerData.header.data
  const sanitizedProjectData = projectData.projects.data

  return {
    props: {
      defaultSeo: sanitizedDefaultSeoData,
      header: sanitizedHeaderData,
      projects: sanitizedProjectData,
    }
  }
}