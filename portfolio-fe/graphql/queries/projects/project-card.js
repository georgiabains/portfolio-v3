import gql from 'graphql-tag'

export const GET_ALL_PROJECT_CARDS = gql`
  query allProjectCardsQuery {
    projects {
      data {
        id
        attributes {
          title
          slug
          categories {
            data {
              attributes {
                name
              }
            }
          }
          languages {
            data {
              attributes {
                name
              }
            }
          }
          my_roles {
            data {
              attributes {
                name
              }
            }
          }
          ... on Project {
            project_card {
              preview_images {
                desktop {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                mobile {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
              links {
                id
                url
                display_text
              }
              description
            }
          }
        }
      }
    }
  }
`