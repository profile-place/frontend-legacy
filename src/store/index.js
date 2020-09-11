import { createStore as createReduxStore } from 'redux';
import LocalStorageLoader from './LocalStorageLoader';
import reducer from './actions';

/* eslint-disable valid-jsdoc */
/**
 * Creates a Redux store
 * @returns {import('redux').Store<import('./LocalStorageLoader').State>} The store
 */
/* eslint-enable valid-jsdoc */
export function createStore() {
	const loader = new LocalStorageLoader();
	const state = loader.load();
	const store = createReduxStore(reducer, state);

	store.subscribe(() => {
		const currentState = store.getState();
		if (currentState === undefined) {
			if (localStorage.getItem('profile.state') !== null) localStorage.removeItem('profile.state');
			return;
		}

		loader.save(currentState);
	});

	return store;
}
