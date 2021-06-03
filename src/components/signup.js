import React from 'react';
import Logo from "../image/logo.png"
import "../styles/signup.css"



const signUp=()=>{
    return(    
        <div className="allS">
            <div className="containerS">
            <label className="signUpG">הרשמי כמטפלת</label>
            <div className="signUp">
                <br/>
                <label className="userNameS">שם משתמש</label>
                <br/>
                <input className="userNameInputS" type="email"/>
                <br/>
                <label className="passwordS">סיסמא</label>
                <br/>
                <input className="passwordInputS" type="password"/>
                <br/>              
            </div>
            <button className="signUpBtnGS">הרשמה</button>
            
            <label className="signUpP">הרשם/י כהורה</label>
            <div className="signup2">
            <br/>

                <label className="userNamePS">אימייל</label>
                <br/>
                <input className="userNameInputPS" type="email" />
                <br/>
                <label className="passwordPS" >סיסמא</label>
                <br/>
                <input className="passwordInputPS" type="password"/>               
                <br/>
                <label className="govCodeS" >קוד מטפלת</label>
                <br/>
                <input className="govCodeInputS" type="text"/>
                <br/>
                <label className="childNameS">שם הילד</label>
                <br/>
                <input className="childNameInputS" type="text"/>
                <br/>
                <label className="childIdS" >ת.ז. הילד</label>
                <br/>
                <input className="childIdInputS" type="text"/>
            </div>
            <button className="signUpBtnPS" >הרשמה</button>
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