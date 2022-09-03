import { useState } from 'react';
import {
	FlatList,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
} from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import useReviews from '../hooks/useReviews';
import useUser from '../hooks/useUser';
import { ItemSeparator } from './RepositoryList';
import RepositoryItem from './RepositoryList/RepositoryItem';
import CreateReview from './CreateReview';
import ReviewItem from './ReviewItem';

const RepositoryInfo = ({ item }) => <RepositoryItem item={item} />;

const SingleRepository = () => {
	const [isCreate, setIsCreate] = useState(false);
	const [isFetching, setIsFetching] = useState(false);
	const { me } = useUser();
	const { id } = useParams();
	const repository = useRepository(id);
	const { reviews, fetchMore, loading, refetch } = useReviews({
		repositoryId: id,
		first: 8,
	});

	const refetchReviews = async () => {
		await refetch();
		await repository.refetch();
	};

	if (isCreate && !loading) {
		refetchReviews();
		setIsCreate(false);
	}

	const onRefresh = async () => {
		setIsFetching(true);
		await refetchReviews();
		setIsFetching(false);
	};

	const onEndReach = () => {
		fetchMore();
	};

	const repositoryItem = repository.repository ?? {};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<FlatList
					data={reviews ?? []}
					renderItem={({ item }) => <ReviewItem review={item} />}
					keyExtractor={({ id }) => id}
					ItemSeparatorComponent={ItemSeparator}
					onRefresh={onRefresh}
					refreshing={isFetching}
					onEndReached={onEndReach}
					onEndReachedThreshold={0.5}
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
								<CreateReview
									fullName={repositoryItem?.fullName}
									setIsCreate={setIsCreate}
								/>
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
