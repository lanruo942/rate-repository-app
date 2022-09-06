import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../../hooks/useSignIn';
import SignInForm from './SignInForm';
import KeyboardDismiss from '../KeyboardDismiss';

const initialValues = {
	username: '',
	password: '',
};

const validationSchema = yup.object({
	username: yup.string().required('Username is required'),
	password: yup.string().required('Password is required'),
});

export const SignInContainer = ({ signIn, result }) => {
	const navigation = useNavigation();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			const data = await signIn({ username, password });
			if (data) {
				navigation.navigate('Repositories');
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<KeyboardDismiss>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ handleSubmit }) => (
					<SignInForm onSubmit={handleSubmit} result={result} />
				)}
			</Formik>
		</KeyboardDismiss>
	);
};

const SignIn = () => {
	const [signIn, result] = useSignIn();

	return (
		<>
			<SignInContainer signIn={signIn} result={result} />
		</>
	);
};

export default SignIn;
