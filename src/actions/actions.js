import firebase from "../firebase";
import { provider } from "../firebase";
import { useQuery } from "@apollo/react-hooks";
import axios from "axios";
import { GET_USER_ORGS } from "../queries/userQueries";

export const USER_LOGON = "USER_LOGON";

export const userLogon = props => dispatch => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const pat = ""; // Personal access token.  Don't leave yours in here when you commit while testing.
      axios
        .post(
          "https://api.github.com/graphql",
          {
            query: GET_USER_ORGS("first", 25)
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
      dispatch({ type: USER_LOGON, payload: user });

      localStorage.setItem("token", token);
      props.history.push("/dashboard");
    })
    .catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(
        `Error Code: ${errorCode} ${errorMessage} ${email} ${credential}`
      );
    });
};

export const createPost = props => dispatch => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const pat = ""; // Personal access token.  Don't leave yours in here when you commit while testing.
      axios
        .post(
          "https://api.github.com/graphql",
          {
            query: GET_USER_ORGS("first", 25)
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
      dispatch({ type: USER_LOGON, payload: user });

      localStorage.setItem("token", token);
      props.history.push("/dashboard");
    })
    .catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(
        `Error Code: ${errorCode} ${errorMessage} ${email} ${credential}`
      );
    });
};
