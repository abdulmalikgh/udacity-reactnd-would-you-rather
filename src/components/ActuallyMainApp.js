import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import App from '../components/App';
import Login from '../components/Login';
import handleInitialData from '../actions/shared';
import { changeLoggedIn } from '../actions/loggedIn';

class ActuallyMainApp extends Component{
    componentDidMount() {
        this.props.dispatch(handleInitialData());
        this.props.dispatch(changeLoggedIn(true));
      }
    render() {
        return (
           <Switch>
               <Route path='/login' component={Login} />
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