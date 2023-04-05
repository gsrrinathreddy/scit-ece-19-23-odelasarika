
import react from 'react';
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Aboutus from './pages/Aboutus';
import Certifications from './pages/Certifications'; 
import Contactme from './pages/Contactme';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies' ;
import Projects from './pages/Projects';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Workshops from './pages/Workshops';
import Navbar from './components/Navbar';
 function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Aboutus" element ={<Aboutus/>}/>
        <Route path="Certifications" element={<Certifications/>}/>
        <Route path="Contactme" element={<Contactme/>}/>
        <Route path="Experience" element={<Experience/>}/>
        <Route path="Hobbies" element={<Hobbies/>}/>
        <Route path="Projects" element={<Projects/>}/>
        <Route path="Qualification" element={<Qualification/>}/>
        <Route path="Skills" element={<Skills/>}/>
        <Route path="Workshops" element={<Workshops/>}/>
        
       
      </Routes>
      </BrowserRouter>
    
      </div>
 );
}

export default App;
