import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import "../styles/governessHomepage.css"


const governessHomepage=()=>{
    return(
        <div className="g_all">
            <div className="governessHomepage_logo"></div>
            <div className="mobileImg" ></div>
            <div className="bg1"></div>
            <br/>
            <div className="bg2"></div>
            <br/>
            <div className="bg3"></div>
                <button className="gHpBtn1">להצגת הקטגוריות</button>
                <button className="gHpBtn2">לצפיה בלוח חופשות</button>
                <button className="gHpBtn3">להצגת רשימת הילדים</button>
        </div>
    )
}
export default governessHomepage;