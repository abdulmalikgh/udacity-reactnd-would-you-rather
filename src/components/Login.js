import React , { Component } from 'react';

class Login extends Component {
    render() {
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
                                 <select id='selectUser' className='form-control'>
                                     <option>select user</option>

                                 </select>
                                </label>
                                </div>
                                <button type="submit" className="btn btn-primary">Sign In</button>
                           </form>
                    </div>
               </div>
            </div>
        )
    }
}

export default Login;