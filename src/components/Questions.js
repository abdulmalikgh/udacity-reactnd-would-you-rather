import React, { Component } from 'react' ;
import { connect } from 'react-redux';
import UnansweredQuestions from './UnansweredQuestions';

class Questions extends Component{
    render() {
        const { AnsweredQuestionsId } = this.props;
        return (
        <div className='card home-card mb-3' id='home'>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Unanswered Questions</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Answered Questions</a>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  {AnsweredQuestionsId.map( id => (
                      <div className="card questions-card" key={id}>
                          <UnansweredQuestions id={id} />
                      </div>
                  ))}
                </div>
            </div>
         </div>
        )

    }
}
function mapStateToProps({questions, authedUser, users}){
    const questionId = Object.keys(questions).sort( (a,b) => questions[b].timestamp - questions[a].timestamp)
    const question = questionId.map( id => { 
        return questions[id]
    })
    const user = users[authedUser]
    const AnsweredQuestionsId = Object.keys(user.answers)
    const AnsweredQuestions = AnsweredQuestionsId.map( id => {
        return questions[id]
    })
  
    return {
        AnsweredQuestionsId,
    }
  
}
export default connect(mapStateToProps)(Questions);