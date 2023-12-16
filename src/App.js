import React from 'react';

import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
        <Nav/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blog/:blogId' element={<Blog/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
