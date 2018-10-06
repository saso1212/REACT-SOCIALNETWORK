import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import loginReducer from './containers/Header/store/reducers/login';
import signUpReducer from './components/SignUp/store/reducers/signUp';
import homeReducer from './containers/Home/reducers/home';

const rootReducers = combineReducers({
    login: loginReducer,
    signUp: signUpReducer,
    home: homeReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

const app = (
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
