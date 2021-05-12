import React from 'react';
import Logo from "../image/logo.png"
import "../styles/signup.css"



function signUp(){
    return(    
        <div className="all">
           
            <div className="header">
                       <img className="logoImg" src={Logo} />
                       </div>
            <div className="div">
            
            <div>
            <label className="big">הרשמי כמטפלת</label>
            <div className="signup">
                <br/>
                <label>שם משתמש</label>
                <br/>
                <input type="email"/>
                <br/>
                <label>סיסמא</label>
                <br/>
                <input type="password"/>
                <br/>              
            </div>
            <button>הרשמה</button>
            </div>
            <div>
            <label className="big">הרשם/י כהורה</label>
            <div className="signup">
            <br/>

                <label>אימייל</label>
                <br/>
                <input type="email" />
                <br/>
                <label>סיסמא</label>
                <br/>
                <input type="password"/>               
                <br/>
                <label>קוד מטפלת</label>
                <br/>
                <input type="text"/>
                <br/>
                <label>שם הילד</label>
                <br/>
                <input type="text"/>
                <br/>
                <label>ת.ז. הילד</label>
                <br/>
                <input type="text"/>
            </div>
            <button>הרשמה</button>
            </div>
            </div>
        </div>
    )
}

export default signUp;

// const HomePage = () => {
//     const [currentPage, setCurrentPage] = useState('homePage');

//     const renderPage=()=>{
//         switch (currentPage) {
//             case 'callEvent': return < Events />; break;
//             case 'callSales': return < Sales />; break;
//             case 'callSearchBabySitter': return < SearchBabySitter />; break;
//             case 'callLogIn': return < LogIn />; break;
//             case 'homePage': return < HomePage />; break;
            

//         }
//     }

//     <button onClick={() => setCurrentPage('callEvent')} >ארועים בשכונה</button>
//     <button onClick={() => setCurrentPage('callSales')}>מכירות יד 2</button>
//     <button onClick={() => setCurrentPage('callSearchBabySitter')}>search BabySitter</button>
//     <button onClick={() => setCurrentPage('callLogIn')}>Log In</button>
//     {renderPage()} */}