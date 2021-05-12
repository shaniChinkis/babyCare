import React from 'react';
import Logo from "../image/logo.png"
import Arrow from "../image/arrow.png"
import "../styles/addAnotherChild.css"
import { red } from '@material-ui/core/colors';


function addAnotherChild() {
    return (
        <div className="all">
            <div className="header">
                       <img className="logoImg" src={Logo} />
            <button className="back"> <img className="arrow" src={Arrow} />  חזרה לדף הבית </button>
            </div>
            <div className="div">
                <div>
                    <label className="big">להרשמת ילד נוסף</label>
                    <div className="signup">
                        <br />
                        <label>קוד מטפלת</label>
                        <br />
                        <input type="text" />
                        <br />
                        <label>שם הילד</label>
                        <br />
                        <input type="password" />
                        <br />
                        <label>ת.ז. הילד</label>
                        <br />
                        <input type="text" />
                    </div>
                    <button>הוספה</button>
                </div>
            </div>
        </div>
    )
}

export default addAnotherChild;