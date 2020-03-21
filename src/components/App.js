import React, { Component } from 'react';
import  { Route,Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';

//import handleInitialData from '../actions/shared';
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
         <Route exact path='/home' component={Home} />
         <Route exact path='/new' component={NewQuestion} />
         <Route exact path='/leaderboard' component={LeaderBoard} />
         <Redirect exact from='/' to='/home' />
      </Switch>
    </div> 
    );
  }
}

export default connect( state => ({
  loggedIn : state.loggedIn
}))(App)
