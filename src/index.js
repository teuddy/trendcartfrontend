import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// import './custom.scss';

const stripePromise = loadStripe('pk_test_CHkIeLMAuaJ4f8D8iF4w2Buh00CpngWyTl')

ReactDOM.render(
    <Elements stripe={stripePromise}>
        <App />
    </Elements>,
 document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
