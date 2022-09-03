import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
	const { data, refetch, loading } = useQuery(GET_REPOSITORY, {
		variables: {
			repositoryId: id,
		},
		skip: !id,
		fetchPolicy: 'cache-and-network',
	});

	const repository = data?.repository;

	return { repository, refetch, loading };
};

export default useRepository;
