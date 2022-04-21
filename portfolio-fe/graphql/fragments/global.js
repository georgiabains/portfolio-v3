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
  fragment LinksData on ComponentGlobalLink {
    id
    url
    display_text
    is_internal
  }
`