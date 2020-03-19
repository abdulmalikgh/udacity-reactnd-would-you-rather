import { combineReducers } from 'react-redux';
import users from '../reducers/users';
import questions from '../reducers/questions';

export default combineReducers({ users, questions})