import firebase from "../firebase";
import { provider } from "../firebase";
import { useQuery } from "@apollo/react-hooks";

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
      const pat = "d20bf1cd291b4378c607e6f1bf63b8fe158b864a";
      axios
        .post(
          "https://api.github.com/graphql",
          {
            query: USER_ORGS("first", 15)
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
