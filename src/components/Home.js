import React,{ Component } from 'react';
import { Route , Redirect } from 'react-router-dom';
import Poll from './Poll';
import ViewPoll from './ViewPoll';
import Questions from './Questions';

class Home extends Component{
    render(){
        const { match } = this.props;
        return(
            <div className='container'>
                <div className='col'>
                    <div className='row'>
                      <Route exact path={`${match.path}/questions`} component={Questions} />
                      <Route exact path={`${match.path}/questions/:id`} component={Poll} />
                      <Route path={`${match.path}/questions/:viewpoll`} component={ViewPoll} />
                      <Redirect exact from='/home' to={`${match.path}/questions`} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;
