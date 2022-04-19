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

export function GET_PROJECT(slug) {
  const query = gql`
    query projectQuery {
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
            project_date {
              id
              is_ongoing
              year_started
              year_completed
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