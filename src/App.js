import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import Network from './networkPage/Network';


function App() {
  return (
    
    <Router>
       <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/network" element={<Network/>} />
      </Routes>
    </Router>
  )
}

export default App
