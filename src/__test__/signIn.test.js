import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';

import { SignInComponent } from "../components/SignIn";

describe('SignIn', () => {
	describe('SignInComponent', () => {
		it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {

			// render the SignInContainer component, fill the text inputs and press the submit button
			const onSubmit = jest.fn();
			render(<SignInComponent onSubmit={onSubmit} />);

			fireEvent.changeText(screen.getByPlaceholderText("Username"), "jorma");
			fireEvent.changeText(screen.getByPlaceholderText("Password"), "secret");

			fireEvent.press(screen.getByText("Sign in"));

			await waitFor(() => {
				// expect the onSubmit function to have been called once and with a correct first argument
				expect(onSubmit).toHaveBeenCalledTimes(1);
			});

			expect(onSubmit.mock.calls[0][0]).toEqual({
				username: "jorma",
				password: "secret",
			});
		});
	});
});