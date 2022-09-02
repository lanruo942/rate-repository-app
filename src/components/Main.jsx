/*
 * @Author: Summer Lee
 * @Date: 2022-08-15 00:45:18
 * @LastEditors: Summer Lee lee@summer.today
 * @LastEditTime: 2022-08-15 21:46:49
 */
import { StyleSheet, View } from 'react-native';
import { Navigate, Route, Routes } from 'react-router-native';
import theme from '../theme';
import AppBar from './AppBar';
import Logout from './Logout';
import SingleRepository from './SingleRepository';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import SignUp from './SignUp';

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
			<Routes>
				<Route path="/" element={<RepositoryList />} />
				<Route path="/repository/:id" element={<SingleRepository />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/logout" element={<Logout />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</View>
	);
};

export default Main;
