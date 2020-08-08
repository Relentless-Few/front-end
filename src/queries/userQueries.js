import gql from "graphql-tag";

export const QUERY_USERS = gql`
  {
    userMany {
      displayName
    }
  }
`;

export let GET_USER_ORGS_CLIENT = (queryString, max) => `
  {
    viewer {
      organizations(${queryString}:${max}) {
        nodes {
          name
          login
        }
      }
    }
  }
`;

// export const GET_USER_BY_UID_SERVER = filterObj => {
export let GET_USER_BY_UID_SERVER = (key, value) => gql`
{
    userOne(filter: {${key}:"${value}"}) {
      _id
    }
  }
`;
