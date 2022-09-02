import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = (id) => {
	const { data, error, loading, refetch } = useQuery(GET_REVIEWS, {
		variables: {
			repositoryId: id,
		},
		skip: !id,
		fetchPolicy: 'cache-and-network',
	});

	const reviews = data?.repository?.reviews?.edges.map((edge) => edge.node);

	return { reviews, error, loading, refetch };
};

export default useReviews;
