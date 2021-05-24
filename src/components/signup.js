import React from 'react';
import Logo from "../image/logo.png"
import "../styles/signup.css"



function signUp(){
    return(    
        <div className="all">
            <div>
            <label className="signUpG">הרשמי כמטפלת</label>
            <div className="signUp">
                <br/>
                <label className="userName">שם משתמש</label>
                <br/>
                <input className="userNameInput" type="email"/>
                <br/>
                <label className="password">סיסמא</label>
                <br/>
                <input className="passwordInput" type="password"/>
                <br/>              
            </div>
            <button className="signUpBtnG">הרשמה</button>
            </div>
            <div>
            <label className="signUpP">הרשם/י כהורה</label>
            <div className="signup2">
            <br/>

                <label className="userNameP">אימייל</label>
                <br/>
                <input className="userNameInputP" type="email" />
                <br/>
                <label className="passwordP" >סיסמא</label>
                <br/>
                <input className="passwordInputP" type="password"/>               
                <br/>
                <label className="govCode" >קוד מטפלת</label>
                <br/>
                <input className="govCodeInput" type="text"/>
                <br/>
                <label className="childName">שם הילד</label>
                <br/>
                <input className="childNameInput" type="text"/>
                <br/>
                <label className="childId" >ת.ז. הילד</label>
                <br/>
                <input className="childIdInput" type="text"/>
            </div>
            <button className="signUpBtnP" >הרשמה</button>
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