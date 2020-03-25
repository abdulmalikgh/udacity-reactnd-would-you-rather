import React from 'react';
import { connect } from 'react-redux';
import { handleAddQuestionAnswer } from '../actions/questions';

class UnansweredPoll extends React.Component{
    state = {
        selectedOption : 'optionOne'
    }
    render(){
       const { author,optionOne,optionTwo,avatarURL,dispatch,questionId,  authedUser } = this.props;
       const handleChange = (e)=>{
           this.setState({ selectedOption : e.target.value})
       }
       const handleSelectedOption = (e)=> {
           e.preventDefault()
           const qid = questionId;
           const answer = this.state.selectedOption
           dispatch(handleAddQuestionAnswer({authedUser,qid,answer}))
           //dispatch(isAnswered('true'))
       }
        return(
              <div>
                  <div className='card-header'>
                     <p className='askBy'>{ author } asks:</p>
                  </div>
                  <div className="row no-gutters">
                      <div className="col-md-4">
                        <img src={avatarURL} className="card-img" alt={author} />
                      </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className='question-text'>Would you rather</p>
                            <form className='unanswered-poll'>
                                <div className='form-check'>
                                   <input className='form-check-input' type='radio' value='optionOne' name='poll' 
                                   id='optionOne' onChange={handleChange} checked={this.state.selectedOption === 'optionOne'}/>
                                    <label className='form-check-label' htmlFor='optionOne'>
                                    { optionOne }
                                    </label>
                                </div>
                                <div className='form-check'>
                                   <input className='form-check-input' type='radio' value='optionTwo' name='poll' 
                                   id='optionTwo' onChange={handleChange} checked={this.state.selectedOption === 'optionTwo'}/>
                                    <label className='form-check-label' htmlFor='optionTwo'>
                                    { optionTwo }
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-dark mt-3" onClick={handleSelectedOption}>submit</button>
                            </form>
                        </div>
                    </div>
                  </div> 
            </div>      
        )
    }
}
function mapStateToProps({users,questions,authedUser,dispatch},{ id }) {
    const questionId = id.substr(1)
    const question = questions[questionId]
    const user = users[question.author]
    const author = user.name;
    const avatarURL = user.avatarURL;
    const optionOne = question.optionOne.text;
    const optionTwo = question.optionTwo.text
    return {
     questionId,author,avatarURL,optionOne,optionTwo,dispatch,authedUser
    }
}
export default connect(mapStateToProps)(UnansweredPoll)