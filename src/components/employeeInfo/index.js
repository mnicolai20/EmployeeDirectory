import React, { Component } from "react";
import API from "../../utils/API";
import EmployeeBody from "../employeeBody/index";
import './style.css';
import SearchForm from "../SearchForm/index";
import Header from "../Header/index";


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
        const filter = event.target.value;
        const newList = this.state.users.filter(user => {
            let value = Object.values(user).join("").toLowerCase();
            return value.indexOf(filter.toLowerCase()) !== -1;
        })
        this.setState({ search: filter, filteredUsers: newList });
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
            <Header/>
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