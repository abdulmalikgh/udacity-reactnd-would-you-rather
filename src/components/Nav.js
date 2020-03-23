import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect }  from 'react-redux';
import { clearAuthedUser } from '../actions/authedUser';
import {changeLoggedIn } from '../actions/loggedIn';
class Nav extends Component{
  render(){
    const  logout = ()=>{
      const {dispatch, authedUser } = this.props;
      dispatch(changeLoggedIn(false))
      dispatch(clearAuthedUser(authedUser))
     }
     
    const { user } = this.props;
    
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
         <ul className="navbar-nav mr-auto ml-auto">
         <li className="nav-item">
           <NavLink className="nav-link active" to='/home'>Home</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link" to='/new'>New Question</NavLink>
          </li>
         <li className="nav-item">
          <NavLink className="nav-link" to='/leaderboard'>Leader Board</NavLink>
          </li>
          <li className="nav-item pl-4">
           { user && <span className='username nav-link pl-2'> hello, <span></span>{user.name} </span>}
          </li>
          <li>
          <NavLink className="nav-link" to='/login' onClick={logout}>Logout</NavLink>
          </li>
         </ul>
       </div>
      </nav>
    )
  }
  
}

function mapStateToProps({authedUser,users,dispatch }){
  return {
    authedUser,
    user: users[authedUser],
    dispatch
  }
}
export default connect(mapStateToProps)(Nav);