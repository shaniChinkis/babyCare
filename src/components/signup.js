import React, { useState } from 'react';
import { signupPApi, signupGApi } from '../api/signupApi'

import "../styles/signup.css"
import { useHistory } from 'react-router-dom'



const SignUp = () => {
    const history = new useHistory();
    const [ userName, setUserName ] = useState("");
    const  [password, setPassword]  = useState("");
    const  [governessCode, setGovernessCode]  = useState("");
    const  [childName, setChildName]  = useState("");
    const  [childId, setChildId]  = useState("");

    const onsignupP = async () => {

        let res = await signupPApi(userName, password, governessCode, childName, childId);

        if (res) {
            history.replace("/parentsHomepage")
            alert("ההרשמה בוצעה בהצלחה👍")
        }
        else {
            console.log("failed")
        }

    }

    const onsignupG = async () => {

        let res = await signupGApi(userName, password);

        if (res) {
            history.replace("/governessHomepage")
            alert("ההרשמה בוצעה בהצלחה👍")
        }
        else {
            console.log("failed")
        }

    }
    return (
        <div className="allS">
            <div className="signup_logo"></div>
            <div className="labels">
                <label className="signUpLabel_G">הרשמי כמטפלת</label>
                <label className="signUpLabel_P">הרשם/י כהורה</label>

            </div>
            <div className="containerS">

                <div className="signUp">
                    <br />
                    <label className="userNameS">שם משתמש</label>
                    <br />
                    <input className="userNameInputS" type="email" onChange={(e) => setUserName(e.target.value)} />
                    <br />
                    <label className="passwordS">סיסמא</label>
                    <br />
                    <input className="passwordInputS" type="password" onChange={(e) => setPassword(e.target.value)} />
                    <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />
                    <br />  <br />  <br />  <br />  <br />  <br />
                </div>


                <div className="signup2">
                    <br />

                    <label className="userNamePS">אימייל</label>
                    <br />
                    <input className="userNameInputPS" type="email" onChange={(e) => setUserName(e.target.value)} />
                    <br />
                    <label className="passwordPS" >סיסמא</label>
                    <br />
                    <input className="passwordInputPS" type="password" onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <label className="govCodeS" >קוד מטפלת</label>
                    <br />
                    <input className="govCodeInputS" type="text" onChange={(e) => setGovernessCode(e.target.value)} />
                    <br />
                    <label className="childNameS">שם הילד</label>
                    <br />
                    <input className="childNameInputS" type="text" onChange={(e) => setChildName(e.target.value)} />
                    <br />
                    <label className="childIdS" >ת.ז. הילד</label>
                    <br />
                    <input className="childIdInputS" type="text" onChange={(e) => setChildId(e.target.value)} />
                </div>

            </div>

            <div className="buttons">
                <button className="signUpBtnGS" onClick={onsignupG}>הרשמה</button>
                <button className="signUpBtnPS" onClick={onsignupP} > הרשמה</button>
            </div>
        </div>


    )
}

export default SignUp;
