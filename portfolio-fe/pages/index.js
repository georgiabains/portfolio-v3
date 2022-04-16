import { apolloCon } from "../connection/apolloCon"
import { getAllProjects } from "../graphql/queries"
import Image from "next/image"
import Link from "next/link"

export default function Home({ projects }) {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        {projects && 
          projects.map((project) => {
            return (
              <div key={project.id}>
                <h2>{project.attributes.title}</h2>
                <Link href={`/project/${project.attributes.slug}`}>
                  <a>link</a>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const { data, loading, error } = await apolloCon.query({
    query: getAllProjects,
  })

  return {
    props: {
      projects: data.projects.data,
    }
  }
}