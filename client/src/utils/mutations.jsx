import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
mutation createUser($newUser: UserInput!){
    user:signupUser(newUser:$newUser){
      firstName
    }
  }
`

export const LOGIN_USER = gql`
mutation loginUser($userLogin: UserLoginInput!){
  user:loginUser(userLogin:$userLogin){
    token
  }
}`

export const CREATE_QUOTE =  gql`
mutation createQuote($quote: String!) {
  quote:createQuote(quote: $quote)
}`