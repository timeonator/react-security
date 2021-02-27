import logo from './logo.svg';
import './App.css';
// import { useAuth0 } from "@auth0/auth0-react";
import LoginButton  from "./login-button";
import LogoutButton from "./logout-button";
import Profile from "./profile";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <LoginButton />
          <LogoutButton />
          <Profile />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
