import React from 'react'
import "../styles/child.css"


const Child=(props)=>{
    
    return(
      
            <div className="allBaby">
                <button className="childimage"></button>
                <label className="lchildimage">{props.childfname} {props.childlname}</label>
            </div>
       
    )
}
export default Child;