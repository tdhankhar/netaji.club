// react libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./auth/Login.js";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;
