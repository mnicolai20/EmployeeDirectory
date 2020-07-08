import React, { Component } from "react";
import API from "../../utils/API";
import EmployeeBody from "../employeeBody/index";


// Do we have to make our own employee info
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
    }

    render() { 
        return(
        <div className="text-center">
            <EmployeeBody users={this.state.filteredUsers} />
        </div>
    )
    }
};

export default EmployeeDetail;