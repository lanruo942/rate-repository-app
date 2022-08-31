import { Pressable, StyleSheet, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import useLogout from '../hooks/useLogout';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
	view: {
		backgroundColor: theme.backgroundColors.white,
		padding: 15,
	},
	button: {
		backgroundColor: theme.backgroundColors.primary,
		color: theme.colors.white,
		fontWeight: theme.fontWeights.bold,
		textAlign: 'center',
		paddingVertical: 15,
		borderRadius: 3,
		overflow: 'hidden',
	},
});

const Logout = () => {
	const logout = useLogout();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
			navigate('/');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View style={styles.view}>
			<Pressable onPress={handleLogout}>
				<Text style={styles.button}>Log out</Text>
			</Pressable>
		</View>
	);
};

export default Logout;
