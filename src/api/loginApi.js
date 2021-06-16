import React from 'react';


const loginApi =async (email, password) => {
  debugger;
  try {
    const res =await fetch(`http://localhost:3001/login/${email}/${password}`, {
      method: 'GET',
      mode: 'cors',
    })
    const data =await res.json()
    return data
  } catch (err) {
    console.log("error", err);
  }
}

export default loginApi;