import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import JuanCamilo from './components/JuanCamilo';
import Valentina from './components/Valentina';
import Nury from './components/Nury';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/juan-camilo" element={<JuanCamilo />} />
          <Route path="/valentina" element={<Valentina />} />
          <Route path="/nury" element={<Nury />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;