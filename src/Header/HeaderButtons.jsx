import React from "react";
import { Button } from "@material-ui/core";
import { sharedStyles } from "../materialui/styles/styles";

const HeaderButtons = props => {
  const classes = sharedStyles();

  return (
    <>
      {props.isLoggedIn && (
        <Button
          variant="contained"
          onClick={() => props.history.push("/posts")}
          className={classes.standardButton}
        >
          Posts
        </Button>
      )}

      {props.isLoggedIn && (
        <Button
          variant="contained"
          onClick={() => props.history.push("/createorg")}
          className={classes.standardButton}
        >
          Create Organization
        </Button>
      )}
      {props.isLoggedIn && (
        <Button
          variant="contained"
          onClick={() => props.history.push("/joinorg")}
          className={classes.standardButton}
        >
          Join Organization
        </Button>
      )}
      {props.isLoggedIn && (
        <Button
          variant="contained"
          onClick={() => props.history.push("/createteam")}
          className={classes.standardButton}
        >
          Create Team
        </Button>
      )}
      {props.isLoggedIn && (
        <Button
          variant="contained"
          onClick={() => props.history.push("/jointeam")}
          className={classes.standardButton}
        >
          Join Team
        </Button>
      )}

      {props.isLoggedIn && (
        <Button
          variant="contained"
          onClick={props.onLogout}
          className={classes.standardButton}
        >
          Logout
        </Button>
      )}
    </>
  );
};

export default HeaderButtons;
