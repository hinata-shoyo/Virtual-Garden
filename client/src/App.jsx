import React from 'react';
import './App.css';
import Landing from './components/landing/landing';
import Navbar from './components/navbar/navbar';
import PlantCard from './components/PlantCard/plant-card';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from './components/explore/explore';
import Desc from './components/desc/desc';



const App = () => {
  
    return(
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/explore' element={<Explore/>} />
            <Route path='/desc' element={<Desc/>} />
          </Routes>
        </Router>
      </div>
  );
};

export default App;
