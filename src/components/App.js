import React, { Component ,Fragment } from 'react';
import  { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import LeaderBoard from '../components/LeaderBoard';
import NewQuestion from '../components/NewQuestion';
import Nav from '../components/Nav';
import Home from './Home';
import PollDetails from './PollDetails';
import PageNotFound from './PageNotFound'
import Login from './Login';
import handleInitialData from '../actions/shared';

class App extends Component{
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
    <Router >
      <div className="App">
        {!this.props.loggedIn ?
         (<Route render={()=> (
           <Login />
         )}/>)
         :
         (
          <Fragment>
             <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route   path='/questions/bad_id' component={PageNotFound}/>
              <Route   path='/questions/:id' component={PollDetails} />
              <Route   path='/leaderboard' component={LeaderBoard} />
              <Route   path='/add' component={NewQuestion} />
              <Route  component={PageNotFound} />
            </Switch>
          </Fragment>
         )}
      </div> 
    </Router>
    );
  }
}

function mapStateToProps({loggedIn,authedUser,dispatch}) {
  return {
    authedUser, loggedIn,dispatch
  }
}
export default connect(mapStateToProps)(App)
