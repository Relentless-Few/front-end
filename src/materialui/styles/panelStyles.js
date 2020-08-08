import { makeStyles } from "@material-ui/core/styles";

export const panelStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
  notificationMenu: {
    float: "left",
    width: "150px",
    height: "100vh",
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "center",
  },
  chatMenu: {
    float: "right",
    width: "250px",
    height: "100vh",
    backgroundColor: "lightgrey",
    // display: "flex",
    // justifyContent: "center",
  },
  accordionType: {
    height: "60vh"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
