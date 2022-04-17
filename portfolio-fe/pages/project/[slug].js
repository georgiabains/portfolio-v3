import { apolloCon } from "../../connection/apolloCon"
import { getProject, getAllProjects } from "../../graphql/queries"
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

      <div className="intro">
        <ul className="links">
          {thisProject.attributes.project_card.links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.display_text}</a>
              </li>
            )
          })}
        </ul>

        <ul className="categories">
          {thisProject.attributes.categories.data.map((category) => {
            return (
              <li key={category.attributes.name}>{category.attributes.name}</li>
            )
          })}
        </ul>

        <ul className="languages">
          {thisProject.attributes.languages.data.map((language) => {
            return (
              <li key={language.attributes.name}>{language.attributes.name}</li>
            )
          })}
        </ul>

        <ul className="roles">
          {thisProject.attributes.my_roles.data.map((role) => {
            return (
              <li key={role.attributes.name}>{role.attributes.name}</li>
            )
          })}
        </ul>
      </div>

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
    query: getAllProjects,
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