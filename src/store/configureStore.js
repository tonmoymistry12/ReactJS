import { createStore, applyMiddleware, combineReducers } from "redux";
import login from '../reducres/SignIn';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {};
const middleware = [thunk];

//Middleware
const customMiddleWare = store => next => action => {
     next(action);
  }

export default  () => {
    return createStore(
        login, 
        initialState, 
        applyMiddleware(...middleware, customMiddleWare)
        );
};



