export default {
	mode: 'universal',
	target: 'server',
	head: {
		title: 'profile.place',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'A place for all your social profiles under one roof. Unleash your profile, express your interests, hobbies and much, much more. Oh, and did we mention, it\'s open source.'
			},
			{ hid: 'keywords', name: 'keywords', content: '' },
			{ hid: 'author', name: 'author', content: 'https://github.com/profile-place' },
			{ hid: 'og:title', property: 'og:title', content: 'profile.place' },
			{
				hid: 'og:description',
				property: 'og:description',
				content: 'A place for all your social profiles under one roof. Unleash your profile, express your interests, hobbies and much, much more. Oh, and did we mention, it\'s open source.'
			},
			{ hid: 'og:image', property: 'og:image', content: '~assets/icons/logo.png' },
			{ hid: 'twitter:card', name: 'twitter:card', content: 'summary' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	components: true,
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss'
	]
};
