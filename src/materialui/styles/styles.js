import { makeStyles } from "@material-ui/core/styles";

export const sharedStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.light,
    height: "auto"
  },
  menuBar: {
    background: theme.palette.primary.main,
    position: "fixed",
    top: "0",
    marginLeft: "-8px"
  },
  toolBar: {
    display: "flex",
    justifyContent: "flex-end"
  },
  standardButton: {
    background: theme.palette.primary.light,
    fontWeight: "bold",
    marginTop: "5px"
  },
  mainWindow: {
    margin: "20px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  posts: {
    width: "450px", 
    padding: "10px", 
    marginTop: "90px", 
    borderRadius: "10px", 
    backgroundColor: "lightgray"
  },
  image: {
    margin: "0 15px",
    width: "420px"
  }
}));
