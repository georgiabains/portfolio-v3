import gql from 'graphql-tag'
import { SEO_DATA } from '../fragments/global'

export const GET_ABOUT = gql`
  query aboutQuery {
    about {
      data {
        attributes {
          title
          content
          seo {
            ...SeoData
          }
        }
      }
    }
  }
  ${SEO_DATA}
`