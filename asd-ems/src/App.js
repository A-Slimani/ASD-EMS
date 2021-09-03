import Login from "./Login";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Heading, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <div>
        <Login />
      </div>
      <Switch>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
