import gql from 'graphql-tag'

export const PROJECT_TITLE_AND_SLUG = gql`
  fragment ProjectTitleAndSlug on Project {
    title
    slug
  }
`

export const PROJECT_RELATIONS = gql`
  fragment ProjectRelations on Project {
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
  }
`