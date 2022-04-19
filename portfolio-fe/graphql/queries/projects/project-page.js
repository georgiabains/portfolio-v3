import gql from 'graphql-tag'
import { IMAGE_DATA, LINKS_DATA } from '../../fragments/global'
import { PROJECT_TITLE_AND_SLUG, PROJECT_RELATIONS } from '../../fragments/project'

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