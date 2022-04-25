import Layout from "../components/layout"

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout header={pageProps.header}>
      <Component {...pageProps} />
    </Layout>
  )
}