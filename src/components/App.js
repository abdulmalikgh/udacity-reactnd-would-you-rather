import React, { Component } from 'react';
import  { Route,Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import '../App.css';
import LeaderBoard from '../components/LeaderBoard';
import NewQuestion from '../components/NewQuestion';
import Nav from '../components/Nav';
import Questions from './Questions';
import PollDetails from './PollDetails';
import PageNotFound from './PageNotFound'
class App extends Component{
  render() {
    return (
    <div className="App">
      <Nav />
      <Switch>
         <Route exact path='/' component={Questions} />
         <Route  exact path='/questions/bad_id' component={PageNotFound}/>
         <Route  exact path='/questions/:id' component={PollDetails} />
         <Route  exact path='/leaderboard' component={LeaderBoard} />
         <Route  exact path='/add' component={NewQuestion} />
         <Route  component={PageNotFound} />
      </Switch>
    </div> 
    );
  }
}

export default connect( state => ({
  loggedIn : state.loggedIn
}))(App)
