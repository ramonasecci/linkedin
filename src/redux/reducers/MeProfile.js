import { ME_INFO_UPDATE } from "../actions";



const initialState = {
    result: {},
}

const meProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case ME_INFO_UPDATE:
            return {
                ...state,
                result: action.payload,
            }
            default:
                return state
    }
} 





export default meProfileReducer