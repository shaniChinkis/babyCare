import React, { useState } from 'react'
import "../styles/categories.css"
import ChildrenList from './childrenList'
// import {} from './child'


const Categories=()=>{
 
    const [showList, setShowList]=useState()
    return(
        <div className="ca_all">
            <div className="category_logo"></div><br />
            <div className="foodImg" ></div><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="sleepImg" ></div><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="developmentImg" ></div><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="activityImg" ></div><br /><br /><br /><br /><br /><br /><br /><br />

                <button className="caBtn1" onClick={()=>{setShowList('eat')}} >אכילה</button><br /><br />
                <button className="caBtn2" onClick={()=>{setShowList('sleep')}}>שינה</button><br /><br />
                <button className="caBtn3" onClick={()=>{setShowList('development')}}>התפתחות</button><br /><br />
                <button className="caBtn4" onClick={()=>{setShowList('activity')}}>פעילות</button><br /><br />

            {showList && <ChildrenList mapBy={showList} />}
        </div>
    )
}
export default Categories;

