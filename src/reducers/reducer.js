import { TEST_REDUCER, USER_LOGON } from "../actions/actions";

const initialState = {
  user: [],
  message: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TEST_REDUCER: {
      return { ...state, message: action.payload };
    }

    case USER_LOGON: {
      return { ...state, user: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
