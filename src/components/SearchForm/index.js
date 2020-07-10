import React from "react";
import "./style.css";

function SearchForm(props) {
  return(
    <form className="Search">
      <div className="form-group">
        <label htmlFor="employee">Employee:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search..."
          id="workers"
        />
        <datalist id="users">
          {props.employees.map(employee => (
            <option value={employee} key={employee} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchForm;