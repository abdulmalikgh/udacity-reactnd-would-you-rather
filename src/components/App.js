import React from 'react';
import '../App.css';
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className='content'>
           <Route exact path='/' component={Dashboard} />
        </div>
      </div>
    </Router>
   
  );
}

export default App;
