import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useUser = (variables) => {
	const { data, loading, fetchMore, refetch } = useQuery(ME, {
		variables,
		fetchPolicy: 'cache-and-network',
	});

	const handleFetchMore = () => {
		const canFetchMore = !loading && data?.me?.reviews?.pageInfo.hasNextPage;

		if (!canFetchMore) {
			return;
		}

		fetchMore({
			variables: {
				...variables,
				after: data.me.reviews.pageInfo.endCursor,
			},
		});
	};

	return { me: data?.me, fetchMore: handleFetchMore, refetch };
};

export default useUser;
