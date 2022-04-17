import Link from "next/link"

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Lorem ipsum</p>
      <Link href="/">
        <a>back</a>
      </Link>
    </div>
  )
}