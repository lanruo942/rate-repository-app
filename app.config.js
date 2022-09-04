import 'dotenv/config';

export default {
	name: 'Rate repository',
	slug: 'rate-repository-app',
	version: '1.0.0',
	orientation: 'portrait',
	icon: './assets/icon.png',
	userInterfaceStyle: 'light',
	splash: {
		image: './assets/splash.png',
		resizeMode: 'contain',
		backgroundColor: '#ffffff',
	},
	updates: {
		fallbackToCacheTimeout: 0,
	},
	assetBundlePatterns: ['**/*'],
	ios: {
		supportsTablet: true,
	},
	android: {
		adaptiveIcon: {
			foregroundImage: './assets/adaptive-icon.png',
			backgroundColor: '#FFFFFF',
		},
		package: 'com.summerlee.rate_repository_app'
	},
	web: {
		favicon: './assets/favicon.png',
	},
	extra: {
		env: process.env.ENV,
		apolloUri: process.env.APOLLO_URI,
		eas: {
			projectId: 'e41194e5-7140-4e60-a294-de47a0932491',
		},
	},
};
