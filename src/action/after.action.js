
import { GET_AFTER } from "../hellpers/api";


export async function getAfter (name) {
    const base = name ;
    return{
        type: GET_AFTER,
        payload: base
    };
};

