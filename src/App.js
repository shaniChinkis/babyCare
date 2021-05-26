import React from 'react';
import './App.css';
import SignUp from './components/signup' 
import Login from './components/login' 
import GovernessHomepage from './components/governessHomepage'
import ParentsHomepage from './components/parentsHomepage'
import AddAnotherChild from './components/addAnotherChild'
import {Switch, Route, BrowserRouter as Router } from "react-router-dom"

export default function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route path="/signUp">
          <SignUp/>
          </Route>
          <Route path="/governessHomepage">
          <GovernessHomepage/>
          </Route>
          <Route path="/parentsHomepage">
          <ParentsHomepage/>
          </Route>
          <Route path="/addAnotherChild">
          <AddAnotherChild/>
          </Route>
          <Route path="/">
          <Login/> 
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

// import { useEffect } from "react";

// function App() {  
  
//   useEffect(() => {
//     fetch("http://localhost:3000/login?user=user1")
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => {
//         console.log("error", err);
//       });
//   }, []);
//   return <div className="App">LOGIN</div>;
// }

// export default App;
