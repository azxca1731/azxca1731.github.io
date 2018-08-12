import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome//css/font-awesome.min.css';
import './css/clean-blog.min.css';

import App from './App';
import { Provider } from 'react-redux';
import { reactReduxFirebase } from 'react-redux-firebase'
import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';
import firebase from 'firebase/app';
import 'firebase/database';
import { firebaseInit } from './config';

firebase.initializeApp(firebaseInit);

const config = {
    userProfile: 'users',
    enableLogging: false,
};

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, config)
)(createStore);

const store = createStoreWithFirebase(rootReducer);
const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
