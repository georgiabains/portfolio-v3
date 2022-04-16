import gql from 'graphql-tag'

export const getAllProjects = gql`
  query {
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

export function getProject(slug) {
  const query = gql`
    query {
      projects (filters : { slug: { eq: "${slug}"} }) {
        data {
          id
          attributes {
            title
            slug
            project_page {
              __typename
              ... on ComponentGlobalImage {
                id
                displayImage : image {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
              ... on ComponentGlobalBodyContent {
                id
                copy
              }
              ... on ComponentGlobalImageWithCaption {
                id
                imageWithCaption : image {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                caption
              }
            }
          }
        }
      }
    }
  `
  
  return query
} 