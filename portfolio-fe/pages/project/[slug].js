import { apolloCon } from "../../connection/apolloCon"
import { getProject, GET_ALL_PROJECTS } from "../../graphql/queries"
import Image from "next/image"
import Link from "next/link"

const Project = ({ project }) => {
  const thisProject = project[0]
  return (
    <div key={`project-${thisProject.id}`}>
      <h1>{thisProject.attributes.title}</h1>
      <Link href={`/`}>
        <a>back</a>
      </Link>
      {thisProject.attributes.project_page.map((content) => {
        if (content.displayImage) {
          const imageData = content.displayImage.data.attributes
          return (
            <div key={`image-${content.id}`}>
              <Image 
                src={`http://localhost:3333${imageData.url}`}
                alt={imageData.alternativeText}
                width={500}
                height={250}
              />
            </div>
          ) 
        }
        if (content.copy) {
          return (
            <p key={`copy-${content.id}`}>{content.copy}</p>
          )
        }
        if (content.imageWithCaption) {
          const imageData = content.imageWithCaption.data.attributes
          return (
            <div key={`image-${content.id}`}>
              <Image 
                src={`http://localhost:3333${imageData.url}`}
                alt={imageData.alternativeText}
                width={500}
                height={250}
              />
              <p>{content.caption}</p>
            </div>
          )
        }        
      })}
    </div>
  )
}

export async function getStaticPaths() {
  const projects = await apolloCon.query({
    query: GET_ALL_PROJECTS,
  })

  return {
    paths: projects.data.projects.data.map((project) => ({
      params: {
        slug: project.attributes.slug
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { data, loading, error } = await apolloCon.query({
    query: getProject(context.params.slug),
  })

  return {
    props: {
      project: data.projects.data,
    }
  }
}

export default Project