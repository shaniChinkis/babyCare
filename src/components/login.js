import React from 'react';
import Logo from "../image/logo.png"
import Arrow from "../image/arrow.png"

import "../styles/login.css"


function login(){
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
                <input className="inputEmail" type="email"/>
                <br/>
                <label className="password">סיסמא</label>
                <br/>
                <input  className="inputPassword" type="password"/>
                <br/>              
            </div>
            <button className="loginBtn">התחברות</button>
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


export default login;