import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App/App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore, applyMiddleware} from 'redux';
import rootReducers from "./store/reducers/rootReducers";

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);




