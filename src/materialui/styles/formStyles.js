import { makeStyles } from "@material-ui/core/styles";

export const formStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    justifyContent: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  error: {
    color: "red"
  },
  signIn: {
    display: "flex",
    justifyContent: "flex-center"
  },

  createControl: {
    width: "100%"
  }
}));
