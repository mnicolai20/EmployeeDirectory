import React from "react";

function employeeBody({ users }) {

    return (
        <>
            {
                users[0] !== undefined && users[0].name !== undefined ? (
                    users.map(({ login, name, picture, phone, email, dob}) => {
                        // picture.medium
                        return (<p key={login.uuid}>{name.first} {name.last}</p>)
                    })
                ) : (
                    <></>
                )
            }
        </>
    );
}

export default employeeBody;