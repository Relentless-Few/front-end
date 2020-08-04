import React from "react";
import { connect } from "react-redux";

// Note: this component can be removed once state has started building
const TestReducer = props => {
  return <h2>{props.message}</h2>;
};

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps, {})(TestReducer);
