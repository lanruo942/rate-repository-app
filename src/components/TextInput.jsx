import { StyleSheet, TextInput as NativeTextInput } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
	error: {
		borderColor: theme.colors.error,
	}
});

const TextInput = ({ style, error, ...props }) => {
	const textInputStyle = error ? [style, styles.error] : [style];

	return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
