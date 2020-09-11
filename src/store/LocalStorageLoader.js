/**
 * Represents a loader for handling local storage cache
 */
module.exports = class LocalStorageLoader {

	/**
	 * Creates a new [LocalStorageLoader] instance
	 */
	constructor() {
		this.cache = null;
	}

	/**
	 * Loads the cache
	 * @returns {State} The loaded or new state
	 */
	load() {
		if (this.cache === null) {
			try {
				const cache = localStorage.getItem('profile.state');
				const state = cache === null ? this.initialise() : JSON.parse(cache);

				this.cache = state;
				return state;
			} catch {
				return this.initialise();
			}
		} else {
			return this.cache;
		}
	}

	/**
	 * Saves the local storage to the database
	 * @param {State} state The state to save
	 */
	save(state) {
		localStorage.setItem('profile.state', JSON.stringify(state));
	}

	/**
	 * Gets the default state
	 * @returns {State} The default state
	 */
	getDefaultState() {
		return {
			isLoggedIn: false,
			user: null
		};
	}

};

/**
 * @typedef {object} State The cached state
 * @prop {boolean} isLoggedIn If the user is logged in or not
 * @prop {User} user The user or `null` if not logged in
 * @typedef {object} User The user
 * @prop {{ type: string; id: string }[]} connections The connections belonging to this user
 * @prop {string} email The user's email address
 * @prop {string} id The user's snowflake
 */
