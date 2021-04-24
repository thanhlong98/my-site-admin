import gql from 'graphql-tag'

export const ME = gql`
  query {
    me {
      _id
      firstName
      lastName
      avatar
      gender
      email
      createdAt
      updatedAt
      isActive
      isOnline
    }
  }
`
