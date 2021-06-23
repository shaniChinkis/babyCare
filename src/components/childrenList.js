import React from 'react';

import "../styles/childrenList.css";
import Child from './child';

const ChildrenList=(props)=>{
    
           let mychildrenList=[{fName: "yair", lName: "cohen"},{fName: "michal", lName: "levi"}, {fName: "yael", lName: "weiss"}];
  
    return(
        <div className="chL_all">
        { mychildrenList.map(c => <Child childfname={c.fName} childlname={c.lName}/>)}
        </div>
    )
}
export default ChildrenList;