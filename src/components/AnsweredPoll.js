import React from 'react';
import { connect } from 'react-redux';

class AnsweredPoll extends React.Component{
    render(){
        const { avatarURL, author, optionOne, optionTwo, 
        optionOneVotes, optionTwoVotes, totalVotes,
        per_optionOne,per_optionTwo,} = this.props;
        //console.log('Props from Answered Question ', this.props.userAnsweredQuestionsId)
        return(
            <div>
            <div className='card-header'>
               <p className='askBy'> Asked by { author } :</p>
            </div>
            <div className="row no-gutters">
                <div className="col-md-5">
                    <div className='card-img-container'>
                        <img src={avatarURL} className="card-img" alt={author}/>  
                    </div>
                </div>
              <div className="col-md-7">
                  <div className="card-body">
                      <p className='question-text'> Results: </p>
                       <div className='card mb-2 border-dark'>
                          <div className='card-body'>
                                <p className='poll-text'>Would you rather { optionOne }</p>
                                <div className="progress " style={{height:'30px'}}>
                                    <div className="progress-bar bg-dark" role="progressbar" 
                                    style={{width: `${per_optionOne}%`}} aria-valuenow={per_optionOne} aria-valuemin="0" aria-valuemax="100">{`${per_optionOne}%`}</div>
                                </div>
                                <p className='poll-vote'>{optionOneVotes} out of {totalVotes} votes </p>
                          </div>
                       </div>
                       <div className='card border-dark'>
                            <div className='card-body'>
                                <p className='poll-text'> Would you rather { optionTwo }</p>
                                 <div className="progress " style={{height: '30px'}}>
                                    <div className="progress-bar bg-dark" role="progressbar" 
                                    style={{width: `${per_optionTwo}%`}} aria-valuenow={per_optionTwo} aria-valuemin="0" aria-valuemax="100">{`${per_optionTwo}%`}</div>
                                 </div>
                                <p className='poll-vote'>{optionTwoVotes} out of {totalVotes} votes</p> 
                            </div>
                       </div>
                  </div>
              </div>
            </div> 
      </div>     
        )
    }
}
function mapStateToProps({users,questions,authedUser},{id}) { 
    const questionId = id.substr(1)
    const question = questions[questionId];
    const user = users[question.author];
    const author = user.name;
    const avatarURL = user.avatarURL;
    const optionOne = question.optionOne.text;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwo = question.optionTwo.text;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const per_optionOne = (optionOneVotes / totalVotes ) * 100;
    const per_optionTwo = ( optionTwoVotes / totalVotes ) * 100;
    const options = [optionOne,optionTwo]
    const userAnsweredQuestionsId = user.answers;

    return {
        author, avatarURL, optionOne, optionTwo, question,
        optionOneVotes,optionTwoVotes,totalVotes,per_optionOne,per_optionTwo,
        userAnsweredQuestionsId
    }
}
export default connect(mapStateToProps)(AnsweredPoll)