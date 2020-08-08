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
        }
      }
    }
  }
`;

export const GET_USER_BY_UID_SERVER = filterObj => {
  const query = gql`
{
    userOne(filter: {${filterObj}} ) {
        _id
    }
  }
`;

  return query;
};
