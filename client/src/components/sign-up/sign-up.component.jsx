import React from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			email    : '',
			password : '',
		};
	}

	handleSubmit = event => {
		event.preventDefault();

		this.setState({ email: '', password: '', name: '' });
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render () {
		return (
			<div className='sign-up'>
				<h1>Sign Up</h1>
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
			
					<button type='submit'>Sign in</button>
				</form>
			</div>
		);
	}
}

export default SignUp;
