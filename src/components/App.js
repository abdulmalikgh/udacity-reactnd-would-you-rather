import React from 'react';
import '../App.css';
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import NewQuestion from './NewQuestion'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className='content'>
           <Route exact path='/' component={Dashboard} />
           <Route path='/login' component={Login} />
           <Route path='/new' component={NewQuestion} />
        </div>
      </div>
    </Router>
   
  );
}

export default App;
