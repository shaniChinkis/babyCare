import React, { useState } from 'react'
import "../styles/categories.css"
import ChildrenList from './childrenList'
// import {} from './child'


const Categories=()=>{
 
    const [showList, setShowList]=useState()
    return(
        <div className="ca_all">
            <div className="category_logo"></div>
            <div className="foodImg" ></div>
            <div className="sleepImg" ></div>
            <div className="developmentImg" ></div>
            <div className="activityImg" ></div>

                <button className="caBtn1" onClick={()=>{setShowList('eat')}} >אכילה</button>
                <button className="caBtn2" onClick={()=>{setShowList('sleep')}}>שינה</button>
                <button className="caBtn3" onClick={()=>{setShowList('development')}}>התפתחות</button><br /><br />
                <button className="caBtn4" onClick={()=>{setShowList('activity')}}>פעילות</button><br /><br />

            {showList && <ChildrenList mapBy={showList} />}
        </div>
    )
}
export default Categories;

