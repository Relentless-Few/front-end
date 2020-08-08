import { makeStyles } from "@material-ui/core/styles";

export const panelStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
  notificationMenu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    float: "left",
    width: "150px",
    height: "100vh",
    backgroundColor: "grey",
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
  icon: {
    background: theme.palette.primary.main,
    width: "80px",
    height: "80px",
    borderRadius: "20px",
    margin: "20px 0"
  },
}));
