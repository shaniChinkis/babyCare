import React from 'react';

export default function loginAPI(userName, password) {

    return(

      fetch(`http://localhost:3000/login?user=user1${userName}`)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => {
            console.log("error", err);
        })

     );


}