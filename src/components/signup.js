import React from 'react';
import Paper from 'material-ui/Paper';

import "../styles/signup.css"

const styles = {
    paperContainer: {
        backgroundImage: `url(${""})`
    }
};

function signUp(){
    return(    
    <Paper style={styles.paperContainer}>
</Paper>

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