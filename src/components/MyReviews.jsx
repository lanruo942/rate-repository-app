import { useState } from 'react';
import { FlatList } from 'react-native';
import useUser from '../hooks/useUser';
import { ItemSeparator } from './RepositoryList';
import ReviewItem from './ReviewItem';

const MyReviews = () => {
	const [isFetching, setIsFetching] = useState(false);
	const { me, fetchMore, refetch } = useUser({
		first: 8,
		includeReviews: true,
	});

	console.log(me)

	const reviews = me?.reviews?.edges.map((edge) => edge.node);

	const onRefresh = async () => {
		setIsFetching(true);
		await refetch();
		setIsFetching(false);
	};

	const onEndReach = () => {
		fetchMore();
	};

	return (
		<FlatList
			data={reviews ?? []}
			renderItem={({ item }) => <ReviewItem review={item} />}
			keyExtractor={({ id }) => id}
			ItemSeparatorComponent={ItemSeparator}
			onRefresh={onRefresh}
			refreshing={isFetching}
			onEndReached={onEndReach}
			onEndReachedThreshold={0.5}
		/>
	);
};

export default MyReviews;
