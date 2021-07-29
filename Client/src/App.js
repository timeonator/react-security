import React from 'react'
import logo from './logo.svg';
import './App.css';
// import { useAuth0 } from "@auth0/auth0-react";
import LoginButton  from "./login-button";
import LogoutButton from "./logout-button";
import Profile from "./profile";
import Navigation from './components/navigation'


function App() {
    return (
    <div className="App">
        <header>
            <Navigation />            
        </header>

        <Profile />
    </div>
  );
}

export default App;
