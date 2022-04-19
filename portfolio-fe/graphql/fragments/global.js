import gql from 'graphql-tag'

export const IMAGE_DATA = gql`
  fragment ImageData on UploadFileEntityResponse {
    data {
      attributes {
        url
        alternativeText
      }
    }
  }
`

export const LINKS_DATA = gql`
  fragment linksData on ComponentGlobalLink {
    id
    url
    display_text
  }
`