import './App.css';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Home from './pages/home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>

      <BrowserRouter >
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/about">Sobre</Link>
          </li>
        </ul>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
