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
    position: "fixed",
    marginTop: "42px",
    paddingTop: "20px",
    marginLeft: "-8px"
  },
  badge: {
    position: "relative",
    top: "-110px",
    right: "-40px",
    padding: "5px 10px",
    borderRadius: "50%",
    background: "red",
    color: "white"
  },
  chatMenu: {
    marginTop: "42px",
    width: "250px",
    height: "100vh",
    backgroundColor: "lightgrey",
    position: "fixed",
    left: "84%"
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
