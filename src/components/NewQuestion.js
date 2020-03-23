import React , { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className='newQuestion'> 
                <div className="card newQuestion-card ">
                    <div className='card-header'>
                        <h2 className="card-title">Create New Question</h2>
                    </div>
                    <div className="card-body">
                           <p className='questionText'>Complete the question:</p>
                           <p className='would-you-rather'> Would you rather...</p>
                           <form>
                                <div className="form-group">
                                  <label>
                                      <input type='text' className='form-control' placeholder='Enter Option One Text Here' />
                                  </label>
                                </div>
                                <span style={{marginBottom:'10px'}}>OR</span>
                                <div className="form-group">
                                  <label>
                                      <input type='text' className='form-control' placeholder='Enter Option Two Text Here'/>
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