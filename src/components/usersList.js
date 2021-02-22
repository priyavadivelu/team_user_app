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
    };
  }

  componentDidMount() {
    this.props.fetchTeamUsers();
    this.setState({ isDataLoading: false });
  }

  render() {
    console.log("dat here", this.props.location);
    return (
      <Grid container direction="column" alignItems="center" justify="center">
        {this.state.isDataLoading ? (
          <Grid item>
            <CircularProgress />
          </Grid>
        ) : (
          <div>
            <ul>
              <h3>USERS</h3>
              {/* {this.props.users.map((user) => (
                <li key={user.id} id="teams-list">
                  {user.name}
                </li>
              ))} */}
            </ul>
          </div>
        )}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching actions returned by action creators
    fetchTeamUsers: () => dispatch(fetchTeamUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
