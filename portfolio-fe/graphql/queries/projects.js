import gql from 'graphql-tag'
import { IMAGE_DATA, LINKS_DATA } from '../fragments/global'
import { PROJECT_RELATIONS, PROJECT_TITLE_AND_SLUG } from '../fragments/project'

export const GET_ALL_PROJECT_CARDS = gql`
  query allProjectCardsQuery {
    projects {
      data {
        id
        attributes {
          ...ProjectTitleAndSlug
          ...ProjectRelations
          ... on Project {
            project_card {
              preview_images {
                desktop {
                  ...ImageData
                }
                mobile {
                  ...ImageData
                }
              }
              links {
                ...linksData
              }
              description
            }
          }
        }
      }
    }
  }
  ${IMAGE_DATA}
  ${LINKS_DATA}
  ${PROJECT_RELATIONS}
  ${PROJECT_TITLE_AND_SLUG}
`

export const GET_ALL_PROJECT_SLUGS = gql`
  query allProjectSlugsQuery{
    projects {
      data {
        id
        attributes {
          ...ProjectTitleAndSlug
        }
      }
    }
  }
  ${PROJECT_TITLE_AND_SLUG}
`

export function GET_PROJECT(slug) {
  const query = gql`
    query projectQuery {
      projects (filters : { slug: { eq: "${slug}"} }) {
        data {
          id
          attributes {
            ...ProjectTitleAndSlug
            ...ProjectRelations
            project_date {
              id
              is_ongoing
              year_started
              year_completed
            }
            project_card {
            	links {
                ...linksData
              }
            }
            project_page {
              ... on ComponentGlobalImage {
                id
                displayImage : image {
                  ...ImageData
                }
              }
              ... on ComponentGlobalBodyContent {
                id
                copy
              }
              ... on ComponentGlobalImageWithCaption {
                id
                imageWithCaption : image {
                  ...ImageData
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
    ${IMAGE_DATA}
    ${LINKS_DATA}
    ${PROJECT_RELATIONS}
    ${PROJECT_TITLE_AND_SLUG}
  `
  
  return query
} 