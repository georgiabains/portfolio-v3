import gql from 'graphql-tag'
import { PROJECT_TITLE_AND_SLUG, LINKS_DATA, PROJECT_RELATIONS } from '../../fragments/fragments'

export const GET_ALL_PROJECT_CARDS = gql`
  ${PROJECT_TITLE_AND_SLUG}
  ${LINKS_DATA}
  ${PROJECT_RELATIONS}
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
                ...linksData
              }
              description
            }
          }
        }
      }
    }
  }
`