import { React } from "react";

const AppFilter = () => {
  return (
    <div className="row filter">
      <div className="col-sm-4">
        <input
          type="text"
          id="filter"
          className="form-control"
          placeholder="Search here..."
          onChange={this.onchange}
        />
      </div>
    </div>
  );
};

export default AppFilter;
