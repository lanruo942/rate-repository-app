/*
 * @Author: Summer Lee
 * @Date: 2022-08-15 20:46:54
 * @LastEditors: Summer Lee lee@summer.today
 * @LastEditTime: 2022-08-15 21:47:37
 */
import { Pressable, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
	button: {
		padding: 10,
		color: '#ffffff',
		fontWeight: theme.fontWeights.bold,
	},
});

const AppBarTab = ({ name }) => {
	return (
		<Pressable>
			<Text style={styles.button}>{name}</Text>
		</Pressable>
	);
};

export default AppBarTab;
