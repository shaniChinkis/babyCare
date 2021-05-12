import React from 'react';
import Logo from "../image/logo.png"
import Arrow from "../image/arrow.png"

import "../styles/login.css"


function login(){
    return(    
        <div className="all">
            <div className="header">
                       <img className="logoImg" src={Logo} />
            <button className="back"> <img className="arrow" src={Arrow} />  חזרה לדף הבית </button>
            </div>
            <div className="div">
            
            <div>
            <label className="big">התחברי כמטפלת</label>
            <div className="signup">
                <br/>
                <label>שם משתמש</label>
                <br/>
                <input type="email"/>
                <br/>
                <label>סיסמא</label>
                <br/>
                <input type="password"/>
                <br/>              
            </div>
            <button>התחברות</button>
            </div>
            <div>
            <label className="big">התחבר/י כהורה</label>
            <div className="signup">
            <br/>

                <label>אימייל</label>
                <br/>
                <input type="email" />
                <br/>
                <label>סיסמא</label>
                <br/>
                <input type="password"/>               
                <br/>
            </div>
            <button>התחברות</button>
            </div>
            </div>
        </div>
    )
}


export default login;