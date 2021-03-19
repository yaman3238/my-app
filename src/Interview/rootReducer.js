import { empReducer } from './redux/reducer/reducer';
import {combineReducers} from 'redux'

let rootReducer = combineReducers({
    employee:empReducer

})

export { rootReducer };