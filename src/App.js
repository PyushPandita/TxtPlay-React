// import About from './Components/About';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

const [mode, setMode] = useState('light');  //whether dark mode is enable or not

const toggleMode = () => {
  if (mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#042743'
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
  }
}

  return (
    <>
      <Router>
        <Navbar title = "TxtPlay" about = "About Us"  mode = {mode} toggleMode = {toggleMode}/>
        <div className = 'container my-3'>
          <Routes>
            <Route exact path="/about" element={<About mode = {mode}/>} > 
              
            </Route>
            <Route exact path="/" element={<TextForm heading = "Enter text here to analyze below" mode = {mode} />} >
              
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
