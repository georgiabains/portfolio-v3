import gql from 'graphql-tag'

export const GET_HEADER = gql`
  query headerQuery {
    header {
      data {
        attributes {
          title
        }
      }
    }
  }
`