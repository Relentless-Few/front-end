import {
  USER_LOGON,
  IS_NEW_USER,
  HAS_NO_ORGANIZATIONS
} from "../actions/actions";

const initialState = {
  user: [],
  message: "",
  isNewUser: true,
  hasOrganizations: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGON: {
      console.log("Inside USER_LOGON", action.payload);
      return { ...state, user: action.payload };
    }

    case IS_NEW_USER: {
      return { ...state, isNewUser: action.payload };
    }

    case HAS_NO_ORGANIZATIONS: {
      return { ...state, hasOrganizations: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
