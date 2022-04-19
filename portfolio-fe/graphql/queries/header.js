import gql from 'graphql-tag'
import { LINKS_DATA } from '../fragments/global'

export const GET_HEADER = gql`
  query headerQuery {
    header {
      data {
        attributes {
          title
          nav_links {
            ...LinksData
          }
        }
      }
    }
  }
  ${LINKS_DATA}
`