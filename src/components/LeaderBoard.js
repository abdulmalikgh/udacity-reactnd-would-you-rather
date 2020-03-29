import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import LeaderBoardCard from './LeaderBoardCard';

class LeaderBoard extends Component{
    render() {
      return(
        <Fragment>
          {
            this.props.usersId.map( id => (
              <div className='card leaderboard-card' key={id}>
                <LeaderBoardCard id={id} />
              </div>  
            ))
          }
        </Fragment>
      )
    }
}
function mapStateToProps({ users }){
  const usersId = Object.keys(users)
  .sort( (a,b) => (Object.keys(users[b].answers).length + users[b].questions.length) - (users[a].questions.length + Object.keys(users[a].answers).length)
  )
  
  return {
    usersId
  }
}
export default connect(mapStateToProps)(LeaderBoard);