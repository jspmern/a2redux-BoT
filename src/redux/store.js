import {createStore} from 'redux'
import { rootReducer } from './Reducer'
export let store=createStore(rootReducer)