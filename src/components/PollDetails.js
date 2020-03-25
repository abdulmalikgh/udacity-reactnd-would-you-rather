import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnAnsweredPoll from './UnAnsweredPoll';
import AnsweredPoll from './AnsweredPoll';

class Poll extends Component{
    render() {
        const { poll, id} = this.props;
        return(
         <div className='card home-card mb-3'>
             {poll === false ?  <UnAnsweredPoll id={id} /> : <AnsweredPoll id ={id}/>}
         </div>
        )
    }
}
function mapStateToProps({ users,questions,authedUser,poll },props){
    const { id }= props.match.params;
    
    return {
     poll,id
    }
}
export default connect(mapStateToProps)(Poll)