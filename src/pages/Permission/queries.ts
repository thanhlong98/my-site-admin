import gql from 'graphql-tag'

export const GET_ALL_PERMISSION = gql`
  query($limit: Float, $offset: Float) {
    permissions(pagination: { limit: $limit, offset: $offset }) {
      total
      data {
        _id
        name
        slug
        description
      }
    }
  }
`

export const GET_PERMISSION_BY_ID = gql`
  query($_id: String!) {
    getPermissionById(_id: $_id) {
      _id
      name
      slug
      description
    }
  }
`
