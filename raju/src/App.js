import react from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Abotus from './pages/Abuotus';
import Experience from './pages/Experiance';
import Hobbies from './pages/Hobbies' ;
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Aboutus" element ={<Abotus/>}/>
        <Route path="Experiance" element={<Experience/>}/>
        <Route path="Hobbies" element={<Hobbies/>}/>
        <Route path="Qualification" element={<Qualification/>}/>
        <Route path="Skills" element={<Skills/>}/>
       
      </Routes>
      </BrowserRouter>
    
      </div>
 );
}

export default App;
