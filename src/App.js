import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Rembourser from './pages/Rembourser';
import Crediter from './pages/Crediter';


const App = () => {
  return (
    <div>
           <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Home />}/>
        <Route path='/Services' element={<Services/>} />
        <Route path='/rembourser' element={<Rembourser/>} /> 
        <Route path='/crediter' element={<Crediter/>} />
        
      </Routes>
     
     </BrowserRouter>
    </div>
     
        
  );
};

export default App;
