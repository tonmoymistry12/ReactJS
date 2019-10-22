import { createStore, applyMiddleware } from "redux";
import login from '../reducres/SignIn';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];

 
export default () => {
    return createStore(
        login, 
        initialState, 
        applyMiddleware(...middleware)
        );
};



