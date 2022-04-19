import gql from 'graphql-tag'
import { IMAGE_DATA, LINKS_DATA } from '../../fragments/global'
import { PROJECT_TITLE_AND_SLUG, PROJECT_RELATIONS } from '../../fragments/project'

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