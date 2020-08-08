import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation {
    userCreateOne(
      record: {
        uid: 1
        displayName: "Christoper Quinn"
        email: "cquinn@cmail.com"
        apiKey: "Fake1"
        organizationID: 2
        photoUrl: ""
        phoneNumber: ""
        lastLoginAt: ""
        updatedAt: ""
        createdAt: ""
      }
    ) {
      recordId
      record {
        uid
        displayName
        email
        apiKey
        organizationID
        photoUrl
        phoneNumber
        lastLoginAt
        _id
        updatedAt
        createdAt
      }
    }
  }
`;
