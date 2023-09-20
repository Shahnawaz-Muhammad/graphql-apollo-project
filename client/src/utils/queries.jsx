import { gql } from "@apollo/client";

export const GET_ALL_QUOTES = gql`
query quoteQuery{
    quotes{
          quote
      postedBy{
        _id
        firstName
      }
    }
  }
`
