
import { PLUS, NEG } from "../hellpers/api";


export async function plusTotal(n, def, type) {
    switch(type){
        case "plus":
            return{
                type: PLUS,
                payload: [n, def]
            };
            case "neg":
            return{
                type: NEG,
                payload: [n, def]
            };
    }
};

