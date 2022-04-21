import LinkData from "./linkData"

export default function Header({ header }) {
  return (
    <header>
      <h1>{header.attributes.title}</h1>
      <nav>
        <ul>
          {header.attributes.nav_links.map((link) => {
            return (
              <li key={link.id}>
                <LinkData linkData={link} />
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}