import gql from 'graphql-tag'

export const GET_ALL_PROJECT_SLUGS = gql`
  query allProjectSlugsQuery{
    projects {
      data {
        id
        attributes {
          title
          slug
        }
      }
    }
  }
`