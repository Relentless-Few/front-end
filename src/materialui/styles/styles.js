import { makeStyles } from "@material-ui/core/styles";

export const sharedStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.light,
    height: "auto"
  },
  menuBar: {
    background: theme.palette.primary.main
  },
  toolBar: {
    display: "flex",
    justifyContent: "flex-end"
  },
  standardButton: {
    background: theme.palette.primary.light,

    fontWeight: "bold",
    margin: "5px"
  }
}));
