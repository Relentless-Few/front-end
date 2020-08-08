import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";
import { sharedStyles } from "../materialui/styles/styles";
import { connect } from "react-redux";
import { userLogon } from "../actions/actions";
import { useQuery } from "@apollo/react-hooks";
import { USER_ORGS } from "../queries/userQueries";
import axios from "axios";
import HeaderButtons from "./HeaderButtons";

const Header = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const classes = sharedStyles();

  const onLogon = () => {
    props.userLogon(props);
    setIsLoggedIn(true);
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <AppBar position="static" className={classes.menuBar}>
      <Toolbar className={classes.toolBar}>
        <HeaderButtons
          isLoggedIn={isLoggedIn}
          onLogon={onLogon}
          onLogout={onLogout}
        />
      </Toolbar>
    </AppBar>
  );
};
const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps, { userLogon })(Header));
