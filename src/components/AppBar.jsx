/*
 * @Author: Summer Lee
 * @Date: 2022-08-15 19:23:07
 * @LastEditors: Summer Lee lee@summer.today
 * @LastEditTime: 2022-08-15 21:46:23
 */
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.backgroundColors.tab,
	},
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<AppBarTab name={'Repositories'} />
		</View>
	);
};

export default AppBar;
