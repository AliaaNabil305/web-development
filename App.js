import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
import Bar from './Components/Bar';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Main from './Components/Main';
import Below from './Components/Below';
function App() {
  return (
    <div className="App">
    <Router>
        <Bar/>
       
        <Routes>
           <Route path="/Main" element={<Main/>} />
          <Route path="/Resume" element={<Resume/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
