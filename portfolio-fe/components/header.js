import Link from "next/link";

export default function Header({ siteHeader }) {
  return (
    <header>
      <h1>{siteHeader.attributes.title}</h1>
      <nav>
        <ul>
          {siteHeader.attributes.nav_links.map((link) => {
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