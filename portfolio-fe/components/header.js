import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Portfolio</h1>
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