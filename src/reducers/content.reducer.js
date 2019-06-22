import { PLUS, NEG } from "../hellpers/api";



const statecontent = [
    0, 20
];

export default function content (state = statecontent, action){
    switch(action.type){
        case PLUS:
        return [
        statecontent[0] = statecontent[0] + action.payload[0],
        statecontent[1] = statecontent[1] - action.payload[1]];
        case NEG:
        return [
        statecontent[0] = statecontent[0] - action.payload[0],
        statecontent[1] = statecontent[1] + action.payload[1]];
        default:
        return state;
    }
}

export {statecontent};