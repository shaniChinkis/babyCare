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
import CategoriesFill from './components/categoriesFill';
import CategoryDescription from './components/categoryDescription'
import {Switch, Route, BrowserRouter as Router } from "react-router-dom"

export default function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/CategoriesFill">
          <CategoriesFill/>
          </Route>
          <Route path="/CategoryDescription">
          <CategoryDescription/>
          </Route>
          <Route path="/SignUp">
          <SignUp/>
          </Route>
          <Route path="/GovernessHomepage">
          <GovernessHomepage/>
          </Route>
          <Route path="/ParentsHomepage">
          <ParentsHomepage/>
          </Route>
          <Route path="/AddAnotherChild">
          <AddAnotherChild/>
          </Route>
          <Route path="/Categories">
          <Categories/>
          </Route>
          <Route path="/ChildrenList">
          <ChildrenList/>
          </Route>
          <Route path="/Child">
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


