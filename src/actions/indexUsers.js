import axios from "axios";
export const FETCH_TEAM_USERS = "FETCH_TEAM_USERS";

const API_BASE_URL = "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com";

export default function fetchTeamUsers() {
  const request = axios.get(`${API_BASE_URL}/users`);
  return {
    type: FETCH_TEAM_USERS,
    payload: request,
  };
}
