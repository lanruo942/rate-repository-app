import { Formik } from 'formik';
import ReviewForm from './ReviewForm';
import useCreateReview from '../../hooks/useCreateReview';
import * as yup from 'yup';

const initialValues = {
	rating: '',
	review: '',
};

const validationSchema = yup.object().shape({
	rating: yup.number()
		.typeError('Rating must be a number')
		.required('Rating is required')
		.min(0, 'Minimum value is 0')
		.max(100, 'Maximum value is 100')
		.integer('Please enter an integer')
});

const Review = ({ fullName }) => {
	const [createReview] = useCreateReview();
	const args = fullName ? fullName.split('/') : [];
	const ownerName = args && args[0];
	const repositoryName = args && args[1];

	const onSubmit = async ({ rating, review }) => {
		try {
			await createReview({
				repositoryName,
				ownerName,
				rating,
				text: review,
			});
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default Review;
