import gql from 'graphql-tag'

export const PROJECT_TITLE_AND_SLUG = gql`
  fragment ProjectTitleAndSlug on Project {
    title
    slug
  }
`