import { Formik } from 'formik';
import * as yup from 'yup';
import SignInForm from './SignInForm';

const initialValues = {
	username: '',
	password: '',
};

const validationSchema = yup.object({
	username: yup.string().required('Username is required'),
	password: yup.string().required('Password is required'),
});

const SignIn = () => {
	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
			</Formik>
		</>
	);
};

export default SignIn;
