import { apolloClient } from "../../lib/apolloClient"
import { GET_HEADER } from "../../graphql/queries/header"
import { GET_ALL_PROJECT_SLUGS, GET_PROJECT } from "../../graphql/queries/projects"
import Image from "next/image"
import LinkData from "../../components/linkData"
import Link from "next/link"
import Markdown from "markdown-to-jsx"
import Seo from "../../components/seo"

const Project = ({ header, project }) => {
  const thisProject = project[0]
  return (
    <>
      {/* TODO: Pass siteTitle in a more dynamic way - just in case header.attributes.title path changes */}
      <Seo seo={thisProject.attributes.seo} siteTitle={header.attributes.title} />
      <div key={`project-${thisProject.id}`}>
        <h2>{thisProject.attributes.title}</h2>
        <Link href={`/`}>
          <a>back</a>
        </Link>

        <div className="intro">
          <ul className="links">
            {thisProject.attributes.project_card.links.map((link) => {
              return (
                <li key={link.id}>
                  <LinkData linkData={link} />
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

          <p className="date">
            {
              thisProject.attributes.project_date.year_started
                ? thisProject.attributes.project_date.year_started + '-'
                : null
            }
            {
              thisProject.attributes.project_date.is_ongoing
                ? 'Current'
                : thisProject.attributes.project_date.year_completed
            }
          </p>
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
              <Markdown children={content.copy} key={content.id} />
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
          if (content.vimeo_id) {
            return (
              <div key={`video-${content.id}`}>
                <iframe src={`https://player.vimeo.com/video/${content.vimeo_id}`} width="640" height="350" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
              </div>
            )
          }
        })}
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const projects = await apolloClient.query({
    query: GET_ALL_PROJECT_SLUGS,
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
  const { data: headerData, loading: headerLoading , error: headerError } = await apolloClient.query({
    query: GET_HEADER,
  })
  
  const { data: projectData, loading: projectLoading, error: projectError } = await apolloClient.query({
    query: GET_PROJECT(context.params.slug),
  })

  const sanitizedHeaderData = headerData.header.data
  const sanitizedProjectData = projectData.projects.data

  return {
    props: {
      project: sanitizedProjectData,
      header: sanitizedHeaderData,
    }
  }
}

export default Project