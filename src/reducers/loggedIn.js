import { CHANGE_LOGGED_IN } from '../actions/loggedIn';

export default function loggedIn( state = null, action ){
  switch(action.type) {
    case CHANGE_LOGGED_IN:
        return action.newValue;  
    default: return state;
  }
}