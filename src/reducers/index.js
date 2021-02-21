import { combineReducers } from "redux";
import TeamsReducer from "./teams_reducer";
// import UsersReducer from "./users_reducer";

const rootReducer = combineReducers({
  teams: TeamsReducer,
});
export default rootReducer;
