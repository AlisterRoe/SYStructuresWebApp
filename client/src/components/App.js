import React from "react";
import Signup from "./Signup"; //Signing up using email and password and confirm password
import { AuthProvider } from "../contexts/AuthContext"; //We use Context to manage the state globally.
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //Used for Routing
import Dashboard from "./Dashboard"; // Once the user is logged on successfully, he will be redirected to the Dashboard
import Login from "./Login"; // Login in using the email and password
import PrivateRoute from "./PrivateRoute"; //Only allows the change once the current user is logged in.
import ForgotPassword from "./ForgotPassword"; //changing the password using the new password and email
import UpdateProfile from "./UpdateProfile"; //Update account needs email and password

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            {/*Secure PrivateRoute is used so that the user can just go to the Dashboard if logged in successfully */}
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            {/**Only allow update file if a user is logged in */}
            <PrivateRoute path="/signup" component={Signup} />
            {/**Only allow the already registered users to register a new user*/}
            <Route path="/login" component={Login} />
            {/**Anyone can route to the log in page */}
            <Route path="/forgot-password" component={ForgotPassword} />
            {/**Anyone can go to this route */}
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
