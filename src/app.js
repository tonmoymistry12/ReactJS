import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/configureStore';
import { signIn } from './actions/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { Provider } from 'react-redux';
const store = getAppStore();
console.log(store.getState())
const jsx = (
               <Provider store={store}>
                     <AppRouter />
               </Provider>
            );

// store.dispatch(signIn()).then(() => {
   ReactDOM.render(jsx, document.getElementById('app'));
// });