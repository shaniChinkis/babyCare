import React from 'react';
import './App.css';
import SignUp from './components/signup' 
import Login from './components/login' 
import GovernessHomepage from './components/governessHomepage'
import ParentsHomepage from './components/parentsHomepage'
import AddAnotherChild from './components/addAnotherChild'
import Categories from './components/categories'
import ChildrenList from './components/childrenList'
import Child from './components/child'
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
          <Route path="/categories">
          <Categories/>
          </Route>
          <Route path="/childrenList">
          <ChildrenList/>
          </Route>
          <Route path="/child">
          <Child/>
          </Route>
          <Route path="/">
          <Login/> 
          </Route>
        </Switch>
    </div>
    </Router>
  );
}


