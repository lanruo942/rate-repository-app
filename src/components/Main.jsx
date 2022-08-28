/*
 * @Author: Summer Lee
 * @Date: 2022-08-15 00:45:18
 * @LastEditors: Summer Lee lee@summer.today
 * @LastEditTime: 2022-08-15 21:46:49
 */
import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
		backgroundColor: theme.backgroundColors.main,
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
			<AppBar />
			<RepositoryList />
		</View>
	);
};

export default Main;
