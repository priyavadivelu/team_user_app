import { FETCH_TEAM_USERS } from "../actions/indexUsers";

const INITIAL_STATE = { users: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TEAM_USERS:
      return { ...state, users: action.payload.data };

    default:
      return state;
  }
};
