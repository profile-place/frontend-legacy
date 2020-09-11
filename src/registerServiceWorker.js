const isLocalhost = Boolean(
	window.location.hostname === 'localhost'
	|| window.location.hostname === '[::1]'
	|| window.location.hostname.match(
		/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
	)
);

/**
 * Registers this service worker
 * @param {Configuration} [config] The config to use
 * @returns {void} Empty function
 */
export function register(config) {
	if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
		const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
		if (publicUrl.origin !== window.location.origin) return;

		window.addEventListener('load', () => {
			const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
			if (isLocalhost) {
				check(swUrl, config);
				navigator.serviceWorker.ready.then(() => console.log('[profile.place] Application is being served cache-first by a service worker. Learn here for more information: https://bit.ly/CRA-PWA'));
			} else {
				registerWorker(swUrl, config);
			}
		});
	}
}

/**
 * Registers this service worker
 * @param {string} swUrl The worker URL to configure
 * @param {Configuration} [config] The configuration to use
 */
function registerWorker(swUrl, config) {
	navigator
		.serviceWorker
		.register(swUrl)
		.then(registration => {
			const worker = registration.installing;
			if (worker === null) return;

			worker.onstatechange = () => {
				if (navigator.serviceWorker.controller) {
					console.log('[profile.place] New content is available and will be used when all tabs for this page is closed.');
					if (config && config.onUpdate) config.onUpdate(registration);
				} else {
					console.log('[profile.place] Content has been cached for offline usage.');
					if (config && config.onSuccess) config.onSuccess(registration);
				}
			};
		}).catch(error => console.error('[profile.place] Unable to register service worker', error));
}

/**
 * Checks if this service worker exists
 * @param {string} swUrl The worker URL to configure
 * @param {Configuration} [config] The configuration to use
 */
function check(swUrl, config) {
	fetch(swUrl, {
		headers: {
			'Service-Worker': 'script'
		}
	}).then(res => {
		const contentType = res.headers.get('content-type');
		if (res.status === 404 || (contentType != null && contentType.indexOf('javascript') === -1)) { // eslint-disable-line eqeqeq
			navigator.serviceWorker.ready.then(registration =>
				registration.unregister()
					.then(() => window.location.reload())
			);
		} else {
			registerWorker(swUrl, config);
		}
	}).catch(() => console.error('[profile.place] Missing internet connection, running in offline mode.'));
}

/**
 * @typedef {object} Configuration The service worker configuration
 * @prop {(registration: ServiceWorkerRegistration) => void} [onSuccess] Function to run when the worker has been registered
 * @prop {(registration: ServiceWorkerRegistration) => void} [onUpdate] Function to run when the worker has been updated
 */
