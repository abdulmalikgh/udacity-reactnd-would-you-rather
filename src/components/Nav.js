import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Nav(){
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
       </ul>
     </div>
    </nav>
  )
}