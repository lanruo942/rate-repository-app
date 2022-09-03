import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = (variables) => {
	const { data, loading, refetch, fetchMore } = useQuery(GET_REVIEWS, {
		variables,
		skip: !variables.repositoryId,
		fetchPolicy: 'cache-and-network',
	});

	const handleFetchMore = () => {
		const canFetchMore =
			!loading && data?.repository?.reviews?.pageInfo?.hasNextPage;

		if (!canFetchMore) {
			return;
		}

		fetchMore({
			variables: {
				...variables,
				after: data.repository.reviews.pageInfo.endCursor,
			},
		});
	};

	const reviews = data?.repository?.reviews?.edges.map((edge) => edge.node);

	return { reviews, fetchMore: handleFetchMore, loading, refetch };
};

export default useReviews;
