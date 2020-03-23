import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import App from '../components/App';
import Login from '../components/Login';
import handleInitialData from '../actions/shared';
import LoginRequiredRoute  from './LoginRequiredRoute'

class ActuallyMainApp extends Component{
    componentDidMount() {
        this.props.dispatch(handleInitialData());
      }
    render() {
        return (
           <Switch>
               <Route path='/login' component = {Login} />
               <LoginRequiredRoute component= {App}/>
               <Route component={App} />
           </Switch>
        )
    }
}
export default withRouter(connect( 
    state => ({
        loggedIn : state.loggedIn
    })
)(ActuallyMainApp));