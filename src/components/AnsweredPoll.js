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
                <div className="col-md-4">
                  <img src={avatarURL} className="card-img" alt={author}/>
                </div>
              <div className="col-md-8">
                  <div className="card-body">
                      <p className='question-text'> Results: </p>
                      <p>
                           { optionOne }
                           <span>{optionOneVotes} out of {totalVotes}</span>
                           <span>percentage {per_optionOne}</span> 
                      </p>
                      <p>
                      { optionTwo } 
                           <span>{optionTwoVotes} out of {totalVotes}</span>
                           <span>percentage {per_optionTwo}</span> 
                      </p>
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