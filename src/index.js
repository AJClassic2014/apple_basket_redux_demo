import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducer from './redux/reducers/appleBasketReducer.js';
import AppleBasket from './redux/components/AppleBasket.jsx';
import './assets/styles/style_compressed.css';

const store = createStore(reducer, applyMiddleware(thunk));
const renderApp = () => {
   ReactDOM.render(<Provider store={store}>
   <AppleBasket />
   </Provider>,
   document.getElementById('app'));
 };

renderApp();