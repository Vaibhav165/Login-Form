import React, {useState} from 'react';
import { Switch } from "react-router";
import Home from "./pages/home";
import {Register} from "./pages/register";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App()
{
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return(
    // <Home />
    <Router>
    <div className="App">
          <Switch>
            <Route path="/" exact={true}>
              <Register showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/register">
              <Register showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <Home showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
          </Switch>
          {/* <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/> */}
    </div>
    </Router>
  );

}

export default App;