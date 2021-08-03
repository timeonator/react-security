import React from 'react'
import './App.css';
import Navigation from './components/navigation'
import { useAuth0 } from './react-auth0-spa';

function App() {
    const { loading } = useAuth0();

    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
    <React.StrictMode>
      <div className="App">
        <header>
        <Navigation />         
        </header>
    </div>          
    </React.StrictMode>
  );
}
export default App;
