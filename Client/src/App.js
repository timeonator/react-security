import React from 'react'
import logo from './logo.svg';
import './App.css';
// import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./profile";
import Navigation from './components/navigation'

function App() {
    return (
    <React.StrictMode>
      <div className="App">
        <header>
            <Navigation />            
        </header>
        <Profile />
    </div>          
    </React.StrictMode>
  );
}
export default App;
