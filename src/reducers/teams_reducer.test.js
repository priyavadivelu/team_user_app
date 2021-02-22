import TeamsReducer from "./teams_reducer";
import { FETCH_TEAMS } from "../actions/index";

const INITIAL_STATE = {
  all: [],
};

describe("authenticate reducer", () => {
  it("returns the initial state", () => {
    expect(TeamsReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});
