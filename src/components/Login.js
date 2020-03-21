import React , { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
        state = {
          userId : ''
        }
    
    handleChange = (e)=>{
       const userId = e.target.value;
       this.setState({ userId })
    };
    handleLogin = (e)=>{
      e.preventDefault()
      if(this.state.userId === 'selectUser') {
          alert('please select user to login.');
          this.setState({userId:''})
      } else {
        this.props.dispatch(setAuthedUser(this.state.userId))
      }
      
    };
    render() {
        const { user, users } = this.props;
        return (
            <div className='login'> 
                <div className="card">
                    <div className='card-header'>
                        <h4 className="card-title">Welcome to the Would You Rather App!</h4>
                        <h6 className="card-subtitle mb-2 text-muted " style={{textAlign:'center'}}>Please sign in to continue</h6>
                    </div>
                    <div className="card-body">
                           <p className='formText' style={{textAlign:'center'}}>Sign In</p>
                           <form>
                                <div className="form-group">
                                <label htmlFor="selectUser">
                                 <select id='selectUser' className='form-control' 
                                 onChange={this.handleChange}>

                                     <option value='selectUser'>select user</option>
                                     {user && user.map(user => (
                                         <option key = {users[user].id} 
                                         value={users[user].id}>

                                        {users[user].name}

                                    </option>
                                     ))}
                                 </select>
                                </label>
                                </div>
                                <button type="submit" className="btn btn-primary"
                                 onClick = {this.handleLogin} disabled={this.state.userId === '' || this.stateId === 'selectUser'}>
                                   Sign In
                                </button>
                           </form>
                    </div>
               </div>
            </div>
        )
    }
}
function mapStateToProps({ users, questions, dispatch}) {
    
    return {
        user : Object.keys(users),
        users,
        dispatch
    }
}
export default connect(mapStateToProps)(Login);