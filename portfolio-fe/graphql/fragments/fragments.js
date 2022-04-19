import gql from 'graphql-tag'

export const PROJECT_TITLE_AND_SLUG = gql`
  fragment ProjectTitleAndSlug on Project {
    title
    slug
  }
`

export const LINKS_DATA = gql`
  fragment linksData on ComponentGlobalLink {
    id
    url
    display_text
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