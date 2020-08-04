import { TEST_REDUCER } from "../actions/actions";

const initialState = {
  message: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TEST_REDUCER: {
      return { ...state, message: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
