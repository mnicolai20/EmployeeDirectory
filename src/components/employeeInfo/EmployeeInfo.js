import React, { Component } from "react";
import API from "../../utils/API";
import EmployeeBody from "../employeeBody/index";
import './employeeInfo.css';


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

    //onchange (and pass into searchbar as a prompt)

    render() { 
        return(
        <div className="employees">
            {/* Inlcude here our searchbar */}
            <EmployeeBody users={this.state.filteredUsers} />
        </div>
    )
    }
};

export default EmployeeDetail;