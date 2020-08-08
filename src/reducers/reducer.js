import {
  USER_LOGON,
  IS_NEW_USER,
  HAS_ORGANIZATIONS,
  ADD_ORGANIZATIONS
} from "../actions/actions";

const initialState = {
  user: [],
  organizations: [],
  projects: [],
  repositories: [],
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

    case HAS_ORGANIZATIONS: {
      return { ...state, hasOrganizations: action.payload };
    }

    case ADD_ORGANIZATIONS:
      return { ...state, organizations: action.payload };
    default: {
      return state;
    }
  }
}

export default reducer;
