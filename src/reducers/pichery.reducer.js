import { GET_AFTER } from "../hellpers/api";



const stateAfter = [];

export default function After (state = stateAfter, action){
    switch(action.type){
        case GET_AFTER:
        return [action.payload];
        default:
        return state;
    }
}

export {stateAfter};