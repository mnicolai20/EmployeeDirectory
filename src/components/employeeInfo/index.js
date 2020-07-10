import React, { Component } from "react";
import API from "../../utils/API";
import EmployeeBody from "../employeeBody/index";
import './style.css';
import SearchForm from "../SearchForm/index";


class EmployeeDetail extends Component {
    state = {
        users: [{}],
        filteredUsers: [{}],
        filterTerm: ""
    };

    componentDidMount() {
        API.getUsers()
        .then(({data}) => {
            this.setState({users: data.results, filteredUsers: data.results})
        })
    };

    //onchange (and pass into searchbar as a prompt)
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getUsers(this.state.search)
        .then(res => {
            if(res.data.status === "error") {
                throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
        })
        .catch(err => this.setState({ error: err.message }));
    };


    render() { 
        return(
        <div className="employees">
            {/* Inlcude here our searchbar */}
            <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                employees={this.state.filteredUsers}
            />
            <EmployeeBody users={this.state.filteredUsers} />
        </div>
    )
    }
};

export default EmployeeDetail;