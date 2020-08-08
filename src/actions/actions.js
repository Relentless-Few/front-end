import firebase from "../firebase";
import { provider } from "../firebase";
import { useQuery } from "@apollo/react-hooks";
import axios from "axios";
import { GET_USER_ORGS_CLIENT } from "../queries/userQueries";
import { GET_USER_BY_UID_SERVER } from "../queries/userQueries";
import { HttpLink } from "apollo-link-http";
import { execute, makePromise } from "apollo-link";

export const USER_LOGON = "USER_LOGON";
export const SET_USER_ID = "SET_USER_ID";
export const IS_NEW_USER = "IS_NEW_USER";
export const HAS_ORGANIZATIONS = "HAS_NO_ORGANIZATIONS";
export const ADD_ORGANIZATIONS = "ADD_ORGANIZATIONS";

export const userLogon = props => dispatch => {
  let user = "";
  let token = "";
  const pat = ""; // Personal access token.  Don't leave yours in here when you commit while testing.
  let id = "";
  console.log("inside userLogon");
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      token = result.credential.accessToken;
      user = result.user;
      const uri = "http://localhost:4000/graphql";
      const link = new HttpLink({ uri });

      const operation = {
        query: GET_USER_BY_UID_SERVER("uid", user.uid)
      };

      makePromise(execute(link, operation))
        .then(res => {
          if (!res.data.userOne._id) {
            dispatch({ type: IS_NEW_USER, payload: true });
          } else {
            axios
              .post(
                "https://api.github.com/graphql",
                {
                  query: GET_USER_ORGS_CLIENT("first", 25)
                },
                {
                  headers: {
                    Authorization: `bearer ${pat}`
                  }
                }
              )
              .then(res => {
                console.log(res.data.data.viewer.organizations.nodes);
                console.log(
                  "nodes value: ",
                  res.data.data.viewer.organizations.nodes.length
                );
                if (res.data.data.viewer.organizations.nodes.length === 0) {
                  console.log(res.data);
                  dispatch({ type: HAS_ORGANIZATIONS, payload: false });
                } else {
                  dispatch({ type: HAS_ORGANIZATIONS, payload: true });
                  dispatch({
                    type: ADD_ORGANIZATIONS,
                    payload: res.data.data.viewer.organizations.nodes
                  });
                }
              });
            user._id = res.data.userOne._id;
          }
        })
        .catch(error => console.log("ERROR: Getting uid: ", error));

      dispatch({ type: USER_LOGON, payload: user });
    })
    .catch(function(error) {
      console.log("Inside Firebase auth .catch");
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(
        `Error Code: ${errorCode} ${errorMessage} ${email} ${credential}`
      );
    });

  // Check to see if the user has a record and a pat
  // const query = GET_USER_BY_UID_SERVER({ uid: user.uid });
  // axios
  //   .get("localhost:4000/graphql", GET_USER_BY_UID_SERVER({ uid: user.uid }))
  //   .then(res => {
  //     console.log(res.data);
  //   });
};

// export const createPost = props => dispatch => {
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then(function(result) {
//       // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//       const token = result.credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       const pat = ""; // Personal access token.  Don't leave yours in here when you commit while testing.
//       axios
//         .post(
//           "https://api.github.com/graphql",
//           {
//             query: GET_USER_ORGS("first", 25)
//           },
//           {
//             headers: {
//               Authorization: `bearer ${pat}`
//             }
//           }
//         )
//         .then(res => {
//           console.log(res.data);
//         });
//       dispatch({ type: USER_LOGON, payload: user });

//       localStorage.setItem("token", token);
//       props.history.push("/dashboard");
//     })
//     .catch(function(error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       const email = error.email;
//       const credential = error.credential;
//       console.log(
//         `Error Code: ${errorCode} ${errorMessage} ${email} ${credential}`
//       );
//     });
// };
