import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/configureStore';
import { login } from './actions/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
const store = getAppStore();



const jsx = (
               <Provider store={store}>
                     <AppRouter />
               </Provider>
               
            );

                    
//  store.dispatch(login()).then(() => {
   ReactDOM.render(jsx, document.getElementById('app'));
//    