import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      accessToken
    }
  }
`

export const REGISTER = gql`
  mutation($input: CreateUserInput!) {
    register(input: $input) {
      accessToken
    }
  }
`
