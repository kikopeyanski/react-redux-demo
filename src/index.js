import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import {itemApp} from'./reducers/itemApp.js';
import { Router, Route } from 'react-router'

import {
    VisibilityFilters
} from './actions/actions';

import Provider from "react-redux/es/components/Provider";

const initialState = {
    items: [
        {
            id: 1,
            category: "Sporting Goods",
            price: "49.99",
            stocked: true,
            name: "Football"
        },
        {
            id: 2,
            category: "Sporting Goods",
            price: "9.99",
            stocked: true,
            name: "Baseball"
        },
        {
            id: 3,
            category: "Sporting Goods",
            price: "29.99",
            stocked: false,
            name: "Basketball"
        },
        {
            id: 4,
            category: "Electronics",
            price: "99.99",
            stocked: true,
            name: "iPod Touch"
        },
        {
            id: 5,
            category: "Electronics",
            price: "399.99",
            stocked: false,
            name: "iPhone 5"
        },
        {
            id: 6,
            category: "Electronics",
            price: "199.99",
            stocked: true,
            name: "Nexus 7"
        }
    ],
    visibilityFilter: VisibilityFilters.SHOW_ALL
};

let store = createStore(itemApp, initialState);

let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
