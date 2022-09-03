import { format } from 'date-fns';
import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
	flexRow: {
		flexDirection: 'row',
		backgroundColor: theme.backgroundColors.white,
		padding: 15,
	},
	rating: {
		width: 55,
		height: 55,
		borderWidth: 2,
		color: theme.colors.primary,
		borderColor: theme.colors.primary,
		borderRadius: 28,
		textAlign: 'center',
		lineHeight: 55,
		fontSize: theme.fontSizes.subheading,
		fontWeight: theme.fontWeights.bold,
	},
	content: {
		flexShrink: 1,
		paddingLeft: 15,
	},
	username: {
		fontSize: theme.fontSizes.subheading,
		fontWeight: theme.fontWeights.bold,
		height: 25,
		lineHeight: 25,
	},
	date: {
		fontSize: theme.fontSizes.body,
		color: theme.colors.textSecondary,
		height: 20,
		lineHeight: 20,
	},
});

const ReviewItem = ({ review }) => {
	return (
		<View style={styles.flexRow}>
			<View>
				<Text style={styles.rating}>{review.rating}</Text>
			</View>
			<View style={styles.content}>
				<Text style={styles.username}>{review.user.username}</Text>
				<Text style={styles.date}>
					{format(new Date(review.createdAt), 'MM.dd.yyyy')}
				</Text>
				<Text>{review.text}</Text>
			</View>
		</View>
	);
};

export default ReviewItem;
