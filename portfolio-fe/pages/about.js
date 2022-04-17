import Link from "next/link"
import Header from "../components/header"

export default function About() {
  return (
    <div>
      <Header />
      <h2>About</h2>
      <p>Lorem ipsum</p>
      <Link href="/">
        <a>back</a>
      </Link>
    </div>
  )
}