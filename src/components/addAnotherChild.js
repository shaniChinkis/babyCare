import React from 'react';

import "../styles/addAnotherChild.css"



const addAnotherChild=() =>{
    return (
        <div className="all_addAnotherChild">
            <div className="addAnotherChild_logo"></div>
            <div className="label_addAnotherChild">
            <label className="big">להרשמת ילד נוסף</label>
            </div>
            <div className="container_addAnotherChild">
                
                   
                    <div className="addanothrchild_div">
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
                 
                </div>
                <div className="buttons_addAnotherChild">
                    <button className>הוספה</button>
                </div>
            </div>
        
    )
}

export default addAnotherChild;