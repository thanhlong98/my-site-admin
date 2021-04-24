import gql from 'graphql-tag'

export const CREATE_PERMISSION = gql`
  mutation($input: CreatePermissionInput!) {
    createPermission(input: $input) {
      _id
      name
      slug
      description
    }
  }
`

export const UPDATE_PERMISSION = gql`
  mutation($input: UpdatePermissionInput!) {
    updatePermission(input: $input) {
      _id
      name
      slug
      description
    }
  }
`
export const DELETE_PERMISSIONS = gql`
  mutation($ids: [String!]!) {
    deletePermissions(ids: $ids)
  }
`
