import firebase from "../firebase";
import { provider } from "../firebase";

export const TEST_REDUCER = "TEST_REDUCER";
export const USER_LOGON = "USER_LOGON";

export const testReducer = () => dispatch => {
  dispatch({ type: TEST_REDUCER, payload: "Inside reducer.js: TEST_REDUCER" });
};

export const userLogon = props => dispatch => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
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
