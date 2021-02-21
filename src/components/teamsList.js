import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import fetchTeams from "../actions/index";
import "../styles.css";

class TeamsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataLoading: true,
    };
  }

  componentDidMount() {
    this.props.fetchTeams();
    this.setState({ isDataLoading: false });
  }

  render() {
    console.log(this.props.teams);
    return (
      <Grid container direction="column" alignItems="center" justify="center">
        {this.state.isDataLoading ? (
          <Grid item>
            <CircularProgress />
          </Grid>
        ) : (
          <div>
            <ul>
              <h3>TEAMS</h3>
              {this.props.teams.map((team) => (
                <li id="teams-list">
                  <Link
                    to={{
                      pathname: `/teams/${team.id}`,
                      state: { data: team },
                    }}
                  >
                    {team.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    teams: state.teams.all,
  };
}

export default connect(mapStateToProps, { fetchTeams })(TeamsList);
