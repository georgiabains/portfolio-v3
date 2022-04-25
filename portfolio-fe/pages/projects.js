import { apolloClient } from "../lib/apolloClient"
import { GET_HEADER } from "../graphql/queries/header"
import { GET_ALL_PROJECT_CARDS } from "../graphql/queries/projects"
import Link from "next/link"
import Header from "../components/header"
import ProjectCard from "../components/projectCard"
import Seo from "../components/seo"

export default function Home({ header, projects }) {
  const seo = {
    "metaTitle": "Projects",
    "metaDescription": "View some of the projects I've created for myself and various companies over the past few years.",
  }
  
  return (
    <div>
      <Seo seo={seo} siteTitle={header.attributes.title} />
      <Header header={header}/>
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
  const { data: headerData, loading: headerLoading , error: headerError } = await apolloClient.query({
    query: GET_HEADER,
  })

  const { data: projectData, loading: projectLoading, error: projectError } = await apolloClient.query({
    query: GET_ALL_PROJECT_CARDS,
  })
  
  const sanitizedHeaderData = headerData.header.data
  const sanitizedProjectData = projectData.projects.data

  return {
    props: {
      header: sanitizedHeaderData,
      projects: sanitizedProjectData,
    }
  }
}