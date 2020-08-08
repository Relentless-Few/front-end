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
export const HAS_NO_ORGANIZATIONS = "HAS_NO_ORGANIZATIONS";

export const userLogon = props => dispatch => {
  let user = "";
  let token = "";
  const pat = "10179169c213c8d51f0fc17e9f5f9b1df50ad073"; // Personal access token.  Don't leave yours in here when you commit while testing.
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
            dispatch({ type: IS_NEW_USER, true });
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
                console.log(res.data);
              });
          }
          user._id = res.data.userOne._id;
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

// Check to see if the user has a record and a pat
// axios
// .get(
//   "localhost:4000",
//   {
//     query: GET_USER_BY_UID_SERVER({ uid: user.uid })
//   },
//   {
//     headers: {
//       Authorization: `bearer ${pat}`
//     }
//   }
// )
// .then(res => {
//   console.log(res.data);
//   axios
//     .post(
//       "https://api.github.com/graphql",
//       {
//         query: GET_USER_ORGS_CLIENT("first", 25)
//       },
//       {
//         headers: {
//           Authorization: `bearer ${pat}`
//         }
//       }
//     )
//     .then(res => {
//       console.log(res.data);
//     });
//   dispatch({ type: USER_LOGON, payload: user });

//   localStorage.setItem("token", token);
//   props.history.push("/dashboard");
// });

const getUid = user => {};
