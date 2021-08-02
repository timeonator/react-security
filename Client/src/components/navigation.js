import React from 'react';
import {Nav} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import About from './about'
import Contact from './contact'
import Home from './home'

const Navigation = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <Router>
    <div className="header">
        {!isAuthenticated && (
            <Nav className="nav nav-pills pull-right">
                <Nav.Link href="/about">About</Nav.Link>
                <button onClick={() => loginWithRedirect({})}>Log in</button>
            </Nav>
        )}
        <h3 className="text-muted">Secure</h3>
        {isAuthenticated && (
            <Nav className="nav nav-pills pull-right">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            <button onClick={() => logout()}>Logout</button>
            </Nav>
        )}
        <Switch>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
            <Route exact path="/" component={About}/>
        </Switch>
    </div>
    </Router>
  );
}
export default Navigation; 