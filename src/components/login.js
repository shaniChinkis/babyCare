import React, { useState } from 'react';

import loginApi from '../api/loginApi'
import "../styles/login.css"
import {useHistory} from 'react-router-dom'

const Login = () => {
    const history=new useHistory();

    const [ userName, setUserName ] = useState("");
    const [password, setPassword ]  = useState("");

    const onlogin = async() => {
debugger;
       let res = await loginApi(userName, password);
            if( res && res.kind=='governess' ){
                history.replace("/governessHomepage")
            }
           else if( res && res.kind=='parents' ){
                history.replace( "/parentsHomepage")
            }
            else {
                alert("User not found please sign up.")
            }
        
    }



    return (
        <div className="allL">
            <div className="login_logo"></div>

            <div className="labelsL">
                <label className="loginG">התחברי כמטפלת</label>
                <label className="loginP">התחבר/י כהורה</label>
            </div>
            <div className="containerL">
                    <div className="loginDivG">
                        <br />
                        <label className="nameL">שם משתמש</label>
                        <br />
                        <input className="inputEmailL" type="email" onChange={(e) => setUserName(e.target.value)} />
                        <br />
                        <label className="passwordL">סיסמא</label>
                        <br />
                        <input className="inputPasswordL" type="password" onChange={(e) => setPassword(e.target.value)} />
                        <br />
                    </div>
                   
                    <div className="loginDivP">
                        <br />

                        <label className="emailPL">אימייל</label>
                        <br />
                        <input className="emailInputL" type="email" onChange={(e) => setUserName(e.target.value)} />
                        <br />
                        <label className="passwordPL">סיסמא</label>
                        <br />
                        <input className="inputPasswordL" type="password" onChange={(e) => setPassword(e.target.value)}/>
                        <br />
                    </div>
                    
                </div>
                <div className= "buttonsL">
                <button className="loginBtn" onClick={onlogin}>התחברות</button>
                <button className="loginBtnP" onClick={onlogin}>התחברות</button>
                </div>
            </div>

       
    )
}


export default Login;