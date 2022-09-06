import { format } from 'date-fns';
import { StyleSheet, View, Pressable, Alert } from 'react-native';
import theme from '../../theme';
import Text from '../Text';
import useDeleteReview from '../../hooks/useDeleteReview';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 1,
	},
	flexRow: {
		flexDirection: 'row',
		flexWrap: 'nowrap',
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
	button: {
		paddingVertical: 10,
		fontSize: theme.fontSizes.body,
		fontWeight: theme.fontWeights.bold,
		color: theme.colors.white,
	},
});

const ReviewItem = ({ review, refetch }) => {
	const [deleteReview] = useDeleteReview();
	const navigation = useNavigation();

	const createDeleteButtonAlert = () => {
		Alert.alert(
			'Delete review',
			'Are you sure you want to delete this review?',
			[
				{
					text: 'CANCEL',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel',
				},
				{
					text: 'DELETE',
					onPress: async () => {
						try {
							await deleteReview(review.id);
							await refetch();
						} catch (e) {
							console.log(e);
						}
					},
				},
			]
		);
	};

	return (
		<View styles={styles.container}>
			<View style={styles.flexRow}>
				<View>
					<Text style={styles.rating}>{review.rating}</Text>
				</View>
				<View style={styles.content}>
					<Text style={styles.username}>{review.repository.fullName}</Text>
					<Text style={styles.date}>
						{format(new Date(review.createdAt), 'MM.dd.yyyy')}
					</Text>
					<Text>{review.text}</Text>
				</View>
			</View>
			<View style={styles.flexRow}>
				<Pressable
					title={'View repository'}
					onPress={() =>
						navigation.navigate('Repository', { id: review.repository.id })
					}
					style={({ pressed }) => [
						{
							flexDirection: 'row',
							justifyContent: 'center',
							flex: 1,
							overflow: 'hidden',
							borderRadius: 3,
							marginRight: 5,
							backgroundColor: pressed
								? theme.backgroundColors.grey
								: theme.backgroundColors.primary,
						},
					]}
				>
					<Text style={styles.button}>View repository</Text>
				</Pressable>
				<Pressable
					onPress={createDeleteButtonAlert}
					style={({ pressed }) => [
						{
							flexDirection: 'row',
							justifyContent: 'center',
							flex: 1,
							overflow: 'hidden',
							borderRadius: 3,
							marginLeft: 5,
							backgroundColor: pressed
								? theme.backgroundColors.grey
								: theme.backgroundColors.red,
						},
					]}
				>
					<Text style={styles.button}>Delete review</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default ReviewItem;
