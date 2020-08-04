import React from "react";
import { testReducer } from "./actions/actions";
import { connect } from "react-redux";
import TestReducer from "./TestReducer/TestReducer";
import { Button } from "@material-ui/core";

// You can remove all the state components, button and click events once state is starting to be built
function App(props) {
  const handleClick = () => {
    props.testReducer();
  };
  return (
    <div>
      You are in the App!
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        onClick={handleClick}
      >
        Redux Test
      </Button>
      <TestReducer />
    </div>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { testReducer })(App);
