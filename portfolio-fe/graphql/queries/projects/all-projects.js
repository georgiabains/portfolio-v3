import gql from 'graphql-tag'
import { PROJECT_TITLE_AND_SLUG } from '../../fragments/project'

export const GET_ALL_PROJECT_SLUGS = gql`
  ${PROJECT_TITLE_AND_SLUG}
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
`