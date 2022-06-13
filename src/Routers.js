import React from "react";
import {Switch, Route} from 'react-router-dom';

import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";




export default () => {
    return(
        
         <Switch>
               <Route exact path="/">
                  <SignIn/>
            </Route>
            <Route exact path="/SignUp">
                  <SignUp/>
            </Route>
            <Route exact path="/Home">
                  <Home/>
            </Route>
        </Switch>
            
       
    );
}