import React, { Component } from 'react';
import { connect } from 'react-redux';

class Poll extends Component{
    render() {
        console.log("Props: ", this.props)
        return(
            <div className='card poll-card'>
                <div className='card-header'>
                   <p className='askBy'></p>
                </div>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src='' className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className='question-text'>Would you rather</p>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ users,questions,authedUser },props){
    const { id }= props.match.params;
    const question = questions[id]
    return {
     questions,users,id,question  
    }
}
export default connect(mapStateToProps)(Poll)