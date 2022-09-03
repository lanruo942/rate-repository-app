import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../../theme';
import FormikTextInput from '../FormikTextInput';
import Text from '../Text';

const styles = StyleSheet.create({
	view: {
		backgroundColor: theme.backgroundColors.white,
		padding: 15,
	},
	input: {
		borderWidth: 1,
		borderColor: theme.backgroundColors.grey,
		fontSize: theme.fontSizes.subheading,
		padding: 10,
		borderRadius: 3,
	},
	button: {
		color: theme.colors.white,
		fontWeight: theme.fontWeights.bold,
		textAlign: 'center',
		paddingVertical: 15,
	},
	error: {
		color: theme.colors.error,
		marginTop: 10,
		alignSelf: 'center',
		height: 14,
	}
});

const SignInForm = ({ onSubmit, result }) => {
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
			<Pressable
				onPress={onSubmit}
				style={({ pressed }) => [
					{
						borderRadius: 3,
						overflow: 'hidden',
						backgroundColor: pressed
							? theme.backgroundColors.grey
							: theme.backgroundColors.primary,
					},
				]}
			>
				<Text style={styles.button}>Sign in</Text>
			</Pressable>
			<Text style={styles.error}>{result.error && result.error.message}</Text>
		</View>
	);
};

export default SignInForm;
