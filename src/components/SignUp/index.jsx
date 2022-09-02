import { Formik } from 'formik';
import { useNavigate } from 'react-router-native';
import * as yup from 'yup';
import useSignUp from '../../hooks/useSignUp';
import useSignIn from '../../hooks/useSignIn';
import SignUpForm from './SignUpForm';

const initialValues = {
	username: '',
	password: '',
	passwordConfirm: '',
};

const validationSchema = yup.object({
	username: yup
		.string()
		.min(1, 'Username too short')
		.max(30, 'Username too long')
		.matches(/^[a-zA-Z0-9_-]*$/, 'Username only can use a-zA-Z0-9_-')
		.required('Username is required'),
	password: yup
		.string()
		.min(5, 'Password too short')
		.max(50, 'Password too long')
		.matches(
			/(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]*$/,
			'Password contains at least one number and letter'
		)
		.required('Password is required'),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref('password'), null], 'The password don\'t match')
		.required('Password confirm is required'),
});

export const SignUpContainer = ({ signUp, signIn }) => {
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			const data = await signUp({ username, password });
			if (data) {
				await signIn({ username, password });
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
				{({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
			</Formik>
		</>
	);
};

const SignUp = () => {
	const [signUp] = useSignUp();
	const [signIn] = useSignIn();

	return <SignUpContainer signUp={signUp} signIn={signIn} />;
};

export default SignUp;
