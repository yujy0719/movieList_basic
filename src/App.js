import React from "react";
import Navbar from "./Component/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import routes from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Switch>
            {routes.map(route => {
              return(
                <Route 
                  key= {route.key}
                  path={route.path}
                  exact
                >
                <route.component />
                </Route>
              )
            })}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
