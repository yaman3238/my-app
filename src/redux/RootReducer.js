import { Reducer } from './../redux/reducer/Reducer'
import { combineReducers } from 'redux'

let rootReducer = combineReducers({ WishMessage: Reducer })

export {rootReducer}