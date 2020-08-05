import { USER_LOGON } from "../actions/actions";

const initialState = {
  user: [],
  message: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGON: {
      return { ...state, user: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
