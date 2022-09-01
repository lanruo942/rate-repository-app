import {
	FlatList,
	StyleSheet,
	View,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Platform,
	Keyboard,
} from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import useReviews from '../hooks/useReviews';
import theme from '../theme';
import { ItemSeparator } from './RepositoryList';
import RepositoryItem from './RepositoryList/RepositoryItem';
import Text from './Text';
import { format } from 'date-fns';
import Review from './Review';
import useUser from '../hooks/useUser';

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

const RepositoryInfo = ({ item }) => <RepositoryItem item={item} />;

const ReviewItem = ({ review }) => {
	return (
		<View style={styles.flexRow}>
			<View style={styles.ratingBox}>
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

const SingleRepository = () => {
	const me = useUser();
	const { id } = useParams();
	const { repository } = useRepository(id);
	const { reviews } = useReviews(id);

	const repositoryItem = repository ?? {};
	const reviewsItems = reviews ?? [];

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<FlatList
					data={reviewsItems}
					renderItem={({ item }) => <ReviewItem review={item} />}
					keyExtractor={({ id }) => id}
					ItemSeparatorComponent={ItemSeparator}
					ListHeaderComponent={() => (
						<>
							<RepositoryInfo item={repositoryItem} />
							<ItemSeparator />
						</>
					)}
					ListFooterComponent={() =>
						me && (
							<>
								<ItemSeparator />
								<Review fullName={repositoryItem?.fullName} />
							</>
						)
					}
					contentContainerStyle={{
						justifyContent: 'space-around',
					}}
				/>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default SingleRepository;
