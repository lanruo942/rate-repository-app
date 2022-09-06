import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { NativeRouter } from 'react-router-native';
import { SignInContainer } from '../../../components/SignIn/index';

describe('SignIn', () => {
	describe('SignInContainer', () => {
		it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
			// render the SignInContainer component, fill the text inputs and press the submit button
			const signIn = jest.fn();
			const { getByPlaceholderText, getByText } = render(
				<NativeRouter>
					<SignInContainer signIn={signIn} />
				</NativeRouter>
			);

			fireEvent.changeText(getByPlaceholderText('Username'), 'kalle');
			fireEvent.changeText(getByPlaceholderText('Password'), 'password');
			fireEvent.press(getByText('Sign in'));

			await waitFor(() => {
				// expect the onSubmit function to have been called once and with a correct first argument
				expect(signIn).toHaveBeenCalledTimes(1);
				expect(signIn.mock.calls[0][0]).toEqual({
					username: 'kalle',
					password: 'password',
				});
			});
		});
	});
});
