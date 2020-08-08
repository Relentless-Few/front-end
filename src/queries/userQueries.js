import gql from "graphql-tag";

export const QUERY_USERS = gql`
  {
    userMany {
      displayName
    }
  }
`;
