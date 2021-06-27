import React from 'react'
import "../styles/parentsHomepage.css"
    import {useHistory} from 'react-router-dom'


const ParentsHomepage=()=>{
    const history=new useHistory();

    const onclickButtonP = (typeOfButton) => {
     
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
        <div className="p_all">
            <div className="parentsHomepage_logo"></div>
            <div className="patentsmobileImg" ></div>
            <div className="bp1"></div>
            <br/>
            <div className="bp2"></div>
            <br/>
            <div className="bp3"></div>
            <br/>
            <div className="bp4"></div>
                <button className="pHpBtn1" onClick={()=>onclickButtonP("showCategories")}>לצפיה בלוח חופשות</button>
                <button className="pHpBtn2" onClick={()=>onclickButtonP("showCategories")}>פידבק למטפלת</button>
                <button className="pHpBtn3" onClick={()=>onclickButtonP("showVacation")}>שליחת הודעה למטפלת</button>
                <button className="pHpBtn4" onClick={()=>onclickButtonP("showChildrenList")}>לצפיה בפעילות הילד</button>
        </div>
    )
}
export default ParentsHomepage;