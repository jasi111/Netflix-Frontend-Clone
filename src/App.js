import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Homescreen from './components/Homescreen';
import { auth } from './firebase';
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import Profile from './components/Profile';
import Test from './components/Test';

function App() {
  //  const user ={
  //   names: "me"
  // };
  // const user = null;
 
  const user = useSelector(selectUser);//selectUser is coming from userSlice.js > feature 
  const dispatch = useDispatch();

   useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) =>  {
        //listener which listens to user logged in states     (userAuth => {
        if (userAuth) {
        //if user exist logged in else logout
        //logged in
        //console.log(userAuth);//
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        }

else {
    //logged out
    dispatch(logout());
  }
});
    
return unsubscribe;
    
}, [dispatch]);


  
  return (
  
  <div className= "app">

  <Router>
        { !user ? (//if no user render login screen
          // <Login/>
          <Login/>
        ):(//otherwiese render other below screen
        <Switch>
        <Route path="/profile">
         <Profile/>
        </Route>
        <Route exact path="/test">
            <Test/>
        </Route>
        <Route exact path="/">
            <Homescreen/>
        </Route>
        
          {/* <Route path="/test"><h1>test</h1></Route> */}
        </Switch>      
  )}
  </Router>
  </div>

  );         
}

export default App;
