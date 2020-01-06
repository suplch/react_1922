
import { createStore, applyMiddleware, combineReducers } from 'redux'

import thunk from 'redux-thunk'

import { articleReducer } from './article_reducer';
import { authReducer } from './auth_reducer';

const appReducer =  combineReducers({
    article: articleReducer,
    auth: authReducer
})


export const store = createStore(appReducer, applyMiddleware(thunk))