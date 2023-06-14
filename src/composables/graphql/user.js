import gql from "graphql-tag";

export const SAVE_USER = gql`
mutation SaveUser($data: userInput) {
  saveUser(data: $data) {
    fullName
  }
}
`

export const LOGIN = gql`
  query Login($data: loginInput) {
  login(data: $data) {
    id
    fullName
    nickName
    email
    dateOfBorn
    location
    genere
    role
    token
  }
}
`
