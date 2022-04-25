import { gql } from "graphql-tag"
import { SEO_DATA } from "../fragments/global"

export const GET_DEFAULT_SEO_DATA = gql`
  query defaultSeoQuery {
    defaultSeo {
      data {
        attributes {
          defaultSeo {
            ...SeoData
          }
        }
      }
    }
  }
  ${SEO_DATA}
`