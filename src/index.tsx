import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {History} from 'history';
import {createBrowserHistory} from "history";
import RouterSpy from "./components/RouterSpy/RouterSpy";
import App from "./App";
import './index.scss';

const history: History = createBrowserHistory();

ReactDOM.render(
// @ts-ignore
    <Router history={history}>
        <RouterSpy/>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById('root')
);

