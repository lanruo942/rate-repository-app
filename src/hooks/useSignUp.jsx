import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../graphql/mutations';

const useSignUp = () => {

	const [mutate, result] = useMutation(SIGN_UP);

	const signUp = async ({ username, password }) => {
		try {
			const { data } = await mutate({
				variables: { user: { username, password } },
			});
			return data;
		} catch (e) {
			console.log(e);
		}
	};

	return [signUp, result]
};

export default useSignUp;
