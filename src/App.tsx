import { useState } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="card">
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
