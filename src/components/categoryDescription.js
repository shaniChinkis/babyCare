import React from 'react'
import "../styles/categoryDescription.css"


const CategoryDescription=()=>{
    return(
        <div className='cd_divAll'>
            <div className="CategoryDescription_logo"></div>
            <input className="cd_description"/><br/><br/>
            <input className="cd_category"/>
            <button className="backToHomeCategory"><div className="pforback"/>חזרה לדף הבית</button>

        </div>
    )
}
export default CategoryDescription;