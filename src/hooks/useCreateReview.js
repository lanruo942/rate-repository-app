import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';
import { GET_REVIEWS } from '../graphql/queries';

const useCreateReview = () => {
	const [mutate, result] = useMutation(CREATE_REVIEW, {
		refetchQueries: [{ query: GET_REVIEWS }],
	});

	const createReview = async ({ repositoryName, ownerName, rating, text }) => {
		try {
			const data = await mutate({
				variables: {
					review: {
						repositoryName,
						ownerName,
						rating: parseInt(rating, 10),
						text,
					},
				},
			});

			return data;
		} catch (e) {
			console.log(e);
		}
	};

	return [createReview, result];
};

export default useCreateReview;
