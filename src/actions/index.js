import axios from "axios";

export const FETCH_TEAMS = "FETCH_TEAMS";
export const FETCH_TEAM_USERS = "FETCH_TEAM_USERS";

const API_BASE_URL = "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com";

export default function fetchTeams() {
  const request = axios.get(`${API_BASE_URL}/teams`);
  return {
    type: FETCH_TEAMS,
    payload: request,
  };
}

// export default function fetchTeamUsers() {
//   const request = axios.get(`${API_BASE_URL}/users/:id`);
//   return {
//     type: FETCH_TEAM_USERS,
//     payload: request,
//   };
// }
