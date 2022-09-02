/*
 * @Author: Summer Lee
 * @Date: 2022-08-15 19:23:07
 * @LastEditors: Summer Lee lee@summer.today
 * @LastEditTime: 2022-08-15 21:46:23
 */
import Constants from 'expo-constants';
import { ScrollView, StyleSheet, View } from 'react-native';
import theme from '../../theme';
import useUser from '../../hooks/useUser';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.backgroundColors.tab,
	},
});

const AppBar = () => {
	const me = useUser();

	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<AppBarTab name={'Repositories'} href="/" />
				{me ? (
					<AppBarTab name={'Logout'} href="/logout" />
				) : (
					<>
						<AppBarTab name={'Sign in'} href="/signin" />
						<AppBarTab name={'Sign up'} href="/signup" />
					</>
				)}
			</ScrollView>
		</View>
	);
};

export default AppBar;
