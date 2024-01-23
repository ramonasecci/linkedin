import { OTHER_USER } from "../actions";


const initialState = {
    result: {}
}

const otherProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case OTHER_USER:
            return {
                ...state,
                result: action.payload,
            }
            default:
                return state
    }
} 

export default otherProfileReducer