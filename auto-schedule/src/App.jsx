import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';

const App = () => (
  <Router>
    <nav>
      <ul>
        <li><Link to="/login">login</Link></li> 
      </ul>
    </nav>
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
