import React from 'react';
import { connect } from 'react-redux';
class Users extends React.Component{
    render(){
        const { name, avatarURL, questions, answers, total } = this.props;
        return (
            <div className='row no-gutters'>
                <div className='col-md-4 col-lg-4'>
                    <img className='card-img'src={avatarURL} alt={avatarURL}/>
                </div>
                <div className='col-md-8 col-lg-8'>
                    <div className='card-body'>
                        <p>{name}</p>
                        <p> Answered Questions : {answers}</p>
                        <p> created Questions: {questions}</p>
                        <p> total : {total } </p>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ users },{id}){
    const user = users[id];
    const name = user.name;
    const avatarURL = user.avatarURL;
    const questions = user.questions.length;
    const answers = Object.keys(user.answers).length;
    const total = questions + answers;
 return {
   name , avatarURL, questions, answers, total
 }
}
export default connect(mapStateToProps)(Users);