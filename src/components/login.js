import React, { useState } from 'react';

import loginAPI from '../api/userApi'
import "../styles/login.css"


const Login=()=> {
    const {userName, setUserName} = useState("");
    const {password, setPassword} = useState("");
    const onlogin = () =>{
        loginAPI(userName,password).then((res)=>{
           return  res.token();
        })
    }

    return(    
        <div className="all">
            <div className="logo"></div>

            <div className="div">

            <div>
            <label className="loginG">התחברי כמטפלת</label>
            <div className="loginDivG">
                <br/>
                <label className="name">שם משתמש</label>
                <br/>
                <input className="inputEmail" type="email" onChange={(e) => setUserName(e.target.value)}/>
                <br/>
                <label className="password">סיסמא</label>
                <br/>
                <input  className="inputPassword" type="password" onChange={(e) => setPassword(e.target.value)}/>
                <br/>              
            </div>
            <button className="loginBtn" onClick={onlogin}>התחברות</button>
            </div>
            <div>
            <label className="loginP">התחבר/י כהורה</label>
            <div className="loginDivP">
            <br/>

                <label className="emailP">אימייל</label>
                <br/>
                <input className="emailInput" type="email" />
                <br/>
                <label className="passwordP">סיסמא</label>
                <br/>
                <input className="inputPassword" type="password"/>               
                <br/>
            </div>
            <button className="loginBtnP">התחברות</button>
            </div>
            </div>
        </div>
    )
}


export default Login;