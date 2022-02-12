import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jobpostings from "./components/Jobposting";
import Candidates from "./components/Candidate";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/candidate/:id">
          <Candidates />
        </Route>
        <Route path="/">
          <Jobpostings />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
