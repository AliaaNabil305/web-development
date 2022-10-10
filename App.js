import logo from './logo.svg';
import './App.css';
import User from './components/User';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Error from '../src/components/Error';
import Navbar from './components/Navbar';
import Data from './components/Data';
import Todos from './components/Todos';
function App() {
  
  return (
    <div className="App">
     
      <Router>
        <Navbar />
        <Routes>
        <Route path="/Todos" element={<Todos/>} />
        <Route path="/Data" element={<Data/>} />
          <Route path="*" element={<Error/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>


      </div>
      
  );
}

export default App;
