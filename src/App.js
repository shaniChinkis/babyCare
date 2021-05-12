import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/signup' 
import Login from './components/login' 
import GovernessHomepage from './components/governessHomepage'
import ParentsHomepage from './components/parentsHomepage'
import AddAnotherChild from './components/addAnotherChild'


function App() {
  return (
    <div className="App">
     {/* <SignUp/> */}
     <Login/>
     {/* <GovernessHomepage/> */}
     {/* <ParentsHomepage/> */}
     {/* <AddAnotherChild/> */}
    </div>
  );
}

export default App;
