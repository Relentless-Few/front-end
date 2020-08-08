import gql from "graphql-tag";

export const QUERY_USERS = gql`
  {
    userMany {
      displayName
    }
  }
`;

export let USER_ORGS = (queryString, max) => `
  {
    viewer {
      organizations(${queryString}:${max}) {
        nodes {
          name
        }
      }
    }
  }
`;
