import { configureStore, combineReducers } from '@reduxjs/toolkit'
import meProfileReducer from '../reducers/MeProfile'
import otherProfileReducer from '../reducers/OtherProfile'


const bigReducer = combineReducers ({
    meInfo: meProfileReducer,
    otherInfo: otherProfileReducer,
})



const store = configureStore({
    reducer: bigReducer,
})

export default store