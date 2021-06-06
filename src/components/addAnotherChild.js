import React from 'react';

import "../styles/addAnotherChild.css"



const addAnotherChild=() =>{
    return (
        <div className="all_addAnotherChild">
            <div className="addAnotherChild_logo"></div>
            <div className="label_addAnotherChild">
            <label className="labelbig">להרשמת ילד נוסף</label>
            </div>
            <div className="container_addAnotherChild">
                
                   
                    <div className="addanothrchild_div">
                        <br />
                        <label className="governessCode">קוד מטפלת</label>
                        <br />
                        <input className="inputgovernessCode" type="text" />
                        <br />
                        <label className="inputChildNameAdd">שם הילד</label>
                        <br />
                        <input className="ChildnameAdd" type="text" />
                        <br />
                        <label className="IdAdd">ת.ז. הילד</label>
                        <br />
                        <input className="inputIdAdd" type="text" />
                    </div>
                 
                </div>
                <div className="buttons_addAnotherChild">
                    <button className="addChildAdd">הוספה</button>
                </div>
            </div>
        
    )
}

export default addAnotherChild;