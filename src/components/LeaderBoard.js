import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users';

class LeaderBoard extends Component{
    render() {
      return(
        <div >
          {
            this.props.usersId.map( id => (
              <div className='card leaderboard-card' key={id}>
                <Users id={id} />
              </div>  
            ))
          }
        </div>
      )
    }
}
function mapStateToProps({ users }){
  const usersId = Object.keys(users)
  .sort( (a,b) => (Object.keys(users[b].answers).length + users[b].questions.length) -(users[a].questions.length + Object.keys(users[a].answers).length)
  )
  
  return {
    usersId
  }
}
export default connect(mapStateToProps)(LeaderBoard);