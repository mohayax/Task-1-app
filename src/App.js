import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </Router>
  );
}



export default App;
