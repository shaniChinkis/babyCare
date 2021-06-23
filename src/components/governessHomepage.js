import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import "../styles/governessHomepage.css"
    import {useHistory} from 'react-router-dom'


const governessHomepage=()=>{
    const history=new useHistory();

    const onclickButton = (typeOfButton) => {
     
            if( typeOfButton=="showCategories" ){
                history.replace("/categories")
            }
            if( typeOfButton=="showChildrenList" ){
                history.replace("/childrenList")
            }
            else {
                alert("User not found please sign up.")
            }
        
    }
    return(
        <div className="g_all">
            <div className="governessHomepage_logo"></div>
            <div className="mobileImg" ></div>
            <div className="bg1"></div>
            <br/>
            <div className="bg2"></div>
            <br/>
            <div className="bg3"></div>
                <button className="gHpBtn1" onClick={()=>onclickButton("showCategories")}>להצגת הקטגוריות</button>
                <button className="gHpBtn2" onClick={()=>onclickButton("showVacation")}>לצפיה בלוח חופשות</button>
                <button className="gHpBtn3" onClick={()=>onclickButton("showChildrenList")}>להצגת רשימת הילדים</button>
        </div>
    )
}
export default governessHomepage;