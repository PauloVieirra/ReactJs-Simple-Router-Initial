import React from "react";
import { Switch, Route} from 'react-route-dom';



export default () => {
    return(
        <Switch>
           
            <Route exact path="/">
                  <SingIn/>
            </Route>
            <Route exact path="/SignUp">
                  <SingUp/>
            </Route>
            <Route exact path="/Home">
                  <Home/>
            </Route>
        </Switch>
    );
}