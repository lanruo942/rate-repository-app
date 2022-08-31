/*
 * @Author: Summer Lee
 * @Date: 2022-08-15 20:46:54
 * @LastEditors: Summer Lee lee@summer.today
 * @LastEditTime: 2022-08-15 21:47:37
 */
import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
	button: {
		padding: 10,
		color: '#ffffff',
		fontWeight: theme.fontWeights.bold,
	},
});

const AppBarTab = ({ name, href }) => {
	return (
		<Pressable>
			<Link to={href}>
				<Text style={styles.button}>{name}</Text>
			</Link>
		</Pressable>
	);
};

export default AppBarTab;
