import { useField } from 'formik';
import { StyleSheet, View } from 'react-native';

import theme from '../theme';
import Text from './Text';
import TextInput from './TextInput';

const styles = StyleSheet.create({
	view: {
		position: 'relative',
		marginBottom: 25,
	},
	errorText: {
		fontSize: theme.fontSizes.small,
		color: theme.colors.error,
		position: 'absolute',
		top: '100%',
		left: 2,
		marginTop: 5,
	},
});

const FormikTextInput = ({ name, ...props }) => {
	const [field, meta, helpers] = useField(name);
	const showError = meta.touched && meta.error;

	return (
		<View style={styles.view}>
			<TextInput
				onChangeText={(value) => helpers.setValue(value)}
				onBlur={() => helpers.setTouched(true)}
				value={field.value}
				error={showError}
				{...props}
				onEndEditing={(event) => {
					if (event.nativeEvent.text.length === 0) {
						helpers.setValue('');
					}
				}}
			/>
			{showError && <Text style={styles.errorText}>{meta.error}</Text>}
		</View>
	);
};

export default FormikTextInput;
