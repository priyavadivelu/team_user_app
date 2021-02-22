import { FETCH_TEAMS } from "../actions/index";

const INITIAL_STATE = { all: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TEAMS:
      return { ...state, all: action.payload.data };

    default:
      return state;
  }
};
