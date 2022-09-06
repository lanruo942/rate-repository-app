import { Keyboard, Pressable, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
	view: {
		flexDirection: 'column',
		height: '100%',
	},
	pressable: {
		flex: 1,
	},
});

export default function KeyboardDismiss({ children }) {
	return (
		<View style={styles.view}>
			<Pressable onPress={Keyboard.dismiss} style={styles.pressable}>
				{children}
			</Pressable>
		</View>
	);
}
