import Link from "next/link";

export default function Header({ header }) {
  return (
    <header>
      <h1>{header.attributes.title}</h1>
      <nav>
        <ul>
          {header.attributes.nav_links.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.url}>
                  <a>{link.display_text}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}