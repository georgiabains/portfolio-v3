import Image from "next/image"
import Link from "next/link"

export default function ProjectCard({ project }) {
  return (
    <div key={project.id}>
      <h3>{project.attributes.title}</h3>
      <div className="preview-images">
        <Image
          src={`http://localhost:3333${project.attributes.project_card.preview_images.desktop.data.attributes.url}`}
          alt={`http://localhost:3333${project.attributes.project_card.preview_images.desktop.data.attributes.alternativeText}`}
          width={640}
          height={351}
        />
        <Image
          src={`http://localhost:3333${project.attributes.project_card.preview_images.mobile.data.attributes.url}`}
          alt={`http://localhost:3333${project.attributes.project_card.preview_images.mobile.data.attributes.alternativeText}`}
          width={256}
          height={553}
        />
      </div>
      <ul className="links">
        {project.attributes.project_card.links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.display_text}</a>
            </li>
          )
        })}
        <li>
          <Link href={`/project/${project.attributes.slug}`}>
            <a>project details</a>
          </Link>
        </li>
      </ul>
      <p>{project.attributes.project_card.description}</p>
      <ul className="roles">
        {project.attributes.my_roles.data.map((role) => {
          return (
            <li key={role.attributes.name}>{role.attributes.name}</li>
          )
        })}
      </ul>
      <ul className="languages">
        {project.attributes.languages.data.map((language) => {
          return (
            <li key={language.attributes.name}>{language.attributes.name}</li>
          )
        })}
      </ul>
    </div>
  )
}