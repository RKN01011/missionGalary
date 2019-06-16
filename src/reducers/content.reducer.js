import { GET_CORE, GET_PICHA } from "../hellpers/api";



const statecontent = [456];

export default function content (state = statecontent, action){
    switch(action.type){
        case GET_CORE:
        return [action.payload];
        case GET_PICHA:
        return [action.payload];
        default:
        return state;
    }
}

export {statecontent};