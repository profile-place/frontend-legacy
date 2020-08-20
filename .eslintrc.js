module.exports = {
	root: true,
	parser: 'vue-eslint-parser',
	env: {
		browser: true,
		node: true,
		es6: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: ['@aero', 'plugin:nuxt/base']
};
