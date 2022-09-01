import {
	Pressable,
	StyleSheet,
	View,
	Keyboard,
} from 'react-native';
import { useEffect, useState } from 'react';
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
	multiContent: {
		borderWidth: 1,
		borderColor: theme.backgroundColors.grey,
		borderRadius: 3,
		marginBottom: 25,
		height: 104,
		overflow: 'hidden'
	},
	multiInput: {
		fontSize: theme.fontSizes.subheading,
		lineHeight: 21,
		height: 84,
		margin: 10,
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

const ReviewForm = ({ onSubmit }) => {
	const [isScrollEnabled, setIsScrollEnabled] = useState(true);

	function onKeyboardWillShow() {
		setIsScrollEnabled(false);
	}

	function onKeyboardDidShow() {
		setIsScrollEnabled(true);
	}

	useEffect(() => {
		const subKWS = Keyboard.addListener('keyboardWillShow', onKeyboardWillShow);
		const subKDS = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);

		return () => {
			subKWS.remove();
			subKDS.remove();
		};
	}, []);

	return (
		<View style={styles.view}>
			<FormikTextInput
				style={styles.input}
				name="rating"
				placeholder="Rating between 0 and 100"
				keyboardType="numeric"
			/>
			<View style={styles.multiContent}>
				<FormikTextInput
					style={styles.multiInput}
					name="review"
					placeholder="Review"
					multiline={true}
					scrollEnabled={isScrollEnabled}
				/>
			</View>
			<Pressable onPress={onSubmit}>
				<Text style={styles.button}>Create a review</Text>
			</Pressable>
		</View>
	);
};

export default ReviewForm;
