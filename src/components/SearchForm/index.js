import React from "react";
import "./style.css";

function SearchForm(props) {
  return(
      <div className="form-group">
        <label htmlFor="employee">Users: </label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          type="search"
          className="form-control"
          placeholder="Search..."
        />
      </div>
  )
}

export default SearchForm;