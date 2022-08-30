import { Text, View, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const styles = StyleSheet.create({
	view: {
		backgroundColor: theme.backgroundColors.white,
		padding: 15,
	},
	input: {
		borderWidth: 1,
		borderColor: '#cdcdcd',
		fontSize: theme.fontSizes.subheading,
		marginBottom: 15,
		padding: 10,
		borderRadius: 3,
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

const SignInForm = ({ onSubmit }) => {
	return (
		<View style={styles.view}>
			<FormikTextInput
				style={styles.input}
				name="username"
				placeholder="Username"
			/>
			<FormikTextInput
				style={styles.input}
				name="password"
				placeholder="Password"
				secureTextEntry
			/>
			<Pressable onPress={onSubmit}>
				<Text style={styles.button}>Sign in</Text>
			</Pressable>
		</View>
	);
};

export default SignInForm;
