import gql from 'graphql-tag'

export const GET_ABOUT = gql`
  query aboutQuery {
    about {
      data {
        attributes {
          title
          content
        }
      }
    }
  }
`