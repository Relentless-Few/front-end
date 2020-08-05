import React from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";
import { sharedStyles } from "../materialui/styles/styles";
import { connect } from "react-redux";
import { userLogon } from "../actions/actions";

const Header = props => {
  const classes = sharedStyles();

  const onSubmit = () => {
    console.log("Inside onSubmit");
    props.userLogon(props);
  };

  return (
    <AppBar position="static" className={classes.menuBar}>
      <Toolbar className={classes.toolBar}>
        <Button
          variant="contained"
          onClick={onSubmit}
          className={classes.standardButton}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps, { userLogon })(Header));