import React from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in-styles.scss';

class SignIn extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			email    : '',
			password : '',
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = event => {
        const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render () {
		return (
			<div className='sign-in'>
				<h1>Sign In</h1>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						handleChange={this.handleChange}
						value={this.state.email}
						label='Email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						handleChange={this.handleChange}
						value={this.state.password}
						label='Password'
						required
					/>
                    <button type="submit">Sign in</button>
				</form>
			</div>
		);
	}
}

export default SignIn;
