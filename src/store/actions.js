import { HttpClient } from '@augu/orchid';

const ApiVersion = 1;
const API_URL = process.env.NODE_ENV === 'development'
	? `http://localhost:3306/api/v${ApiVersion}`
	: `https://profile.place/api/v${ApiVersion}`;

const http = new HttpClient({
	defaults: {
		baseUrl: API_URL
	}
});

/* eslint-disable valid-jsdoc */
/**
 * Reducer function to update the state
 * @param {import('./LocalStorageLoader').State} state The state
 * @param {import('redux').AnyAction} action The action to use
 */
/* eslint-enable valid-jsdoc */
const reducer = (state, action) => {
	switch (action.type) {
		case 'login': {
			console.log('[profile.place] Reducer -> State: Login');
			state.isLoggedIn = true;
			state.user = {
				connections: [],
				email: 'august@augu.dev',
				id: '1'
			};

			return state;
		}

		case 'signup': {
			console.log('[profile.place] Reducer -> State: Signup | Coming Soon');
			return state;
		}

		case 'fetch': {
			console.log('[profile.place] Reducer -> State: Fetch User');
			return state.isLoggedIn ? state.user : null;
		}

		case 'logout': {
			console.log('[profile.place] Reducer -> State: Logout');
			state.isLoggedIn = false;
			state.user = null;

			return state;
		}

		default:
			return state;
	}
};

export default reducer;
