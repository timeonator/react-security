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
      </header>
    </div>
  );
}

export default App;
