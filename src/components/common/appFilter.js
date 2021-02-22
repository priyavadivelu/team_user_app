import { React, useState } from "react";

const AppFilter = ({ data, setFilteredData }) => {
  const getValueInput = (event) => {
    const filter = data.filter((rec) =>
      rec.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    // setFilteredData(filter);
    return filter;
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
