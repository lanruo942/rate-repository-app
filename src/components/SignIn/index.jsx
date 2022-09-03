import { Formik } from 'formik';
import { useNavigate } from 'react-router-native';
import * as yup from 'yup';
import useSignIn from '../../hooks/useSignIn';
import SignInForm from './SignInForm';

const initialValues = {
	username: '',
	password: '',
};

const validationSchema = yup.object({
	username: yup.string().required('Username is required'),
	password: yup.string().required('Password is required'),
});

export const SignInContainer = ({ signIn, result }) => {
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			const data = await signIn({ username, password });
			if (data) {
				navigate('/');
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<Formik
			initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} result={result} />}
			</Formik>
		</>
	);
};

const SignIn = () => {
	const [signIn, result] = useSignIn();

	return <SignInContainer signIn={signIn} result={result} />;
};

export default SignIn;
