import Link from "next/link"

export default function LinkData({ linkData }) {
  if (linkData.is_internal) {
    return (
      <Link href={linkData.url}>
        <a>{linkData.display_text}</a>
      </Link>
    )
  }

  return (
    <a href={linkData.url}>{linkData.display_text}</a>
  )
}