import React,{ Component } from 'react';
import { Route , Redirect } from 'react-router-dom';
import Questions from './Questions';
import PollDetails from './PollDetails';

class Home extends Component{
    render(){
        const { match } = this.props;
        return(
            <div className='container'>
                <div className='col'>
                    <div className='row'>
                      <Route exact path={`${match.path}/questions`} component={Questions} />
                      <Route exact path={`${match.path}/questions/:id`} component={PollDetails} />
                      <Redirect exact from='/home' to={`${match.path}/questions`} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;
