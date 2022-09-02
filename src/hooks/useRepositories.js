import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy = 'CREATED_AT', orderDirection = 'DESC') => {
	const { data, error, loading } = useQuery(GET_REPOSITORIES, {
		variables: {
			orderBy,
			orderDirection,
		},
		fetchPolicy: 'cache-and-network',
	});

	const repositories = data?.repositories;

	return { repositories, error, loading };
};

export default useRepositories;
