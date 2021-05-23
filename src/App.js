import "./styles/base.css";
import "./styles/variables.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./config/Auth";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <div>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/SignUp" component={SignUp} />
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
