import userReducer  from './UserReducer'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


let Store = createStore(userReducer, composeWithDevTools())

export {Store};