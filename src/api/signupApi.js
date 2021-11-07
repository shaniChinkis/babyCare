import React from 'react';


export const signupPApi = (email, password,governessCode, childName,childId) => {
  return fetch('http://localhost:3001/signUpP',
  {
      method:'POST',

      body:JSON.stringify({email:email,
            password:password,
            governessCode:governessCode,
            childName:childName,
            childId:childId})
  })
  .then((res) => res.json())
  .then((data) =>{ 
    return data;
    }
   )
  .catch((err) => {
    console.log("error", err);
  });
}




export const signupGApi = (email, password) => {
    return fetch('http://localhost:3001/signUpG',
    {
        method:'POST',
        body:JSON.stringify({email:email,
              password:password})
        })
    .then((res) => res.json())
    .then((data) =>{ 
      return data;
                 }
     )
    .catch((err) => {
      console.log("error", err);
    });
  }
