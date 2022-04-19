import gql from 'graphql-tag'
import { PROJECT_TITLE_AND_SLUG } from '../../fragments/fragments'

export function GET_PROJECT(slug) {
  const query = gql`
    ${PROJECT_TITLE_AND_SLUG}
    query projectQuery {
      projects (filters : { slug: { eq: "${slug}"} }) {
        data {
          id
          attributes {
            ...ProjectTitleAndSlug
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