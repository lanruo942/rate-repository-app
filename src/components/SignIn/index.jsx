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

export const SignInContainer = ({ signIn }) => {
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			await signIn({ username, password });
			navigate('/');
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
				{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
			</Formik>
		</>
	);
};

const SignIn = () => {
	const [signIn] = useSignIn();

	return <SignInContainer signIn={signIn} />;
};

export default SignIn;
