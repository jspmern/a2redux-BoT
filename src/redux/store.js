import {applyMiddleware, createStore} from 'redux'
import { rootReducer } from './Reducer'
import {thunk} from 'redux-thunk'
export let store=createStore(rootReducer,applyMiddleware(thunk))