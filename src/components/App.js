import React, { Component } from 'react';
import  { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import '../App.css';
import Login from './Login';
import { connect } from 'react-redux';
import handleInitialData from '../actions/shared';
import Nav from  '../components/Nav';
import Dashboard from '../components/Dashboard';
import NewQuestion from '../components/NewQuestion';
import LeaderBoard from '../components/LeaderBoard';

class App extends Component{
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
    <Router>
    <div className="App">
 
      <div className='content'>
        <Switch>
         <Route path='/' component={Login} exact/>
         <Nav/>
         <Route path='/home' component={NewQuestion} />
         <Route path='/new' component={Dashboard} />
         <Route path='/leaderbaord' component={LeaderBoard} />
        </Switch>
      </div>
    </div> 
    </Router>
    );
  }
}

export default connect()(App)
