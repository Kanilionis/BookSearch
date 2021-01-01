import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooks from "./pages/Saved";
import SearchBook from "./pages/Search";
import Nav from "./components/Nav"

function App() {
  return (
    <Router>
      <div>
      <Nav/>
        <Switch>
          <Route exact path="/">
            <SearchBook />
          </Route>
          <Route exact path="/books/:id">
            <SavedBooks />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
