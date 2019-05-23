import {
  REPLACE_USER,
  TOGGLE_IS_FETCHING,
  RESET_USER
} from "../actions/userActions";

const defaultState = {
  data: {},
  isFetching: false
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case REPLACE_USER: {
      const { payload } = action;
      return {
        ...state,
        data: payload
      };
    }

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: !state.isFetching
      };
    }

    case RESET_USER: {
      return {
        ...state,
        data: {}
      };
    }

    default:
      return state;
  }
}
