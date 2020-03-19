import React , { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className='login'> 
                <div class="card">
                    <div className='card-header'>
                        <h2 className="card-title">Create New Question</h2>
                    </div>
                    <div class="card-body">
                           <p className='questionText'>Complete the question:</p>
                           <p className='would-you-rather'> Would you rather...</p>
                           <form>
                                <div class="form-group">
                                  <label>
                                      <input type='text' className='form-control' placeholder='Enter Option One Text Here' />
                                  </label>
                                </div>
                                <span style={{marginBottom:'10px'}}>OR</span>
                                <div class="form-group">
                                  <label>
                                      <input type='text' className='form-control' placeholder='Enter Option Two Text Here'/>
                                  </label>
                                </div>
                                <button type="submit" class="btn btn-primary">Sign In</button>
                           </form>
                    </div>
               </div>
            </div>
        )
    }
}

export default Login;