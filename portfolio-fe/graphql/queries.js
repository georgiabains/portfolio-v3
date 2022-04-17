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

export const getAllProjectCards = gql`
  query {
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

export function getProject(slug) {
  const query = gql`
    query {
      projects (filters : { slug: { eq: "${slug}"} }) {
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
            project_card {
            	links {
                id
                url
                display_text
              }
            }
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
              ... on ComponentGlobalVideoWithCaption {
                id
                vimeo_id
                videoCaption : caption
              }
            }
          }
        }
      }
    }
  `
  
  return query
} 