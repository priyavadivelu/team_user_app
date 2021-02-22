import { React, useState } from "react";

const AppFilter = ({ data, setFilteredData }) => {
  const getValueInput = (event) => {
    const filteredTeams = this.props.teams.filter((filterTeam) => {
      return (
        data.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
      );
    });
  };
  return (
    <div>
      <input
        type="text"
        id="filter"
        className="form-control"
        placeholder="Search here..."
        onChange={getValueInput}
      />
    </div>
  );
};

export default AppFilter;
