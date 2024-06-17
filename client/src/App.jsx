
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Compare from './Components/Compare';
import Result from './Components/Result'; // Import Result component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/compare/result" element={<Result />} /> {/* Add route for Result component */}
      </Routes>
    </Router>
  );
};

export default App;
