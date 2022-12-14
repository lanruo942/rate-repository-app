/*
 * @Author: Summer Lee
 * @Date: 2022-08-15 14:03:47
 * @LastEditors: Summer Lee lee@summer.today
 * @LastEditTime: 2022-08-15 22:11:52
 */
import { Platform } from 'react-native';

const theme = {
	colors: {
		textPrimary: '#24292e',
		textSecondary: '#586069',
		primary: '#0366d6',
		white: '#ffffff',
		error: '#d73a4a',
	},
	fontSizes: {
		small: 12,
		body: 14,
		subheading: 16,
	},
	fonts: {
		main: Platform.select({
			android: 'Roboto',
			ios: 'Arial',
			default: 'System',
		}),
	},
	fontWeights: {
		normal: '400',
		bold: '700',
	},
	backgroundColors: {
		primary: '#0366d6',
		main: '#e1e4e8',
		tab: '#24292e',
		white: '#ffffff',
		grey: '#cdcdcd',
		red: '#D32F2F',
	},
};

export default theme;
