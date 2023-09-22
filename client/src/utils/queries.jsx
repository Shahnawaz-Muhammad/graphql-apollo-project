import { gql } from "@apollo/client";

export const GET_ALL_QUOTES = gql`
  query getAllQuotes {
    quotes {
      quote
      postedBy {
        _id
        firstName
      }
    }
  }
`;

export const GET_PROFILE = gql`
  query getMyProfile {
    profile {
      firstName
      lastName
      email
      quotes {
        quote
      }
      
    }
  }
`;
