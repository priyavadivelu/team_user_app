import TeamsList from "./components/teamsList";
import UsersList from "./components/usersList";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={TeamsList} />
          <Route path="/teams/:id" component={UsersList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
