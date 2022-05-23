import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composedWithDevTools, composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({})

const initailState = {}

const middleware = [thunk]

const store = createStore(reducer, initailState, composeWithDevTools
    (applyMiddleware(...middleware)))

export default store