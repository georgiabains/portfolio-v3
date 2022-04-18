import Link from "next/link";

export default function Header({ siteHeader }) {
  return (
    <header>
      <h1>{siteHeader.attributes.title}</h1>
      <nav>
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}