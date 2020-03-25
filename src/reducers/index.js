import { combineReducers } from 'redux';
import users from '../reducers/users';
import questions from '../reducers/questions';
import authedUser from '../reducers/authedUser';
import loggedIn from '../reducers/loggedIn';
import poll from '../reducers/poll';

export default combineReducers({ 
    loggedIn,
    users,
    authedUser,
    questions,
    poll
})