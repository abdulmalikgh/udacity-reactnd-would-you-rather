import { IS_ANSWERED } from '../actions/poll';

export default function poll(state = null, action) {
    switch(action.type){
        case IS_ANSWERED:
            return action.isAnswered;
        default: return state;
    }
}