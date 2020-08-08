import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";
import { sharedStyles } from "../materialui/styles/styles";
import { connect } from "react-redux";
import { userLogon } from "../actions/actions";
import { useQuery } from "@apollo/react-hooks";
import { USER_ORGS, GET_USER_BY_UID_SERVER } from "../queries/userQueries";
import axios from "axios";
import HeaderButtons from "./HeaderButtons";
import gql from "graphql-tag";

const Header = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const filterObj = { uid: "rTGufQ8CgMSPvlzDUDdtHldTtHW" };
  // const key = "uid";
  // const value = "rTGufQ8CgMSPvlzDUDdtHldTtHW";

  // const { loading, error, data } = useQuery(
  //   GET_USER_BY_UID_SERVER("uid", "rTGufQ8CgMSPvlzDUDdtHldTtHW")
  // );

  const classes = sharedStyles();

  // useEffect(() => {
  //   if (!loading) {
  //     console.log(data);
  //   }
  // }, [data]);

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
        <Button
          variant="contained"
          onClick={onLogon}
          className={classes.standardButton}
        >
          Login
        </Button>
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
