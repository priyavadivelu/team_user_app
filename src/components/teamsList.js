import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import fetchTeams from "../actions/index";
import "../styles.css";

class TeamsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataLoading: true,
      search: "",
    };
  }

  componentDidMount() {
    this.props.fetchTeams();
    this.setState({ isDataLoading: false });
  }

  onchange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredTeams = this.props.teams.filter((filterTeam) => {
      return filterTeam.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    return (
      <Fragment>
        <div className="row header">
          <h3>Teams</h3>
        </div>

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

        {this.state.isDataLoading ? (
          <div className="row">
            <CircularProgress />
          </div>
        ) : (
          <div className="row">
            {filteredTeams.length > 0 &&
              filteredTeams.map((team) => {
                if (team) {
                  return (
                    <div className="col-md-3 col-sm-6" key={team.id}>
                      <div className="card">
                        <div className="card-body app-card">
                          <h5 className="card-title">
                            <Link
                              to={{
                                pathname: `/teams/${team.name}/users`,
                                state: { data: team },
                              }}
                            >
                              {team.name}
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
          </div>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    teams: state.teams.all,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching actions returned by action creators
    fetchTeams: () => dispatch(fetchTeams()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsList);
