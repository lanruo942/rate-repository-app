import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useUser = () => {
	const result = useQuery(ME);

	return result?.data?.me;
};

export default useUser;
