import React from "react";
import './style.css';

const styles = {
    card: {
      margin: 20,
      background: "lightblue"
    }
};

function employeeBody({ users }) {

    return (
        <>
            {
                users[0] !== undefined && users[0].name !== undefined ? (
                    users.map(({ login, name, picture, phone, email, dob}) => {
                        // picture.medium
                    return (<p key={login.uuid} className="employees" style={styles.card}>{name.first} {name.last} {phone} {email}</p>)
                    })
                ) : (
                    <></>
                )
            }
        </>
    );
}

export default employeeBody;