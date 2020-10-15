import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import loginReducer from './loginReducer'

const store = createStore(loginReducer, applyMiddleware(thunkMiddleware))

export default store