import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { isAnswered } from '../actions/poll';

class ViewQuestion extends Component{
    componentDidMount(){
        this.props.dispatch(isAnswered(false))
      }
    render() {
        const { avatarURL, name,text,id} = this.props;
        return (
            <div>
                <div className='card-header'>
                   <p className='askBy'>{name} asks:</p>
                </div>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={avatarURL} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                                        <p className='question-text'>Would you rather</p>
                            <span>...{text}...</span>
                            <Link exact to={`/home/questions/:${id}`} type='button' className='btn btn-dark btn-block mt-3'>View Poll</Link>
                        </div>
                    </div>
                    </div>
                </div>

        )
    }
}
function mapStateToProps({users, questions},{id}){
    const question = questions[id]
    const avatarURL = users[question.author].avatarURL;
    const name = users[question.author].name
    const text = question.optionOne.text

return {
    avatarURL,name,text,questions
}
}

export default connect(mapStateToProps)(ViewQuestion);