import Header from "./header"

export default function Layout({ header, children }) {
  return (
    <>
      <Header header={header} />
      <main>
        {children}
      </main>
    </>
  )
}