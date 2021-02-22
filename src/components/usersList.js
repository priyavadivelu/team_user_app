import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import fetchTeamUsers from "../actions/indexUsers";
import "../styles.css";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataLoading: true,
      search: "",
    };
  }

  componentDidMount() {
    this.props.fetchTeamUsers();
    this.setState({ isDataLoading: false });
  }

  onchange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredUsers = this.props.users.filter((filterUser) => {
      return filterUser.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    const displayUsersOfaTeam = () => {
      if (filteredUsers.length > 0) {
        const filteredData = filteredUsers.filter(
          (user) => user.teamId[0] === this.props.location.state.data.id
        );
        return (
          <div>
            <h3 id="team-name">{this.props.location.state.data.name}</h3>
            {filteredData.length !== 0 && (
              <ul>
                {filteredData.map((user) => (
                  <li key={user.id} id="teams-list">
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      }
    };
    return (
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        justify="flex-start"
      >
        {this.state.isDataLoading ? (
          <Grid item>
            <CircularProgress />
          </Grid>
        ) : (
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            justify="flex-start"
          >
            <div className="row filter">
              <div className="col-sm-4">
                <input
                  type="text"
                  className="filter"
                  placeholder="Search here..."
                  onChange={this.onchange}
                />
              </div>
            </div>
            {displayUsersOfaTeam()}
          </Grid>
        )}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  if (state.users.users !== 0) {
    return {
      users: state.users.users,
    };
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching actions returned by action creators
    fetchTeamUsers: () => dispatch(fetchTeamUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
