import { Formik } from 'formik';
import * as yup from 'yup';
import SignInForm from './SignInForm';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const initialValues = {
	username: '',
	password: '',
};

const validationSchema = yup.object({
	username: yup.string().required('Username is required'),
	password: yup.string().required('Password is required'),
});

const SignIn = () => {
	const [signIn] = useSignIn();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			const data = await signIn({ username, password });
			navigate('/')
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

export default SignIn;
