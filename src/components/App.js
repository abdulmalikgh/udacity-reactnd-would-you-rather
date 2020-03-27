import React, { Component } from 'react';
import  { Route,Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import '../App.css';
import LeaderBoard from '../components/LeaderBoard';
import Home from '../components/Home';
import NewQuestion from '../components/NewQuestion';
import Nav from '../components/Nav';

class App extends Component{
  render() {
    return (
    <div className="App">
      <Nav />
      <Switch>
         <Route path='/home' component={Home} />
         <Route exact path='/add' component={NewQuestion} />
         <Route exact path='/leaderboard' component={LeaderBoard} />
         <Redirect  from='/' to='/home' />
      </Switch>
    </div> 
    );
  }
}

export default connect( state => ({
  loggedIn : state.loggedIn
}))(App)
