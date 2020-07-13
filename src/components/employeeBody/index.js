import React from "react";
import './style.css';

const styles = {
    card: {
      margin: 20,
      background: "lightblue",
      Text: "strong"
    }
};



function employeeBody({ users }) {

function formatBirthday(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    
    return [month, day, year].join("/")
}

    return (
        <>
            {
                users[0] !== undefined && users[0].name !== undefined ? (
                    users.map(({ login, name, picture, phone, email, dob}) => {

                    return (<p key={login.uuid} className="employees" style={styles.card}><img src= {picture.medium} alt="photo" /> {name.first} {name.last} {formatBirthday(dob.date)} {phone} {email}</p>)
                    })
                ) : (
                    <></>
                )
            }
        </>
    );
}

export default employeeBody;