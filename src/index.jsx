import { createStore } from './store';
import { Provider } from 'react-redux';
import * as worker from './registerServiceWorker';
import React from 'react';
import DOM from 'react-dom';
import App from './App';

import './styles/styles.css';

const render = process.env.NODE_ENV === 'production' ? DOM.hydrate : DOM.render;
const store = createStore();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('react-root')
);

worker.register();
