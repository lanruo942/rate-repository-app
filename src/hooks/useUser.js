import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useUser = () => {
	const result = useQuery(ME, {
		fetchPolicy: 'cache-and-network',
	});

	return result.data?.me;
};

export default useUser;
