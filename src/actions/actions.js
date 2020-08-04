export const TEST_REDUCER = "TEST_REDUCER";

export const testReducer = () => dispatch => {
  dispatch({ type: TEST_REDUCER, payload: "Inside reducer.js: TEST_REDUCER" });
};
